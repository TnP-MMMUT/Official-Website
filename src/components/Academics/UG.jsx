import "../../style/academics.css";

const UG = () => {
  return (
    <>
      <div className="about ms-2 ms-md-6 ms-lg-5">Undergraduate Programmes</div>
      <div className="border1 border-UG ms-2 ms-md-6 ms-lg-5"></div>
      <div className="text2-UG mx-auto ms-lg-5">
        <p>
          The University offers the following undergraduate programmes leading
          to B.Tech. and B.B.A. degrees, which are of 4 and 3 years of duration,
          respectively.
        </p>
        <b>Bachelor of Technology (B.Tech.):</b>
      </div>
      <ul className="acad ms-4 ms-md-5 ms-lg-5">
        <li>
          <b className="sub-head">Duration:</b> 4 Years
        </li>
        <li>
          <b className="sub-head">Admission Through:</b> JEE Mains
        </li>
        <li>
          <b className="sub-head">Specializations Offered:</b>
          <ul className="acad li-type mx-auto ms-2 ms-md-5 ms-lg-5">
            <li>Chemical Engineering (CHE)</li>
            <li>Civil Engineering (CE)</li>
            <li>Computer Science & Engineering (CSE)</li>
            <li>Electrical Engineering (EE)</li>
            <li>Electronics and Communication Engineering (ECE)</li>
            <li>Information Technology (IT)</li>
            <li>Mechanical Engineering (ME)</li>
          </ul>
        </li>
      </ul>
      <div className="text2-UG mx-auto ms-lg-5">
        <b>Bachelor of Business Administration (B.B.A.):</b>
      </div>
      <ul className="acad mx-auto ms-4 ms-md-5 ms-lg-5">
        <li>
          <b className="sub-head">Duration:</b> 3 Years
        </li>
        <li>
          <b className="sub-head">Admission Through:</b> UPCET
        </li>
      </ul>

      <div className="text2-UG mx-auto ms-lg-5">
        <b>Bachelor of Pharmacy (B.Pharma):</b>
      </div>
      <ul className="acad mx-auto ms-4 ms-md-5 ms-lg-5">
        <li>
          <b className="sub-head">Duration:</b> 3 Years
        </li>
        <li>
          <b className="sub-head">Admission Through:</b> UPCET
        </li>
      </ul>
    </>
  );
};

export default UG;
