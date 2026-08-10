// src/App.jsx
import './App.css';
import discordHead from "./assets/discord-logo-white.png"
import background from "./assets/discord-background.png"
import menuDisc from "./assets/menu-icon.png"

function App() {
  return (
  <div className="App">

      <div className = "top-bar">
        <img className = "discordHead" src={discordHead} />
        <img className = "disMenu" src={menuDisc} />
      </div>

      <div className = "hero-content">
        <h1>IMAGINE A PLACE...</h1>

        <p>
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk every day and hang out more often.
        </p>
        <div className = "buttons">
        <button id="buttonDd">Download for Windows</button>
        <button id="buttonBrow">Open discord on your browser</button>
        </div>
      </div>

      <img className = "background-image" src={background} />

    </div>
  );
}

export default App;