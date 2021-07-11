// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "@/scss/_variables.scss";`
        },
      }
    }
  }