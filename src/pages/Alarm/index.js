import "./index.css";
import { IoMdMore } from "react-icons/io";

const Alarm = () => {
  return (
    <>
      <div class="page-1">
        <div class="logo">
          A<span>larm</span>
        </div>
        <div class="lower-text">
          <span>be ready.</span>
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
              💡 92% of your goal
              <br />
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
              <div class="alarm-time">
                06:00 <small>am</small>
              </div>
              <div class="alarm-days">M T W T F S S</div>
            </div>
            <div class="switch on"></div>
          </div>

          <div class="alarm">
            <div class="alarm-info">
              <div class="alarm-time">
                08:00 <small>am</small>
              </div>
              <div class="alarm-days">Fri, 3 Dec</div>
            </div>
            <div class="switch"></div>
          </div>

          <div class="alarm">
            <div class="alarm-info">
              <div class="alarm-time">
                11:00 <small>am</small>
              </div>
              <div class="alarm-days">M T W T F S S</div>
            </div>
            <div class="switch"></div>
          </div>

          <div class="alarm">
            <div class="alarm-info">
              <div class="alarm-time">
                7:00 <small>pm</small>
              </div>
              <div class="alarm-days">Every day</div>
            </div>
            <div class="switch"></div>
          </div>
        </div>

        <div class="lower-card">
          <div class="add-btn">
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alarm;
