import { cn } from "@/lib/utils";
import Card from "./card";

const Challenge = ({
  type,
  disabled,
  selectedOption,
  status,
  onSelect,
  options,
}) => {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
      )}
    >
      {options.map((option, index) => (
        <Card
          key={option._id}
          id={option._id}
          text={option.text}
          imageSrc={option.imageSrc}
          shortCut={`${index + 1}`}
          selected={selectedOption === option._id}
          onClick={() => onSelect(option._id)}
          status={status}
          audioSrc={option.audioSrc}
          disabled={disabled}
          type={type}
        />
      ))}
    </div>
  );
};

export default Challenge;
