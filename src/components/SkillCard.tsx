import { FC } from 'react';

interface SkillCardProps {
  name: string;
  img: string;
}

const SkillCard: FC<SkillCardProps> = (props) => {
  return (
    <div className="skill-card">
      <div className="skill-card-2">
        <img src={props.img} alt={props.name} className="skill-icon" />
      </div>
      <button className="skill-card-button">{props.name}</button>
    </div>
  );
};

export default SkillCard;
