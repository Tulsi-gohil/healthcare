import { Link } from "react-router-dom";
import "../App.css";
import img1 from "../img1.jpg";
import icon from "../icon.jpg";
import icon2 from "../icon2.jpg";
import icon3 from "../icon3.jpg";
function Home() {
  return (
    <>
      <section className="container my-5">
        <div className="row align-items-center">

          {/* LEFT SIDE DETAILS */}
          <div className="col-lg-6 col-md-12 text-start pe-lg-5 mb-5">
            <span className="  fw-semibold">
              DOCTOR APPOINTMENT SYSTEM
            </span>

            <h1 className="mt-3 fw-bold">
              Smart & Simple Way <br /> To Book Appointments
            </h1>

            <p className="mt-3 text-muted fs-5">
              Our platform helps patients connect with trusted doctors and
              professionals easily, saving time and effort.
            </p>

            <ul className="list-unstyled mt-4">
              <li className="d-flex align-items-start mb-3">
                <span className="me-3 text-primary fs-4">✔</span>
                <span className="fs-6">Quick & Easy Appointment Booking</span>
              </li>

              <li className="d-flex align-items-start mb-3">
                <span className="me-3 text-primary fs-4">✔</span>
                <span className="fs-6">Trusted & Verified Professionals</span>
              </li>

              <li className="d-flex align-items-start mb-3">
                <span className="me-3 text-primary fs-4">✔</span>
                <span className="fs-6">Manage & Track Your Appointments</span>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE HERO */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="hero">
              <section className="hero2">
                <div className="hero-content mx-auto col-lg-8 col-md-10 col-12">
                  <h1 className="fw-bold">
                    Book Your Appointment Easily
                  </h1>
                  <p className="mt-3 mb-4 fs-5">
                    Schedule appointments anytime, anywhere with trusted professionals.
                  </p>
                  <Link to="/BookAppointment" className="btn btn-primary px-4 py-2">
                    Book Appointment
                  </Link>
                </div>
              </section>
            </div>
          </div>

        </div>
      </section>
<section className="container features text-right">
  <div className="row  justify-content-center ">
    <div className="col-lg-6  ">
      <img
        src={img1}
        alt="Appointment Illustration"
        className="img-fluid align-items-left shadow-lg"
      />
    </div>
    <div className="col-lg-6  justify-content-center  features-text   text-start">
      <h2 className="fw-bold mb-4">Why Choose Our Appointment System?</h2>
      <p className="text-muted fs-5 mb-4">
        Our appointment system is designed to provide a seamless experience for both patients and healthcare providers. Here are some reasons why you should choose our platform:
      </p>
      <ul className="list-unstyled text-start">
        <li className="mb-3">
          <strong>Easy to Use:</strong> Our user-friendly interface makes it simple to book, reschedule, or cancel appointments with just a few clicks.
        </li>
        <li className="mb-3">
          <strong>Wide Network of Professionals:</strong> Access a diverse range of healthcare providers, including specialists, general practitioners, and therapists.
        </li>
        <li className="mb-3">
          <strong>Secure and Confidential:</strong> We prioritize your privacy and ensure that all your personal and medical information is protected.
        </li>
        <li className="mb-3">
          <strong>24/7 Availability:</strong> Book appointments at any time that suits you, without being restricted to office hours.
        </li>
      </ul>
    </div>
    
  </div>
</section>
<section className=" container-fluid  our-services ">
  <div className="text-center mt-5 mb-4">
    <h2 className="fw-bold services-text">Our Services</h2>
    <p className="text-muted fs-5">
      We offer a range of services to meet your healthcare needs.
    </p>
  </div>  
  <div className="row text-center">
    <div className="col-lg-4 col-md-6 mb-4 card-deck">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <img src={icon} alt="General Consultation" className="mb-3" style={{width: '100px', height: '100px'}} />
          <h5 className="card-title fw-bold">General Consultation</h5>  
          <p className="card-text text-muted">
            Connect with general practitioners for routine check-ups and health advice.

          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4 card-deck">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <img src={icon2} alt="General Consultation" className="mb-3" style={{width: '100px', height: '100px'}} />

          <h5 className="card-title fw-bold">Specialist Appointments</h5>
          <p className="card-text text-muted">
            Book appointments with specialists in various fields such as cardiology, dermatology, and more.

          </p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body">
          <img src={icon3} alt="General Consultation" className="mb-3" style={{width: '100px', height: '100px'}} />
          <h5 className="card-title fw-bold">Telemedicine</h5>
          <p className="card-text text-muted">
            Access healthcare services remotely through video consultations with our telemedicine options.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="container  join-section   text-center">
  <h2 className="fw-bold mb-4">Get Started Today!</h2>
  <p className="text-muted fs-5 mb-4">
    Join our platform and experience the convenience of easy appointment booking.
  </p>
  <Link to="/signup" className="btn btn-primary px-4 py-2">
    Sign Up
  </Link>
</section>

    </>
  );
}

export default Home;
