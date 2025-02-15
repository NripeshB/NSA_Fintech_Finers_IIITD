import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';
import HeroImage from '../images/hero-image.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Hero content */}
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white drop-shadow-md"
            data-aos="zoom-y-out"
          >
            Nail Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              Portfolio
            </span>
          </h1>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 drop-shadow-sm"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            Investing made simple—no guesswork, no stress. Just smart, data-driven insights that actually get you (and
            your money) growing!
          </p>
        </div>

        {/* Hero image with glass effect */}
        <div className="relative flex justify-center">
          <div
            className="relative flex flex-col justify-center items-center bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-white/20"
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            <img className="mx-auto rounded-lg shadow-xl" src={HeroImage} width="768" height="432" alt="Hero" />
          </div>
        </div>

        {/* Modal */}
        <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
          <div className="relative pb-9/16">
            <video ref={video} className="absolute w-full h-full" width="1920" height="1080" loop autoPlay controls>
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default HeroHome;
