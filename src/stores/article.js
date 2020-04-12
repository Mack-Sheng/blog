import {action, observable} from 'mobx'

const index = 0;

class Article {
    @observable list
    
    constructor() {
        this.list = [];
    }

    @action add() {
        this.list.push({
            title: `test ${++index}`
        });
    }
}

const articleStore = new Article();
export {articleStore}