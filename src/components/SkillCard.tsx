const SkillCard = ({ name, img }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-2">
        <img src={img} alt={name} className="skill-icon" />
      </div>
      <button className="skill-card-button">{name}</button>
    </div>
  );
};

export default SkillCard;
