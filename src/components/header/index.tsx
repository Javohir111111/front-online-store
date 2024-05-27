import { NavLink, useLocation } from "react-router-dom";
import { Container } from "@containers";
import Links from "@router-files"
import logo from "../../assets/images/uzum_logo.png"; ``
import "./style.scss";
import { ListItemIcon } from "@mui/material";

const index = () => {
  const {pathname} = useLocation();
  return (
    <header className="bg-stone-100">
      <Container>
        <nav className="flex justify-between items-center h-[70px]">
          <NavLink to="/">
            <img className="w-[100px] " src={logo} alt="logo" />
          </NavLink>
          <ul className="flex gap-x-8">

            {
              Links?.map((link: any) => {
                return (
                  <>
                    <li key={link.path}>
                      <NavLink className="text-black" to={link.path}>{link.content}</NavLink>
                    </li>
                    <li key={link.path}>
                      <ListItemIcon>
                        <span className={link.path === pathname ? "text-white" : ""}>{link.icon}</span>
                      </ListItemIcon>
                    </li>
                  </>
                )
              })
            }

          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default index;
