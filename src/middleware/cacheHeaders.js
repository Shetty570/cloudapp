const cacheHeaders = (req, res, next) => {
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    if (req.method !== 'GET') {
      return res.status(405).send();
    }
    next();
  };
  
  export default cacheHeaders;