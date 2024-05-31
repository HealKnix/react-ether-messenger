import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo: FC = () => {
  return (
    <>
      <Link to="/home" className="logo nav">
        <div className="desktop-logo">
          <span className="logo__accent-logo-name">Ether</span>
          <span className="logo__logo-name">Mess</span>
        </div>
        <div className="mobile-logo">
          <span className="logo__accent-logo-name">E</span>
          <span className="logo__logo-name">M</span>
        </div>
      </Link>
    </>
  );
};

export default Logo;
