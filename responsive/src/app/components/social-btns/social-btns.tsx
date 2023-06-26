import { GitHubIcon } from "../icons/github-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";

import './social-btns.scss';

export function SocialBtns() {
  return (
    <div className="social">
      <a href="">
        <LinkedinIcon/>
      </a>
      <a href="">
        <GitHubIcon/>
      </a>
    </div>
  );
}