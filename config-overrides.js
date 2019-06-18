const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@primary-color': '#F05537', '@secondary-color': '#1F8CF1' },
 }),
);
