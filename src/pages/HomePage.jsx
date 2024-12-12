import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

export const Post = ({ title, text, id }) => {
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
          padding: "50px",
        }}
      >
        <h1>{title}</h1>
        <p>{text.slice(0, 100)}...</p>
        <Link to={`/post/${id}`} style={{ color: "lightblue", marginTop: "20px" }}>
          Читать подробнее
        </Link>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button>Like</button>
          <button>Dislike</button>
        </div>
      </div>
    );
  };
  
  


const posts = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores tenetur sint optio eos voluptatum quod nobis, itaque in ut commodi fugit? Dolor autem maxime laboriosam quisquam nobis maiores dicta unde.",
      title: "Post 1",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores tenetur sint optio eos voluptatum quod nobis, itaque in ut commodi fugit? Dolor autem maxime laboriosam quisquam nobis maiores dicta unde.",
      title: "Post 2",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores tenetur sint optio eos voluptatum quod nobis, itaque in ut commodi fugit? Dolor autem maxime laboriosam quisquam nobis maiores dicta unde.",
      title: "Post 3",
    },
  ];

  const HomePage = () => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    const img = user ? user.img : "";

    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div>
        <img src={img} alt="" style={{
          width:"150px",
          height:"150px",
          borderRadius:"100%"
        }}/>
        <h1>{user.username}</h1>

        </div>
        {posts.map((post) => (
      
          <Post key={post.id} id={post.id} title={post.title} text={post.content} />

          
        ))}
      </div>
    );
  };

export default HomePage;
