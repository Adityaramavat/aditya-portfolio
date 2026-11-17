
import { TypeAnimation } from "react-type-animation";

function AnimatedRoleTitle() {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        1800,
        "React Developer",
        1800,
        "Full Stack Developer",
        1800,
        "Frontend Developer",
        1800
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={65}
      repeat={Infinity}
      cursor={true}
    />
  );
}

export default AnimatedRoleTitle;
