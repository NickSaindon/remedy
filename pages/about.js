import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import gsap from 'gsap';
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import image1 from "../public/images/factory-sign.jpg";
import image2 from "../public/images/factory-sign.jpg";
import image3 from "../public/images/factory-sign.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  const [open, setOpen] = useState(false);


  useEffect(() => {
    gsap.timeline()
    .from(".page-header-left .about-img", {transform: 'scaleX(0)', transformOrigin: 'center'})
    .from(".page-header-right h1:nth-child(1)", {y:-100, opacity:0, ease:"back", duration: 1})
    .from(".page-header-right h1:nth-child(2)", {x:-100, opacity:0, ease:"back", duration: 1})
    .set(".page-header-right .bi-arrow-down", {"visibility": "visible"})
    .from(".page-header-right .bi-arrow-down", {opacity:0, ease:"back", duration: 1})
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
    <Layout 
      title="About Page"
      description="Remedy Exports is a Thai based manufacture and export company that works with clients to procure the best Thai Kratom.  We handle the end-to-end process to supply quality Kratom that is safe from any 
      metals, bacteria, and that is grown naturally without the usage of any non-organic pesticides or fertilizers.">
      <div className="about-container">
        <div className="page-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 page-header-left">
                <div className="about-img" />
              </div>
              <div className="col-lg-6 page-header-right text-center">
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
                Remedy Exports is an manufacturing and export business that specializes in the growing, grinding and shipping of Thai Kratom to vendors worldwide. Remedy Exports is a Thai 
                registered company limited. Our company works around the clock to ensure that its clients needs are met at all times.
                <br/><br/>  
                Our goal is to procure quality Kratom that is safe from any metals, bacteria, and that is grown naturally without the usage of any chemical pesticides 
                or fertilizers. Remedy Exports only looks to work with vendors that agree in using GMP (Good Manufacturing Practices) and testing of their Kratom products. This 
                is to maintain a high quality standard from plantation to consumer through mutual goals of Good Manufacturing Practices.
                <br/><br/> 
                Another goal of Remedy Exports is to help meet the needs of all the clients we work with. We do this by over-seeing the end-to-end production, 
                from farm, factory, exportation Remedy handles every step of the process.  By partnering with our clients we look to create a process that will standardizes
                this industry in a way that is safe and profitable for all.    
                <br/><br/>
                Remedy Exports has partnered with over <b>30 plantations</b> in Thailand with trees that range from 1 year old all the way up to <b>70 years old</b>.  Our quality Kratom
                has consistently tested MIT levels over 2% and we have eight different varieties of leafs and species of Kratom.  This variety includes Leon Tong which translates as golden coin from Thai 
                and is a hybrid that is not know by Westren cultures. The reason Thai's call it Leon Tong is because of its small bud that turns gold at the bottom of the leaf.  Leon Tong is white 
                and red vein where the center vein is red and the veins off the center are white.    
              </p>
              </div>



          </section>
          <section className="investment-program">
          <div className="row">
            <div className="col-lg-12">
            <h2 >Investment Program</h2>
            <p>
              The aim of this investment program is to provide our clients with high-quality Kratom that is exclusively procured for their company’s needs. We look to support 
              the needs of our clients through our investment program that will facilitate the end-to-end production of Kratom in the local market. Working with our local 
              partnerships to expand our clients supply and demand in the US and the World market. Our approach is to implement a scaleable solution with a proactive approach 
              to problem solving that keeps business cost low, and creates room for expansion for our clients. We understand that our client's business and future business needs 
              should be functional, efficient and proactive solutions to procurement, processing and exporting this valuable commodity. Here at Remedy we believe we hold the 
              remedy to helping our clients current and future business reach their full potential in the industry.
            </p>
            <ul>
              <li>Remedy Exports covers X amount of acres of plantation to grow Kratom trees.</li>
              <li>Investors purchase interested units equivalent to X number of trees. In total X Kratom trees are planted.</li>
              <li>Plantation returns are aggregated and distributed interest units held.</li>
              <li>Remedy Exports handles the end-to-end management of the Kratom plantation.</li>
              <li>Investors secure high-quality Kratom trees exclusively for their business within the investment period.</li>
            </ul>
            </div>
            </div>
          </section>
          <section className="business-proposal">
            <div className="row">
              <div className="col-lg-6 proposal-pdf">
                <a href="images/pdf/investment-proposal.pdf" target="_blank">
                  <iframe id="iframepdf" src="images/pdf/investment-proposal.pdf"></iframe>
                </a>
              </div>
              <div className="col-lg-6 proposal-text"> 
                <h2>Investment Proposal</h2>
                <p>
                  Download our Investment Proposal and see what we can do for your business.  We have laid out this proposal for interested clients to see what Remedy Exports has to offer to their business.  Why continue to buy your Kratom when you can have your own exclusive supply?  Clients literally watch their investments grow in the origin place of Kratom and where it gets its name from, Thailand!  Kratom grows so fast that clients can get their first harvest within 4 to 6 months.  Once harvest have begun new harvest can happen between 15 to 30 days.  Our clients don’t have to worry about maintaining their supply or quality because harvest are taken from the same trees that are grown with organic fertilizer and organic pesticides.                </p>
              </div>
            </div>
          </section>
          <section className="process-section">
            <h2 className="text-center">Our Process is Simple</h2>
            <div className="process-one d-flex justify-content-center">
                <div className="process-number">01</div>
                <div className="one-content">
                  <h5>Kratom is Dried</h5>
                  <p>Kratom leaves are brought in from the farms and washed, dried, grinded and packaged.</p>
                  <Image src="/images/dried-kratom.jpg" className="d-block w-100" width={500} height={500} alt="dried kratom" />
                </div>
            </div>
            <div className="process-two d-flex justify-content-start">
              <div className="two-content">
                  <h5>Sanitization</h5>
                  <p>The Kratom is then sanitized in our Microwave/UVGI room.</p>
                  <Image src="/images/gamma-treatment.jpg" className="d-block w-100" width={600} height={388} alt="gamma treatment" />
                </div>
                <div className="process-number">02</div>
            </div>
            <div className="process-three d-flex justify-content-center align-items-center">
              <div className="three-content">
                  <h5>Taken to the Port</h5>
                  <p>Kratom is then boxed and palleted and taken to the Laem Chabang port for exportation.</p>
                  <Image src="/images/container-ship.jpg" className="d-block w-100" width={600} height={415} alt="gamma treatment" />
                </div>
                <div className="process-number">03</div>
            </div>
          </section>
          <section className="factory-section">
            <div className="row gy-5">
              <div className="col-md-12 p-2">
                <h2 className="text-center">Our Factory</h2>
                <p>
                  Remedy Exports factory layout was designed with an easy of flow in mind. Starting with shipment of the fresh Kratom leaves going into the raw material room. 
                  Once all the materials have been brought in, they will go to the washing room, and then the drying room. After the leaves have been dried, they will be 
                  taken into the grinding room where we have an industrial grinder that can grind one ton a day. Once grinded the Kratom will be weighed and taken through 
                  to be passed through the microwave sanitization. Then packaged and left-over night under the UVGI for another sanitization. Finally, the Kratom will be 
                  packed in boxes and placed on pallets ready for delivery.<br/><br/>

                </p>
              </div>
              <div className="col-md-6 offset-md-3">
                <Image onClick={() => setOpen(true)} src="/images/factory-sign.jpg" className="d-block w-100" width={650} height={415} alt="gamma treatment" />
              </div>
              <div className="col-md-12 p-2">
                <h2 className="text-center">Testing</h2>
                <p>
                  In Thailand there are a few lab test centers that the government accepts results from. Central Laboratory of Thailand is one of these labs and is where we 
                  have our Kratom tested. The testing methods are done with High Performance Liquid Chromatography (HPLC). This method, validation, and analysis is one of 
                  the most widely used techniques for drug testing in formulations and biological fluids. Also, this method is the most widely used in testing Kratom in 
                  the United States. We do not test our Kratom in house as to avoid any possible questions of unethical practices, and to align with the Thai government 
                  with accredited and accepted lab results.
                </p>
              </div>
            </div>
            


            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={[image1, image2, image3]}
              render={{
                slide: (image, offset, rect) => {
                  const width = Math.round(Math.min(rect.width, (rect.height / image.height) * image.width));
                  const height = Math.round(Math.min(rect.height, (rect.width / image.width) * image.height));

                  return (
                    <div style={{ position: "relative", width, height }}>
                      <Image
                        src={image}
                        layout="fill"
                        loading="eager"
                        placeholder="blur"
                        objectFit="contain"
                        alt={"alt" in image ? image.alt : ""}
                        sizes={
                          typeof window !== "undefined"
                            ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                            : `${width}px`
                        }
                      />
                    </div>
                  );
                }
              }}
            />


          </section>
        </div>
      </div>
    </Layout>
  )
}

export default About;