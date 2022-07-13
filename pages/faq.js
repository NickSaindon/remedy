import { useEffect } from 'react';
import Layout from '../components/Layout';
import gsap from 'gsap';

const FAQ = () => {

  useEffect(() => {
    gsap.timeline()
    .from(".faq-header-left .faq-img", {transform: 'scaleX(0)', transformOrigin: 'center'})
    .from(".faq-header-right h1:nth-child(1)", {y:-100, opacity:0, ease:"back", duration: 1})
    .from(".faq-header-right h1:nth-child(2)", {x:-100, opacity:0, ease:"back", duration: 1})
    .set(".faq-header-right .bi-arrow-down", {"visibility": "visible"})
    .from(".faq-header-right .bi-arrow-down", {opacity:0, ease:"back", duration: 1})
    .delay(1.5) 
}, [])

  return (
    <Layout>
      <div className="faq-container">
        <div className="faq-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 faq-header-left">
                  <div className="faq-img" />
              </div>
              <div className="col-lg-6 faq-header-right text-center">
                <h1>FAQ</h1>
                <h1>SK</h1>  
                <i className="bi bi-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <h2 className="text-center">Questions About Remedy?</h2>
            <div className="accordion" id="remedyQuestions">
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseOne" aria-expanded="true" aria-controls="remedyCollapseOne">
                    How do I become a vendor for Remedy?
                  </button>
                </h2>
                <div id="remedyCollapseOne" className="accordion-collapse collapse show" aria-labelledby="remedyHeadingOne" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    <strong>This is the first items accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseTwo" aria-expanded="false" aria-controls="remedyCollapseTwo">
                    Where does the Kratom come from?
                  </button>
                </h2>
                <div id="remedyCollapseTwo" className="accordion-collapse collapse" aria-labelledby="remedyHeadingTwo" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    <strong>This is the second items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseThree" aria-expanded="false" aria-controls="remedyCollapseThree">
                    How is the Kratom Shipped?
                  </button>
                </h2>
                <div id="remedyCollapseThree" className="accordion-collapse collapse" aria-labelledby="remedyHeadingThree" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseFour" aria-expanded="false" aria-controls="remedyCollapseFour">
                    How is the Kratom Shipped?
                  </button>
                </h2>
                <div id="remedyCollapseFour" className="accordion-collapse collapse" aria-labelledby="remedyHeadingFour" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseFive" aria-expanded="false" aria-controls="remedyCollapseFive">
                    How is the Kratom Shipped?
                  </button>
                </h2>
                <div id="remedyCollapseFive" className="accordion-collapse collapse" aria-labelledby="remedyHeadingFive" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="text-center">Questions About Kratom?</h2>
            <div className="accordion" id="kratomQuestions">
              <div className="accordion-item">
                <h2 className="accordion-header" id="kratomHeadingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#kratomCollapseOne" aria-expanded="true" aria-controls="kratomCollapseOne">
                    What is Kratom?
                  </button>
                </h2>
                <div id="kratomCollapseOne" className="accordion-collapse collapse show" aria-labelledby="kratomHeadingOne" data-bs-parent="#kratomQuestions">
                  <div className="accordion-body">
                    Kratom is a safe herbal supplement used by millions of Americans to manage pain, or as an alternative to coffee to help 
                    their mood and focus.<br/><br/> 
                    Natural Kratom comes from a tropical tree in the coffee family native to Southeast Asia and has been used for centuries in traditional medicines. 
                    Kratom has been safely used for decades here in the United States, and is becoming increasingly popular because of what it is, and what it isn’t.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="kratomHeadingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kratomCollapseTwo" aria-expanded="false" aria-controls="kratomCollapseTwo">
                    Is Kratom a Drug?
                  </button>
                </h2>
                <div id="kratomCollapseTwo" className="accordion-collapse collapse" aria-labelledby="kratomHeadingTwo" data-bs-parent="#kratomQuestions">
                  <div className="accordion-body">
                    Kratom is not a drug, and not a synthetic substance. Natural Kratom is a safe herbal supplement that is used by millions for pain 
                    management or an energy boost.  Kratom has been used in Southeast Asia for centuries with no reported deaths.              
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="kratomHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kratomCollapseThree" aria-expanded="false" aria-controls="kratomCollapseThree">
                    Has anyone died from using Kratom?
                  </button>
                </h2>
                <div id="kratomCollapseThree" className="accordion-collapse collapse" aria-labelledby="kratomHeadingThree" data-bs-parent="#kratomQuestions">
                  <div className="accordion-body">
                    There has not been a single documented fatality that can be linked
                    to use of the natural kratom plant. The FDA claimed deaths
                    “associated with kratom use” are actually deaths caused by
                    polydrug use, underlying medical conditions, or the use of
                    adulterated kratom products laced with toxic levels of dangerous
                    substances, including opioids. National Institutes on Drug Abuse’s
                    (NIDA) newly-updated conclusions agree that kratom use does not
                    cause overdose deaths.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="kratomHeadingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kratomCollapseFour" aria-expanded="false" aria-controls="kratomCollapseFour">
                    Is Kratom addictive?
                  </button>
                </h2>
                <div id="kratomCollapseFour" className="accordion-collapse collapse" aria-labelledby="kratomHeadingFour" data-bs-parent="#kratomQuestions">
                  <div className="accordion-body">
                    Like coffee, tea, and other caffeinated drinks, consumers can
                    develop a dependency on kratom, which is vastly different from an
                    addiction. Two new scientific studies completely debunk the FDA
                    theory. The Hemby study in June 2018 concluded “MG does not
                    have abuse potential and reduces morphine intake,” and the Yue
                    study in July 2018 reported “limited abuse liability and potential for
                    mitragynine treatment to specifically reduce opioid abuse.” 
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="kratomHeadingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kratomCollapseFive" aria-expanded="false" aria-controls="kratomCollapseFive">
                    Is there propaganda written about Kratom?
                  </button>
                </h2>
                <div id="kratomCollapseFive" className="accordion-collapse collapse" aria-labelledby="kratomHeadingFive" data-bs-parent="#kratomQuestions">
                  <div className="accordion-body">
                    The FDA has unfairly demonized kratom since 2009, and filled the information pipeline with inaccurate, distorted, and, in some cases, completely false information.<br/><br/>
                    The FDA claims Kratom is an opioid with the same opioid effects. That is completely untrue. Kratom’s alkaloids are what are known as partial agonists, which means they do hit 
                    the same mu-opioid receptors in the brain as actual opioids, but kratom does not suppress the respiratory system which is the primary cause of overdoses. The pharmacology of 
                    Kratom’s alkaloids is <strong>vastly</strong> different than opioids.<br/><br/>
                    The FDA claims kratom is highly addictive. That is not accurate. While some may develop a dependency, the gold standard for assessing the addiction liability of any substance 
                    are animal studies. When NIDA saw the inaccurate death data promoted by the FDA, they conducted to independent animal studies to see if kratom had the requisite addiction 
                    liability to support a scheduling recommendation to the Drug Enforcement Administration under the Controlled Substances Act.  Both studies concluded there was no significant 
                    addiction liability. Of significant interest, both studies also observed the test animals showed a reduction in cravings for the reference drug used in the study, which in 
                    this case was heroin.<br/><br/>
                    That explains why NIDA has now funded nearly $15 million in studies on kratom as a potential non-addictive pain option to opioids.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;