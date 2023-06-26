import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience() {
  return(
    <div className="experience">
        <SectionTitle text="Experience" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className="experience-time">
          <p> 2019 - 2020 </p>
        </div>
    </div>	
  )
}