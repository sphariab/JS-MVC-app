function AuthorListView(controller){
    var self = this;

    this.controller = controller;
    this.authors = this.controller.getAuthors();

    this.authorsContainer = document.createElement("ul");
    this.authorsContainer.classList.add("author-list");

    document.querySelector(".main").appendChild(this.authorsContainer);

    this.startCounter = self.controller.startCounter;
    this.endCounter = self.controller.endCounter;

    this.renderAuthors = function (authors) {
        authors.forEach(function(author, index){
            if (index >= self.startCounter && index <= self.endCounter) {
                var authorView = new AuthorView(author, index);

                self.authorsContainer.appendChild(authorView);
            }
        });
    };

    this.clearListAuthors = function () {
        var authorList = document.querySelectorAll("li");
        authorList.forEach(function (item){
            self.authorsContainer.removeChild(item);
        });

    };


    this.renderAuthors(this.authors);
}
