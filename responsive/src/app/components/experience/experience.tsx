import { JavascriptIcon } from "../icons/javascript-icon"
import { ReactIcon } from "../icons/react-icon"
import { TypescriptIcon } from "../icons/typescript-icon"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience() {
  return(
    <div className="experience">
        <SectionTitle text="Experience" />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className="experience-time">
          <div>
            <div className="experience-language">
              <ReactIcon />
            </div>
            <div className="experience-unit">
              <div className="experience-measure"></div>
            </div>
            <div className="experience-language">
            {/* <JavascriptIcon /> */}
            </div>
            <div className="experience-unit">
              <div className="experience-measure"></div>
            </div>
            <div className="experience-language">
            {/* <TypescriptIcon /> */}
            </div>
            <div className="experience-unit">
              <div className="experience-measure"></div>
            </div>
          </div>
        </div>
    </div>	
  )
}