import { useEffect } from 'react';
import Layout from '../components/Layout';
import gsap from 'gsap';
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    gsap.timeline()
    .from(".about-header-left .about-img", {transform: 'scaleX(0)', transformOrigin: 'center'})
    .from(".about-header-right h1:nth-child(1)", {y:-100, opacity:0, ease:"back", duration: 1})
    .from(".about-header-right h1:nth-child(2)", {x:-100, opacity:0, ease:"back", duration: 1})
    .set(".about-header-right .bi-arrow-down", {"visibility": "visible"})
    .from(".about-header-right .bi-arrow-down", {opacity:0, ease:"back", duration: 1})
    .delay(1.5);

    gsap.timeline({scrollTrigger:{
      trigger:".about-remedy",
      start:"top 85%",
      toggleActions:"restart none none reset",
    }})
    .from(".about-remedy h2", {y:-150, opacity:0, ease: 1, duration: 0.3})
    .from(".about-remedy p", {opacity:0, ease: 1, duration: 0.5})
    .from(".about-remedy .circle", {x: -100, opacity: 0, ease: 1, rotate: -360, duration: 1})

    gsap.timeline({scrollTrigger:{
      trigger:".process-one",
      start:"top 85%",
      toggleActions:"restart none none reset",
    }})
    .from(".process-section h2", {y:-100, opacity:0, ease: 1, duration: 0.3})
    .from(".process-one .process-number", {x:-100, opacity:0, ease: 1, duration: 0.5})
    .from(".one-content h5", {y: 100, opacity:0, ease: 1, duration: 0.5})
    .from(".one-content p", {x: 100, opacity: 0, ease: 1, duration: 0.5})
    .from(".one-content img", {y: 100, opacity: 0, ease: 1, duration: 0.5})

    gsap.timeline({scrollTrigger:{
      trigger:".process-two",
      start:"top 70%",
      toggleActions:"restart none none reset",
    }})
    .from(".process-two .process-number", {y:-100, opacity:0, ease: 1, duration: 0.5})
    .from(".two-content h5", {y: 100, opacity:0, ease: 1, duration: 0.5})
    .from(".two-content p", {x: -100, opacity: 0, ease: 1, duration: 0.5})
    .from(".two-content img", {y: -100, opacity: 0, ease: 1, duration: 0.5})

    gsap.timeline({scrollTrigger:{
      trigger:".process-three",
      start:"top 70%",
      toggleActions:"restart none none reset",
    }})
    .from(".process-three .process-number", {x: 100, opacity:0, ease: 1, duration: 0.5})
    .from(".three-content h5", {y: 100, opacity:0, ease: 1, duration: 0.5})
    .from(".three-content p", {x: -100, opacity: 0, ease: 1, duration: 0.5})
    .from(".three-content img", {y: -100, opacity: 0, ease: 1, duration: 0.5})
}, [])

  return (
    <Layout>
      <div className="about-container">
        <div className="about-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 about-header-left">
                  <div className="about-img" />
              </div>
              <div className="col-lg-6 about-header-right text-center">
                <h1>ABOUT</h1>
                <h1>US</h1>  
                <i className="bi bi-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <section className="about-remedy">
            <div className="row">
              <h2 className="text-center">Why You Need A Remedy?</h2>
            </div>
            <div className="circle circle1">
              <div className="about-img1" />
            </div>
            <div>
              <p>
                Remedy is an export business that specializes in the shipment of Thai Kratom to vendors in the US. It is owned and operated
                by an American that live in Thailand. After much research this opportunity presented itself 
                in the Kratom trees that grow in humid and tropical locations like the forest across Southeast Asia. Currently 
                the only two countries that export Kratom are Indonesia and Thailand.
                <br/><br/>  
                Our goal is to ship quality Kratom that is safe from any metals, bacteria, and that is grown naturally without the useage of any pesticides.  
                Remedy only looks to ship to vendors that are members of the AKA (American Kratom Association).  This is to maintain a realationsip 
                that is based on trust in the quality of the product we ship.  Furthermore, we work with the vendors that are members of 
                the AKA because they have committed to the AKA Good Manufacturing Practices program and we are commited to producing a higher quality product 
                that is superior to others.
                <br/><br/> 
                Another goal of Remedy is the fair trade practices with the Thai farmers.  We make sure the farmers are paid fairly for their
                Kratom crop, and that we are committed to making sure their crop will not go to waste.  We realize that without the farmers our business would 
                not be possible.  So we make sure we apply the Golden Rule when it comes to the farmers and our business by treating them with the respect they deserve.  
                <br/><br/>
                Remedy is located in the district of Bang Kapong which is in the providence of Chachoengsao.  Chachoengsao is where our facory is located 
                and where we process the Kratom.  Right now we can ground the Kratom either as fine powder or nano powder.  Remedy may offer resin or teabags in the future.

              </p>
            </div>
          </section>
          <section className="process-section">
            <h2 className="text-center">Our Process is Simple</h2>
            <div className="process-one d-flex justify-content-center">
                <div className="process-number">01</div>
              
                <div className="one-content">
                  <h5>Kratom is Dried</h5>
                  <p>Kratom leaves are brought in from the farms and dried for two to three days and then grinded and packaged.</p>
                  <Image src="/images/dried-kratom.jpg" className="d-block w-100" width={500} height={500} alt="dried kratom" />
                </div>
            </div>
            <div className="process-two d-flex justify-content-start">
              <div className="two-content">
                  <h5>Gamma Treated</h5>
                  <p>The Kratom is taken to another facility to be gamma treated.</p>
                  <Image src="/images/gamma-treatment.jpg" className="d-block w-100" width={600} height={388} alt="gamma treatment" />
                </div>
                <div className="process-number">02</div>
              

            </div>
            <div className="process-three d-flex justify-content-center align-items-center">
              <div className="three-content">
                  <h5>Taken to the Port</h5>
                  <p>Kratom is taken to the port and prepared for shipment.</p>
                  <Image src="/images/container-ship.jpg" className="d-block w-100" width={600} height={415} alt="gamma treatment" />
                </div>
                <div className="process-number">03</div>
              

            </div>
          </section>
          <section className="factory-section">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center">Our Factory</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default About;