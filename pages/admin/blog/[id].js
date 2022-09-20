import axios from 'axios';
import Layout from '../../../components/Layout'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useContext, useReducer, useState } from 'react';
import { getError } from '../../../utils/error';
import { Store } from '../../../utils/Store';
import { Controller, useForm } from 'react-hook-form';
import SideNav from '../../../components/SideNav';
import { ToastContainer, toast, Slide } from "react-toastify";

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
}

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
  
  // Quill Modules
const modules = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
  
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
  },
};

// Quill format
const formats = [
  'bold', 
  'italic', 
  'underline', 
  'strike',
  'blockquote',
  'code-block',
  'header',
  'list',
  'bullet',
  'script',
  'indent',
  'direction',
  'size',
  'color',
  'font',
  'align',
  'link',
  'image',
  'video',
];

const BlogEdit = ({ params }) => {
  const blogId = params.id;
  const { state } = useContext(Store);
  const [{ loading, error, loadingUpdate }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { userInfo } = state;
  const [published, setIsPublished] = useState(false);
  
  useEffect(() => {
    if (!userInfo) {
      return router.push('/login');
    } else {
      const fetchData = async () => {
        try {
          dispatch({ type: 'FETCH_REQUEST' });
          const { data } = await axios.get(`/api/admin/blogs/${blogId}`, {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          setIsPublished(data.published);
          dispatch({ type: 'FETCH_SUCCESS' });
          setValue('title', data.title);
          setValue('headerImage', data.headerImage);
          setValue('description', data.description);
          setValue('author', data.author);
          setValue('article', data.article);
          setValue('slug', data.slug);
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
        }
      };
        fetchData();
    }
  }, []);
  
  const uploadHandler = async (e, imageField = 'headerImage') => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/admin/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`,
        },
      });
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      
      alert('File uploaded successfully');
      toast.success("File uploaded successfully", {
        theme: "colored"
      });
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });

      alert('File uploaded Error');
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  };
    
  const submitHandler = async ({
    title,
    headerImage,
    description,
    author,
    article,
    slug
  }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
      `/api/admin/blogs/${blogId}`,
        {
          title,
          headerImage,
          description,
          author,
          article,
          published,
          slug
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      );
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success("Blog post updated successfully", {
        theme: "colored"
      });
      router.push('/admin/blogs');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err), {
        theme: "colored"
      });
    }
  };

  return (
    <Layout title={`Edit Blog Post ${blogId}`}>
      <div className="blog-edit-container">
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
            <div className="col-lg-3">
              <SideNav />
            </div>
            <div className="col-lg-9">
              <div className="card blog-edit-card">
                <div className="card-body">
                  <h2 className="card-title text-center">Blog Post Edit {blogId}</h2>
                  {loading && 
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  }
                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>                    
                  )}
                  <form 
                    onSubmit={handleSubmit(submitHandler)}
                    className="col-lg-6 col-md-12 col-sm-12 form-blog-post-edit justify-content-center" 
                    noValidate
                  >
                    <div className="form-floating">
                      <Controller
                        name="title"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <input 
                            type="text" 
                            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                            id="title" 
                            placeholder="Title" 
                            {...field}
                          />
                        )}
                      />
                      <div className="invalid-feedback">
                        { errors.name ? 'Title is required' : '' }
                      </div>
                      <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-floating">
                      <Controller
                        name="headerImage"
                        control={control}
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <input 
                            className={`form-control ${errors.headerImage ? 'is-invalid' : ''}`}
                            id="headerImage" 
                            placeholder="Header Image" 
                            {...field}
                          />
                        )}
                      />
                      <div className="invalid-feedback">
                        { errors.headerImage ? 'Header image is required' : '' }
                      </div>
                      <label htmlFor="headerImage">Header Image</label>
                      <div className="file btn btn-lg btn-primary">
                        Upload
                        <input onChange={uploadHandler} type="file" name="file" />
                      </div>
                    </div>
                    <div className="form-floating">
                      <Controller
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <input 
                            type="text" 
                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                            id="description" 
                            placeholder="Description" 
                            {...field}
                          />
                        )}
                      />
                      <div className="invalid-feedback">
                        { errors.description ? 'Description is required' : '' }
                      </div>
                      <label htmlFor="description">Description</label>
                    </div>
                    <div className="form-floating">
                      <Controller
                        name="author"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <input 
                            type="text" 
                            className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                            id="author" 
                            placeholder="Author" 
                            {...field}
                          />
                        )}
                      />
                      <div className="invalid-feedback">
                        { errors.author ? 'Author is required' : '' }
                      </div>
                      <label htmlFor="author">Author</label>
                    </div>
                    <div className="form-floating">
                      <Controller
                        name="article"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                        <QuillNoSSRWrapper
                          modules={modules}
                          formats={formats}
                          theme="snow"
                          onChange={(content) => {
                            // var htmlToRtf = require('html-to-rtf');
                            console.log('CONTETN: ', content);
                          }}
                          {...field}
                        />
                        )}
                      />
                      <div className="invalid-feedback">
                        { errors.article ? 'Article is required' : '' }
                      </div>
                    </div>
                    <div className="form-floating">
                      <Controller
                        name="slug"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                        }}
                        render={({ field }) => (
                          <input 
                            type="text" 
                            className={`form-control ${errors.slug ? 'is-invalid' : ''}`}
                            id="slug" 
                            placeholder="Slug" 
                            {...field}
                          />
                        )}
                      />
                      <div className="invalid-feedback">
                        { errors.slug ? 'Slug is required' : '' }
                      </div>
                      <label htmlFor="slug">Slug</label>
                    </div>
                    <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="gridCheck" 
                        onClick={(e) => setIsPublished(e.target.checked)}
                        checked={published}
                        name="published"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Published
                      </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Edit</button>
                    {loadingUpdate && 
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  return {
    props: { params },
  };
}
  
export default dynamic(() => Promise.resolve(BlogEdit), { ssr: false });