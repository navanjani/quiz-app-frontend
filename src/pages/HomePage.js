import React, { useState, useRef, useEffect } from "react";
import { LuckyWheel } from "@lucky-canvas/react";
import { useDispatch, useSelector } from "react-redux";
import { categorySelected } from "../store/questionsPage/QuestionSlice";
import { CATEGORY } from "../config/constants";
import { Link } from "react-router-dom";
import { selectCategoryArr } from "../store/questionsPage/questionSelectors";
import { fetchCategoryArr } from "../store/questionsPage/QuestionActions";

const HomePage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();
  const categoryList = useSelector(selectCategoryArr);

  useEffect(() => {
    dispatch(fetchCategoryArr());
  }, [dispatch]);

  const [blocks] = useState([{ padding: "10px", background: "#869cfa" }]);

  const [prizes] = useState([
    { background: "#e9e8fe", fonts: [{ text: CATEGORY[0] }] },
    { background: "#b8c5f2", fonts: [{ text: CATEGORY[1] }] },
    { background: "#e9e8fe", fonts: [{ text: CATEGORY[2] }] },
    { background: "#b8c5f2", fonts: [{ text: CATEGORY[3] }] },
  ]);

  const [buttons] = useState([
    { radius: "40%", background: "#617df2" },
    { radius: "35%", background: "#afc8ff" },
    {
      radius: "30%",
      background: "#869cfa",
      pointer: true,
      fonts: [{ text: "Start", top: "-10px" }],
    },
  ]);

  const myLucky = useRef();
  return (
    <div align={"center"}>
      <h2>Random start from a category: </h2>
      {categoryList.length > 1 ? (
        <LuckyWheel
          ref={myLucky}
          width="300px"
          height="300px"
          blocks={blocks}
          prizes={prizes}
          buttons={buttons}
          onStart={() => {
            // 点击抽奖按钮会触发star回调
            myLucky.current.play();
            setTimeout(() => {
              const index = (Math.random() * 4) >> 0;
              myLucky.current.stop(index);
            }, 2000);
          }}
          onEnd={(prize) => {
            // 抽奖结束会触发end回调
            console.log(categoryList);
            const category = prize.fonts[0].text;
            setSelectedId(categoryList.indexOf(category) + 1);
            dispatch(categorySelected(category));
          }}
        />
      ) : (
        <div>Something wrong!</div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          margin: 30,
          backgroundColor: "aliceblue",
        }}
      >
        <div>Categories: </div> <div>Food</div>
        <div>Sports</div> <div>Science</div> <div>Places</div>
      </div>

      <div>
        {selectedId !== 0 ? (
          <h4>your choice is :{CATEGORY[selectedId - 1]} </h4>
        ) : null}
      </div>

      {/*  <div>
        <Link to={`/questions/${selectedId}`} style={{ textAlign: "center" }}>
          <button>Start Question!</button>
        </Link>
      </div>
*/}
      <div>
        <Link to={`/questions/${selectedId}`} style={{ textAlign: "center" }}>
          <button>Start Question!</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
