define([
    'backbone',
    'plugins/backbone.layoutmanager'
],

function(
	Backbone,
	Layout
) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#observer-controls'
    });
});