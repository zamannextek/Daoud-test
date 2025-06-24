import { Link } from "react-router-dom";
import "./index.css";
 
const AlramSplash = () => {
  return (
    <>
      <div class="page-1">
        <div class="logo">
          A<span>larm</span>
        </div>
        <div class="lower-text">
          <Link className="no-link-style" to="/alram-dashboard">be ready</Link>
        </div>
      </div>
    </>
  );
};

export default AlramSplash;
