import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { useState, useContext, useEffect } from 'react';
import StateOptions from "../utils/stateOptions";
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { Controller, useForm } from 'react-hook-form';
import Layout from '../components/Layout';

const Shipping = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [states, setStates] = useState("");
  const stateOption = StateOptions.states;

  useEffect(() => {
    if (!userInfo.isVendor && !userInfo.isAdmin) {
      router.push('/login');
    }
  }, []);

  const submitHandler = ({ fullName, address, city, state, zipCode }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, state, zipCode },
    });
    Cookies.set('shippingAddress', {
      fullName,
      address,
      city,
      state,
      zipCode,
      location,
    });
    if (userInfo.isVendor) {
      router.push('/payment');
    } else {
      router.push('/placeorder');
    }
  };

  return (
    <Layout>
      <div className="shipping-container text-center">
        <h1> Shipping Address</h1>
        <main className="form-shipping">
          <div className="container">
            <div className="row justify-content-md-center">
              <form onSubmit={handleSubmit(submitHandler)} className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-floating">
                  <Controller
                    name="fullName"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: true,
                      minLength: 2,
                    }}
                    render={({ field }) => (
                      <input 
                        type="text" 
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName" 
                        placeholder="Full Name" 
                        {...field}
                      />
                    )}
                  />
                  <div className="invalid-feedback">
                    {
                      errors.fullName
                      ? errors.fullName.type === 'minLength'
                      ? 'Full Name length is more than 1'
                      : 'Full Name is required'
                      : ''
                    }
                  </div>
                  <label htmlFor="name">Full Name</label>
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
                    {
                      errors.address
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
                    {
                      errors.city
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
                    {
                      errors.state
                      ? 'State is required'
                      : ''
                    }
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
                    {
                      errors.zipCode
                        ? errors.zipCode.type === 'minLength'
                          ? 'Zip Code length is more than 1'
                          : 'Zip Code is required'
                        : ''
                    }
                  </div>
                  <label htmlFor="address">Zip Code</label>
                </div>
                <button className="w-100 btn btn-lg btn-outline-primary light" type="submit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Shipping;