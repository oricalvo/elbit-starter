/// <reference path="../../typings/index.d.ts" />

import {appModule} from "../common/appModule";
import {NativeHost, GridConfiguration} from "../services/nativeHost";
import "../../lib/ui-grid.js";
import "../../styles/ui-grid.css!css";

export class GridComponent {
    gridOptions: GridConfiguration;
    data: any;

    constructor(private nativeHost: NativeHost) {
        this.nativeHost.getConfig().then(config => {
            this.gridOptions = config;

            this.loadData();
        });
    }

    private loadData() {
        this.nativeHost.getData().then(data => {
            this.gridOptions.data = data;
        });
    }
}

appModule.component("app", {
    controller: [
        "nativeHost",
        GridComponent
    ],
    template: require("./grid.html!text")
});
