import "./index.css";

const Setbedtime = () => {
    return (  
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
  
    );
};

export default Setbedtime;