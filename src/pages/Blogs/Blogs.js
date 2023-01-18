import Axios from "axios";
import "./blog.css";

export default function App() {
  const download = (e) => {
    e.preventDefault()
    Axios({
      url: "",
      method: "GET",
      responseType: "blob"
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="blog">
      <div className="viewer"><button onClick={(e) => download(e)}>Download</button></div>
    </div>
  );
}