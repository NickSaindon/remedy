import { useEffect } from 'react';
import Layout from '../components/Layout';
import gsap from 'gsap';

const FAQ = () => {

  useEffect(() => {
    gsap.timeline()
    .from(".page-header-left .faq-img", {transform: 'scaleX(0)', transformOrigin: 'center'})
    .from(".page-header-right h1:nth-child(1)", {y:-100, opacity:0, ease:"back", duration: 1})
    .from(".page-header-right h1:nth-child(2)", {x:-100, opacity:0, ease:"back", duration: 1})
    .set(".page-header-right .bi-arrow-down", {"visibility": "visible"})
    .from(".page-header-right .bi-arrow-down", {opacity:0, ease:"back", duration: 1})
    .delay(1.5) 
}, [])

  return (
    <Layout>
      <div className="faq-container">
        <div className="page-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 page-header-left">
                  <div className="faq-img" />
              </div>
              <div className="col-lg-6 page-header-right text-center">
                <h1>FAQ</h1>
                <h1 style={{marginLeft: "-15px"}}>SK</h1>  
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
                    There are two ways to becoming a vendor with Remedy.  These two ways are either through a Manufacturing Agreement or a Plantation Investment Agreement which Remedy offers to AKA vendors.  Once either one of these agreements are made
                    vendors can register here on this website which we will approve and give access to making orders.
                    <br/><br />
                    If a vendor chooses the Manufactuing Agreement we will source Kratom from platations we have contracted and/or from our own platation in which we will also process through our factory.  If a vendor is actually looking to procure their own
                    Kratom through our Plantation Investment Agreement we will plant and harest the vendors own trees and we will source from the vendors own supply and process it at our factory.  
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
                    This is a great question as the Kratom can be procured in serveral different ways.  The simple answer is from plantations in Thailand.  However, which plantation is really up to the vendor and which
                    option they choose to take.  We can either source the Kratom from plantations we have contracts with, and/or from our own plantation, or from vendors own trees through our Planatation Investment.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseThree" aria-expanded="false" aria-controls="remedyCollapseThree">
                    How is the Kratom processed?
                  </button>
                </h2>
                <div id="remedyCollapseThree" className="accordion-collapse collapse" aria-labelledby="remedyHeadingThree" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    Currently Remedy Expxorts will focus efforts on processing Kratom either by grinding into fine or nano powder.  However, this does not mean Remedy Exports can not produce 
                    extracts, teas or other forms for vendors that are looking to produce a varity of products.
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
                    Remedy can either ship the Kratom by air or by ocean freight.  Depending on the size of the order shipping cost maybe included.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="remedyHeadingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remedyCollapseFive" aria-expanded="false" aria-controls="remedyCollapseFive">
                    How can Remedy Exports Plantation Investment Program help vendors?
                  </button>
                </h2>
                <div id="remedyCollapseFive" className="accordion-collapse collapse" aria-labelledby="remedyHeadingFive" data-bs-parent="#remedyQuestions">
                  <div className="accordion-body">
                    At Remedy Exports we know that supply chain is extremely important when it comes to a finite commodity.  We also know that if it is possible to control a companies own supply that it can be a huge
                    advantage for a business and its growth.  This can increase supply while reducing cost every year.  This is beacuse as the trees grow, they will produce more leaves that 
                    will increase the supply while reducing the reliance of the vendors business on having to buy supply from other plantations.
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
                <h2 className="accordion-header" id="kratomHeadingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#kratomCollapseSix" aria-expanded="false" aria-controls="kratomCollapseSix">
                    What are the different types of Kratom?
                  </button>
                </h2>
                <div id="kratomCollapseSix" className="accordion-collapse collapse" aria-labelledby="kratomHeadingSix" data-bs-parent="#kratomQuestions">
                  <div className="accordion-body">
                    Kratom is not a drug, and not a synthetic substance. Natural Kratom is a safe herbal supplement that is used by millions for pain 
                    management or an energy boost.  Kratom has been used in Southeast Asia for centuries with no reported deaths.              
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