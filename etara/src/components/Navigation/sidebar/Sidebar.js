import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import classes from "./Sidebar.module.css";
import { useTranslation } from "react-i18next";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={classes.Sidebar}>
          <Link to="#" className={classes.Menubars}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? classes.Open : classes.Closed}>
          <ul className={classes.Navmenuitems} onClick={showSidebar}>
            <li className={classes.Navbartoggle}>
              <Link to="#" className={classes.Menubars}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className={classes.Sidetext}>
              <Link to="/">
                <AiIcons.AiFillHome />
                <span>{t("menus.home")}</span>
              </Link>
            </li>
            <li className={classes.Sidetext}>
              <Link to="/News">
                <IoIcons.IoIosPaper />
                <span>{t("menus.news")}</span>
              </Link>
            </li>
            <li className={classes.Sidetext}>
              <Link to="/Products">
                <FaIcons.FaCartPlus />
                <span>{t("menus.products")}</span>
              </Link>
            </li>
            <li className={classes.Sidetext}>
              <Link to="/About">
                <IoIcons.IoMdPeople />
                <span>{t("menus.about")}</span>
              </Link>
            </li>
            <li className={classes.Sidetext}>
              <Link to="/Contact">
                <IoIcons.IoMdHelpCircle />
                <span>{t("menus.contact")}</span>
              </Link>
            </li>
            <div className={classes.Separator} />
            <li
              className={classes.Sidetext}
              onClick={() => changeLanguage("bg")}
            >
              <a href="#Bulgarian">
                <MdIcons.MdLanguage />
                <span>{t("langmemus.bulgarian")}</span>
              </a>
            </li>
            <li
              className={classes.Sidetext}
              onClick={() => changeLanguage("de")}
            >
              <a href="#Germania">
                <MdIcons.MdLanguage />
                <span>{t("langmemus.german")}</span>
              </a>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Sidebar;
