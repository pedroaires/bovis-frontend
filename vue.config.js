const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			
		}
  },
  devServer: {  
    port: 3000
    
  }
})
