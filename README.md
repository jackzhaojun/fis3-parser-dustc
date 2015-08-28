# fis3-parser-dustc
基于fis3的dust.js模板预编译插件

    // fis3配置
    fis.match('*.dust', {
         parser: fis.plugin('dustc'),
         rExt: '.js'
    });
