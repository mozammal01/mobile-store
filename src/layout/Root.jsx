import { Outlet } from "react-router-dom";
// import Navber from "../pages/Home/Navber";

const Root = () => {
  return (
    <div>
      {/* <Navber></Navber> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;