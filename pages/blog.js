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
      <main>
        <ul id="scene" 
          data-friction-x="0.1"
          data-friction-y="0.1"
          data-scalar-x="25"
          data-scalar-y="15"
          data-limit-y="50"
          className="scene">
          <li className="layer" data-depth="0.40">
            <div className="content">
              <h1 id="title">Site Launching Soon!</h1>
              <p>We are working hard on our awesome new website. Stay Tuned!</p>
            </div>
          </li>
          <li className="layer" data-depth="1.00">
            <div className="footer"></div>
          </li>
          <li className="layer" data-depth="0.65">
            <div className="cloud-back">
              <img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/rocket_cloud_back.svg" alt="Site Launching Soon!" />
            </div>
          </li>
          <li className="layer" data-depth="0.70">
            <div className="rocket">
              <img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/rocket.svg" alt="Site Launching Soon!" />
            </div>
          </li>
          <li className="layer" data-depth="0.75">
            <div className="cloud-front">
              <img src="https://res.cloudinary.com/jasonheecs/image/upload/v1480353347/construction/rocket_cloud_front.svg" alt="Site Launching Soon!" />
            </div>
          </li>
        </ul>
      </main>
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