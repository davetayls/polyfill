/*jslint browser: true, vars: true, white: true, forin: true, indent: 4 */
/*global define,require */
(function(){
    'use strict';
    
    var dependencies = [];

    // JSON
    if (typeof window.JSON === 'undefined') {
        dependencies.push('./json2');
    }
    // history
    dependencies.push('./history.adapter.jquery');
    dependencies.push('./history');
    if (!Modernizr.history) {
        dependencies.push('./history.html4');
    }

    define(dependencies);

}());
