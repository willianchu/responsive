import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";
import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
      <Info/>
        <div className="buttons">
          <SocialBtns/>
          <button className="btn-primary"> Call me! 🤙 </button>
        </div>

      
    </main>
  )
}
