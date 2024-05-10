import React from 'react';
import "./Faq.css"

function Faq() {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3 className="faq-question">1. How do I access premium content?</h3>
        <p className="faq-answer">
          To access premium content, sign up for our exclusive membership. Once logged in, you'll unlock a treasure trove of fitness videos and features tailored just for you.
        </p>
        <p className="faq-answer">
          Already a member? Dive right in! If not, head to our membership page and start your journey to a healthier you.
        </p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">2. Can I cancel my membership anytime?</h3>
        <p className="faq-answer">
          Absolutely! We believe in flexibility. Cancel anytime without worrying about long-term commitments or hidden fees.
        </p>
        <p className="faq-answer">
          Simply navigate to your account settings and choose the option to cancel your subscription. Your access will continue until the end of your billing cycle.
        </p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">3. Are the workouts suitable for beginners?</h3>
        <p className="faq-answer">
          Definitely! Our workouts cater to all levels. Whether you're a newbie or a seasoned pro, you'll find something to challenge and inspire you.
        </p>
        <p className="faq-answer">
          New to exercising? Start with our beginner-friendly routines designed to ease you into fitness while building your strength and confidence.
        </p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">4. How often are new exercise videos added?</h3>
        <p className="faq-answer">
          We're dedicated to keeping things fresh! Expect new videos every week, covering a wide array of fitness routines, from cardio to strength training and everything in between.
        </p>
        <p className="faq-answer">
          Stay tuned as we continuously update our library with the latest trends and techniques to keep your workouts exciting and effective.
        </p>
      </div>
      <div className="faq-item">
        <h3 className="faq-question">5. Can I download exercise videos for offline viewing?</h3>
        <p className="faq-answer">
          While offline viewing isn't available yet, you can bookmark your favorite workouts for easy access whenever you're online.
        </p>
        <p className="faq-answer">
          We're always striving to enhance your experience, so keep an eye out for future updates and features aimed at making your fitness journey even more convenient.
        </p>
      </div>
    </div>
  );
}

export default Faq;
