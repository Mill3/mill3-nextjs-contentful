module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/project/:slug': { page: '/project' },
    }
  }
}