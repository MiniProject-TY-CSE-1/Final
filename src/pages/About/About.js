import React from "react";
import Nav from "../../components/Nav";
import "./About.css";

export default function About() {
  return (
    
    <div className="about-container">
      <Nav></Nav>
      <h4 className="about-heading">Transformative Yoga Practice Through 
      <br></br>Pose Detection Technology</h4>
      <div className="about-main">
        <p className="about-content">
          {/* Yoga has been the way of life for centuries. By building Yoga Smart we
          have built a Yoga trainer website where learners can select the pose
          that they intend to do and then our unique pose detection and pose
          correction software shall help them navigate their learning
          experience. This is an open source project by a bunch of third year
          students. */}
          In the early days of yoga, practitioners faced the challenge of mastering poses without the aid of advanced tools. Yoga, rooted in ancient traditions, required a deep understanding of body alignment and form, often relying on personal intuition and guidance from instructors. Today, our miniproject seeks to revolutionize the yoga experience by integrating pose detection technology into the practice.
        </p>
        <p className="about-content">
          {/* This AI first predicts keypoints or coordinates of different parts of
          the body(basically where they are present in an image) and then it use
          another classification model to classify the poses if someone is doing
          a pose and if AI detects that pose more than 95% probability and then
          it will notify you are doing correctly(by making virtual skeleton
          green). We have used Tensorflow pretrained Movenet Model To Predict
          the Keypoints and building a neural network top of that which uses
          these coordinates and classify a yoga pose. We have trained the model
          in python because of tensorflowJS we can leverage the support of
          browser so I converted the keras/tensorflow model to tensorflowJS. */}
          Our Yoga Pose Detection website, developed using React.js, Django, and MongoDB, serves as a virtual guide for practitioners. Utilizing image processing techniques, the platform provides real-time feedback on pose accuracy, empowering users to refine their techniques and deepen their practice. By uploading images or using a camera, practitioners receive personalized insights into alignment, posture, and muscle engagement.
        </p>
        <p className="about-content">
        The project not only brings yoga into the digital age but also democratizes access to precise guidance, regardless of geographical constraints. We believe that by merging ancient wisdom with modern technology, we can enhance the yoga journey, making it more accessible, engaging, and beneficial for practitioners of all skill levels. Join us on this innovative venture where tradition meets innovation, and every yoga pose becomes a step towards a healthier, more mindful lifestyle.
        </p>
      </div>
    </div>
  );
}
