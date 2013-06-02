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
        initialize: function(){
            this.render();
        },
        template: '#alerts-config-row'
    });
});