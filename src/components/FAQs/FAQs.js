import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";

import "./FAQs.css";
import "../FAQs/FAQs.js";

import { motion, useAnimation, useScroll } from "framer-motion";

const FAQs = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="container-sm">
        <div className="about ms-2">FAQs</div>
        <div className="border-bottom ms-2"></div>

        <div className="row">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How to reach MMMUT, Gorakhpur?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The institute is a 20 minute drive from the airport and
                  prepaid taxis can be availed of directly at the airport.
                  Depending on the available transport resources the Placement
                  Cell has at hand, and provided the visiting company intimates
                  the Cell full schedule of it's arrival and stay on the campus,
                  transport could be provided to the delegates from the company.
                  Also, local transport facilities are always available in case
                  of any inconvenience. Moreover, any of the Training and
                  Placement Cell member will always be there to pick up the
                  company officials and drop at their desired destination.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Where will we be accommodated in an on-campus drive?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  You'll be given accommodation subject to availability in
                  University Guest House or well rated hotels of Gorakhpur along
                  with conveyance facilities.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the Placement Procedure at MMMUT, Gorakhpur?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Placement Procedure briefly begins with interested recruiters
                  mailing us JD at our official email id tnp@mmmut.ac.in which
                  is then shared among students and then the data of interested
                  students is shared with the company. Then the recruiters can
                  discuss with us appropriate dates for the drive and members
                  coordinate accordingly. After successful completion of drive,
                  selected candidates are given their offer letters.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What is the average package offered?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The average package of the University has raised exponentially
                  in the recent years. Beginning from 3.3 LPA in 2016-17, the
                  average package has grown upto 7 LPA in the year 2022.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  When does the placement session begin and end?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The placement session usually commence in the month of July
                  and ends next year in the month of June-July.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  What are the infrastructural facilities available on the
                  campus for the placement process?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The infrastructural facilities majorly includes 7 seminar
                  halls with a capacity of 120 students each fully functional
                  with projector and mic systems. Four general computing labs
                  having 240 nos. computers (UG-160 & PG-90) namely (Computing
                  Lab 1, 2, 3, 4 and PG Lab 1 & 2 with a Seminar Hall of 180
                  seating. We have 4 interview rooms in Training and Placement
                  Cell for interview purpose and a conference hall with a
                  seating capacity of 60 and 3 Lecture Hall Complexes for smooth
                  conduction of written rounds.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  Can a company interview the students already placed in other
                  company?
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The eligibility of a students depends on the brackets
                  including: • Up to 6 LPA • 6 LPA - 10 LPA • Above 10 LPA If a
                  student is placed in any of the brackets, he/she would be
                  allowed to appear only for the companies whose package lies in
                  the bracket higher than in which he/she has been placed.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingEight">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  Is there any fee associated with the process?
                </button>
              </h2>
              <div
                id="collapseEight"
                className="accordion-collapse collapse"
                aria-labelledby="headingEight"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  There is no fees associated before or after the placement
                  process. Also, we avert those companies which charge any
                  amount adhering to the training after the placement final
                  offer
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingNine">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  From which courses students are available for recruitment,
                  this year?
                </button>
              </h2>
              <div
                id="collapseNine"
                className="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The different courses available in the University are: •
                  B.Tech. • BBA • B.Pharma. • M.Tech. • MBA • MCA • M.Sc.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTen">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  Are students of MMMUT, Gorakhpur allowed for a Semester Long
                  Internship/ FTE in their 8th semester?
                </button>
              </h2>
              <div
                id="collapseTen"
                className="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Yes, the students of MMMUT, Gorakhpur are allowed for a
                  Semester Long Internship/ FTE in their 8th semester which
                  tentatively starts from mid of January but they must be
                  available in offline mode for all examinations. They can go
                  for work from home or office mode in full-time Internship so
                  there are no any restrictions for that.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
