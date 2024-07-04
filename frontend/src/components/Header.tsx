import {Link} from "react-router-dom";

const Header = () => {
  return (
    // the higher the value, the darker the color
    //then add padding. y-axis padding is 6
    <div className="bg-blue-800 py-6">
      {/* add a container div for margins */}
      {/* also use flexbox to push things to the edges of the container */}
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
            <Link to="/">MernHolidays.com</Link>

        </span>
        <span className="flex space-x-2">
            <Link to="/sign-in" 
            className="flex bg-white items-center text-blue-600 px-3 front-bold hover:bg-gray-100">
              Sign In
              </Link>
        </span>

      </div>
    </div>
  )
}

 export default Header;