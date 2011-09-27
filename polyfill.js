/*jslint browser: true, vars: true, white: true, forin: true, indent: 4 */
/*global define,require,Modernizr */
(function(){
    'use strict';
    
    var dependencies = [];

    // JSON
    if (typeof window.JSON === 'undefined') {
        dependencies.push('./json/json2');
    }

    // html5 history
    dependencies.push('order!./history/scripts/compressed/history.adapter.jquery');
    dependencies.push('order!./history/scripts/compressed/history');

    if (!Modernizr.history) {
        dependencies.push('order!./history/scripts/compressed/history.html4');
    }

    define(dependencies);

}());
