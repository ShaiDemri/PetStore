const headerExtractor = (req, res, next) => {
    const {id,name}=req.headers;
    req.ctx = {
        id,
        name
    };
    next();
};

module.exports = {
  headerExtractor
};