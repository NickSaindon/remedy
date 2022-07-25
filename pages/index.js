import Layout from '../components/Layout';
import Image from "next/image";
import Link from 'next/link'
import {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    // get the element
    const text = document.querySelector('.typing-text');

    // make a words array
    const words = [
      'Looking for quality Kratom?',
      'Then look no further!',
      'Remedy is an export company that can get what you need.',
    ];

    // start typing effect
    setTyper(text, words);

    function setTyper(element, words) {
      const LETTER_TYPE_DELAY = 75;
      const WORD_STAY_DELAY = 2000;
      const DIRECTION_FORWARDS = 0;
      const DIRECTION_BACKWARDS = 1;

      let direction = DIRECTION_FORWARDS;
      let wordIndex = 0;
      let letterIndex = 0;
      let wordTypeInterval;

      const startTyping = () => {
        wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
      }

      startTyping();



      function typeLetter() {
        const word = words[wordIndex];

        if (direction == DIRECTION_FORWARDS) {
          letterIndex++;
          if (letterIndex == word.length) {
            direction = DIRECTION_BACKWARDS;
            clearInterval(wordTypeInterval);
            setTimeout(startTyping, WORD_STAY_DELAY);
          }
        } else if (direction == DIRECTION_BACKWARDS) {
          letterIndex--;
          if (letterIndex == 0) {
            nextWord();
          }
        }
        const textToType = word.substring(0, letterIndex);
        element.textContent = textToType;
      }

      function nextWord() {

        letterIndex = 0;
        direction = DIRECTION_FORWARDS;
        wordIndex++;

        if (wordIndex == words.length) {
          wordIndex = 0;
        }
      }
    }

      gsap.timeline()
      .from(".header-left .slider", {transform: 'scaleX(0)', transformOrigin: 'center'})
      .from(".header-right .logo", {y:-100, opacity:0, ease:"back", duration: 1})
      .from(".header-right .typing-text", {opacity:0, ease:"back", duration: 1})
      .delay(1.5);

      gsap.timeline({scrollTrigger:{
        trigger:".about-section",
        start:"top 85%",
        toggleActions:"restart none none reset",
      }})
      .from(".about-left h2", {y:-100, opacity:0, ease: 1, duration: 0.3})
      .from(".about-left p", {opacity:0, ease: 1, duration: 0.5})
      .from(".about-left button", {y:-100, opacity:0, ease: 1, duration: 0.3})
      .from(".about-right img", {x: 100, opacity: 0, ease: 1, duration: 0.2})

      gsap.timeline({scrollTrigger:{
        trigger:".product-section",
        start:"top 85%",
        toggleActions:"restart none none reset",
      }})
      .from(".featured h2", {y:-100, opacity:0, ease: 1, duration: 0.3})
      .from(".featured p", {opacity:0, ease: 1, duration: 0.5})

      gsap.to(".product-left", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".product-section",
          scrub: true
        }, 
      });
      
      gsap.to(".giant-text", {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start:"top 85%",
          scrub: true
        }, 
      });

      gsap.to(".product-right", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".product-section",
          scrub: true
        }, 
      });

      gsap.to(".product-right .leaf-img", {
        xPercent: -10,
        rotation: 40,
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".product-section",
          scrub: true
        }, 
      });

      gsap.to(".product-left .leaf-img", {
        xPercent: 10,
        rotation: -200,
        ease: "none",
        scrollTrigger: {
          trigger: ".product-cont",
          scrub: true
        }, 
      });

      gsap.to(".faq-left h1:nth-child(1)", {
        xPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".faq-section",
          start:"top 50%",
          scrub: true
        }, 
      });

      gsap.to(".faq-left h1:nth-child(2)", {
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".faq-section",
          start:"top 50%",
          scrub: true
        }, 
      });

  }, []);

  return (
    <Layout>
      <div id="page" className="home-container">
        <div id="content" className="site-content">
          <div className="header-container">
            <header>
              <div className="conatiner-fluid">
                <div className="row">
                  <div className="col-lg-6 header-left">
                    <ul className="slider">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 header-right">
                    <div className="logo">
                      <Image src="/images/remedy_exports_logo.png" width={350} height={350} alt="..." />
                    </div>
                    <h1 className="typing-text text-center"></h1>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <section className="about-section">
          <div className="about">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-8 col-md-12 col-sm-12 about-left">
                  <h2>What About Remedy?</h2>
                  <p>
                    Remedy is a company that Manufactures Kratom through many different processes for vendors to sell in the market.  Our goal is to ship 
                    quality Kratom that is safe from any metals, bacteria, and that is grown naturally without the useage of any non organic pesticides.
                    The word Kratom is actually a Thai word that means "Hut" because of the shape of the tree and the word Maeng Da in Thai means "Horseshoe Crab" which 
                    is used to describe the shape of the top of the leaf.  
                    <br /><br />
                    Most of the world’s Kratom originates from Thailand. The humid air, 
                    and the acidic soil is rich in all the right nutrients making it the perfect place for the Kratom tree to grow.  This is also why Remedy offers to its vendors 
                    an opportunity of a lifetime with our <b>Plantation Investment Program</b>. This opportunity enables vendors to secure their own supply of Kratom tress that 
                    we plant and harest solely for their company needs. Remedy is a company dedicated to mainting quiality which is why we have chosen to work with AKA members who are also
                    committed to the furture of Kratom and all the people it can truly help. 
                  </p>
                  <Link href="/about" passHref>
                    <button type="button" className="btn btn-link">See Who We Are <i className="bi bi-arrow-right"></i></button>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 about-right">
                  <Image src="/images/kratom-leaf.png" className="d-block w-100" width={500} height={500} alt="..." />
                  <div className="giant-text">FE</div>
                </div>
              </div>
            </div>
            <section className="product-section">
              <div className="container">
                <div className="row featured">
                  <div className="col-lg-8 col-md-12">
                    <h2>Featured Products</h2>
                    <p>
                      Check out some of the products we have to offer.  We offer an array of Kratom to can suit all of your needs.  Quality all natural Kratom that is grown in Thailand.  
                      Become a vendor today and start ordering Kratom from a completely new market that has yet to be explored. 
                    </p>
                  </div>
                </div>
                <div className="row g-lg-5 g-md-1">
                  <div className="col-lg-6 col-md-12 col-sm-12 product-left align-items-center">
                    <h2>Meang Da</h2>
                    <Image src="/images/maeng-da-red1.jpg" className="d-block w-100" width={500} height={500} alt="..." />
                    <p>Maeng Da kratom was developed in Thailand in the early 1900’s.  This strain was developed to help alleviate muscle pain while still providing an energizing effect.</p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 align-items-center text-center product-right">
                    <div className="leaf-img">
                      <Image src="/images/leaf.png"  width={250} height={160}  alt="..." />
                    </div>
                    <h2>Kan Dang</h2>
                    <Image src="/images/gan-dang2.jpg" className="d-block w-100" width={500} height={500} alt="..." />
                    <p className="text-left"> Is the more potent of the smaller kratom, tends to be mildly sedating, relaxing and pleasant to the user, with pain relief qualities. </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="product-cont">
          <div className="container">
            <div className="row g-lg-5 g-md-1">
              <div className="col-lg-6 col-md-12 col-sm-12 product-left">
                <h2>Tang Qua</h2>
                <Image src="/images/tang-qua1.jpg" className="d-block w-100" width={500} height={500} alt="..." />
                <p>Tang Qua are white veined leaves that are picked at the earlier stages of their maturity.  These leaves tend to be energizing, uplifting and focusing to the user.</p>   
                <div className="leaf-img">
                  <Image src="/images/leaf.png"  width={250} height={160}  alt="..." />
                </div>           
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-center product-right">
                <h2>Lion Tong (Golden Coin)</h2>
                <Image src="/images/leon-tong1.jpg" className="d-block w-100" width={500} height={500} alt="..." />
                <p>Effects are between red and white vein kratom, giving energy and pain relieve.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 faq-left">
                <h1>GET</h1>
              <h1>STARTED</h1>
              </div>
              <div className="col-lg-6 col-md-12 faq-right">
                <div className="faq-content">
                  <h1>Register</h1>
                  <p>If you are a Vendor of Kratom and your company is a member of the AKA then look no further.
                    We produce high quality Kratom from Thailand.  Get your Maeng Da or tradiotional green, white 
                    or red veins as well as 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section">
          <div className="container px-4">
                  <div className="row gx-4 justify-content-center">
                      <div className="col-lg-8">
                          <Image src="/images/paper-airplane.png" width={100} height={100} alt="..." />
                          <h2 className="text-center">Contact Us Today</h2>
                          <p>
                            Have more question?  Then don't hesitate to contact us today so we can answer those question in full, and tell you about some of our programs and
                            different products.  Things to know:   
                          </p>
                          <ul>
                              <li>Click the button and lets start a discussion today.</li>
                              <li>If you are ready to get started then click on login and then the register link to register.</li>
                              <li>Once your registration has been approved Vendors will be able to start making orders.</li>
                              <li>Still not sure, then contact us and we can setup an online meeting to discuss it.</li>
                          </ul>
                          <div className="d-flex justify-content-center p-3">
                          <Link href={`/contact`} passHref>

                          <button type="button" className="btn btn-outline-primary light">Contact Us</button>

                          </Link>
                          </div>
                      </div>
                  </div>
              </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;