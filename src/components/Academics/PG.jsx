import MBA from "./MBA";
import MCA from "./MCA";
import MTech from "./M.Tech";
import MSc from "./MSc";
import PhD from "./PhD";

import "../../style/academics.css";

const PG = () => {
  return (
    <>
      <div className="about ms-3 ms-md-6 ms-lg-5">Postgraduate Programmes</div>
      <div className="border1 border-PG ms-3 ms-md-6 ms-lg-5"></div>
      <div className="text2-UG mx-auto ms-lg-5">
        <p>
          The University offers the following undergraduate programmes leading
          to M.Tech., M.B.A., M.C.A. and M.Sc. degrees.
        </p>
        <b> Master of Technology (M.Tech.):</b>
      </div>
      <MTech />

      <MCA />
      <MBA />
      <MSc />
      <PhD />
    </>
  );
};

export default PG;
