const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ["src/style/variables.less", "src/style/mixins.less"] //изменилась данная строчка
    }
  }
})
