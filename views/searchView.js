function SearchView(controller, authorList){
    var self = this;
    this.controller = controller;
    this.search = document.getElementById("search");

    this.search.addEventListener("keyup", function(event) {
        event.preventDefault();
        // Number 13 is the "Enter" key on the keyboard

        if (event.keyCode === 13) {
            self.findAuthor(event.target.value);
        }
    });

    this.findAuthor = function (name) {
        authorList.clearListAuthors();
        self.authors = this.controller.findAuthor(name);
        authorList.renderAuthors(self.authors)
    };

}
