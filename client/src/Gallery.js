export default function Gallery(){
    return(
        // TODO change CSS background from work to gallery
        <section id="gallery" className="main style3 primary">
        <div className="content">
            <header>
                <h2 id="galleryHeading">My Craft</h2>
                <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis
                arcu, id varius justo euismod in. Curabitur egestas consectetur magna vitae.</p>
            </header>

                <div className="gallery">
                    <article className="from-left">
                        <a href="images/fulls/01.jpg" className="image fit"><img src="images/thumbs/01.jpg" title="I am an ACTOR" alt="" /></a>
                    </article>
                    <article className="from-right">
                        <a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" title="Look at me acting" alt="" /></a>
                    </article>
                    <article className="from-left">
                        <a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" title="Actionnnn" alt="" /></a>
                    </article>
                    <article className="from-right">
                        <a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" title="Coaching" alt="" /></a>
                    </article>
                    <article className="from-left">
                        <a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" title="Corporate tings init" alt="" /></a>
                    </article>
                    <article className="from-right">
                        <a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" title="Watch and learn" alt="" /></a>
                    </article>
                </div>

        </div>
    </section>
    )
}