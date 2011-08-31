/*jslint browser: true, vars: true, white: true, forin: true, indent: 4 */
/*global define,require,Modernizr */
(function(){
    'use strict';
    
    var dependencies = [];

    // requestAnimationFrame
    if (!window.requestAnimationFrame) {
        dependencies.push('./requestAnimationFrame.js');
    }
    // JSON
    if (typeof window.JSON === 'undefined') {
        dependencies.push('./json/json2');
    }
    // history
    dependencies.push('./history/scripts/uncompressed/history.adapter.jquery');
    dependencies.push('./history/scripts/uncompressed/history');
    if (!Modernizr.history) {
        dependencies.push('./history/scripts/uncompressed/history.html4');
    }

    define(dependencies);

}());
