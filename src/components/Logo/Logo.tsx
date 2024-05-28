import { FC } from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <>
      <Link to="/" className="logo">
        <span className="logo__accent-logo">Ether</span>
        Mess
      </Link>
    </>
  );
};

export default Logo;
