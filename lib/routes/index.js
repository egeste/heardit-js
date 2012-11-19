var _ = require('_')
  , Backbone = require('backbone')

provide('routes/index', Backbone.Route.extend({
  routes: {
    '': 'nop',
    'page/:page': 'nop'
  },
  initialize: function() {
    this.createRoutes()
    this.createModels()
    this.createViews()
    Backbone.history.start({ pushState: true })
  },
  createRoutes: function() {},
  createModels: function() {},
  createViews: function() {},
  nop: function() {}
}))