interface ChipProps {
  color?: string;
  text: string;
}

const Chip = ({ color = 'black', text }: ChipProps) => {
  return (
    <div
      className="chip"
      style={{
        background: 'white',
        border: `${color} 0.1em solid`,
        fontSize: '0.8em',
        padding: '0.2em 0.6em',
        borderRadius: '1em',
      }}
    >
      <p style={{ color: color }}>{text}</p>
    </div>
  );
};
export default Chip;
