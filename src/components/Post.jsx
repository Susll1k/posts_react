export const Post = ({ title, text, ...props }) => {
    return (
      <div
        style={{
          background: "rgb(42, 67, 68)",
          color: "#fff",
          width: "400px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px",
          padding: "50px"
        }}
        {...props}
      >
        <h1>{title}</h1>
        <p>{text}</p>
        <div style={{
          display: "flex",
          gap: "10px"
        }}>
          <button>Like</button><button>Dislike</button>
        </div>
      </div>
    );
  };


