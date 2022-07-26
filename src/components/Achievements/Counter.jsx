import CountUp from "react-countup";

const Counter = ({ end, suffix, title }) => {
  return (
    <CountUp start={0} end={end} suffix={suffix ? suffix : ""} delay={0}>
      {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
          <h3>{title}</h3>
        </div>
      )}
    </CountUp>
  );
};

export default Counter;
