define([
    'backbone',
    'plugins/backbone.layoutmanager',
    'bb/collection.alerts-config'
],

function(
	Backbone,
	Layout,
	cAlertsConfig
) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#alerts-config',
        config: new cAlertsConfig(),
        initialize: function(){
        	var metrics = ['dislike', 'elaborate', 'like', 'question'];

        	var config = this.config;
        	
        	_(metrics).each(function(metric){
        		config.add({
        			metric: mertic,
        			live_responses: true,
        			alert_threshold: 3
        		});
        	});

        	this.collection
        }
    });
});