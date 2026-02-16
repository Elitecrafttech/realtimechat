import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});
// cloudinary.config({
//   cloud_name: 'djxpvtp4y',
//   api_key: '983851633392697',
//   api_secret: 'yGXzn_iTFZoPHn3FWMG4XnmDWQY',
//   secure: true
// });


export default cloudinary;