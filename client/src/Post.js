import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {
const capitalisedAuthor = author.username[0].toUpperCase() + author.username.slice(1)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    
      <div className="post">

        <div className="postWrapper">
          <div className="imageContainer">
              <Link to={`/post/${_id}`}>
                <img src={cover} alt="cover image"/>
              </Link>
          </div>

          <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          
            <div className="authorInfo">
              <span className="author">{capitalisedAuthor}</span>
              <time>{(new Date(createdAt)).toLocaleDateString("en-GB", options)}</time>
            </div>
            <p className="summary">{summary}</p>
            </Link>
          </div>
        
        </div>

      </div>
    
    
  );
}
