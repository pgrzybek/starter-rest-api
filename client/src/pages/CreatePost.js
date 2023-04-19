import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/posts'} />
  }
  return (
    <div className="formWrapper">
      <form className="createPost" onSubmit={createNewPost}>
        <input type="title"
              className="title"
              placeholder={'Title'}
              value={title}
              onChange={ev => setTitle(ev.target.value)} />
        <input type="summary"
              className="summary"
              placeholder={'Summary'}
              value={summary}
              onChange={ev => setSummary(ev.target.value)} />
        <input type="file"
              className="file"
              onChange={ev => setFiles(ev.target.files)} />
        <Editor className="editor" 
                value={content} 
                onChange={setContent} />
        <button className="submit" style={{marginTop:'5px'}}>Create post</button>
      </form>
    </div>

  );
}