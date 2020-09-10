 
export class DataMessageModel {
    icon: any;
    labelTitile: string;
    textDescription: string;
    status: any;
    dataModel: any;
    screen: any;
    button: any;
    error: any;

    constructor() {
        this.icon = '';
        this.labelTitile = '';
        this.status = '';
        this.textDescription = '';
        this.dataModel = '';
        this.screen = '';
        this.button = false;
        this.error = '';
    }
}
