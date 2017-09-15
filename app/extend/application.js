'use strict';

const QVERSION = Symbol('Application#qversion');
const utils = require('../../lib/utils');
module.exports = {
    get qversion() {
        const { qversion } = this.config;
        if (!this[QVERSION]) {
            this[QVERSION] = utils.analytic(qversion.file);
        }
        return this[QVERSION];
    },
};
