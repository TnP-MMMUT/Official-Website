import "../../style/academics.css";

const MSc = () => {
  return (
    <>
      <div className="text2-UG mx-auto ms-lg-5">
        <b>Master of Science (M.Sc.):</b>
      </div>
      <ul className="acad mx-auto ms-4 ms-md-5 ms-lg-5">
        <li>
          <b className="sub-head">Duration:</b> 2 Years
        </li>
        <li>
          <b className="sub-head">Admission Through:</b> CUET(PG)
        </li>
        <li>
          <b className="sub-head">Specializations Offered:</b>
          <ul className="li-type">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MSc;
