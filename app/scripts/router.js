/* global define */

define([
    // Application.
    'backbone',

    //Views
    'bb/view.observer-pre',
    'bb/view.observer',
    'bb/view.presenter-pre'
],

function(
    Backbone,
    ObserverPreView,
    ObserverView,
    PresenterPreView,
    PreseneterView
) {
    'use strict';
    // Defining the application router, you can attach sub routers here.
    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'presenter': 'presenter'
        },

        index: function() {
            var view = new ObserverView({
                el: $('#main')
            });

            view.render();
        },

        presenter: function(){
            var view = new PresenterPreView({
                el: $('#main')
            });

            view.render();
        }
    });

    return Router;
});

