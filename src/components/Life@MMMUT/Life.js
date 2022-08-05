import Navbar from "../Navbar/Navbar";
import Footer from "../utils/Footer";

import "../../style/Life.css";

import { motion, useScroll } from "framer-motion";

import EDB from "./images@header/EDB.png";

const LifeAtMMMUT = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="pages_life">
        <Navbar />
      </div>

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div className="container-fluid mx-auto">
        <div className="content1">
          <div className="about ms-2 ms-md-5 ms-lg-5">Student Activities</div>
          <div className="border-bottom ms-2 ms-md-5 ms-lg-5 mb-2"></div>
          <p className="ms-2 ms-md-5 ms-lg-5 s-about">
            The students of MMMUT are brilliant in extracurricular, sports and
            leadership roles, in addition to a strenuous academic schedule.
            Students show intense time-management, intra-personal, interpersonal
            as well as managerial and leadership skills as they take up
            versatile roles, such as managing the student body, organizing
            festivals, competing in prestigious national and international
            competitions and taking up social initiatives through various
            societies & cells.
          </p>
        </div>

        {/* IEEE */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          IEEE Student Branch
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="society">
            <img
              className="s-img"
              src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/ieee_pdzxku.png"
              alt="Society Logo"
            ></img>

            <div className="s-about">
              The Institute of Electrical and Electronics Engineers is the
              world's largest technical professional organization. It's student
              branch IEEE SB MMMUT conducts numerous technical workshops,
              personality development workshops, free UXD skill development
              classes, and of course the annual Tech-Fest of our college,
              'TECHSRIJAN'.
            </div>
          </div>
        </motion.div>

        {/* SAE */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          SAE Collegiate Club
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768112/life%20logo/SAE_jhdvog.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              Society of Automotive Engineers MMMUT Chapter is the student
              branch of SAE India. It is dedicated to the cause of science and
              technology in the automotive field as well as the ventures to
              promote extensive engineering and fabrication of various
              innovative solutions for the automotive industry.
            </div>
          </div>
        </motion.div>

        {/* Cultural */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">Cultural Synod</div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/Cultural_bt7efz.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              Cultural Synod is the cultural society of MMMUT which conducts all
              cultural events of our College. The annual cultural fest named
              "Abhyudaya" is conducted by Cultural Synod in accordance with The
              Editorial Board.
            </div>
          </div>
        </motion.div>

        {/* EDb */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          The Editorial Board
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <div className="society">
            <div>
              <img className="s-img" src={EDB} alt="Society Logo"></img>
            </div>
            <div className="s-about">
              The Editorial Board is the official publishing body of the
              University and literary Sub-Council and it is also one of the
              earliest established boards of the University. It primarily
              focuses on conducting literary events and and strives throughout
              the year to conduct events that helps in grooming one's skills at
              literary level.
            </div>
          </div>
        </motion.div>

        {/* Sports */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          Sports Sub Council
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768112/life%20logo/SSC_zg8y4d.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              The Sports Sub Council is the sports society of our college which
              conducts all sports related events of our college. The events
              include inter-branch and inter-year sports events. AAYAAS is the
              Anuual Sports Meet of the college in which several atheletics
              competitions are held.
            </div>
          </div>
        </motion.div>

        {/* RC */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">Robotics Club</div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768112/life%20logo/RC_sjhd6m.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              Robotics Club provides an opportunity for students to supplement
              their education with hands-on experience in integration
              engineering. For the past 12 years robotics club engage its
              students with active participation in various workshops, contests
              and tutorials to develop their interest in Robotics.
            </div>
          </div>
        </motion.div>

        {/* NSS */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          National Service Scheme
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/NSS_todunu.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              The National Service Scheme (NSS) is a Central Sector Scheme of
              Government of India, Ministry of Youth Affairs & Sports. It
              provides opportunity to the student youth of 11th & 12th Class of
              schools at +2 Board level and student youth of Technical
              Institution.
            </div>
          </div>
        </motion.div>

        {/* NCC */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          National Cadet Corps
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/NCC_cwnxak.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              The National Cadet Corps (NCC) is the youth wing of the Indian
              Armed Forces with its headquarters in New Delhi, India. It is open
              to school and college students on voluntary basis as a
              Tri-Services Organisation, comprising the Army, the Navy and the
              Air Wing, engaged in developing the youth of the country into
              disciplined and patriotic citizens.
            </div>
          </div>
        </motion.div>

        {/* SEB */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          Social Engineer's Board
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768112/life%20logo/SEB_bkrfha.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              With the motto of grooming personalities, the board aims at not
              only refining the enginering graduates academically, but
              holistically. It believes in the collective responsibility of the
              student fraternity towards betterment of society and thus
              constantly works in the direction of achieving this cause.
            </div>
          </div>
        </motion.div>

        {/* E-Cell */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">E-Cell</div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="society">
            <img
              className="s-img"
              src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/ECell_o17jw0.png"
              alt="Society Logo"
            ></img>

            <div className="s-about">
              Established in 2014, the Entrepreneurship and Development Cell
              aims at fostering talent, entrepreneurial spirit of students. To
              accomplish this periodically, guest lectures, expert talks and
              workshops are frequently organized by the cell. E-Cell also
              organizes Freshers's Talk every year to interact with freshmen.
            </div>
          </div>
        </motion.div>

        {/* UIC */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          University Innovation Cell
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/UIC_jwca0d.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              University Innovation Cell provides platform for students to learn
              something innovative, to have a new outlook and to solve real
              world challenges to create a new outlook to create a
              technologically developed and healthy world. INNOWIZION, a
              national level PPT presentation event, is organized by UIC every
              year to spark creativity among students.
            </div>
          </div>
        </motion.div>

        {/* IICHE */}
        <div className="about-society ms-2 ms-md-5 ms-lg-5">
          IICHE Student Branch
        </div>
        <div className="border-bottom ms-2 ms-md-5 ms-lg-5"></div>
        <motion.div
          className="content1 ms-2 ms-md-5 ms-lg-5"
          initial={{ opacity: 0, translateX: -40 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <div className="society">
            <div>
              <img
                className="s-img"
                src="https://res.cloudinary.com/vaish1101/image/upload/v1658768111/life%20logo/IICHE_pftjru.png"
                alt="Society Logo"
              ></img>
            </div>
            <div className="s-about">
              Armed with vision plus boundless energy and gaining credibility by
              the day, giant strides were made and the young society grew
              rapidly in quality and recognition. IIChE, MMMUT started its
              momentous journey with a handful of extremely dedicated students
              under the guidance of its eminent professors.
            </div>
          </div>
        </motion.div>
      </div>
      <div className="mb-2"></div>
      <Footer />
    </>
  );
};

export default LifeAtMMMUT;
