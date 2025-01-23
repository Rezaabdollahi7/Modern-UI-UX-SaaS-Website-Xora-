import { Link as LinkScroll } from "react-scroll";

interface NavLinkProps {
  title: string;
}

const NavLink = ({ title }: NavLinkProps) => (
  <LinkScroll
    to={title}
    offset={-100}
    spy
    smooth
    activeClass="nav-active"
    className="nav-link"
  >
    {title}
  </LinkScroll>
);

export default NavLink;
