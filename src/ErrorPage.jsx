import { Link } from "react-router-dom";
import Nav from "./components/Nav";

const ErrorPage = () => {
  return (
    <div className="w-full">
      <Nav />
      <div className="flex flex-col items-center text-3xl py-6 gap-3">
        <h1 className="text-gray-500">Some error must have occured 🥲</h1>
        <Link to="/" className="text-violet-500 cursor-pointer underline">
          Return to the home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
