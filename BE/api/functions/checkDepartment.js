module.exports = function(department) {
    return function(req, res, next) {
      if (req.user) {
        if (req.user.department && req.user.department.includes(department)) {
          next();
        } else {
          res.status(403).json({ message: "You are not in the correct department to view this information." });
        }
      } else {
        res.status(401).json({ message: 'Error' });
      }
    };
  };