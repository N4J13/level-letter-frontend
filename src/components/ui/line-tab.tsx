import { motion } from "framer-motion";

type TabProps = {
  text: {
    name: string;
    value: string;
  };
  selected: boolean;
  customID: string;
  handleClick: (value : string) => void;
};

const Tab = ({
  text,
  selected,
  handleClick,
  customID,
}: TabProps) => {
  return (
    <button
      onClick={() => {
        handleClick(text.value);
      }}
      className={
        (selected ? "text-primary" : "hover:text-gray-900") +
        " relative rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300"
      }
    >
      <span className="relative z-10">{text.name}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  );
};

export default Tab;
