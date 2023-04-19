import {Link} from "react-router-dom";
export default function BlogCard({_id,title,summary,cover,content,createdAt,author}){
    return(
        <div className="card">
                    <figure className="card__thumb">
                        <img src={cover} alt="blog card cover image" className="card__image"/>
                        <figcaption className="card__caption">
                            <h2 className="card__title">{title}</h2>
                            <p className="card__snippet">{summary}</p>
                            <Link className="card__button"to={`/post/${_id}`}>
                            Read more
                            </Link>    
                        </figcaption>
                    </figure>
                </div>
    )
}