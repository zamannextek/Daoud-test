import "./index.css";

const Setalarm = () => {
    return (   
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

      <hr />

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
    );
};

export default Setalarm;