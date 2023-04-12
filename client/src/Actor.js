import { motion, spring, Variants } from "framer-motion"
export default function Actor(props){

    // const {  bool, contentAnimate } = props;
    // console.log(`actor.js bool ${bool}`)
    // console.log(`actor.js contentAnimate: ${contentAnimate}`);
    // console.log(`actor.js contentAnimateStr: ${JSON.stringify(contentAnimate)}`);


    const contentAnimate={
        offscreen:{x:10000, opacity:0}, //initial
        onscreen:{ //animated
        x:0, 
        opacity:1,
        // rotate:[0,10,0,10,0,10,0], //rotate from 0 to 10 to 0
        transition: {
            // type:"spring",
            // bounce:0.1,
            duration:1}
      }
    }


    return (
        <motion.section
        id="actor" 
        className="main style2"
        transition={{staggerChildren:0}} //passes the variants variable to the children with delay
        initial= {"offscreen"} 
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.1}} //animation takes place when 0.1 of the parent element is in view and will happen anytime this event takes place
        >
            <motion.div 
            className="content box"
            variants={contentAnimate}
            >
                    <header>
                        <h2 id="actorHeading">Actor</h2>
                    </header>

                <div className="mainContent">
                   <div className="upperContainer">
                        <img src="http://placekitten.com/200/300" alt="Meisner" />
                        <div className="textContainer">
                          <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
                        id varius justo euismod in. Curabitur egestas consectetur magna.
                            </p>
                            <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
                        id varius justo euismod in. Curabitur egestas consectetur magna.
                            </p>
                        </div>
                    </div>
                    <div className="lowerContainer">
                        <div className="textContainer">
                            <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
                        id varius justo euismod in. Curabitur egestas consectetur magna.
                            </p>
                            <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.
                        Fusce blandit ultrices sapien, in accumsan orci rhoncus eu. Sed sodales venenatis arcu,
                        id varius justo euismod in. Curabitur egestas consectetur magna.
                            </p>
                        </div>
                        <img src="http://placekitten.com/200/300" alt="Meisner" />
                    </div>

                </div>
        
            </motion.div>
    </motion.section>
    )
}