import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import Blog from '../../../../../models/Blog';
import db from '../../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const blog = await Blog.findById(req.query.id);
  await db.disconnect();
  res.send(blog);
});

handler.put(async (req, res) => {
  await db.connect();
  const blog = await Blog.findById(req.query.id);
  if (blog) {
    blog.title = req.body.title;
    blog.headerImage = req.body.headerImage;
    blog.description = req.body.description;
    blog.author = req.body.author;
    blog.article = req.body.article;
    blog.published = req.body.published;
    blog.slug = req.body.slug;
    await blog.save();
    await db.disconnect();
    res.send({ message: 'Blog Post Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Blog Post Not Found' });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const blog = await Blog.findById(req.query.id);
  if (blog) {
    await blog.remove();
    await db.disconnect();
    res.send({ message: 'Blog Post Deleted' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Blog Post Not Found' });
  }
});

export default handler;