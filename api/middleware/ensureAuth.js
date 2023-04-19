const { jwt } = require('../config/jwt');

exports.ensureAuth = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: skip go and miss a turn' });
    }
    try {
      const info = await jwt.verify(token, process.env.jwtSecret,{});
      req.user = info;
      next();
    } catch (err) {
      console.log(err)
      return res.status(401).json({ error: 'Unauthorized' });
    }
  }
  