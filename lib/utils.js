'use strict';

const fs = require('fs');
const assert = require('assert');
module.exports = {
    analytic(file) {
        assert(file, 'should pass file');
        const versionMap = new Map();
        const content = fs.readFileSync(file, 'utf-8');
        content.split('\n').forEach(item => {
            const row = item.split('#');
            if (row.length === 2) {
                versionMap.set(row[0], row[1]);
            }
        });
        return versionMap;
    },
};
