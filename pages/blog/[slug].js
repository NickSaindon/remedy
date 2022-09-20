import Blog from '../../models/Blog';
import Layout from '../../components/Layout';
import Link from 'next/link';
import db from '../../utils/db';
import moment from 'moment';
import parse from 'html-react-parser';

const BlogPost = (props) => {
  const { blog } = props;

  return (
    <Layout title="Blog Post Page">
      <div className="blog-post-container">
        <div className="container">
          <div className="row">
            <Link 
              href={'/blog'} 
              passHref
            >
              <a>
                <i class="bi bi-arrow-left"></i>
                <span>Back to Blogs</span>
              </a>
            </Link>
            <div className="blog-post-header">
              <h1>{blog.title}</h1>
              <div className="text-muted fst-italic mb-2">Posted on {moment(blog.createdAt).format('LL')} by {blog.author}</div>
              <div className="blog-header-img" style={{backgroundImage: `url(${blog.headerImage})`}}></div>
            </div>
          </div>
          <div className="row">
            <div className="blog-post ql-snow ql-editor">
              <p>{parse(blog.article)}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost; 

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const blog = await Blog.findOne({slug}).lean();
  await db.disconnect();
  return {
    props: {
      blog: db.convertDocToObj(blog)
    }
  };
}