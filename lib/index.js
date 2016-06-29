'use strict'

const app = require('koa')()
const router = require('koa-router')()
const request = require('request-promise')

router.get('/service-b', function* (next) {
  const serviceCResponse = yield request.get(process.env.MICROSERVICEC_ENDPOINT + '/service-c')
  this.body = '(' + ['service-b-response', serviceCResponse].join(',') + ')'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)

console.log('microserviceB listening on 3000')
