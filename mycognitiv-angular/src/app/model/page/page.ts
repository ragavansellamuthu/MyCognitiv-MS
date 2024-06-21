export class Page {

    pageIndex !: number ;
    pageSize !: number ;
    attributeName !: string ;
    sortOrder !: string ;
    searchText !: string ;

    pageSizes !: number[] ;
    totalCount !: number ;
    totalPages !: number ;

    constructor(){
       debugger 
        this.pageSizes = [5,10,15];
        this.totalCount = 0;
        this.totalPages = 0;

        this.pageIndex= 0;
        this.pageSize = this.pageSizes[0];
        this.attributeName = '';
        this.sortOrder = '';
        this.searchText = '';
    }

}
