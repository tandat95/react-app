
import { decorate, observable, action, autorun, computed } from "mobx";
export class HomeStore {

    count = 0;

    increase() {
        this.count++;
    }

    get isCountOver3() {
        return this.count > 3;
    }

    showAlert = autorun(() => {
        if (this.count > 4) alert('test autorun');
    })
}

decorate(HomeStore, {
    count: observable,
    increase: action,
    isCountOver3: computed
});
