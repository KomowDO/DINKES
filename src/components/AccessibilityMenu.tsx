// import React from "react";
// import {
//   Volume2,
//   ZoomIn,
//   ZoomOut,
//   Columns,
//   Contrast,
//   EyeOff,
//   Sun,
//   Type,
//   Link,
//   AlignLeft,
//   RotateCcw,
// } from "lucide-react";
// import "../css/hero.css";

// const AccessibilityMenu: React.FC = () => {
//   const iconSize = 18;

//   const menuItems = [
//     { icon: <Volume2 size={iconSize} />, label: "Web Speech" },
//     { icon: <ZoomIn size={iconSize} />, label: "Increase Text" },
//     { icon: <ZoomOut size={iconSize} />, label: "Decrease Text" },
//     { icon: <Columns size={iconSize} />, label: "Grayscale" },
//     { icon: <Contrast size={iconSize} />, label: "High Contrast" },
//     { icon: <EyeOff size={iconSize} />, label: "Negative Contrast" },
//     { icon: <Sun size={iconSize} />, label: "Light Background" },
//     { icon: <Type size={iconSize} />, label: "Readable Font" },
//     { icon: <Link size={iconSize} />, label: "Underline Link" },
//     { icon: <AlignLeft size={iconSize} />, label: "Average Writing" },
//     { icon: <RotateCcw size={iconSize} />, label: "Reset" },
//   ];

//   return (
//     <div className="accessibility-menu">
//       {/* Header */}
//       <div className="acc-header">
//         <h5>Accessibility Tools</h5>
//       </div>

//       {/* Language Toggle */}
//       <div className="acc-lang-toggle">
//         <button className="active">Indonesian</button>
//         <button>English</button>
//       </div>

//       {/* Menu List */}
//       <ul className="acc-list">
//         {menuItems.map((item, index) => (
//           <li key={index} className="acc-item">
//             <span className="acc-icon">{item.icon}</span>
//             <span className="acc-label">{item.label}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AccessibilityMenu;
