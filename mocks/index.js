'use strict'

var app = require('koa')()
var router = require('koa-router')()

router.get('/service-b', function* (next) {
  this.body = 'mock-serviceb-response'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)

console.log('microserviceB listening on 3000')
