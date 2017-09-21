'use strict';

module.exports = {
    loadVersion(project, key) {
        if (this.app.config.env === 'local') {
            return 'dev';
        }

        // prod 环境
        const versionsMap = this.app.qversion;
        if (arguments.length === 2) {
            if (!versionsMap.has(project)) {
                throw new Error(`[egg-qversion] 不存在 ${project} 配置,请检查 config.qversion 配置.`);
            }

            if (!versionsMap.get(project).has(key)) {
                throw new Error(`[egg-qversion] ${key} 文件不存在,请检查 ${project} 项目下 versions.mapping 文件.`);
            }
            return versionsMap.get(project).get(key);
        }

        // 从 default 路径中找
        key = project;
        if (!versionsMap.get('default').has(key)) {
            throw new Error(`[egg-qversion] ${key} 文件不存在,请检查 default 路径下 versions.mapping 文件.`);
        }
        return versionsMap.get('default').get(key);
    },
};
