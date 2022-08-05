import Navsm from "../Navbar/Navsm";
import Footer from "../utils/Footer";
import Map from "../utils/Map";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MapLink = "https://bit.ly/3b3DlkZ";

const About = () => {
  const { scrollYProgress } = useScroll();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    } else {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView, animation]);

  return (
    <>
      <Navsm />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <div className="container-fluid">
        <div className="about ms-md-4 ms-lg-5">About MMMUT</div>
        <div className="border-bottom ms-md-4 ms-lg-5"></div>

        <div className="text1 ms-md-4 ms-lg-5 mb-3">
          <b>Madan Mohan Malaviya University of Technology, Gorakhpur</b> has
          been established in year 2013 by the Government of Uttar Pradesh in
          the form of a non-affiliating, teaching and research University after
          reconstituting the{" "}
          <b>Madan Mohan Malaviya Engineering College, Gorakhpur</b> which was
          established in <b>1962</b>.
          <br />
          Fifty-Four batches of students have entered its portals to emerge
          after four years of rigorous education under the tutelage of some of
          the most venerable teachers, engineers ready to face the world and
          create new worlds. The University is located in the Gorakhpur-Deoria
          road about 9 Km away from Gorakhpur Railway Station. In addition to UG
          in Civil Engineering, Chemical Engineering, Computer Science &
          Engineering, Mechanical Engineering, Electrical Engineering and
          Electronics & Communication Engineering, Information Technology,
          University also offers MCA, BBA, MBA, M.Tech, M.Sc. and Ph.D. courses
          in various specializations.
        </div>

        <div className="vision ms-md-4 ms-lg-5">Vision</div>
        <div className="border-bottom ms-md-4 ms-lg-5"></div>
        <motion.div className="text2 ms-md-4 ms-lg-5">
          <p>
            To facilitate and promote studies, research, technology incubation,
            product innovation and extension work in Science, Technology and
            Management Education, and also to achieve excellence in higher
            technical education.
          </p>
        </motion.div>

        <div className="mission ms-md-4 ms-lg-5">Mission</div>
        <div className="border-bottom ms-md-4 ms-lg-5"></div>
        <div className="text3 ms-md-4 ms-lg-5">
          <p>
            The distinctive mission of the University is:
            <br />
            <ul>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                To serve society as a center of higher learning, providing
                long-term societal benefits through transmitting advanced
                knowledge, discovering new knowledge and functioning as an
                active working repository of organized knowledge.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                To take leadership role by providing need-based programs in
                engineering and technology, applied sciences, management,
                humanities, architecture, pharmacy, retail and fashion design,
                mass-communication, agriculture and other employable courses in
                emerging areas.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                To promote compassionate care of the highest quality that
                translates new knowledge into meaningful improvements in
                technological outcomes through interdisciplinary collaboration,
                fiscal responsibility, support of diversity, a focus on quality
                and a culture of professionalism.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 0.8 }}
              >
                To establish value creating networks and foster relationship
                with other leading institutes of higher learning and research,
                alumni and industries in order to provide significant
                contribution to national and international development.
              </motion.li>
              <br />
              <motion.li
                initial={{ opacity: 0, translateX: -40 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2, delay: 1 }}
              >
                To create an intellectually stimulating Infrastructure and
                conducive environment for technology research, scholarship,
                creativity, innovation, entrepreneurship, and professional
                activity for service to community and economy.
              </motion.li>
            </ul>
          </p>
        </div>

        <div className="loc ms-md-4 ms-lg-5">Location & Campus</div>
        <div className="border-bottom ms-md-4 ms-lg-5"></div>
        <motion.div className="text4 ms-md-4 ms-lg-5">
          <p>
            The University has a lush green campus that spreads over a vast area
            of 354 acres. As you enter its gate, the first sight that greets you
            is the colour green. Malaviya's wooded acreages, a mere seven
            kilometres away from the holy city of Gorakhpur, provide the perfect
            element for the perfect engineer. The University is located on
            Gorakhpur-Deoria road, about 9 kilometres from Gorakhpur Railway
            Station as well as from main Gorakhpur Roadways bus-station.
          </p>
        </motion.div>

        <Map />

        <div className="campus ms-md-4 ms-lg-5">Campus Tour Video</div>
        <div className="border-bottom ms-md-4 ms-lg-5 mb-3"></div>

        <div ref={ref}>
          <motion.div class="video" animate={animation}>
            <iframe
              class="center-video"
              width="560"
              height="315"
              src=" https://www.youtube.com/embed/SpMVPPIl8x0"
              title="YouTube video player"
              frameBorder="0"
              allowfullscreen
            ></iframe>
          </motion.div>
        </div>
        <div className="text6 mt-2">Campus Tour, MMMUT, Gorakhpur</div>
      </div>
      <Footer />
    </>
  );
};

export default About;
