import Layout from '../components/Layout';
import Image from "next/image";
import Link from 'next/link'
import {useEffect} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    // // get the element
    // const text = document.querySelector('.typing-text');

    // // make a words array
    // const words = [
    //   'Looking for quality Kratom?',
    //   'Then look no further!',
    //   'Remedy is an manufacturing and export company that has what you need.',
    // ];

    // // start typing effect
    // setTyper(text, words);

    // function setTyper(element, words) {
    //   const LETTER_TYPE_DELAY = 75;
    //   const WORD_STAY_DELAY = 2000;
    //   const DIRECTION_FORWARDS = 0;
    //   const DIRECTION_BACKWARDS = 1;

    //   let direction = DIRECTION_FORWARDS;
    //   let wordIndex = 0;
    //   let letterIndex = 0;
    //   let wordTypeInterval;

    //   const startTyping = () => {
    //     wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
    //   }

    //   startTyping();



    //   function typeLetter() {
    //     const word = words[wordIndex];

    //     if (direction == DIRECTION_FORWARDS) {
    //       letterIndex++;
    //       if (letterIndex == word.length) {
    //         direction = DIRECTION_BACKWARDS;
    //         clearInterval(wordTypeInterval);
    //         setTimeout(startTyping, WORD_STAY_DELAY);
    //       }
    //     } else if (direction == DIRECTION_BACKWARDS) {
    //       letterIndex--;
    //       if (letterIndex == 0) {
    //         nextWord();
    //       }
    //     }
    //     const textToType = word.substring(0, letterIndex);
    //     element.textContent = textToType;
    //   }

    //   function nextWord() {

    //     letterIndex = 0;
    //     direction = DIRECTION_FORWARDS;
    //     wordIndex++;

    //     if (wordIndex == words.length) {
    //       wordIndex = 0;
    //     }
    //   }
    // }

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
    <Layout 
      title="Home Page" 
      description="Remedy Exports is a wholesale export brokerage for Asian produce from Thailand to US and Europe vendors.  We handle logistics from farm to exportation.">
      <div class="error-page-wrap">
        <article class="error-page gradient">
          <hgroup>
            <h1>Oops!</h1>
            <h2>Site is Temporarily Being Fixed</h2>
          </hgroup>
        </article>
      </div>
    </Layout>
  );
};

export default Home;