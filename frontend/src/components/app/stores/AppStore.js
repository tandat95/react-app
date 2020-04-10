import { decorate, observable } from "mobx";
import { HomeStore } from "./HomeStore";

class AppStore {
    constructor() {
        this.homeStore = new HomeStore(this);
    }
}

decorate(AppStore, {

});

export default new AppStore();
