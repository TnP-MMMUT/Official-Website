import "../../style/academics.css";

const MTech = () => {
  return (
    <>
      <ul className="acad mx-auto ms-4 ms-md-5 ms-lg-5">
        <li>
          <b className="sub-head">Duration:</b> 2 Years
        </li>
        <li>
          <b className="sub-head">Admission Through:</b> CUET(PG)
        </li>
        <li>
          <b className="sub-head">Specializations Offered:</b>
        </li>
      </ul>

      <ul className="acad li-type mx-auto ms-5 ms-md-5 ms-lg-5 ml-5">
        <li>
          Civil Engineering:
          <ol className="acad sub-li mx-auto ms-4 ms-md-5 ms-lg-5 ms-2">
            <li>Structuring Engineering</li>
            <li>Environmental Engineering</li>
            <li>Seismic Design and Earthquake Engineering</li>
            <li>Hill Area Development Engineering</li>
          </ol>
        </li>
        <br></br>
        <li>
          Electrical Engineering:
          <ol className="acad sub-li mx-auto ms-4 ms-md-5 ms-lg-5 ms-2">
            <li>Power Electronics and Drives</li>
            <li>Control and instrumentation</li>
          </ol>
        </li>
        <br></br>
        <li>
          Mechanical Engineering:
          <ol className="acad sub-li mx-auto ms-4 ms-md-5 ms-lg-5 ms-2">
            <li>Energy Technology and Management</li>
            <li>Computer Integrated Manufacturing</li>
          </ol>
        </li>
        <br></br>
        <li>
          Electronics & Communication Engineering:
          <ol className="acad sub-li mx-auto ms-4 ms-md-5 ms-lg-5 ms-2">
            <li>Digital System</li>
            <li>Communication Engineering</li>
          </ol>
        </li>
        <br></br>
        <li>
          Computer Science & Engineering:
          <ol className="acad sub-li mx-auto ms-4 ms-md-5 ms-lg-5 ms-2">
            <li>Computer Science and Engineering</li>
            <li>Information Technology</li>
          </ol>
        </li>
      </ul>
    </>
  );
};

export default MTech;
