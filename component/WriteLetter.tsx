export default function () {
  return (
    <section className="wpo-contact-section section-padding" id="RSVP">
      <div className="container">
        <div className="wpo-contact-section-wrapper">
          <div className="wpo-contact-form-area">
            <div className="wpo-section-title-s2">
              <div className="section-title-simg">
                <img src="/images/section-title2.png" alt="" />
              </div>
              <h2>WILL YOU ATTEND?</h2>
              <div className="section-title-img">
                <div className="round-ball"></div>
              </div>
            </div>
            <form
              method="post"
              className="contact-validation-active"
              id="contact-form-main"
            >
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  placeholder="Messages"
                />
              </div>

              <div className="submit-area">
                <button type="submit" className="theme-btn-s3">
                  Send An Inquiry
                </button>
                <div id="c-loader">
                  <i className="ti-reload"></i>
                </div>
              </div>
              <div className="clearfix error-handling-messages">
                <div id="success">Thank you</div>
                <div id="error">
                  {" "}
                  Error occurred while sending email. Please try again later.
                </div>
              </div>
            </form>
            <div className="border-style"></div>
          </div>
          <div className="vector-1">
            <img src="/images/contact/1.png" alt="" />
          </div>
          <div className="vector-2">
            <img src="/images/contact/2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
