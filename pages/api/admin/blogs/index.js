import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Blog from '../../../../models/Blog';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const blogs = await Blog.find({});
  await db.disconnect();
  res.send(blogs);
});

handler.post(async (req, res) => {
  await db.connect();
  const newBlog = new Blog({
    title: 'New Blog Post',
    headerImage: '/images/kratom.jpg',
    description: 'Article description goes here',
    author: 'Author goes here',
    article: 'Start creating a new blog post here',
    published: false,
    slug: 'sample-slug-' + Math.random()
  });

  const blog = await newBlog.save();
  await db.disconnect();
  res.send({ message: 'Blog Post Created', blog });
});

export default handler;