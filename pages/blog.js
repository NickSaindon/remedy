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
      description="Remedy Exports is a wholesale export brokerage for Asian produce from Thailand to US and Europe vendors.  We handle logistics from farm to exportation.">
      <div class="error-page-wrap">
        <article className="error-page gradient">
          <hgroup>
            <h1>Oops!</h1>
            <h2>Site is Temporarily Being Fixed</h2>
          </hgroup>
        </article>
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