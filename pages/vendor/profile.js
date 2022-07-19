import axios from 'axios';
import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { getError } from '../utils/error';
import { Store } from '../../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import StateOptions from '../../utils/stateOptions';
import NumberFormat from 'react-number-format';
import SideNav from '../../components/SideNav';
import { ToastContainer, toast, Slide } from "react-toastify";

const Profile = () => {
  const { state, dispatch } = useContext(Store);
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { userInfo } = state;
  const [states, setStates] = useState("");
  const stateOption = StateOptions.states;

  useEffect(() => {
    if (!userInfo) {
    return router.push('/login');
    }

    setValue('name', userInfo.name);
    setValue('email', userInfo.email);
    setValue('phone', userInfo.phone);
    setValue('companyName', userInfo.companyName);
    setValue('address', userInfo.address);
    setValue('city', userInfo.city);
    setValue('state', userInfo.state);
    setValue('zipCode', userInfo.zipCode);
  }, []);
  const submitHandler = async ({ name, email, phone, companyName, address, city, state, zipCode, password, confirmPassword }) => {
    if (password !== confirmPassword) {
      toast.error("Passwords don't match", {
        theme: "colored"
      });
      return;
    }
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          email,
          phone,
          companyName,
          address,
          city,
          state,
          zipCode,
          password,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      toast.success('Profile updated successfully', {
        theme: "colored"
      });
    } catch (err) {
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  };

  return (
    <Layout>
      <div className="profile-container">
        <ToastContainer 
          position="top-center" 
          draggable={false} 
          transition={Slide} 
          autoClose={3000}
          hideProgressBar={true}
          className="toast-alert"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <SideNav />
            </div>
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">Profile</h1>
                  <div className="profile-form-container">
                    <form 
                      onSubmit={handleSubmit(submitHandler)} 
                      className="col-lg-4 col-md-12 col-sm-12 form-profile justify-content-center" 
                    >
                      <div className="form-floating">
                        <Controller
                          name="name"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
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
                          { errors.name ? 'Name is required' : '' }
                        </div>
                        <label htmlFor="name">Full Name</label>
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
                          name="phone"
                          control={control}
                          rules={{
                            required: true,
                            pattern: /^\(?\b[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}\b$/,
                          }}
                          render={({ field: {onChange, name, value} }) => (
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
                          name="companyName"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                            minLength: 2,
                          }}
                          render={({ field }) => (
                            <input 
                              type="text" 
                              className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                              id="companyName" 
                              placeholder="Company Name" 
                              {...field}
                            />
                          )}
                        />
                        <div className="invalid-feedback">
                          {errors.companyName
                            ? errors.companyName.type === 'minLength'
                            ? 'Company Name length is more than 1'
                            : 'Company Name is required'
                            : ''
                          }
                        </div>
                        <label htmlFor="companyName">Company Name</label>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="address"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                            minLength: 2,
                          }}
                          render={({ field }) => (
                            <input 
                              type="text" 
                              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                              id="address" 
                              placeholder="Address" 
                              {...field}
                            />
                          )}
                        />
                        <div className="invalid-feedback">
                          {errors.address
                            ? errors.address.type === 'minLength'
                            ? 'Address length is more than 1'
                            : 'Address is required'
                            : ''
                          }
                        </div>
                        <label htmlFor="address">Address</label>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="city"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                            minLength: 2,
                          }}
                          render={({ field }) => (
                            <input 
                              type="text" 
                              className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                              id="city" 
                              placeholder="City" 
                              {...field}
                            />
                          )}
                        />
                        <div className="invalid-feedback">
                          {errors.city
                            ? errors.city.type === 'minLength'
                            ? 'City length is more than 1'
                            : 'City is required'
                            : ''
                          }
                        </div>
                        <label htmlFor="city">City</label>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="state"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field }) => (
                            <select 
                              defaultValue='DEFAULT'
                              className={`form-select ${errors.state ? 'is-invalid' : ''}`} 
                              onChange={(e) => setStates(e.target.value)}
                              value={states}
                              {...field}
                            >
                              <option disabled value="DEFAULT">Select a State</option>
                              {stateOption.map((state) => (
                                <option key={state.value} value={state.value}>{state.label}</option>
                              ))}
                            </select>
                          )}
                        />
                        <div className="invalid-feedback">
                          { errors.state ? 'State is required' : '' }
                        </div>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="zipCode"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: true,
                            minLength: 2,
                          }}
                          render={({ field }) => (
                            <input 
                              type="text" 
                              className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                              id="zipCode" 
                              placeholder="Zip Code" 
                              {...field}
                            />
                          )}
                        />
                        <div className="invalid-feedback">
                          {errors.zipCode
                            ? errors.zipCode.type === 'minLength'
                            ? 'Zip Code length is more than 1'
                            : 'Zip Code is required'
                            : ''
                          }
                        </div>
                        <label htmlFor="address">Zip Code</label>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="password"
                          control={control}
                          defaultValue=""
                          rules={{
                            validate: (value) =>
                              value === '' ||
                              value.length > 5 ||
                              'Password length is more than 5',
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
                            ? 'Password length is more than 5'
                            : ''
                          }
                        </div>
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="form-floating">
                        <Controller
                          name="confirmPassword"
                          control={control}
                          defaultValue=""
                          rules={{
                          validate: (value) =>
                            value === '' ||
                            value.length > 5 ||
                            'Password length is more than 5',
                        }}
                          render={({ field }) => (
                            <input 
                            type="password" 
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            id="confirmPassword" 
                            placeholder="Confirm Password" 
                            {...field}
                            />
                          )}
                        />
                        <div className="invalid-feedback">
                          {errors.confirmPassword
                            ? 'Confirm Password length is more than 5'
                            : ''
                          }
                        </div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                      </div>
                      <button className="w-100 btn btn-lg btn-primary" type="submit">Update</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
