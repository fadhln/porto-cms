module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c34276c4cc2019a4c64352e0de960af'),
  },
});
