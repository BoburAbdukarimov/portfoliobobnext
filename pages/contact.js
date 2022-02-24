import Head from "next/head";
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CodeIcon from '@mui/icons-material/Code';

function Contact() {
    return(
        <div className="contactt">
            <section className="contact">
    <h1 className="section-header">Contact</h1>
    <div className="contact-wrapper">
    <form action="https://formsubmit.co/18f0a686daeb6f3317edab9f0184737" method="POST" id="contact-form" className="form-horizontal" role="form">
        <div className="form-group">
            <div className="col-sm-12">
            <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required/>
            </div>
        </div>
        <div clasName="form-group">
            <div className="col-sm-12">
            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required/>
            </div>
        </div>
        <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>        
        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
            <div className="alt-send-button">
            <ForwardToInboxIcon/><span className="send-text">SEND</span>
            </div>        
        </button>
        <div className="field" data-netlify-recaptcha="true">
        </div>
    </form>
        <div className="direct-contact-container">
        <ul className="contact-list">
            <li className="list-item"><AddLocationIcon/><span className="contact-text place">City, State</span></li>            
            <li className="list-item"><LocalPhoneIcon/><span className="contact-text phone"><a href="#" title="Give me a call">(212) 555-2368</a></span></li>           
            <li className="list-item"><MarkEmailReadIcon/><span className="contact-text gmail"><a href="#" title="Send me an email">hitmeup@gmail.com</a></span></li>           
        </ul>

        <hr/>
        <ul className="social-media-list">
            <li><a href="#" target="_blank" className="contact-icon">
            <GitHubIcon/>
            </a>
            </li>
            <li><a href="#" target="_blank" className="contact-icon">
            <TelegramIcon/></a>
            </li>
            <li><a href="#" target="_blank" className="contact-icon">
            <InstagramIcon/></a>
            </li>
            <li><a href="#" target="_blank" className="contact-icon">
            <CodeIcon/></a>
            </li>       
        </ul>
        <hr/>
        <div className="copyright"> ALL OF THE RIGHTS RESERVED</div>
        </div>
    </div>
</section>  
        </div>
    )
}
export default Contact;