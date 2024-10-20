import React, { useEffect, useRef, useState } from 'react';
import axios from "axios"
import { BsCheckCircle } from 'react-icons/bs'; 
import 'semantic-ui-css/semantic.min.css';

import temp from "./Imaages/Temp.jpg"; 
import img1 from "./Imaages/img1.jpg"; 
import img2 from "./Imaages/img2.jpg"
import img3 from "./Imaages/img3.jpg"
import img4 from "./Imaages/img4.jpg"
import logo from "./Imaages/logo.png"
import { Carousel } from 'antd'

const Hero = () => {
    const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [description,setDescription]=useState("");
    const  add=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/form",{name,email,phone,description})
         .then((res)=>{
            alert("data added");
            setName("");
            setEmail("");
            setPhone("");
            setDescription("");
         })
         .catch((err)=>{
            alert("fail to add data");
         })
        
    }
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
    
  };

  return (
    <div>
     <section>
  <div className="container-fluid p-0">
    <div className="row">
      <div className="col-lg-12 position-relative">
        <Carousel autoplay infinite={true} className="custom-carousel" ref={carouselRef}>
          <div className="carousel-item position-relative">
            <img src={img1} alt="banner1" className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-text">Browser Template</h2>
              <button className="image-button">Browse</button>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img src={img2} alt="banner2" className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-text">Upload Document</h2>
              <button className="image-button">Upload</button>
            </div>
          </div>
          <div className="carousel-item position-relative">
            <img src={img3} alt="banner3" className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-text">Create</h2>
              <button className="image-button">Create Now</button>
            </div>
          </div>
        </Carousel>

        <button className="carousel-control prev" onClick={prev}>
          &#10094;
        </button>
        <button className="carousel-control next" onClick={next}>
          &#10095;
        </button>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container py-5">
    <h1 className="text-center mb-4">Browse Your Template</h1>
    <div className="row text-center">
      {['Legal', 'Education', 'Financial', 'Health Care', 'Human Resource', 'Insurance'].map((category, index) => (
        <div className="col-md-2 mb-3 category" key={index}>
          <h3>{category}</h3>
        </div>
      ))}
      <div className="col-md-12 mt-4">
        <img src={temp} alt="Template" className="img-fluid shadow img-hover w-75" />
      </div>
      <div className="col-md-3 mt-3 mx-auto">
        <button
          className="btn btn-primary w-100 btn-hover"
          onClick={() => handleButtonClick('')}
        >
          Load More
        </button>
      </div>
    </div>
  </div>
</section>

      <section>
        <div className="container">
          <h2 className="text-center mb-4">Access Professional Contract Templates Effortlessly</h2>
          <div className="row align-items-center">
            <div className="col-md-7">
              {[
                {
                  title: 'Tailor to Your Needs',
                  content: 'Easily customize templates to fit your specific requirements, saving time and effort.'
                },
                {
                  title: 'Variety at Your Fingertips',
                  content: 'Choose from a diverse selection of industry-standard contracts for various scenarios.'
                },
                {
                  title: 'Consistency and Clarity',
                  content: 'Ensure your contracts are well-structured and professional, promoting clear communication.'
                }
              ].map((item, index) => (
                <p key={index}>
                  <BsCheckCircle className="text-primary me-2" />
                  <strong>{item.title}:</strong> {item.content}
                </p>
              ))}
              <button 
                className="btn btn-success mt-3 btn-hover"
                onClick={() => handleButtonClick('')}
              >
                Explore Templates Now
              </button>
            </div>
            <div className="col-md-5 img1">
              <img src={img1} alt="Explore" className="img-fluid-circle" />
            </div>
          </div>
        </div>
      </section>
      <section className="circle py-5">
      <div className="container">
        <h2 className="text-center mb-4">Collaborate Seamlessly With Real-Time Sharing</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className='circle1'>
            <div className='vamsi'>
            <div>
            <img src={img3} alt="Collaboration" className="collaboration-img" />
            </div>
            </div>
            </div>
          </div>
          <div className="col-md-6">
            {[
              { title: 'Instant Sharing', content: 'Easily send contracts via phone directly through the app.' },
              { title: 'Real-Time Updates', content: 'Keep participants in sync with the latest contract version.' },
              { title: 'Enhanced Collaboration', content: 'Use built-in tools for comments and feedback.' }
            ].map((item, index) => (
              <p key={index}>
                <BsCheckCircle className="text-primary me-2" />
                <strong>{item.title}:</strong> {item.content}
              </p>
            ))}
            <button 
              className="btn btn-info mt-3"
              onClick={handleButtonClick}
            >
              Start Collaborating Now
            </button>
          </div>
        </div>
      </div>
    </section>


      <section className="bg-light py-5">
        <div className="container">
          <h2 className='text-center'>Secure and Legally Binding Signing</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              {[
                { title: 'Direct Signing', content: 'Approve and sign contracts within the app for immediate action.' },
                { title: 'Legally Binding', content: 'Use MitID for secure, legally binding signatures.' },
                { title: 'Convenient Review', content: 'Review contract details before signing to ensure accuracy.' }
              ].map((item, index) => (
                <p key={index}>
                  <BsCheckCircle className="text-primary me-2" />
                  <strong>{item.title}:</strong> {item.content}
                </p>
              ))}
              <button 
                className="btn btn-warning mt-3 btn-hover"
                onClick={() => handleButtonClick("")}
              >
                Sign and Approve
              </button>
            </div>
            <div className="col-md-6">
             <div className='back'>
             <img src={img3} alt="Signing" className="img-fluid rounded-circle  img-hover" />
             </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <h3 className='text-center'>Ensure the Safety of Your Contracts with Encrypted Storage</h3>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={img4} alt="Storage" className="img-fluid rounded-circle img-hover" />
            </div>
            <div className="col-md-6">
              {[
                { title: 'Encrypted Security', content: 'All contracts are encrypted for maximum protection.' },
                { title: 'Reliable Access', content: 'Access contracts anytime with confidence in security.' },
                { title: 'Organized Storage', content: 'Manage and retrieve contracts easily with our system.' }
              ].map((item, index) => (
                <p key={index}>
                  <BsCheckCircle className="text-primary me-2" />
                  <strong>{item.title}:</strong> {item.content}
                </p>
              ))}
              <button 
                className="btn btn-danger mt-3 btn-hover"
                onClick={() => handleButtonClick("")}
              >
                Secure Contracts Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h1 className="mb-4">Sign & Get Signature</h1>

        <div className="upload-box p-5 rounded shadow">
          <h2 className="mb-3">Add Documents</h2>

          <label htmlFor="file-upload" className="upload-btn">
            <i className="bi bi-cloud-arrow-up-fill me-2"></i>
            Browse from Computer
          </label>
          <input id="file-upload" type="file" hidden />

          <p className="mt-3 text-muted">Supported formats: PDF, DOCX, PNG, JPG</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Schedule a Consultation</h3>
              <p>Connect with our team for personalized advice on managing contracts.</p>
              <h6>Email us at: <a href="mailto:hi@dinaftale.com">hi@dinaftale.com</a></h6>
              <ul>
            <li><i className="twitter icon"></i></li>
            <li><i className="linkedin icon"></i></li>
            <li><i className="facebook icon"></i></li>
            </ul>

            </div>
            <div className='col-md-4'>
            <form onSubmit={add}>
                        <div className='mb-3'>
                            <input type='text' name='name' placeholder='Name' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='Email' placeholder='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='phone' placeholder='Phone' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className='mb-3'>
                            <input type='text' name='description' placeholder='Description' className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <input type='submit'  value="Get in Touch" className='btn btn-primary' />
                        </div>
                    </form>
            </div>
          </div>
        </div>
      </section>
      <section>
      <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt='' className='w-25'/>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 DinAftale. All rights reserved.</p>
        </div>
      </div>
    </footer>
      </section>
    </div>
  );
};

export default Hero;
