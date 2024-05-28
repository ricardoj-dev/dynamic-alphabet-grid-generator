import { Link, useMatch, useResolvedPath } from "react-router-dom";

type Props = {
  text: string;
  to: string;
};

const NavbarLink = ({ text, to }: Props) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <button className="font-bold text-sm">
      <Link
        to={to}
        style={{
          color: `${isActive ? "#9a3823" : "#2B3762"}`,
          textDecoration: `${isActive ? "underline" : "none"}`,
        }}
      >
        {text}
      </Link>
    </button>
  );
};

export default NavbarLink;
