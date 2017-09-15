'use strict';

module.exports = {
    loadVersion(key) {
        if (this.app.config.env === 'local') {
            return 'dev';
        }
        return this.app.qversion.get(key) || '';
    },
};
