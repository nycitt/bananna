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
        tagName: 'tr',
        template: '#alerts-config-row'
    });
});