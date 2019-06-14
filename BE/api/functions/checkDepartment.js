module.exports = function(req, res, next) {
    if (req.user && req.params.name) {
    const department = req.params.name

    if (req.user.department && req.user.department.toLowerCase() === department) {
        next();
    } else {
        res.status(403).json({ message: "You are not in the correct department to view this information." });
    }
    } else {
    res.status(401).json({ message: 'Error' });
    }
};