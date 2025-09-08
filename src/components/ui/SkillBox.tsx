import type { IconType } from "react-icons";
import GlareHover from "./GlareHover";

type SkillBoxProps = {
  skill: string;
  Icon: IconType;
};

export default function SkillBox({ skill, Icon }: SkillBoxProps) {
  return (
    <GlareHover
      height="50px"
      width="140px"
      glareColor="#ffffff"
      className="items-center justify-center"
      glareOpacity={0.3}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
    >
      <Icon />
      <span>{skill}</span>
    </GlareHover>
  );
}
