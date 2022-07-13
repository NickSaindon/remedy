import  mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        companyName: { type: String, required: true },
        address: { type: String, required: true },
        city:  { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
        isVendor: { type: Boolean, required: true, default: false },
    }, 
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;