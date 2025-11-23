import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
// import api from "../services/api";

// --- INTERFACES ---
interface Menu {
  id_menu: string | number;
  menu_name: string;
  menu_url: string | null;
  status: "active" | "inactive";
  order_number?: number;
  sub_menu?: Menu[];
  children?: Menu[];
}

// --- DATA DUMMY (7 MENU SESUAI GAMBAR) ---
const DUMMY_MENUS: Menu[] = [
  {
    id_menu: 1,
    menu_name: "PROFIL",
    menu_url: "#",
    status: "active",
    order_number: 1,
    sub_menu: [
      {
        id_menu: 11,
        menu_name: "Tentang",
        menu_url: "/tentang",
        status: "active",
      },
      {
        id_menu: 12,
        menu_name: "Profil Pejabat Struktural",
        menu_url: "/pejabat",
        status: "active",
      },
      {
        id_menu: 13,
        menu_name: "Tugas dan Fungsi",
        menu_url: "/tupoksi",
        status: "active",
      },
      {
        id_menu: 14,
        menu_name: "Struktur Organisasi",
        menu_url: "/struktur",
        status: "active",
      },
    ],
  },
  {
    id_menu: 2,
    menu_name: "BERITA",
    menu_url: "/berita",
    status: "active",
    order_number: 2,
    sub_menu: [], // Tidak ada panah
  },
  {
    id_menu: 3,
    menu_name: "PROGRAM",
    menu_url: "#",
    status: "active",
    order_number: 3,
    sub_menu: [
      {
        id_menu: 31,
        menu_name: "Program SKPD",
        menu_url: "/program",
        status: "active",
      },
    ],
  },
  {
    id_menu: 4,
    menu_name: "INFORMASI PUBLIK",
    menu_url: "#",
    status: "active",
    order_number: 4,
    sub_menu: [
      {
        id_menu: 41,
        menu_name: "Perencanaan",
        menu_url: "/rencanaan",
        status: "active",
      },
      {
        id_menu: 42,
        menu_name: "Laporan Keuangan",
        menu_url: "/keuangan",
        status: "active",
      },
      {
        id_menu: 43,
        menu_name: "Laporan Kinerja",
        menu_url: "/Kinerja",
        status: "active",
      },
      {
        id_menu: 44,
        menu_name: "Pendidikan dan Pelatihan",
        menu_url: "/diklat",
        status: "active",
      },
      {
        id_menu: 45,
        menu_name: "Pengadaan Barang / Jasa dan Kerjasama SKPD",
        menu_url: "/pengadaan",
        status: "active",
      },
      {
        id_menu: 46,
        menu_name: "Data Informasi Publik",
        menu_url: "/data-informasi",
        status: "active",
      },
      {
        id_menu: 47,
        menu_name: "Produk Hukum",
        menu_url: "/produk-hukum",
        status: "active",
      },
      {
        id_menu: 48,
        menu_name: "Informasi Umum",
        menu_url: "/informasi-umum",
        status: "active",
      },
      {
        id_menu: 49,
        menu_name: "Daftar Informasi Publik",
        menu_url: "/daftar-informasi",
        status: "active",
      },
    ],
  },
  {
    id_menu: 5,
    menu_name: "PPID",
    menu_url: "#",
    status: "active",
    order_number: 5,
    sub_menu: [
      {
        id_menu: 51,
        menu_name: "Website PPID",
        menu_url: "/ppid",
        status: "active",
      },
      {
        id_menu: 52,
        menu_name: "Permohonan Informasi",
        menu_url: "/permohonan",
        status: "active",
      },
    ],
  },
  {
    id_menu: 6,
    menu_name: "GALERI",
    menu_url: "#",
    status: "active",
    order_number: 6,
    sub_menu: [
      {
        id_menu: 61,
        menu_name: "Foto Kegiatan",
        menu_url: "/foto",
        status: "active",
      },
      { id_menu: 62, menu_name: "Video", menu_url: "/video", status: "active" },
    ],
  },
  {
    id_menu: 7,
    menu_name: "KONTAK",
    menu_url: "/kontak",
    status: "active",
    order_number: 7,
    sub_menu: [], // Tidak ada panah
  },
];

