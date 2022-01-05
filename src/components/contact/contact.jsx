import  "./contact.scss"

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className= "contact" id="contact">
            <div className="left">
                <img src="images/computer email.png" alt="email logo" />
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}