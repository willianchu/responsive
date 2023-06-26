import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
    <SectionTitle text="Languages" />
    <div className="languages-info">
      <span> ⚽Portuguese (Brazil) - Native </span>  
      <span> 🏈English - Intermediate</span>
      <span> 💃Spanish - Basic </span>
      <span> 🥐French - Basic </span>
    </div>
    <SectionTitle text="Education" />
    <div className="educational-info">
      <span> 🎓 </span>
      <span> School </span>
    </div>
  </div>
  );
}