function main(){
    var model = new Model();
    var controller = new Controller(model);
    var view = new AuthorListView(controller);
    var searchView = new SearchView(controller, view);
    var paginationView = new PaginationView(controller, view)
}

window.onload = main;
