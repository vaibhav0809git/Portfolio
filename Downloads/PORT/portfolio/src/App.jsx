import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaHome, FaUser, FaCode, FaEnvelope, FaFileAlt, FaTwitter } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import asd from "./assets/photo.png";
import asm from "./assets/ResumeVaibhav.pdf";

export default function App() {
  const [text, setText] = useState("");
  const roles = ["Software Developer", "Java Backend Engineer", "Full Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(roles[roleIndex].slice(0, i));
      i++;
      if (i > roles[roleIndex].length) {
        clearInterval(typing);
        setTimeout(() => setRoleIndex((prev) => (prev + 1) % roles.length), 1500);
      }
    }, 60);
    return () => clearInterval(typing);
  }, [roleIndex]);

  return (
      <div style={{ width: "113%", overflowX: "hidden", background: "#020617", color: "white" }}>
  

      <style>{`
        .gradient-text {
          background: linear-gradient(90deg, #38bdf8, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .card-hover:hover {
          transform: translateY(-10px);
          transition: 0.3s;
        }
        .btn-gradient {
          background: linear-gradient(90deg, #38bdf8, #8b5cf6);
          border: none;
          color: white;
        }
        .text-muted-custom {
          color: #94a3b8;
        }
        .footer {
          background: #020617;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer a {
          color: #94a3b8;
          text-decoration: none;
          transition: 0.3s;
        }
        .footer a:hover {
          color: #38bdf8;
        }
        .section { padding: 100px 0; }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar navbar-dark px-4 sticky-top" style={{background:'#020617'}}>
        <span className="navbar-brand fw-bold gradient-text">Portfolio</span>
        <div className="ms-auto d-flex gap-4">
          <a href="#" className="text-white d-flex align-items-center gap-1"><FaHome /> Home</a>
          <a href="#about" className="text-white d-flex align-items-center gap-1"><FaUser /> About</a>
          <a href="#projects" className="text-white d-flex align-items-center gap-1"><FaCode /> Projects</a>
          <a href="#resume" className="text-white d-flex align-items-center gap-1"><FaFileAlt /> Resume</a>
          <a href="#contact" className="text-white d-flex align-items-center gap-1"><FaEnvelope /> Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="container text-center section">
        <img src={asd} alt="profile" className="rounded-circle mb-4"
        style={{
  width: "250px",
  height: "250px",
  objectFit: "cover"
}} />

        <h1 className="display-4 fw-bold">
          Hey there, I'm <span className="gradient-text">Vaibhav Davhale</span>
        </h1>

        <p className="mt-3 text-muted-custom w-75 mx-auto">
          Full-stack developer and aspiring software engineer passionate about building scalable applications and solving real-world problems.
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <a href="#projects" className="btn btn-gradient text-white px-4">View Projects</a>
          <a href="#contact" className="btn btn-outline-light px-4">Get In Touch</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container section">
         <h2 className="text-center mb-5">About </h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={asd} alt="about" className="img-fluid rounded" style={{
  borderRadius: "20px",
  boxShadow: "0 0 40px rgba(139,92,246,0.3)",
   width: "600px",
  height: "550px",
  objectFit: "cover"
}} />
          </div>
          <div className="col-md-6">
            <h2>My Journey</h2>
            <p className="text-muted-custom mt-3">
             My journey in software development started with a deep curiosity for solving real-world problems through technology. During my CDAC program, I built projects like a microservices-based banking system and a YOLO-powered real-time vehicle detection system. 
             These projects strengthened my understanding of backend systems, scalable architecture, and performance-driven development.
            </p>
            <h2 className="mt-4">My Approach</h2>
            <p className="text-muted-custom mt-3">
             I believe in writing clean, efficient, and scalable code. I specialize in backend and full-stack development, focusing on building systems that are reliable and production-ready. Alongside development, 
             I actively practice data structures and algorithms to enhance my problem-solving and analytical thinking.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container section">
        <h2 className="text-center mb-5">Projects</h2>


        <div className="row g-4">



          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="glass p-3 p-md-4 rounded-4 card-hover h-100 d-flex flex-column">
              {/* <img src="https://via.placeholder.com/400" alt="project" className="img-fluid rounded mb-3" /> */}
              <h5 className="fw-bold">Real Time Vehicle Detection System using YOLO</h5>
              <p className="text-muted-custom small">Built a real-time vehicle detection system using YOLO that identifies and tracks vehicles from live video streams. The system processes frames efficiently to deliver accurate detections with low latency. Designed 
                for real-world applications like traffic monitoring and surveillance. Focused on performance optimization and scalability.</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">Python</span>
                <span className="badge bg-primary">YOLO</span>
                <span className="badge bg-primary">OpenCV</span>
                  <span className="badge bg-primary">Pandas</span>
                    <span className="badge bg-primary">Matplotlib</span>
                      <span className="badge bg-primary">Machine Learning</span>
              </div>
              <div className="mt-auto d-flex gap-2">
                <a href="https://github.com/vaibhav0809git/Real-time-vehicle-detection-using-Yolo-.git" className="btn btn-gradient text-white btn-sm">GitHub</a>
                {/* <a href="#" className="btn btn-outline-light btn-sm">Live</a> */}
              </div>
            </div>
          </div>



          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="glass p-3 p-md-4 rounded-4 card-hover h-100 d-flex flex-column">
              {/* <img src="https://via.placeholder.com/400" alt="project" className="img-fluid rounded mb-3" /> */}
              <h5 className="fw-bold">Banking Microservices</h5>
              <p className="text-muted-custom small">Developed a microservices-based banking system using a modular architecture to handle core banking operations like account management, transactions, and user services. Implemented RESTful APIs and ensured scalability and fault isolation across services. 
                Focused on clean architecture, secure data handling, and efficient inter-service communication.</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">Java</span>
                <span className="badge bg-primary">Spring Boot</span>
                <span className="badge bg-primary">Microservices</span>
                <span className="badge bg-primary">React</span>
                <span className="badge bg-primary">MySql</span>
                <span className="badge bg-primary">RestApi</span>
                <span className="badge bg-primary">JWT</span>
              </div>
              <div className="mt-auto d-flex gap-2">
                <a href="https://github.com/vaibhav0809git/MicroService-Based-Bank-Suite.git" className="btn btn-gradient text-white btn-sm">GitHub</a>
                {/* <a href="#" className="btn btn-outline-light btn-sm">Live</a> */}
              </div>
            </div>
          </div>


  <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="glass p-3 p-md-4 rounded-4 card-hover h-100 d-flex flex-column">
              {/* <img src="https://via.placeholder.com/400" alt="project" className="img-fluid rounded mb-3" /> */}
              <h5 className="fw-bold">Ecommerce - A flipkart clone</h5>
              <p className="text-muted-custom small">Developed a full-stack E-Commerce web application using ASP.NET Core Web API, Entity Framework Core, and Azure SQL Database, with 
                a dynamic frontend UI inspired by Flipkart. The application is fully deployed on Azure App Service and supports product management, cart functionality, and order processing.</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">C#</span>
                <span className="badge bg-primary">ASP.NET Core Web API</span>
                <span className="badge bg-primary">Entity Framework Core </span>
                   <span className="badge bg-primary">RESTful APIs</span>
                      <span className="badge bg-primary">HTML, CSS, JavaScript </span>
                         <span className="badge bg-primary">Azure App Service </span>

              </div>
              <div className="mt-auto d-flex gap-2">
                <a href="https://github.com/vaibhav0809git/Ecommerce.git" className="btn btn-gradient text-white btn-sm">GitHub</a>
                {/* <a href="#" className="btn btn-outline-light btn-sm">Live</a> */}
              </div>
            </div>
          </div>



    <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="glass p-3 p-md-4 rounded-4 card-hover h-100 d-flex flex-column">
              {/* <img src="https://via.placeholder.com/400" alt="project" className="img-fluid rounded mb-3" /> */}
              <h5 className="fw-bold">Chat App</h5>
              <p className="text-muted-custom small">Built a real-time private messaging app using Node.js and JavaScript with end-to-end encryption to protect user conversations. Implemented JWT authentication for secure login and 
                session management. Focused on delivering fast, reliable, and highly secure communication between users..</p>
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary">JavaScript</span>
                <span className="badge bg-primary">Node.js</span>
                <span className="badge bg-primary">HTML & CSS</span>
                <span className="badge bg-primary">Vercel</span>
                <span className="badge bg-primary">Rest API</span>
                <span className="badge bg-primary">MongoDB</span>
                <span className="badge bg-primary">JWT</span>
              </div>
              <div className="mt-auto d-flex gap-2">
                <a href="https://github.com/vaibhav0809git/chat-app.git" className="btn btn-gradient text-white btn-sm">GitHub</a>
                {/* <a href="#" className="btn btn-outline-light btn-sm">Live</a> */}
              </div>
            </div>
          </div>


          
        </div>



        
      </section>

      {/* RESUME SECTION (NEW) */}
      <section id="resume" className="container section text-center">
        <h2 className="mb-4">Resume</h2>
        <p className="text-muted-custom mb-4">
          You can view or download my resume to learn more about my experience and skills.
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href={asm} className="btn btn-gradient text-white px-4" target="_blank">
            View Resume
          </a>
          <a href={asm} download className="btn btn-outline-light px-4">
            Download Resume
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container section">
        <h2 className="text-center mb-5">Get In Touch</h2>
        <div className="row g-4 align-items-stretch">

          <div className="col-lg-5 col-md-12">
            <div className="glass p-4 rounded-4 h-100">
              <h4 className="mb-3">Let's Connect</h4>
              <p className="text-muted-custom">Have a project in mind or just want to say hi? Feel free to reach out.</p>
              <div className="mt-4">
                <p><strong>Email:</strong></p>
                <p className="text-muted-custom">davhalevaibhav28@email.com</p>
                <p className="mt-3"><strong>Location:</strong></p>
                <p className="text-muted-custom">Pune, India</p>
              </div>
              <div className="mt-4 d-flex gap-3 fs-4">
                <a href="https://github.com/vaibhav0809git" className="text-white"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/vaibhav-davhale-5a67342a4/" className="text-white"><FaLinkedin /></a>
                 <a href="https://x.com/theVaibhav_08" className="text-white"><FaTwitter/></a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="glass p-4 rounded-4 h-100">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control bg-dark text-white border-0" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control bg-dark text-white border-0" placeholder="your@email.com" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea rows="4" className="form-control bg-dark text-white border-0" placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="btn btn-gradient text-white w-100">Send Message</button>
              </form>
            </div>
          </div>

        </div>
      </section>

      <footer className="footer pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">

            {/* ABOUT */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Vaibhav Davhale</h5>
              <p className="text-muted-custom">
                Software developer passionate about building scalable systems and solving real-world problems.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted-custom">Home</a></li>
                <li><a href="#about" className="text-muted-custom">About</a></li>
                <li><a href="#projects" className="text-muted-custom">Projects</a></li>
                <li><a href="#resume" className="text-muted-custom">Resume</a></li>
                <li><a href="#contact" className="text-muted-custom">Contact</a></li>
              </ul>
            </div>

            {/* CODING PROFILES */}
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Coding Profiles</h5>
              <ul className="list-unstyled">
                <li>

                  
                  <a href="https://leetcode.com/u/vaibhav_0809/" target="_blank" className="text-muted-custom">
                    LeetCode
                  </a>
                  
                </li>
                <li>
                  <a href="https://www.codechef.com/users/vaibhav2463" target="_blank" className="text-muted-custom">
                    CodeChef
                  </a>
                </li>
                <li>
                  <a href="https://www.hackerearth.com/@davhalevaibhav28/" target="_blank" className="text-muted-custom">
                    HackerEarth
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <hr className="border-secondary" />

          <p className="text-center text-muted-custom mb-0">
            © 2026 Vaibhav Davhale. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
