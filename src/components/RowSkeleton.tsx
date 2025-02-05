import "./RowSkeleton.css";

const RowSkeleton = () => {
  return (
    <>
      <div className="lolomoRow lolomoRow_title_card lolomoPreview">
        <div className="rowHeader">
          <span className="rowTitle">&nbsp;</span>
        </div>
        <div className="rowContent">
          <div className="slider">
            <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{ animationDelay: "0s" }}
              ></div>
            </div>
            <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{ animationDelay: ".2s" }}
              ></div>
            </div>
            <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
            <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{ animationDelay: "0.8s" }}
              ></div>
            </div>
            <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            {/* <div className="smallTitleCard loadingTitle">
              <div
                className="ratio-16x9 pulsate"
                style={{animationDelay: "1.2s"}}
              ></div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RowSkeleton;
