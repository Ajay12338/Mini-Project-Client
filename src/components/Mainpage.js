import MainBody from "./MainBody";
import { useLocation } from "react-router-dom";
const Mainpage = () => {
  const location = useLocation();
  return (
    <>
      <h1 id="main-heading">{`Welcome ${location?.state?.username}`}</h1>
      <div className="login-container">
        <MainBody uid={location?.state?.userId} />
      </div>
    </>
  );
};

export default Mainpage;
