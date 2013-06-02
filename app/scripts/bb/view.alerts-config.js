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
        capitaliseFirstLetter: function(string) {
		    return string.charAt(0).toUpperCase() + string.slice(1);
		},
        initialize: function(){
        	var metrics = ['dislike', 'elaborate', 'like', 'question'];

        	var config = this.config;

        	var cap = this.capitaliseFirstLetter;

        	_(metrics).each(function(metric){
        		config.add({
        			metric: metric,
        			metric_label: cap(metric),
        			live_responses: true,
        			alert_threshold: 3
        		});
        	});

  			this.afterRender();
        },
       	afterRender: function(){
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