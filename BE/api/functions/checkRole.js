module.exports = function(role) {
    return function(req, res, next) {
      if (req.user) {
        console.log('string', req.user.role.includes('it'))
        if (req.user.role && req.user.role.includes(role)) {
          next();
        } else {
          res.status(403).json({ message: "You are not in the correct role to view this information." });
        }
      } else {
        res.status(401).json({ message: 'Error' });
      }
    };
  };