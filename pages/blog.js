import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import db from '../utils/db';
import Blog from '../models/Blog';
import gsap from 'gsap';
import moment from 'moment';

const Blogs = (props) => {
  const { blogs } = props;

  useEffect(() => {
    gsap.timeline()
    .from(".page-header-left .blog-img", {transform: 'scaleX(0)', transformOrigin: 'center'})
    .from(".page-header-right h1:nth-child(1)", {y:-100, opacity:0, ease:"back", duration: 1})
    .from(".page-header-right h1:nth-child(2)", {x:-100, opacity:0, ease:"back", duration: 1})
    .set(".page-header-right .bi-arrow-down", {"visibility": "visible"})
    .from(".page-header-right .bi-arrow-down", {opacity:0, ease:"back", duration: 1})
    .delay(1.5);
  }, [])

  return (
    <Layout 
      title="Blog Page"
      description="Remedy Exports is a Thai based manufacture and export company that works with clients to procure the best Thai Kratom.  We handle the end-to-end process to supply quality Kratom that is safe from any 
      metals, bacteria, and that is grown naturally without the usage of any non-organic pesticides or fertilizers.">
      <div className="blogs-container">
        <div className="page-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 page-header-left">
                <div className="blog-img" />
              </div>
              <div className="col-lg-6 page-header-right text-center">
                <h1>Blog</h1> 
                <h1 style={{marginTop: "35px", marginBottom: "35px"}}>Post</h1>  
                <i className="bi bi-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-2">
            {blogs.filter(blog => blog.published === true).map((blog) => (
              <div className="col-md-12 blog-card" key={blog._id}>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0">{blog.title}</h3>
                    <div className="mb-1 text-muted">{moment(blog.createdAt).format('MM/DD/YYYY')}</div>
                    <p className="card-text mb-auto">{blog.description}</p>
                    <Link 
                      key={blog.title}
                      href={`/blog/${blog.slug}`} 
                      passHref
                    >
                      <a className="stretched-link">Continue reading</a>
                    </Link>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <div className="blog-img" style={{backgroundImage: `url(${blog.headerImage})`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Blogs;

export async function getServerSideProps() {
  await db.connect();
  const blogs = await Blog.find({}).lean();
  await db.disconnect();
  return {
    props: {
      blogs: blogs.map(db.convertDocToObj)
    }
  }
}