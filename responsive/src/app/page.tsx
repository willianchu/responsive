import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
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

      
    </main>
  )
}
