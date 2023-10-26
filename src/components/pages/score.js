import { useNavigate, useLocation } from "react-router-dom";
function Score() {
  const query = new URLSearchParams(useLocation().search);
  const won = query.get("won");
  const navigate = useNavigate();
  const scoreBoard = () => {
    if (won === "Draw") return <> Time Out!</>;
    else if (won === "cpu") {
      return (
        <>
          <div style={{ color: "green" }}>Cpu Won</div>
          <div style={{ color: "red" }}>Player Loose</div>
        </>
      );
    } else {
      return (
        <>
          <div style={{ color: "green" }}>{won} Won</div>
          <div style={{ color: "red" }}>Cpu Loose</div>
        </>
      );
    }
  };
  return (
    <div className="scoreArea">
      <div className="scoreBoard">
        <h1 className="scoreBoard">{scoreBoard()}</h1>
        <button
          className="restartButton"
          onClick={() => {
            navigate("/");
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default Score;
