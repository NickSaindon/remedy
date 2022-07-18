import { useEffect } from 'react';
import Layout from '../components/Layout';
import gsap from 'gsap';
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

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
    <Layout>
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
                Remedy is an export business that specializes in the shipment of Thai Kratom to vendors in the US. It is owned and operated
                by two American brothers.  One that lives in Thailand and one that lives in the United States. After much research this 
                opportunity presented itself in the Kratom trees that grow in humid and tropical locations like the forest across Southeast 
                Asia. Currently the only two countries that export Kratom are Indonesia and Thailand.  However, Thailand has now opened its market for
                Kratom domestically and internationally, where much talk from the Indonesian government has occured about closing off the export of its Kratom.
                <br/><br/>  
                Our goal is to ship quality Kratom that is safe from any metals, bacteria, and that is grown naturally without the useage of any pesticides.  
                Remedy only looks to ship to vendors that are members of the AKA (American Kratom Association).  This is to maintain a realationsip 
                that is based on trust in the quality of the product we ship.  Furthermore, we work with the vendors that are members of 
                the AKA because they have committed to the AKA Good Manufacturing Practices program and we are commited to producing a higher quality product 
                that is superior to others.
                <br/><br/> 
                Another goal of Remedy is to help meet the needs of all the vendors we work with.  We do this by doing the pain stacking research of all the different 
                processing methods and how we can get the full alkaloids and componds from the Kratom leaf.  We can process the Kratom in a varity of ways such as 
                fine powder, nano powder, extracts, brews, and teas.    
                <br/><br/>
                Remedy is located in the district of Bang Kapong which is in the providence of Chachoengsao.  Chachoengsao is where our facory is located 
                and where we process the Kratom.  Right now we can ground the Kratom either as fine powder or nano powder.  Remedy may offer resin or teabags in the future.
              </p>
              <h2 className="text-center">Plantation Investment</h2>
              <p>
                The aim of this plantation investment is to provide our clients with high-quality Kratom that is exclusively procured for their company’s needs.  We look to 
                support the needs of our clients through our land leasing initiative that will facilitate the end-to-end agricultural harvesting of Kratom in the local market. 
                Working with our local partnerships to expand our clients supply and demand in the US and the world market.  Our approach is to implement a scaleable solution with 
                a proactive approach to problem solving that keeps business cost low, and creates room for expansion for our clients.  We understand that our client's business 
                and future business needs should be functional, efficient and proactive solutions to procurement, processing and exporting their valuable commodities. Here at Remedy 
                we believe we hold the the remedy to helping our clients current and future business reach their full potential in the industry.
              </p>
              <ul>
                <li>Remedy Exports covers X amount of acres of plantation to grow Kratom trees.</li>
                <li>Investors purchase interested units equivalent to X number of trees. In total X Kratom trees are planted.</li>
                <li>Plantation returns are aggregated and distributed interest units held.</li>
                <li>Remedy Exports handles the end-to-end management of the Kratom plantation.</li>
                <li>Investors secure high-quality Kratom trees exclusively for their business within the investment period.</li>
              </ul>
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
                  <h5>Gamma Treated/Sanitized</h5>
                  <p>The Kratom is taken to another facility to be gamma treated/sanitized.</p>
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