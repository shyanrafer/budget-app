// navigation for pages here - this should probably be a component

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/TestPage">Test Page</Link> | <Link to="/Profile">Profile</Link>
    </nav>
  );
};

export default Navigation;