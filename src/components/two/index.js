const route = {
    path: 'two',
    
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('./Two'));
        });
    }
};

module.exports = route;