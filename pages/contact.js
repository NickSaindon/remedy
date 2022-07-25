import { useEffect, useState, useContext } from 'react';
import Layout from '../components/Layout';
import Image from "next/image";
import { Controller, useForm } from 'react-hook-form';
import gsap from 'gsap';
import NumberFormat from "react-number-format"
import { Store } from '../utils/Store';
import axios from 'axios';
import MessageBox from '../components/MessageBox';
import { ToastContainer, toast, Slide } from "react-toastify";

const Contact = () => {
  const { handleSubmit, control, formState: { errors }, reset } = useForm();
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
      gsap.timeline()
      .from(".page-header-left .contact-img", {transform: 'scaleX(0)', transformOrigin: 'center'})
      .from(".contact-header-right h1:nth-child(1)", {y:-100, opacity:0, ease:"back", duration: 1})
      .from(".contact-header-right h1:nth-child(2)", {x:-100, opacity:0, ease:"back", duration: 1})
      .set(".contact-header-right .bi-arrow-down", {"visibility": "visible"})
      .from(".contact-header-right .bi-arrow-down", {opacity:0, ease:"back", duration: 1})
      .delay(1.5) 
  }, []);

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };
    const response = await axios(config);

    try {
      if (response.status == 200) {
        reset();
        toast.success("Your email has been sent and we will get back to you soon", {
          theme: "colored"
        });
      }
    } catch(err) {
      if (response.status == 500) {
        toast.error("Opps, something went wrong and your email was not sent.  Please try again!", {
          theme: "colored"
        });
      }
    }
  }

  return (
    <Layout title="Contact Page">
      <div className="contact-container">
        <ToastContainer 
          position="top-center" 
          draggable={false} 
          transition={Slide} 
          autoClose={8000}
          hideProgressBar={true}
          className="toast-alert"
        />
        <div className="page-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 page-header-left">
                <div className="contact-img" />
              </div>
              <div className="col-lg-6 contact-header-right text-center">
                <h1>CONTACT</h1>
                <h1>US</h1>  
                <i className="bi bi-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-contact">
          <div className="row justify-content-md-center ">
            <form onSubmit={handleSubmit(onSubmitForm, phone, setPhone)} 
              className="col-lg-4 col-md-12 col-sm-12 text-center needs-validation" noValidate>
              <Image src="/images/remedy_exports_logo.png" width={150} height={145} alt=""/>
                  <h1 className="h3 mb-3 fw-normal">Contact Us</h1>
                  <p>Have questions about Remedy then send us a message and we will get back to you.</p>
                  <div className="form-floating">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field }) => (
                    <input 
                      type="text" 
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name" 
                      placeholder="Full Name" 
                      {...field}
                    />
                  )}
                />
                <div className="invalid-feedback">
                  {
                    errors.name
                      ? errors.name.type === 'minLength'
                        ? 'Name length is more than 1'
                        : 'Name is required'
                      : ''
                  }
                </div>
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-floating">
                <Controller 
                  name="phone"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b$/
                    ,
                  }}
                  render={({ field: {name, onChange = (e) => setPhone(e.target.value), value = phone}}) => (
                    <NumberFormat
                      format="(###) ###-####"
                      name={name}
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      value={value}
                      id="phone" 
                      placeholder="Phone Number" 
                      onChange={onChange}
                    />
                  )}
                />
                <div className="invalid-feedback">
                    {errors.phone
                          ? errors.phone.type === 'pattern'
                            ? 'Phone number is not completed'
                            : 'Phone number is required'
                          : ''
                    }
                </div>
                <label htmlFor="floatingInput">Phone Number</label>
              </div>
              <div className="form-floating">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  }}
                  render={({ field }) => (
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email" 
                      placeholder="name@example.com" 
                      {...field}
                    />
                  )}
                />
                <div className="invalid-feedback">
                  {errors.email
                      ? errors.email.type === 'pattern'
                          ? 'Email is not valid'
                          : 'Email is required'
                      : ''
                  }
                </div>
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-floating">
                <Controller 
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 2,
                  }}
                  render={({ field }) => (
                    <textarea 
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message" 
                      placeholder="Message goes here" 
                      row="5"
                      {...field}
                    ></textarea>

                  )}
                />
                <div className="invalid-feedback">
                  {
                    errors.message
                      ? errors.message.type === 'minLength'
                        ? 'Message length is more than 1'
                        : 'Message is required'
                      : ''
                  }
                </div>
                <label htmlFor="message">Message</label>
              </div>
              <button className="w-100 btn btn-lg btn-outline-primary light" type="submit">
                Submit Message
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;