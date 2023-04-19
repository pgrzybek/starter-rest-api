import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Editor from "../Editor";
import Popup from "../Popup";
import { Link } from "react-router-dom";

export default function EditPost() {
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect,setRedirect] = useState(false);
  const [remove, setRemove] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const navigate = useNavigate();
  

  useEffect(() => {
    fetch('http://localhost:4000/post/'+id)
      .then(response => {
        response.json().then(postInfo => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);


function rejectDelete(){
    //close popup
    setTrigger(false)
}

  async function deletePost(ev){
    // ensure auth

    ev.preventDefault();
    setTrigger(false) //close popup
    const data = new FormData();
    data.set('id', id);
    
    const response = await fetch(`http://localhost:4000/post/${id}`, {
      method: 'DELETE',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {

      navigate('/posts');
    }
  }

  async function updatePost(ev){
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (files?.[0]) {
      data.set('file', files?.[0]);
    }
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      navigate('/post/'+id);
    }
  }



  return (
    <>
    <div className="formWrapper">
      <form className="editPost" onSubmit={updatePost}>
      <Link className="back" to={`/posts`}>Back to posts</Link>
        <input type="title"
              className="title"
              placeholder={'Title'}
              value={title}
              onChange={ev => setTitle(ev.target.value)} />
        <textarea type="summary"
              className="summary"
              placeholder={'Summary'}
              value={summary}
              onChange={ev => setSummary(ev.target.value)} />
        <input type="file"
              className="file"
              onChange={ev => setFiles(ev.target.files)} />
        <Editor className="editor" 
                onChange={setContent} 
                value={content} />

        <div className="updateButton">
          <button className="submit" style={{marginTop:'5px'}}>Update post</button>
        </div>
        
        
      </form>
      {/*open popup */}
      <div className="deleteButton">
        <button className="submit danger" onClick={()=> setTrigger(true)} style={{marginTop:'5px'}}>Delete post</button>
      </div>
      

    </div>
      <Popup trigger={trigger} 
      handleConfirm= {deletePost}
      handleReject ={rejectDelete}
      ></Popup>
    </>

  );
}