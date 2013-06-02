define([
    'backbone',
    'plugins/backbone.layoutmanager',
    'bb/view.observer-controls',
    'bb/view.presentation-info',
    'bb/view.user-controls'
],

function(
	Backbone,
	Layout,
	ObserverControls,
	PresentationInfo,
	UserControls
) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#observer',
        views: {
        	'.observer-controls': new ObserverControls(),
        	'.presentation-info': new PresentationInfo(),
        	'.user-controls': new UserControls()
        }
    });
});