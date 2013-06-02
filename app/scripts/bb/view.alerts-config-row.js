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
        },
        render: function(){
            console.log(this.template);
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});