import { Link, Links } from "react-router-dom";
import "./index.css";

const AlarmDashboard = () => {
  return (
    <div className="page-2">
      <div className="upper-card">
        <div className="part-left">
          <div className="bedtime-info">
            <div className="bedtime-header">
              <h4>Bedtime</h4>
              <span className="status">On track</span>
            </div>
            <h2>2 hrs 30 min</h2>
          </div>
        </div>
        <div className="part-right">
          <button className="set-btn">
            <Link className="no-link-style" to="/Setbedtime">
              Set Bedtime
            </Link>
          </button>
          <p className="goal">
            💡 92% of your goal
            <br />
            <small>This can be set under your bedtime goal</small>
          </p>
        </div>
      </div>

      <div className="text-card">
        <span className="alarm-label">Alarm</span>
        <i data-feather="more-horizontal" className="more-icon"></i>
      </div>

      <div className="alarm-card">
        <div className="alarm">
          <div className="alarm-info">
            <div className="alarm-time">
              06:00 <small>am</small>
            </div>
            <div className="alarm-days">M T W T F S S</div>
          </div>
          <div className="switch on"></div>
        </div>

        <div className="alarm">
          <div className="alarm-info">
            <div className="alarm-time">
              08:00 <small>am</small>
            </div>
            <div className="alarm-days">Fri, 3 Dec</div>
          </div>
          <div className="switch"></div>
        </div>

        <div className="alarm">
          <div className="alarm-info">
            <div className="alarm-time">
              11:00 <small>am</small>
            </div>
            <div className="alarm-days">M T W T F S S</div>
          </div>
          <div className="switch"></div>
        </div>

        <div className="alarm">
          <div className="alarm-info">
            <div className="alarm-time">
              7:00 <small>pm</small>
            </div>
            <div className="alarm-days">Every day</div>
          </div>
          <div className="switch"></div>
        </div>
      </div>

      <div className="lower-card">
        
          <Link className="add-btn" to="/Setalarm"> + </Link>
        
      </div>
    </div>
  );
};

export default AlarmDashboard;
