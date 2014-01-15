_            = require 'underscore'
Backbone     = require 'backbone'
Order        = require '../../../models/order.coffee'
ShippingForm = require('./shipping_form.coffee').ShippingForm
CheckoutForm = require('./checkout_form.coffee').CheckoutForm
sd           = require('sharify').data

module.exports.OrderRouter = class OrderRouter extends Backbone.Router

  routes:
    'order/checkout' : 'checkout'
    'order'          : 'shipping'

  shipping: -> new ShippingForm(model: new Order(sd.ORDER), el: $('#order-page'), success: -> window.location = '/order/checkout')
  checkout: -> new CheckoutForm(model: new Order(sd.ORDER), el: $('#order-page'), success: -> window.location = '/order/complete')

module.exports.init = ->
  new OrderRouter
  Backbone.history.start(pushState: true)
