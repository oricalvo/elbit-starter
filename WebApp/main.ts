/// <reference path="globals.d.ts" />

import {appModule} from "./app/common/appModule";
import {NativeHost} from "./app/services/nativeHost"; PREVENT_IMPORT_REMOVE(NativeHost);
import {GridComponent} from "./app/components/grid"; PREVENT_IMPORT_REMOVE(GridComponent);

init();

function init() {
    var element = document.getElementById("html");
    if (!element) {
        console.error("Root element was not found");
        return;
    }

    angular.bootstrap(element, [appModule.name], {
        strictDi: true,
    });
}
