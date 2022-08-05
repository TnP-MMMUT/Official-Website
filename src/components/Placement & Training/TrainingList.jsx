import "../../style/placement_training.css";

function TrainingList() {
  return (
    <>
      <div className="ms-0 ms-lg-5">
        <div className="vision">Training Activities Past 5 Years</div>
        <div className="border-bottom mb-2"></div>
        <ul className="items-training">
          <li className="item-training">
            <a href="http://www.mmmut.ac.in/Pdf/Activities2022-23.pdf">
              Training Activities 2021 - 2022
            </a>
          </li>
          <li className="item-training">
            <a href="http://www.mmmut.ac.in/Pdf/Activities2020-21.pdf">
              Training Activities 2020 - 2021
            </a>
          </li>
          <li className="item-training">
            <a href="http://www.mmmut.ac.in/Pdf/Activities2019-20.pdf">
              Training Activities 2019 - 2020
            </a>
          </li>
          <li className="item-training">
            <a href="http://www.mmmut.ac.in/Pdf/Activities2018-19.pdf">
              Training Activities 2018 - 2019
            </a>
          </li>
          <li className="item-training">
            <a href="http://www.mmmut.ac.in/Pdf/Activities2017-18.pdf">
              Training Activities 2017 - 2018
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TrainingList;
