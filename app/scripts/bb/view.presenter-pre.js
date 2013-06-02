define([
    'backbone',
    'plugins/backbone.layoutmanager',
    'bb/view.presenter-controls',
    'bb/view.user-controls',
    'bb/view.alerts-config',
    'bb/view.presentation-config'
],

function(
	Backbone,
	Layout,
	PresenterControls,
	UserControls,
    AlertsConfig,
    PresentationConfig
) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#presenter-pre',
        views: {
        	'.presenter-controls': new PresenterControls(),
        	'.user-controls': new UserControls(),
            '.alerts-config': new AlertsConfig(),
            '.presentation-config': new PresentationConfig()
        }
    });
});