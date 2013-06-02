define([
    'backbone',
    'plugins/backbone.layoutmanager',
    'bb/model.presentation-config',

],

function(
	Backbone
	Layout,
	mPresentationConfig
) {
    'use strict';
  
    return Backbone.Layout.extend({
        template: '#presentation-config',
        initialize: function(){

        }
    });
});