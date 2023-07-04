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
              <div className="experience-unit">
                <div className="experience-measure measure-1">
                  <span>x years</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <JavascriptIcon />
              <div className="experience-unit">
                <div className="experience-measure measure-2">
                <span>x years</span>
                </div>
              </div>
            </div>
            <div className="experience-language">
              <TypescriptIcon />
              <div className="experience-unit">
                <div className="experience-measure measure-3">
                <span>x years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>	
  )
}