import axios from 'axios';
import Layout from '../../components/Layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useContext, useReducer } from 'react';
import Link from 'next/link'
import SideNav from '../../components/SideNav';
import { getError } from '../../utils/error';
import { Store } from '../../utils/Store';
import { ToastContainer, toast, Slide } from "react-toastify";
import moment from 'moment';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, blogs: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}

const AdminBlogs = () => {
  const { state } = useContext(Store);
  const router = useRouter();
  const { userInfo } = state;
  
  const [
    { loading, error, blogs, loadingCreate, successDelete, loadingDelete },
      dispatch,
  ] = useReducer(reducer, {
    loading: true,
    blogs: [],
    error: '',
  });

  useEffect(() => {
    if (!userInfo.isAdmin) {
      router.push('/login');
    }
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/blogs`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const createHandler = async () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `/api/admin/blogs`,
        {},
        {
          headers: { authorization: `Bearer ${userInfo.token}` },
        }
      );
        dispatch({ type: 'CREATE_SUCCESS' });
        toast.success("Blog created successfully", {
          theme: "colored"
        });
        router.push(`/admin/blog/${data.blog._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  };
    
  const deleteHandler = async (blogId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/blogs/${blogId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success("Blog deleted successfully", {
        theme: "colored"
      });
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  };

  return (
    <Layout title="Blogs">
      <div className="blogs-container">
        <ToastContainer 
          position="top-center" 
          draggable={false} 
          transition={Slide} 
          autoClose={3000}
          hideProgressBar={true}
          className="toast-alert"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              <SideNav />
            </div>
            <div className="col-lg-10">
              <div className="card admin-blog-card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="card-title text-center">Blog Post List</h1>
                      {loadingDelete && 
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      }
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button 
                        type="button" 
                        className="btn btn-lg btn-outline-primary float-end light"
                        onClick={createHandler}
                      >
                        Create Blog Post
                      </button>
                      {loadingCreate && 
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      }
                    </div>
                  </div>
                  <div className="product-list-table">
                    {loading ? (
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : error ? (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    ) : (
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">DATE</th>
                            <th scope="col">AUTHOR</th>
                            <th scope="col">PUBLISHED</th>
                            <th scope="col">ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs.map((blog) => (
                            <tr key={blog._id}>
                              <td>{blog._id.substring(20, 24)}</td>
                              <td>{blog.title}</td>
                              <td>{moment(blog.createdAt).format('MM/DD/YYYY')}</td>
                              <td>{blog.author}</td>
                              <td>{blog.published ? 'Yes' : 'No'}</td>

                              <td className="table-actions">
                                <Link href={`/admin/blog/${blog._id}`} passHref>
                                  <button 
                                    type="button" 
                                    className="btn btn-primary"
                                  >
                                    Edit
                                  </button>
                                </Link>
                                <button 
                                  type="button" 
                                  className="btn btn-danger"
                                  onClick={() => deleteHandler(blog._id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
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

export default dynamic(() => Promise.resolve(AdminBlogs), { ssr: false });
