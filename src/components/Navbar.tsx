import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          MyWebsite
        </h1>

        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link to="/carts" className="hover:text-blue-600">
            Carts
          </Link>

          <Link to="/users" className="hover:text-blue-600">
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;  