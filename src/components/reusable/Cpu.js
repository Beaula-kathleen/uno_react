function Cpu(props) {
  return (
    <>
      <div className="gameArea">
        {!props.turn && (
          <span
            style={{
              backgroundColor: "lavender",
              fontSize: "xx-large",
              marginRight: "20px",
            }}
          >
            👉
          </span>
        )}
        {props.cpu.map((product, index) => {
          return (
            <div
              className="cards"
              key={index}
              id={index}
              style={{ backgroundColor: "black" }}
            >
              UNO
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cpu;
