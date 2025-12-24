import React, { useState, useEffect } from "react";
import { Triangle, Calendar, Bell, Image as ImageIcon } from "lucide-react";
import "../css/news.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

// --- INTERFACES ---
interface AnnouncementItem {
  id: number;
  title: string;
  date: string;
}
interface ApiAgendaItem {
  id_agenda: string;
  activity_name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  image: string;
  status: string;
}
interface CalendarEvent {
  date: number;
  title: string;
  time: string;
  image?: string;
}
interface NewsItem {
  id: number;
  image: string;
  subtitle: string;
  desc: string;
  source: string;
  date: string;
}
type TabType = "agenda" | "pengumuman";

// --- DUMMY DATA (ID & EN) ---
const newsItemsId: NewsItem[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/news1/400/200",
    subtitle: "DIMULAI HARI INI!",
    desc: "Optimalkan Pembangunan Infrastruktur, Pemkot Tangerang Perbaiki 40 Ruas Jalan Kota",
    source: "Dinas Pendidikan Kota Tangerang",
    date: "Selasa, 27 Desember 2022 16:50 WIB",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/news2/400/200",
    subtitle: "PROYEK BARU DIMULAI!",
    desc: "Pemerintah Kota Tangerang Luncurkan Program Jalan Pintar Berbasis Teknologi",
    source: "Dinas PU Kota Tangerang",
    date: "Rabu, 3 Januari 2023 09:00 WIB",
  },
];
const announcementDataId: AnnouncementItem[] = [
  {
    id: 1,
    title: "Hotline Aduan Dinas Sosial Kota Tangerang",
    date: "01 September 2025",
  },
  { id: 2, title: "Lowongan Mobile App Programmer", date: "01 September 2025" },
];

const newsItemsEn: NewsItem[] = [
  {
    id: 1,
    image: "https://picsum.photos/seed/news1/400/200",
    subtitle: "STARTING TODAY!",
    desc: "Optimizing Infrastructure Development, Tangerang City Government Repairs 40 City Roads",
    source: "Tangerang City Education Office",
    date: "Tuesday, Dec 27, 2022 16:50 WIB",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/news2/400/200",
    subtitle: "NEW PROJECT STARTED!",
    desc: "Tangerang City Government Launches Technology-Based Smart Road Program",
    source: "Tangerang City Public Works",
    date: "Wednesday, Jan 3, 2023 09:00 WIB",
  },
];
const announcementDataEn: AnnouncementItem[] = [
  {
    id: 1,
    title: "Tangerang Social Office Complaint Hotline",
    date: "September 01, 2025",
  },
  { id: 2, title: "Mobile App Programmer Vacancy", date: "September 01, 2025" },
];

