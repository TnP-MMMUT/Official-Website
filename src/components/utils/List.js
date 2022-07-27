//Past Recruiting Organisations List
import "./OrgCarousel.css";
import CompanyData from "../../data/CompanyData";

const List = () => {
  return (
    <>
      <div className="ms-4 ms-lg-5 mt-4">
        <div className="navList">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-A-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-A"
                type="button"
                role="tab"
                aria-controls="pills-A"
                aria-selected="true"
              >
                A
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-B-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-B"
                type="button"
                role="tab"
                aria-controls="pills-B"
                aria-selected="false"
              >
                B
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-C-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-C"
                type="button"
                role="tab"
                aria-controls="pills-C"
                aria-selected="false"
              >
                C
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-D-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-D"
                type="button"
                role="tab"
                aria-controls="pills-D"
                aria-selected="false"
              >
                D
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-E-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-E"
                type="button"
                role="tab"
                aria-controls="pills-E"
                aria-selected="false"
              >
                E
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-F-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-F"
                type="button"
                role="tab"
                aria-controls="pills-F"
                aria-selected="false"
              >
                F
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-G-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-G"
                type="button"
                role="tab"
                aria-controls="pills-G"
                aria-selected="false"
              >
                G
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-H-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-H"
                type="button"
                role="tab"
                aria-controls="pills-H"
                aria-selected="false"
              >
                H
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-I-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-I"
                type="button"
                role="tab"
                aria-controls="pills-I"
                aria-selected="false"
              >
                I
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-J-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-J"
                type="button"
                role="tab"
                aria-controls="pills-J"
                aria-selected="false"
              >
                J
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-K-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-K"
                type="button"
                role="tab"
                aria-controls="pills-K"
                aria-selected="false"
              >
                K
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-L-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-L"
                type="button"
                role="tab"
                aria-controls="pills-L"
                aria-selected="false"
              >
                L
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-M-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-M"
                type="button"
                role="tab"
                aria-controls="pills-M"
                aria-selected="false"
              >
                M
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-N-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-N"
                type="button"
                role="tab"
                aria-controls="pills-N"
                aria-selected="false"
              >
                N
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-O-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-O"
                type="button"
                role="tab"
                aria-controls="pills-O"
                aria-selected="false"
              >
                O
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-P-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-P"
                type="button"
                role="tab"
                aria-controls="pills-P"
                aria-selected="false"
              >
                P
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-Q-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Q"
                type="button"
                role="tab"
                aria-controls="pills-Q"
                aria-selected="false"
              >
                Q
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-R-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-R"
                type="button"
                role="tab"
                aria-controls="pills-R"
                aria-selected="false"
              >
                R
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-S-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-S"
                type="button"
                role="tab"
                aria-controls="pills-S"
                aria-selected="false"
              >
                S
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-T-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-T"
                type="button"
                role="tab"
                aria-controls="pills-T"
                aria-selected="false"
              >
                T
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-U-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-U"
                type="button"
                role="tab"
                aria-controls="pills-U"
                aria-selected="false"
              >
                U
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-V-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-V"
                type="button"
                role="tab"
                aria-controls="pills-V"
                aria-selected="false"
              >
                V
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-W-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-W"
                type="button"
                role="tab"
                aria-controls="pills-W"
                aria-selected="false"
              >
                W
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-X-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-X"
                type="button"
                role="tab"
                aria-controls="pills-X"
                aria-selected="false"
              >
                X
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-Y-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Y"
                type="button"
                role="tab"
                aria-controls="pills-Y"
                aria-selected="false"
              >
                Y
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-Z-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Z"
                type="button"
                role="tab"
                aria-controls="pills-Z"
                aria-selected="false"
              >
                Z
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-specialCharac-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-specialCharac"
                type="button"
                role="tab"
                aria-controls="pills-specialCharac"
                aria-selected="false"
              >
                #
              </button>
            </li>
          </ul>
        </div>
        <div className="comps ms-2">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-A"
              role="tabpanel"
              aria-labelledby="pills-A-tab"
            >
              <ul>
                {CompanyData[0].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-B"
              role="tabpanel"
              aria-labelledby="pills-B-tab"
            >
              <ul>
                {CompanyData[1].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-C"
              role="tabpanel"
              aria-labelledby="pills-C-tab"
            >
              <ul>
                {CompanyData[2].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-D"
              role="tabpanel"
              aria-labelledby="pills-D-tab"
            >
              <ul>
                {CompanyData[3].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-E"
              role="tabpanel"
              aria-labelledby="pills-E-tab"
            >
              <ul>
                {CompanyData[4].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-F"
              role="tabpanel"
              aria-labelledby="pills-F-tab"
            >
              <ul>
                {CompanyData[5].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-G"
              role="tabpanel"
              aria-labelledby="pills-G-tab"
            >
              <ul>
                {CompanyData[6].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-H"
              role="tabpanel"
              aria-labelledby="pills-H-tab"
            >
              <ul>
                {CompanyData[7].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-I"
              role="tabpanel"
              aria-labelledby="pills-I-tab"
            >
              <ul>
                {CompanyData[8].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-J"
              role="tabpanel"
              aria-labelledby="pills-J-tab"
            >
              <ul>
                {CompanyData[9].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-K"
              role="tabpanel"
              aria-labelledby="pills-K-tab"
            >
              <ul>
                {CompanyData[10].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-L"
              role="tabpanel"
              aria-labelledby="pills-L-tab"
            >
              <ul>
                {CompanyData[11].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-M"
              role="tabpanel"
              aria-labelledby="pills-M-tab"
            >
              <ul>
                {CompanyData[12].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-N"
              role="tabpanel"
              aria-labelledby="pills-N-tab"
            >
              <ul>
                {CompanyData[13].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-O"
              role="tabpanel"
              aria-labelledby="pills-O-tab"
            >
              <ul>
                {CompanyData[14].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-P"
              role="tabpanel"
              aria-labelledby="pills-P-tab"
            >
              <ul>
                {CompanyData[15].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Q"
              role="tabpanel"
              aria-labelledby="pills-Q-tab"
            >
              <ul>
                {CompanyData[16].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-R"
              role="tabpanel"
              aria-labelledby="pills-R-tab"
            >
              <ul>
                {CompanyData[17].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-S"
              role="tabpanel"
              aria-labelledby="pills-S-tab"
            >
              <ul>
                {CompanyData[18].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-T"
              role="tabpanel"
              aria-labelledby="pills-T-tab"
            >
              <ul>
                {CompanyData[19].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-U"
              role="tabpanel"
              aria-labelledby="pills-U-tab"
            >
              <ul>
                {CompanyData[20].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-V"
              role="tabpanel"
              aria-labelledby="pills-V-tab"
            >
              <ul>
                {CompanyData[21].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-W"
              role="tabpanel"
              aria-labelledby="pills-W-tab"
            >
              <ul>
                {CompanyData[22].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-X"
              role="tabpanel"
              aria-labelledby="pills-X-tab"
            >
              <ul>
                {CompanyData[23].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Y"
              role="tabpanel"
              aria-labelledby="pills-Y-tab"
            >
              <ul>
                {CompanyData[24].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Z"
              role="tabpanel"
              aria-labelledby="pills-Z-tab"
            >
              <ul>
                {CompanyData[25].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-specialCharac"
              role="tabpanel"
              aria-labelledby="pills-specialCharac-tab"
            >
              <ul>
                {CompanyData[26].map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
