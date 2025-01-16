import phpLogo from "../assets/logo-icons/LogosPhp.svg";
import htmlLogo from "../assets/logo-icons/LogosHtml5.svg";
import cssLogo from "../assets/logo-icons/LogosCss3.svg";
import jsLogo from "../assets/logo-icons/LogosJavascript.svg";
import tsLogo from "../assets/logo-icons/LogosTypescriptIcon.svg";
import pythonLogo from "../assets/logo-icons/LogosPython.svg";
import djangoLogo from "../assets/logo-icons/LogosDjangoIcon.svg";
import angularLogo from "../assets/logo-icons/LogosAngularIcon.svg";
import reactLogo from "../assets/logo-icons/LogosReact.svg";
import dotnetLogo from "../assets/logo-icons/LogosDotnet.svg";

const icons = {
  html: htmlLogo,
  css: cssLogo,
  js: jsLogo,
  ts: tsLogo,
  python: pythonLogo,
  php: phpLogo,
  django: djangoLogo,
  angular: angularLogo,
  react: reactLogo,
  dotnet: dotnetLogo,
};

// eslint-disable-next-line react/prop-types
const Emblem = ({ icon, text }) => {
  return (
    <li className="skill">
      <p>{text}</p>
      <img src={icons[icon]} alt="" />
    </li>
  );
};

export default Emblem;
