const route = {
    path: 'home',
    
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Home'));
        });
    }
};

module.exports = route;