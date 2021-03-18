export default class SearchModel {

    constructor() {

        this.fields = []
        this.pageIndex = 1;
        this.pageSize = 10;
        this.orderField = ''
        this.isAsc = false
    }

    addField(name, value) {

        this.fields.push({ name, value, queryMethod: 'eq' })
    }


}