import React from "react";
import images from "@kun-utils/images"

import styles from "./styles";

const Header = () => {
  return (
    <div>
      <h1 style={{
        ...styles['title'],
        ...styles['color']
      }}>{`Kun Ve Chai`.toUpperCase()}</h1>
      <img src={images['FAVICON']} alt={images} />
    </div>
  );
};



export default Header;
