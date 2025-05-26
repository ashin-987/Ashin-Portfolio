import HeaderTitle from "../../ui/HeaderTitle"
import "./Header.css"
import {profile1} from "../../assets"
import CodeBlock from "../../ui/CodeBlock"
import Facts from "../../ui/Facts"
import SocialHandles from "../../ui/SocialHandles"
import BreathCircle from "../../ui/BreathCircle"

const code = `
const developer = {
    firstName: "Ashin",
    latName: "S H"
    aka: "Passionate Coder",
    hobby:repeat = () => {
        //eat();
        // sleep();
        // repeat();
    }
}
` 
const Header = () => {
  return (
    <header id='header'>
        <BreathCircle />
        <div className="section__wrapper">
            <div className="grid upper">
                <div className="column">
                    <HeaderTitle />
                </div>
                <div className="column">
                    <img src={profile1} className="profile__photo" alt="" />
                </div>
            </div>
            <div className="card grid lower">
                <CodeBlock language={"javascript"} code={code} />
                <div>
                    <p className="text__muted description">
                    I build elegant front-end solutions with curiosity and consistency
                    integrity - focused solutions of users
                    </p>
                    <Facts />
                    <SocialHandles />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header