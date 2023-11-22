import Counter from "./Counter";
import { motion } from "framer-motion";
import "./achievements.css";

const CounterComponent = () => {
  const parentVariant = {
    hidden: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const childVariant = {
    hidden: {
      opacity: 0,
      translateX: -40,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  const childTransition = {
    duration: 0.2,
  };
  return (
    <>
      <motion.div
        className="counter-row"
        variants={parentVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="row-1">
          <motion.div
            className="quadrant-1"
            variants={childVariant}
            transition={childTransition}
          >
            <Counter end={992} title={" Offers"} />
          </motion.div>
          <motion.div
            className="quadrant-1"
            variants={childVariant}
            transition={childTransition}
          >
            <Counter end={90} suffix={"+"} title={"Companies Visited"} />
          </motion.div>
        </div>
        <div className="row-2">
          <motion.div
            className="quadrant-1"
            variants={childVariant}
            transition={childTransition}
          >
            <Counter
              end={52}
              suffix={" LPA"}
              title={"Highest Package Offered"}
            />
          </motion.div>
          <motion.div
            className="quadrant-1"
            variants={childVariant}
            transition={childTransition}
          >
            <Counter
              end={7}
              suffix={" + LPA"}
              title={"Average Package Offered"}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default CounterComponent;
