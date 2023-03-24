import { useState, useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import axios from 'axios';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { ToastContainer, toast, Slide } from "react-toastify";

const Login = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const router = useRouter();
  const { redirect } = router.query;
  const { state, dispatch } = useContext(Store);
  const { userInfo, error } = state;
  const [ hasError, setHasError ] = useState(false);

  useEffect(() => {
    if (userInfo) {
      router.push('/login');
    }
  }, []);
 

  const submitHandler = async ({email, password}) => {
    try {
      const { data } = await axios.post('/api/users/login', {
        email, 
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      router.push(redirect || '/');
    } catch (err) {
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  }

  return (
    <Layout 
      title="Login"
      description="Remedy Exports is a wholesale export brokerage for Asian produce from Thailand to US and Europe vendors.  We handle logistics from farm to exportation.">
      <div className="login-container text-center">
        <main className="form-signin">
          <div className="row justify-content-md-center">
            <ToastContainer 
              position="top-center" 
              draggable={false} 
              transition={Slide} 
              autoClose={5000}
              hideProgressBar={true}
              className="toast-alert"
            />
            <form onSubmit={handleSubmit(submitHandler)} className="col-lg-4 col-md-12 col-sm-12 needs-validation" noValidate>
              <Image src="/images/remedy_exports_logo.png" width={150} height={145} alt=""/>
              <h1 className="h3 mb-3 fw-normal">Please Signin</h1>
              <p>* If you don&apos;t have an account please click the register link below.</p>
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
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 6
                  }}
                  render={({ field }) => (
                    <input 
                      type="password" 
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password" 
                      placeholder="Password" 
                      {...field}
                    />
                  )}
                />
                  <div className="invalid-feedback">
                    {errors.password
                          ? errors.password.type === 'minLength'
                            ? 'Password is more than 5'
                            : 'Password is required'
                          : ''
                    }
                  </div>
                <label htmlFor="password">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-outline-primary light" type="submit">Sign in</button>
              <p className="mt-5 mb-3 text-muted">
                Don&apos;t have an account? &nbsp;
                <Link href={`/register?redirect=${redirect || '/'}`} passHref>
                  <a>Register</a>
                </Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Login;