module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f4e1eff60ab32df2ca3d72ca96f7a474'),
    },
  },
  cron: {
    enabled: true
  }
});
