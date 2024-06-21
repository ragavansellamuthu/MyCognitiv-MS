export class Page {

    pageIndex !: number ;
    pageSize !: number ;
    attributeName !: string ;
    sortOrder !: string ;
    searchText !: string ;
    totalCount !: number ;
    totalPages !: number ;

    constructor(){
       debugger 
        this.totalCount = 0;
        this.totalPages = 0;
        this.pageIndex= 0;
        this.pageSize = 6;
        this.attributeName = '';
        this.sortOrder = '';
        this.searchText = '';
    }

}
