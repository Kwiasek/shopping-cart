import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="w-full p-7">
      <ul className="flex justify-end gap-6 text-xl">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/products">Products</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/cart" className="flex items-center gap-1">
            <p>Cart</p> <AiOutlineShoppingCart className="text-xl" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
