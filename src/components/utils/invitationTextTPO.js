import { Link } from "react-router-dom";
import Logos from "../Logo/Logos";

const InvitationTextTPO = () => {
  return (
    <>
      <section>
        <div className="container-md">
          <div className="invite-text mt-5">
            <p>Dear Sir/Ma’am, </p>
            <p>
              I feel immense pleasure in introducing Madan Mohan Malaviya
              University of Technology, Gorakhpur with the humble request to
              invite you on behalf of this University to our ‘Campus Recruitment
              Programme'. The Govt. of Uttar Pradesh established Madan Mohan
              Malaviya Engineering College in the year 1962 to impart
              professional education in the fields of Civil Engineering,
              Electrical Engineering, Mechanical Engineering, Electronics &
              Communication Engineering, Computer Science & Engineering leading
              to bachelor’s degree B.Tech. and subsequently reconstituted it as
              non-affiliating technological University of U.P. State Govt.
              through its act number 22 of 2013 with effect from 1st December
              2013. The institution is presently functioning as Madan Mohan
              Malaviya University of Technology since December 1, 2013.{" "}
            </p>
            <p>
              {" "}
              Presently department of Computer Science, Electronics &
              Communication Engineering, Civil Engineering, Mechanical
              Engineering, and Electrical Engineering has been accredited by
              NBA. This University has been ranked 15th among top Engineering
              Institute/Universities (2019) by India Today, 6th in Engineering
              Institute/University in India in Times Engineering Institute 2018,
              44th by HackerRank Community, and 16th in PG & Research (2018) by
              India Today Magazine.{" "}
            </p>
            <p>
              This University has signed many MOUs with National and
              International Universities for collaborative research and
              development. The International Universities are The Clouds
              Laboratory, University of Melbourne, Australia, Central Michigan
              University Board of Trustees, Michigan, USA, North Dakota State
              University, USA, University of Wisconsin, Green Bay, USA, Warsaw
              Management University, Poland, Universidad Carlos III DE Madrid,
              Spain, Faculty of Engineering, University of Ryukyus, Japan and
              ENEA, Italy.
            </p>
            <p>
              {" "}
              MMMUT is also part of the Technical Education Quality Improvement
              Program (TEQIP) of the Government of India assisted by the World
              Bank and also a center for the Ph.D. degree under the Quality
              Improvement Program (QIP) of the Government of India.
            </p>
            <p>
              I feel great pleasure in informing that during previous years the
              companies like M/s Tata Consultancy Services (TCS), Wipro
              Technologies, HCL, Cognizant, Idea Cellular (P) Ltd., Vodafone,
              Indian Army, Adobe, Coforge Technologies, Amazon, Mahindra
              Comviva, Software AG, Snapdeal, DLT Labs, Jaro Group, Future
              Generali, Lava International Ltd, Ericsson Global, Nagarro,
              Juspay, Humming Wave, Prism Jhonson, Escorts, JK cement, Berger
              Paint have visited this University and recruited students from our
              campus.
            </p>
            <p>
              It is also a matter of pride that our students have been
              consistently securing high scores in GATE/CAT/GRE/GMAT for
              admission to various Master’s Programs in reputed institutes in
              India and abroad and also in other national-level competitive
              examinations.
            </p>
            <p>
              It is worthwhile to mention here that from 1966 till date more
              than 15,000+ engineers who had been excelling in various
              industries and acquired leadership and top executive positions
              including Fortune 500 organizations.
            </p>
            <p>
              I shall be extremely thankful if you kindly accede to our request
              of interaction with our students for their placement/internship
              and developing a long-term relationship with this University. You
              can contact the undersigned for any of the information in this
              regard. University will feel immense pleasure in hosting you on
              the lush green campus of Madan Mohan Malaviya University of
              Technology, Gorakhpur.
            </p>
            <p>
              In case of any queries, feel free to contact the undersigned at
              (9953001761/8765783675) or Dr. Rajan Mishra, Vice Chairman
              (Internship) and Coordinator, (Mobile No: 09235500560). Looking
              forward to your kind response.{" "}
            </p>
            <span>
              <b>Thanks & Regards,</b>{" "}
            </span>
            <br />{" "}
            <span>
              <b>
                {" "}
                Prof. V.K. Dwivedi <br />
                Professor, T&P <br /> MMMUT, Gorakhpur
              </b>
            </span>
          </div>

          <div
            style={{ marginTop: "2rem", marginBottom: "2rem", width: "90%" }}
            className="text-center mx-auto"
          >
            <Logos />
          </div>

          <div className="btns-invitation">
            <div className="btn-invitation">
              <button className="mail-button">
                <Link to="/graduates">
                  <strong>Current Intake</strong>
                </Link>
              </button>
            </div>
            <div className="btn-invitation">
              <button className="downloadBrochure-button">
                <i className="fa fa-download" aria-hidden="true">
                  {" "}
                </i>
                <span>
                  {" "}
                  &nbsp;{" "}
                  <a
                    href="https://res.cloudinary.com/dirfs5ho3/image/upload/v1687067609/Placement_Brochure_2023-24_compressed_chflps.pdf"
                    target="_"
                  >
                    <strong>Placement Brochure</strong>
                  </a>
                </span>
              </button>
            </div>
            <div className="btn-invitation">
              <button className="mail-button">
                <a href="mailto:tnp@mmmut.ac.in">
                  <strong>Mail To: tnp@mmmut.ac.in</strong>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvitationTextTPO;
