import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	//   called when the user submits the form. It prevents the default form submission behavior, gets the form data using FormData
	const handleSubmit = (event) => {
		event.preventDefault(); // stop from changing page
		const formData = {
			name: name,
			email: email,
			message: message
		} 

		fetch('/submitContactForm', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
			  'Content-Type': 'application/json'
			}
		  })	  
		console.log(formData);
	  };

	//add calendly script and add an eventlistner to the button to trigger popup
  useEffect(() => {
    const calendlyScript = document.createElement("script");
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
    document.body.appendChild(calendlyScript);

    const calendlyButton = document.querySelector(".calendly-button");
    if (calendlyButton) {
      calendlyButton.addEventListener("click", () => {
        window.Calendly.showPopupWidget("https://calendly.com/niallmoo");
      });
    }
  }, []);

  return (
    <section id="contact" className="main style3 secondary">
      <div className="content">
        <header>
          <h2 id="contactHeading">Say Hello.</h2>
          <div className="contactInfo">
            <ul>
              <li>
                <h3>
                  <span>Email:</span>
                  <a>carminabernhardt@gmail.com</a>
                </h3>
              </li>
              <li>
                <h3>
                  <span>Twitter:</span>
                  <a>carmina</a>
                </h3>
              </li>
              <li>
                <h3>
                  <span>Instagram:</span>
                  <a>carmina</a>
                </h3>
              </li>
              <li>
                <h3>
                  <span>Facebook:</span>
                  <a>carmina</a>
                </h3>
              </li>
              <li>
                <h3>
                  <span>LinkedIn:</span>
                  <a>carmina</a>
                </h3>
              </li>
            </ul>
          </div>
        </header>

        <div className="contactFormContainer">
			{/* //there are two buttons so preventDefault and use a eventlistner on the submit button to handle the form */}
          <form method="post" action="#" onSubmit={(event) => event.preventDefault()}> 
            <div className="fields">
              <div className="field half">
                <input type="text" name="name" onChange={event=> setName(event.target.value)} placeholder="Name" />
              </div>
              <div className="field half">
                <input type="email" name="email" onChange={event=> setEmail(event.target.value)} placeholder="Email" />
              </div>
              <div className="field">
                <textarea name="message" placeholder="Message" onChange={event=> setMessage(event.target.value)} rows="6"></textarea>
              </div>
            </div>
            <ul className="actions special">
              <li>
                <input type="submit" onClick={handleSubmit} value="Send Message" />
              </li>
              <li className="divider">
                <hr></hr>
              </li>
              <li>
                <input type="button" className="calendly-button" value="Book a call" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}
