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
        template: '#alerts-config-row',
        initialize: function(){
            this.render();
        }
    });
});