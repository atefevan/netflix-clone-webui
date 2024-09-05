interface Props {
  orientation?: "horizontal" | "vertical";
  color?: string;
}

const Divider = ({ orientation = "horizontal", color = "#222222" }: Props) => {
  return (
    <div
      className={
        orientation === "horizontal"
          ? `bg-[${color ? color : "#222222"}] h-[3px] w-full`
          : `bg-[${color ? color : "#222222"}] h-full w-[3px]`
      }
    />
  );
};

export default Divider;