export default function TangerangNewsApp() {
  const { language } = useLanguage();
  const t = translations[language];

  // Pilih Data Berdasarkan Bahasa
  const currentNewsItems = language === "id" ? newsItemsId : newsItemsEn;
  const currentAnnouncementData =
    language === "id" ? announcementDataId : announcementDataEn;

  const today = new Date();
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>("agenda");
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<number | null>(
    today.getDate()
  );
  const [calendarEvents, setCalendarEvents] = useState<
    Record<number, CalendarEvent>
  >({});
  const [loadingAgenda, setLoadingAgenda] = useState<boolean>(true);
  const [errorAgenda, setErrorAgenda] = useState<string | null>(null);

  // Reset news index jika bahasa berubah
  useEffect(() => {
    setCurrentNewsIndex(0);
  }, [language]);

  // Fetch Agenda
  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        setLoadingAgenda(true);
        // --- SIMULASI API (KARENA LOCALHOST TIDAK BISA DIAKSES DARI SINI) ---
        // Ganti dengan fetch("http://localhost:8080/api/agenda") jika backend sudah jalan
        const json = { status: true, data: [] };

        if (json.status && Array.isArray(json.data)) {
          const eventsMap: Record<number, CalendarEvent> = {};
          json.data.forEach((item: ApiAgendaItem) => {
            const start = new Date(item.start_date);
            const day = start.getDate();
            if (
              start.getMonth() + 1 === currentMonth &&
              start.getFullYear() === currentYear
            ) {
              eventsMap[day] = {
                date: day,
                title: item.activity_name,
                time: start.toLocaleTimeString(
                  language === "id" ? "id-ID" : "en-US",
                  { hour: "2-digit", minute: "2-digit" }
                ),
                image: item.image,
              };
            }
          });
          setCalendarEvents(eventsMap);
        } else {
          setErrorAgenda("Format data tidak sesuai.");
        }
      } catch (error) {
        console.error(error);
        setErrorAgenda(t.error_agenda);
      } finally {
        setLoadingAgenda(false);
      }
    };
    fetchAgenda();
  }, [currentMonth, currentYear, language, t.error_agenda]);

  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) =>
    new Date(year, month - 1, 1).getDay();

  const monthNames = t.months;
  const dayNames = t.days;

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const days = Array(firstDay)
    .fill(null)
    .concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else setCurrentMonth(currentMonth - 1);
  };
  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else setCurrentMonth(currentMonth + 1);
  };

  const selectedEvent = selectedDate ? calendarEvents[selectedDate] : null;
  const currentNews = currentNewsItems[currentNewsIndex];

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* LEFT: NEWS */}
          <div className="col">
            <h1 className="fw-bold text-blue mb-3">{t.news_main_title}</h1>
            {currentNews && (
              <div className="card border-0 shadow news-card position-relative rounded-4 overflow-hidden">
                <div className="news-image-container">
                  {currentNews.image ? (
                    <img
                      src={currentNews.image}
                      className="img-fluid w-100 h-100 object-fit-cover"
                      alt="News"
                    />
                  ) : (
                    <div
                      className="d-flex justify-content-center align-items-center bg-primary text-white"
                      style={{ height: "200px" }}
                    >
                      <ImageIcon size={60} />
                    </div>
                  )}
                </div>
                <div className="card-body text-dark d-flex flex-column">
                  <p className="fw-bold text-blue mb-2">
                    {currentNews.subtitle}
                  </p>
                  <p className="small">{currentNews.desc}</p>
                  <div className="mt-auto pt-3 border-top">
                    <small className="text-muted d-block">
                      {t.source_label}: {currentNews.source}
                    </small>
                    <small className="text-secondary">{currentNews.date}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-center gap-2 pb-3">
                  {currentNewsItems.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentNewsIndex(i)}
                      className={`indicator ${i === currentNewsIndex ? "active" : ""}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: TABS */}
          <div className="col-lg-8">
            <div className="d-flex flex-wrap gap-3 mb-3">
              <button
                onClick={() => setActiveTab("agenda")}
                className={`btn tab-btn ${activeTab === "agenda" ? "active" : ""}`}
              >
                <Calendar size={18} className="me-2" /> {t.tab_agenda}
              </button>
              <button
                onClick={() => setActiveTab("pengumuman")}
                className={`btn tab-btn ${activeTab === "pengumuman" ? "active" : ""}`}
              >
                <Bell size={18} className="me-2" /> {t.tab_announcement}
              </button>
            </div>

            {activeTab === "agenda" ? (
              <div className="card border-0 shadow rounded-4 bg-light overflow-hidden">
                <div className="row g-0 h-100">
                  <div className="col-md-5 d-flex">
                    <img
                      src={
                        selectedEvent && selectedEvent.image
                          ? `http://localhost:8080/uploads/agenda/${selectedEvent.image}`
                          : "assets/agenda-default.jpg"
                      }
                      alt={selectedEvent?.title || t.no_agenda_selected}
                      className="img-fluid h-100 object-fit-cover rounded-start-4"
                    />
                  </div>
                  <div className="col-md-7 p-4 d-flex flex-column calender-container">
                    <div className="d-flex justify-content-center align-items-center mb-3">
                      <button onClick={handlePrevMonth} className="btn">
                        <Triangle
                          size={18}
                          fill="black"
                          style={{ transform: "rotate(-90deg)" }}
                        />
                      </button>
                      <span className="fw-bold text-blue">
                        {monthNames[currentMonth - 1]} {currentYear}
                      </span>
                      <button onClick={handleNextMonth} className="btn">
                        <Triangle
                          size={18}
                          fill="black"
                          style={{ transform: "rotate(90deg)" }}
                        />
                      </button>
                    </div>

                    {loadingAgenda ? (
                      <div className="text-center text-muted small my-5">
                        {t.loading_agenda}
                      </div>
                    ) : errorAgenda ? (
                      <div className="text-center text-danger small my-5">
                        {errorAgenda}
                      </div>
                    ) : (
                      <>
                        <div className="calendar-grid mb-3">
                          {dayNames.map((d) => (
                            <div
                              key={d}
                              className="fw-semibold text-center text-blue small"
                            >
                              {d}
                            </div>
                          ))}
                          {days.map((day, idx) => (
                            <button
                              key={idx}
                              onClick={() => day && setSelectedDate(day)}
                              className={`calendar-day ${(() => {
                                const isToday =
                                  day === today.getDate() &&
                                  currentMonth === today.getMonth() + 1 &&
                                  currentYear === today.getFullYear();
                                if (!day) return "invisible";
                                if (selectedDate === day) return "selected";
                                if (calendarEvents[day as number])
                                  return "event";
                                if (isToday) return "today";
                                return "";
                              })()}`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                        <div className="card bg-primary-subtle border-0 rounded-3 p-3 mt-auto">
                          <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                            <Calendar size={16} className="text-blue" />
                            <h6 className="mb-0 fw-bold text-blue">
                              {t.agenda_date_prefix} {selectedDate}
                            </h6>
                          </div>
                          {selectedEvent ? (
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="fw-semibold mb-1 small">
                                {selectedEvent.title}
                              </p>
                              <p className="fw-bold text-blue mb-0">
                                {selectedEvent.time}
                              </p>
                            </div>
                          ) : (
                            <p className="text-muted small mb-0">
                              {t.no_agenda}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="card border-0 shadow rounded-4">
                {currentAnnouncementData.map((a) => (
                  <div key={a.id} className="p-3 border-bottom hover-bg-light">
                    <div className="d-flex justify-content-between align-items-start">
                      <div className="d-flex align-items-center gap-2">
                        <div className="dot bg-primary"></div>
                        <h6 className="mb-0 fw-semibold">{a.title}</h6>
                      </div>
                      <span className="fw-bold text-blue small">{a.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
