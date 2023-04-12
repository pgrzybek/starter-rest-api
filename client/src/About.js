export default function About(){
    return(
        <section id="about" className="main style2">
        <div className="content box">
            <header>
                <h2 id="aboutHeading">Carmina Bernhardt</h2>
            </header>

            <div className="vidWrapperWrapper">
                <div className="vidWrapper">
                    <iframe id="aboutMeVideo" src="https://www.youtube-nocookie.com/embed/2fE7YvzTjKQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>


            {/* <!-- <video autoplay controls muted loop id="aboutMeVideo">
                <source src="images/siteVid.mp4" type="video/mp4">
            </video> --> */}

            <h3>Awards</h3>
            <img src="http://placekitten.com/100/150" alt="Meisner" />
            <img src="http://placekitten.com/100/150" alt="Meisner" />
            <img src="http://placekitten.com/100/150" alt="Meisner" />
            
        </div>
    </section>
    )
}