import React from "react";

var today=new Date();
var year=today.getFullYear();
function Footer(){
    return <footer><p>Copyright © {year} © Jay Gandhi </p></footer> ;
}

export default Footer;