/**
 * @file   编译dust文件
 * @author 赵军 zhaojunbest@126.com
 * @date 15/8/28  23:01
 */
"use strict";
var dust = require('dustjs-linkedin');
module.exports = function (content, file, conf) {
    content = dust.compile(content, file.moduleId);
    return content;
}