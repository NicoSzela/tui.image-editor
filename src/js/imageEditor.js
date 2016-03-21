'use strict';

var MainView = require('./view/main'),
    Broker = require('./broker');

var ImageEditor = tui.util.defineClass({
    init: function(wrapper) {
        /**
         * Components broker
         * @type {Broker}
         */
        this.borker = new Broker();

        /**
         * Main view
         * @type {MainView}
         */
        this.mainView = new MainView(this.borker);
        $(wrapper).append(this.mainView.getElement());
    }
});

module.exports = ImageEditor;
