define([
    'backbone',
    'plugins/backbone.layoutmanager',
    'bb/collection.alerts-config',
    'bb/view.alerts-config-row'
],

function(
	Backbone,
	Layout,
	cAlertsConfig,
	AlertsConfigRow
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
        			metric: metric,
        			live_responses: true,
        			alert_threshold: 3
        		});
        	});

        	this.config.on('all', this.render, this);
        },
       	render: function(){
       		var $tbody = this.$('tbody');

       		$tbody.empty();
       		this.config.each(function(metric){
       			var view = new AlertsConfigRow({
       				model: metric
       			});

       			$tbody.append(view.el);
       		});
       	}
    });
});