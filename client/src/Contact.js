import { PopupButton } from "react-calendly";

function CustomButton({ onClick }) {
	return <button onClick={onClick}>Book a call</button>;
  }

export default function Contact(){
    return(
        <section id="contact" className="main style3 secondary">

				<div className="content">
					<header>
						<h2 id="contactHeading">Say Hello.</h2>
						<ul>
							<li>
								<h3>Email: <a>carminabernhardt@gmail.com</a></h3>
							</li>
							<li>
								<h3>Instagram: <a>carmina</a></h3>
							</li>
							<li>
								<h3>Facebook: <a>carmina</a></h3>
							</li>
							<li>
								<h3>Twitter: <a>carmina</a></h3>
							</li>
							<li>
								<h3>LinkedIn: <a>carmina</a></h3>
							</li>
						</ul>
					</header>

                    <div className="box">
						<form method="post" action="#">
							<div className="fields">
								<div className="field half">
                                    <input type="text" name="name" placeholder="Name" />
                                </div>
								<div className="field half">
                                    <input type="email" name="email" placeholder="Email" />
                                </div>
								<div className="field">
                                    <textarea name="message" placeholder="Message" rows="6"></textarea>
                                </div>
							</div>
							<ul className="actions special">
								<li>
                                    <input type="submit" value="Send Message" />
                                </li>
								<li>
									<span>or</span>
								</li>
								<li>
								<PopupButton
     							   url="https://calendly.com/niallmoo"
     							   text="Book a call"
     							   component={CustomButton}
     							/>
								</li>
							</ul>
						</form>
					</div>

				</div>
		</section>
    ) 
}