import logo from "../styles/images/logo.png";
import { Link } from "react-router-dom";
import barsChart from "../styles/images/barChart.svg";
import heart from "../styles/images/heart.svg";
import cartIcon from "../styles/images/cart.svg";
import menuIcon from "../styles/images/menu.svg";
import HomeHeader from "../styles/HomeStyles";

const Home = () => {
  return <Header />;
};

const Header = () => {
  return (
    <HomeHeader>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <div></div>
        <>
          <SearchBar />
        </>
      </nav>
      <nav>
        <Link to="/compare">
          <img className="icon" src={barsChart} alt="Compare" />
        </Link>
        <Link to="/wishlist">
          <img className="icon" src={heart} alt="Wish list" />
        </Link>
        <Link to="/cart">
          <img className="icon" src={cartIcon} alt="Cart" />
        </Link>
      </nav>
    </HomeHeader>
  );
};

const SearchBar = () => {
  return (
    <div>
      <input placeholder="I'm shopping for..." />
      <button>Search</button>
    </div>
  );
};

const Menu = () => {
  return (
    <div>
      <img srt={menuIcon} alt="menu" />
    </div>
  );
};

export default Home;
