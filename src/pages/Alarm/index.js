import { Link } from "react-router-dom";
import "./index.css";
 
const AlramSplash = () => {
  return (
    <>
      <div class="page-1">
      <div class="logo">A<span>larm</span></div>
      <div class="lower-text">
        <Link className="no-link-style" to="/alram-dashboard">be ready</Link>
      </div>
    </div>

    <div class="page-2">
      <div class="upper-card">
        <div class="part-left">
          <div class="bedtime-info">
            <div class="bedtime-header">
              <h4>Bedtime</h4>
              <span class="status">On track</span>
            </div>
            <h2>2 hrs 30 min</h2>
          </div>
        </div>
        <div class="part-right">
          <button class="set-btn">Set Bedtime</button>
          <p class="goal">
            💡 92% of your goal<br />
            <small>This can be set under your bedtime goal</small>
          </p>
        </div>
      </div>

      <div class="text-card">
        <span class="alarm-label">Alarm</span>
        <i data-feather="more-horizontal" class="more-icon"></i>
      </div>

      <div class="alarm-card">
        <div class="alarm">
          <div class="alarm-info">
            <div class="alarm-time">06:00 <small>am</small></div>
            <div class="alarm-days">M T W T F S S</div>
          </div>
          <div class="switch on"></div>
        </div>

        <div class="alarm">
          <div class="alarm-info">
            <div class="alarm-time">08:00 <small>am</small></div>
            <div class="alarm-days">Fri, 3 Dec</div>
          </div>
          <div class="switch"></div>
        </div>

        <div class="alarm">
          <div class="alarm-info">
            <div class="alarm-time">11:00 <small>am</small></div>
            <div class="alarm-days">M T W T F S S</div>
          </div>
          <div class="switch"></div>
        </div>

        <div class="alarm">
          <div class="alarm-info">
            <div class="alarm-time">7:00 <small>pm</small></div>
            <div class="alarm-days">Every day</div>
          </div>
          <div class="switch"></div>
        </div>
      </div>

      <div class="lower-card">
        <div class="add-btn">
          <button>+</button>
          {/* <Link className="no-link-style" to="/alram-dashboard">be ready</Link> */}
        </div>
      </div>
    </div>

    <div class="alarm-container">
      <div class="time-picker">
        <select>
          <option>1</option>
          <option selected>2</option>
          <option>3</option>
        </select>
        :
        <select>
          <option>59</option>
          <option selected>00</option>
          <option>01</option>
        </select>
        <select>
          <option selected>AM</option>
          <option>PM</option>
        </select>
      </div>

      <div class="days">
        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span
        ><span>S</span><span>S</span>
      </div>

      <div class="toggle-row">
        <div>
          <div class="toggle-title">Disable during Public holidays</div>
          <div class="note">Don’t include substitute or temporary holidays</div>
        </div>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>

      <div class="toggle-row">
        <div class="toggle-title">
          Alarm sound<br /><span class="note">Homecoming</span>
        </div>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider"></span>
        </label>
      </div>

      <div class="toggle-row">
        <div class="toggle-title">
          Vibration<br /><span class="note">Basic call</span>
        </div>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider"></span>
        </label>
      </div>

      <div class="toggle-row">
        <div class="toggle-title">
          Snooze<br /><span class="note">5 minutes, 3 times</span>
        </div>
        <label class="switch">
          <input type="checkbox" checked />
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <div class="sleep-container">
      <div class="sleep-clock">
        <div class="sleep-clock-center">
          <div class="sleep-time bedtime">🕓 11:45 pm</div>
          <div class="sleep-time wake">🔔 6:15 am</div>
        </div>
      </div>

      <div class="sleep-goal-text">
        <span>😴 Under your sleep goal (&lt; 8hrs)</span>
      </div>

      <div class="bedtime-box">
        <div class="bed-label">🌙 Bedtime</div>
        <div class="bed-reminder">
          Reminder notification<br />
          <span class="bed-note">15 minutes before</span>
        </div>
      </div>

      <div class="wake-box">
        <div class="wake-label">🔔 Wake up</div>
        <div class="wake-days">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span
          ><span>S</span><span>S</span>
        </div>
      </div>

      <div class="sleep-toggle-row">
        <div>
          <div class="toggle-heading">Disable during Public holidays</div>
          <div class="toggle-note">
            Don’t include substitute or temporary holidays
          </div>
        </div>
        <label class="sleep-switch">
          <input type="checkbox" />
          <span class="sleep-slider"></span>
        </label>
      </div>

      <div class="sleep-toggle-row">
        <div class="toggle-heading">
          Alarm sound<br /><span class="toggle-note">Homecoming</span>
        </div>
        <label class="sleep-switch">
          <input type="checkbox" checked />
          <span class="sleep-slider"></span>
        </label>
      </div>

      <div class="sleep-toggle-row">
        <div class="toggle-heading">
          Vibration<br /><span class="toggle-note">Basic call</span>
        </div>
        <label class="sleep-switch">
          <input type="checkbox" checked />
          <span class="sleep-slider"></span>
        </label>
      </div>
      <div class="sleep-toggle-row">
        <div class="toggle-heading">
          Snooze<br /><span class="toggle-note">5 minutes, 3 times</span>
        </div>
        <label class="sleep-switch">
          <input type="checkbox" checked />
          <span class="sleep-slider"></span>
        </label>
      </div>
    </div>
    </>
  );
};

export default AlramSplash;
