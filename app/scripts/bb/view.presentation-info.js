define([
    'backbone',
    'plugins/backbone.layoutmanager'
],

function(Backbone) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#presentation-info'
    });
});