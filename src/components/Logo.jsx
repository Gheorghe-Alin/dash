import React from "react";
//import { FireFilled } from "@ant-design/icons";
import logoImage from "./insp.jpg";

// const Logo = () => {
//   return (
//     <div className="logo">
//       <div className="logo-icon">
//         <FireFilled />
//       </div>
//     </div>
//   );
// };

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <img src={logoImage} alt="Logo" />
      </div>
    </div>
  );
};

export default Logo;
