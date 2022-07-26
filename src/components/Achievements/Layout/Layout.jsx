import LayoutItem from "./LayoutItem";
import { AchievementData } from "../../../data/AchievementData";
import "./styles.css";

import { motion } from "framer-motion";

const Layout = () => {
  return AchievementData.map((item) => {
    return (
      <>
        <motion.div
          layout="position"
          transition={{ layout: { duration: 1, type: "spring" } }}
          className="App"
        >
          <LayoutItem
            key={item.id}
            title={item.title}
            content={item.content}
            image={item.image}
          />
        </motion.div>
      </>
    );
  });
};

export default Layout;
