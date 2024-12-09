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
        <p>{text.slice(0, 100)}...</p> {/* Показываем только часть текста */}
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



const PostPage = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === parseInt(id));
  
    if (!post) {
      return <h1>Пост не найден</h1>;
    }
  
    return (
      <div
        style={{
          padding: "200px",
          background: "rgb(48, 87, 88)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link to="/" style={{ color: "blue", marginTop: "20px", display: "block" }}>
          Назад на главную
        </Link>
      </div>
    );
  };

export default PostPage;
