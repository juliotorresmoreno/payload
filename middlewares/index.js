

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
function resolveMiddleware(req, res, next) {
    res.json({
        headers: req.headers,
        query: req.query,
        body: req.body,
    });
}

module.exports = {
    resolveMiddleware
};
