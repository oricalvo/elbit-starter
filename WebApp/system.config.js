System.config({
    baseURL: "",
    defaultJSExtensions: true,
    transpiler: false,
    buildCSS: false,

    meta: {
        "angular": {
            "format": "global",
            "exports": "angular",
        },
    },

    map: {
        "angular": "lib/angular.js",
        "css": "lib/css.js",
        "text": "lib/text.js",
    }
});

if(typeof window !== "undefined") {
    window.PREVENT_IMPORT_REMOVE = function (x) {
    }
}
