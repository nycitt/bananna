define([
    'backbone',
    'plugins/backbone.layoutmanager'
],

function(Backbone) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#user-controls'
    });
});