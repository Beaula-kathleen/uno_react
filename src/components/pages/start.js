import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Start() {
  const navigation = useNavigate();
  const [userName, setUserName] = useState("");

  return (
    <div className="startArea">
      <div className="gameDetails">
        <input
          type={"text"}
          className="userName"
          onChange={(event) => setUserName(event.target.value.trim())}
        ></input>
        <div>
          <button
            className="startButton"
            onClick={() => {
              if (userName.length > 0) {
                navigation(`/game?player=${userName}`);
              }
            }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Start;
