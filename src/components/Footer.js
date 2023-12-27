import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4>About Yoga Detection</h4>
            <p>
              Yoga Detection is dedicated to enhancing your yoga practice through innovative technology. We strive to provide accurate and personalized insights to deepen your mindfulness journey.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h4>Contact Us</h4>
            <p>
              Address: Vishrambag,Sangli 416415<br />
              Phone: +1 234 567 890<br />
              Email: yoga@yogadetection.com
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr />
            <p className="text-center">
              Find your balance and inner peace with Yoga Detection. &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
