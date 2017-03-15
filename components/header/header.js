import styles from "./header.scss";
import Headroom from "react-headroom";
import NavigationLeft from "../navigation/navigation-left";
import NavigationRight from "../navigation/navigation-right";
import SocialButtons from "../navigation/social-buttons";

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <Headroom>
      <header className="header-main">
        <div className="header-main-wrapper">
          <div className="header-main-section">
            <div className="logo">
              <img
                src="https://nteract.github.io/assets/images/feature_nteract_logo_header_white@2x.png"
                alt=""
              />
            </div>
            <NavigationLeft />
          </div>
          <div className="header-main-section not-mobile">
            <NavigationRight />
            <SocialButtons />
          </div>
        </div>
      </header>
    </Headroom>
  </div>
);