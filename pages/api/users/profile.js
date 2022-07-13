import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken, isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);

handler.put(async (req, res) => {
  await db.connect();
  const user = await User.findById(req.user._id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.companyName = req.body.companyName;
  user.address = req.body.address;
  user.city = req.body.city;
  user.state = req.body.state;
  user.zipCode = req.body.zipCode;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password;
  await user.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    companyName: user.companyName,
    address: user.address,
    city: user.city,
    state: user.state,
    zipCode: user.zipCode,
    isVendor: user.isVendor,
  });
});

export default handler;