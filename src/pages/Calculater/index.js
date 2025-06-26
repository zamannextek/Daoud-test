import { useNavigate } from "react-router-dom";
import "./index.css";
const Calculate = () => {
  const navigation = useNavigate();
  const NavigateToAlram = () => {
    console.log("in navigation")
    navigation("/splash");
  };
  return (
    <div class="wrapper">
      <div class="calculator dark-mode" id="calcBox">
        <div class="top-bar">
          <div id="mode-message">Dark mode on 🌙</div>
          <button id="mode-toggle">🌗</button>
        </div>
        <div class="screen">
          <input type="text" id="expression" value="0" disabled />
          <div id="result">0</div>
        </div>
        <div class="buttons">
          <button class="btn special" onclick="clearScreen()">
            Clear
          </button>
          <button class="btn special" onclick="addToExp('(')">
            (
          </button>
          <button class="btn special" onclick="addToExp(')')">
            )
          </button>
          <button class="btn operator" onclick="addToExp('/')">
            \
          </button>
          <button class="btn" onclick="addToExp('7')">
            7
          </button>
          <button class="btn" onclick="addToExp('8')">
            8
          </button>
          <button class="btn" onclick="addToExp('9')">
            9
          </button>
          <button class="btn operator" onclick="addToExp('*')">
            ×
          </button>
          <button class="btn" onclick="addToExp('4')">
            4
          </button>
          <button class="btn" onclick="addToExp('5')">
            5
          </button>
          <button class="btn" onclick="addToExp('6')">
            6
          </button>
          <button class="btn operator" onclick="addToExp('-')">
            −
          </button>
          <button class="btn" onclick="addToExp('1')">
            1
          </button>
          <button class="btn" onclick="addToExp('2')">
            2
          </button>
          <button class="btn" onclick="addToExp('3')">
            3
          </button>
          <button class="btn operator" onclick="addToExp('+')">
            +
          </button>
          <button class="btn special alram-btn" onClick={() => NavigateToAlram()}>
            Alram
          </button>
          <button class="btn" onclick="addToExp('0')">
            0
          </button>
          <button class="btn" onclick="addToExp('.')">
            .
          </button>
          <button class="btn equal" onclick="calculate()">
            =
          </button>
        </div>
        <button class="btn backspace" onclick="backspace()">
          ⌫
        </button>
      </div>
    </div>
  );
};

export default Calculate;
