



import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageSquare     } from 'lucide-react';
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import "./contactUs.css";

const TwitterXIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className} 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);
export default function contact() {
  return (
    <main className="mainContainer">
      <div className="firstContainer">
        <div className="insideFirstContainer">
          <p className="firstPara">Get in Touch with Us Today </p>
          <h1 className="firstHeader">Together, <span className="text-blue-900">We Can</span> Change Lives!</h1>
        </div>
        <div className="insideFirstContainer2">
          <div className="roundedFullContainer">
            <div className="roundedFullInnerContainer">
              <div className="roundedFullInnermostContainer">
              <div className="innerCircleContainer">
              <div className="greenCircleContainer">
              <div className="greenCircle">
                <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
              </div>
            </div>
            </div>
            
            </div>
            
            </div>
          <div className="indicatorDot">
            <span className="textIcon">📖</span>
          </div>
          
          <div className="indicatorDotOrange">
            <span className="textIcon">👤</span>
          </div>
          
          <div className="indicatorDotPurple">
            <span className="textIcon">👑</span>
          </div>
          <div className="floatingPill">
          <span className="shakeIcon">🤝</span>
          <span className="labelStyle">Reach EDHF</span>
        </div>
        </div>
        </div>
      </div>
    <div className="secondContainer">
        <div className="containerSplit">
          <div className="contentBox">
            <p className="headingStyle">Get In Touch</p>
            <h1 className="secondHeading">You &apos;re Not Alone. We &apos; re Here to Help</h1>
          </div>
          <div className="contentBox2">
            <div className="contentArea">
              <div className="insideContentArea">
                <div className="contentItem">
                  <Mail />
                </div>
                <div className="contentText">
                  <h1>EMAIL US</h1>
                  <p>infoedhf@gmail.com</p>
                </div>
              </div>
              <div className="insideContentArea">
                <div className="contentItem">
                  <Phone />
                </div>
                <div className="contentText">
                  <h1>CALL US</h1>
                  <p>+234 703 395 9010</p>
                </div>
              </div>
              <div className="insideContentArea">
                <div className="contentItem">
                  <MapPin />
                </div>
                <div className="contentText">
                  <h1>HEADQUARTERS</h1>
                  <p>36, Babatunde Street, Olodi-</p>
                  <p>Apapa, Lagos. Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="socialContainer">
            <p className="follow">Follow our social media platform</p>
            <div className="socialIcons">
              <div className="socialCircle"><Facebook /></div>
              <div className="socialCircle"><Instagram  /></div>
              <div className="socialCircle">
                <TwitterXIcon className="iconSize" />
              </div>
              <div className="socialCircle"><Youtube /></div>
            </div>
          </div>
        </div>
        <div className="halfContainerForm">
          <div className="formBox"></div>
          <div className="formHeader">
            <h1 className="message">Send us a message</h1>
          </div>
          <div className="firstInputRow">
            <input type="text" className="inputRow" placeholder="First Name"/>
            <input type="text" className="inputRow" placeholder="Last Name" />
          </div>
          <div className="firstInputRow">
            <input type="text" className="inputRow" placeholder="Enter email address" />
            <input type="text" className="inputRow" placeholder="Subject" />
          </div>
          <div className="textAreaContainer">
            <textarea className="largeBox" placeholder="message"></textarea>
          </div>
          <button className="btn">Submit</button>
        </div>
      </div>
      <div className="bannerContainer">
        <div className='thinBar'>
          <h1 className="bannerContent">Find Us Where Help Begins</h1>
        </div>
      </div>
      <div className="mapContainer">
        <div className="insideMapContainer">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6013371104773!2d3.3357324000000066!3d6.445203600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b897dd0e72865%3A0xd070136c92034b3!2s36%20Babatunde%20St%2C%20Apapa%2C%20Lagos%20102103%2C%20Lagos!5e0!3m2!1sen!2sng!4v1769875575463!5m2!1sen!2sng" 
          className="mapContent" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </main>
  );
}
