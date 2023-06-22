import { Header } from "./components/header/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="experience">
        <h3> Experience </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className="experience-time">
          <p> 2019 - 2020 </p>
        </div>
        <div className="infos">
          <h3> Infos </h3>
          <div className="languages-info">
            <span> ⚽Portuguese (Brazil) - Native </span>  
            <span> 🏈English - Intermediate</span>
            <span> 💃Spanish - Basic </span>
            <span> 🥐French - Basic </span>
          </div>
          <h3> Education </h3>
          <div className="educational-info">
            <span> 🎓 </span>
            <span> School </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button> Call me! </button>
        </div>

      </div>
    </main>
  )
}
