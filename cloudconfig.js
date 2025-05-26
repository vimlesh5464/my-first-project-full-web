const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Load credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Create storage engine
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: 'wonderlust-dev',
      allowed_formats: ['jpeg', 'png', 'jpg'],
      public_id: Date.now() + '-' + file.originalname.replace(/\s+/g, '-'), // avoids undefined filename
    };
  },
});

module.exports = {
  cloudinary,
  storage,
};
