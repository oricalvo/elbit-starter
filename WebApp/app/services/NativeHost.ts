import {appModule} from "../common/appModule";

export class NativeHost {
    constructor(private $q: ng.IQService) {
    }

    getConfig(): ng.IPromise<GridConfiguration> {
        var config: GridConfiguration = {
            columnDefs: [
                {
                    field: 'id',
                },
                {
                    field: 'name',
                },
                {
                    field: 'email',
                },
            ]
        };

        return this.$q.when(config);
    }

    getData(): ng.IPromise<GridConfiguration> {
        var data: any = [
            { id: 1, name: "Ori", email: "ori@gmail.com" },
            { id: 2, name: "Ilana", email: "ori@gmail.com" },
        ];

        return this.$q.when(data);
    }
}

export interface GridConfiguration {
    columnDefs: ColumnConfiguration[];
    data?: any;
}

export interface ColumnConfiguration {
    field: string;
}

appModule.service("nativeHost", [
    "$q",
    NativeHost
]);