function Navbar() {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    // --- LOAD DATA ---
    const loadData = () => {
      // 1. Fungsi Mapping Rekursif (sub_menu -> children)
      const mapMenuChildren = (items: Menu[]): Menu[] => {
        return items.map((item) => ({
          ...item,
          children: item.sub_menu ? mapMenuChildren(item.sub_menu) : [],
        }));
      };

      // 2. Map Data Dummy
      const processedMenus = mapMenuChildren(DUMMY_MENUS);

      // 3. Sorting berdasarkan order_number
      processedMenus.sort(
        (a, b) => (a.order_number || 99) - (b.order_number || 99)
      );

      setMenus(processedMenus);
    };

    loadData();
  }, []);

  // --- RENDER MENU ---
  const renderMenus = (menuList: Menu[], depth = 0) => {
    if (!Array.isArray(menuList) || menuList.length === 0) return null;

    return menuList.map((menu) => {
      const hasChildren = menu.children && menu.children.length > 0;

      return (
        <div
          key={menu.id_menu}
          className="navbar-menu-item position-relative d-inline-block"
        >
          {/* LINK UTAMA */}
          <a
            href={menu.menu_url || "#"}
            className={`
              px-3 py-2 d-inline-block transition-colors duration-300 navbar-menu-link 
              ${depth === 0 ? "text-white hover-text-decoration-underline" : "hover-bg-blue-100 text-blue-900 w-100"}
            `}
            style={{ whiteSpace: "nowrap" }}
          >
            {menu.menu_name}

            {/* Logic Panah (Chevron) */}
            {hasChildren && depth === 0 && (
              <i
                className="bi bi-chevron-down ms-1"
                style={{ fontSize: "0.7em" }}
              ></i>
            )}
            {hasChildren && depth > 0 && (
              <i
                className="bi bi-chevron-right float-end mt-1 ms-2"
                style={{ fontSize: "0.7em" }}
              ></i>
            )}
          </a>

          {/* DROPDOWN SUBMENU */}
          {hasChildren && (
            <div
              className={`
                position-absolute bg-white shadow-md rounded-md z-index-99 min-width-200px
                submenu-hidden
                ${depth === 0 ? "top-100 start-0 mt-1" : "top-0 start-100 ms-1"}
              `}
            >
              <div className="py-1">
                {renderMenus(menu.children!, depth + 1)}
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav className="bg-gradient-to-r-teal-custom text-white rounded-top-4 shadow-md overflow-visible position-relative z-3">
      {/* HEADER ATAS */}
      <div className="d-flex align-items-center position-relative px-4 px-md-5 px-lg-6 px-xl-6 px-xxl-6 py-6 h-10">
        {/* Social Icons */}
        <div className="d-none d-md-flex gap-3 position-absolute top-6 start-6 start-md-6 start-lg-6 start-xl-6 start-xxl-6">
          {["youtube", "facebook", "instagram", "twitter"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="w-7 h-7 cursor-pointer text-green-1 bg-white rounded-circle hover-scale-110 transition-transform d-flex align-items-center justify-content-center text-decoration-none"
            >
              <i className={`bi bi-${icon} fs-6`}></i>
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-24 mb-3 mt-7"
            style={{ width: "6rem" }}
          />
          <h1 className="font-bold text-lg leading-snug text-center tracking-wide m-0">
            DINAS KESEHATAN <br /> KOTA TANGERANG
          </h1>
        </div>

        {/* Flag Icons */}
        <div className="d-flex gap-2 position-absolute top-6 end-6 end-md-6 end-lg-6 end-xl-6 end-xxl-6">
          <img
            src="/assets/indo2.png"
            alt="ID"
            className="w-8 h-8 rounded-circle cursor-pointer hover-opacity-100 transition"
            style={{ width: "2rem", height: "2rem" }}
          />
          <img
            src="/assets/britain.jpg"
            alt="EN"
            className="w-8 h-8 rounded-circle cursor-pointer hover-opacity-80 transition"
            style={{ width: "2rem", height: "2rem" }}
          />
        </div>
      </div>

      <div className="border-top border-white opacity-25"></div>

      {/* MENU WRAPPER */}
      <div className="w-100 navbar-wrapper">
        {/* === CLASS 'gap-custom' DITAMBAHKAN DI SINI === */}
        <div className="d-flex justify-content-center gap-custom min-width-max px-3 px-md-5 px-lg-5 px-xl-5 px-xxl-5 py-3 font-semibold text-md">
          {renderMenus(menus)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
