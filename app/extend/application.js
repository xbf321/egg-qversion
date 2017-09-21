'use strict';

const QVERSION = Symbol('Application#qversion');
const fs = require('fs');
const assert = require('assert');

function analytic(app, config) {

    assert(config.default, 'should pass qversion.default');

    const versionMap = new Map();
    for (const key in config) {
        try {
            const content = readFile(config[key]);
            versionMap.set(key, content);
        } catch (err) {
            throw new Error(`[egg-qversion] 找不到 ${key}: '${config[key]}' 路径,请检查 config.qversion.`);
        }
    }
    return versionMap;
}

function readFile(file) {
    const versionMap = new Map();
    const content = fs.readFileSync(file, 'utf-8');
    content.split('\n').forEach(item => {
        const row = item.split('#');
        if (row.length === 2) {
            versionMap.set(row[0], row[1]);
        }
    });
    return versionMap;
}

module.exports = {
    get qversion() {
        const { qversion } = this.config;
        if (!this[QVERSION]) {
            this[QVERSION] = analytic(this, qversion);
        }
        return this[QVERSION];
    },
};
