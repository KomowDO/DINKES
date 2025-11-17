import React, { useEffect, useState } from "react";
// 1. HAPUS IMPORT LUCIDE-REACT YANG SUDAH TIDAK DIPAKAI
// import { Youtube, Facebook, Instagram, Twitter } from "lucide-react";
import "../css/Navbar.css";
import api from "../services/api";

// Interface (sudah dibersihkan dari spasi aneh)
interface Menu {
  id_menu: string | number;
  menu_name: string;
  menu_url: string | null;
  menu_icon: string | null;
  order_number: string | number | null;
  parent_id: string | number | null;
  status: "active" | "inactive" | null;
  sub_menu?: Menu[];
  children?: Menu[];
}

function Navbar() {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await api.get<{
          status: number;
          message: string;
          data: Menu[];
        }>("/menu");

        const menusWithChildren = response.data.data.map((menu) => ({
          ...menu,
          children: menu.sub_menu,
        }));

        setMenus(menusWithChildren);
      } catch (error) {
        console.error("Gagal mengambil data menu:", error);
      }
    };

    fetchMenus();
  }, []);

  const renderMenus = (menuList: Menu[], depth = 0) => {
    if (!Array.isArray(menuList)) {
      return null;
    }

    const activeMenus = menuList.filter((menu) => menu.status === "active");

    return activeMenus.map((menu) => (
      <div
        key={menu.id_menu}
        className="navbar-menu-item position-relative d-inline-block"
      >
        <a
          href={menu.menu_url || "#"}
          className={`px-3 py-2 d-inline-block transition-colors duration-300 navbar-menu-link ${
            depth === 0
              ? "text-white hover-text-decoration-underline"
              : "hover-bg-blue-100 text-blue-900"
          }`}
        >
          {menu.menu_name}
        </a>

        {menu.children && menu.children.length > 0 && (
          <div
            className={`
              position-absolute bg-white shadow-md rounded-md z-index-99 min-width-200px
              submenu-hidden submenu-transition
              ${depth === 0 ? "top-100 start-0 mt-1" : "top-0 start-100 ms-1"}
            `}
          >
            {renderMenus(menu.children, depth + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <nav className="bg-gradient-to-r-teal-custom text-white rounded-top-4 shadow-md overflow-visible">
      {/* 2. TAMBAHKAN KEMBALI DIV PEMBUNGKUS INI */}
      <div className="d-flex align-items-center position-relative px-4 px-md-5 px-lg-6 px-xl-6 px-xxl-6 py-6 h-10">
        {/* 1. Ikon Media Sosial (Sudah benar) */}
        <div className="d-none d-md-flex gap-3 position-absolute top-6 start-6 start-md-6 start-lg-6 start-xl-6 start-xxl-6">
          <a
            href="#"
            className="w-7 h-7 cursor-pointer text-green-1 bg-white rounded-circle hover-scale-110 transition-transform d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-youtube fs-4"></i>
          </a>
          <a
            href="#"
            className="w-7 h-7 cursor-pointer text-green-1 bg-white rounded-circle hover-scale-110 transition-transform d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a
            href="#"
            className="w-7 h-7 cursor-pointer text-green-1 bg-white rounded-circle hover-scale-110 transition-transform d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a
            href="#"
            className="w-7 h-7 cursor-pointer text-green-1 bg-white rounded-circle hover-scale-110 transition-transform d-flex align-items-center justify-content-center"
          >
            <i className="bi bi-twitter fs-4"></i>
          </a>
        </div>

        {/* 2. Logo dan Judul */}
        <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
          <img
            src="/assets/logo.png"
            alt="Logo Kominfo"
            className="w-24 mb-3 mt-7"
            style={{ width: "6rem" }}
          />
          <h1 className="font-bold text-lg leading-snug text-center tracking-wide">
            DINAS KESEHATAN <br /> KOTA TANGERANG
          </h1>
        </div>

        {/* 3. Ikon Bendera */}
        <div className="d-flex gap-2 position-absolute top-6 end-6 end-md-6 end-lg-6 end-xl-6 end-xxl-6">
          <img
            src="/assets/indo2.png"
            alt="Bahasa Indonesia"
            className="w-8 h-8 rounded-circle cursor-pointer hover-opacity-100 transition"
            style={{ width: "2rem", height: "2rem" }}
          />
          <img
            src="/assets/britain.jpg"
            alt="English"
            className="w-8 h-8 rounded-circle cursor-pointer hover-opacity-80 transition"
            style={{ width: "2rem", height: "2rem" }}
          />
        </div>
      </div>{" "}
      {/* Penutup div pembungkus */}
      {/* Garis Pemisah */}
      <div className="border-top border-white opacity-25"></div>
      {/* Menu Navigasi */}
      <div className="w-100 overflow-x-auto navbar-wrapper">
        <div className="d-flex justify-content-center min-width-max px-3 px-md-5 px-lg-5 px-xl-5 px-xxl-5 py-3 font-semibold text-md">
          {renderMenus(menus)}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
