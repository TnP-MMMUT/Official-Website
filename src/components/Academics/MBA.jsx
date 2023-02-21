import "../../style/academics.css";
const MBA = () => {
  return (
    <>
      <div className="text2-UG mx-auto ms-lg-5">
        <b>Master of Business Administration (M.B.A.):</b>
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
            <li>Finance</li>
            <li>Human Resource (HR)</li>
            <li>Information Technology (IT)</li>
            <li>Marketing</li>
            <li>International Business</li>
            <li>Entrepreneurship Development</li>
            <li>Operations Management</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default MBA;
