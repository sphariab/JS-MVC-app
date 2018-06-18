function PaginationView(controller, authorList){
    var self = this;
    this.controller = controller;
    this.paginationContainer = document.createElement("span");
    this.paginationContainer.classList.add("pagination");

    this.prevBtn = document.createElement("button");
    this.nextBtn = document.createElement("button");
    this.prevBtn.classList.add("prev");
    this.nextBtn.classList.add("next");

    this.countContainer  = document.createElement("span");
    self.countContainer.innerHTML = '1 - 10';

    this.paginationContainer.appendChild(this.prevBtn);
    this.paginationContainer.appendChild(this.countContainer);
    this.paginationContainer.appendChild(this.nextBtn);

    this.start = self.controller.startCounter;


    document.querySelector(".main").appendChild(this.paginationContainer);

    this.nextBtn.addEventListener("click", function(event) {

        authorList.clearListAuthors();
        self.authors = controller.getNextAuthors();
        authorList.renderAuthors(self.authors);
        var end = self.controller.startCounter + 10;
        self.countContainer.innerHTML = self.controller.startCounter + " " + "-" + " " + end;
    });

    this.prevBtn.addEventListener("click", function(event) {


        authorList.clearListAuthors();
        self.authors = controller.getPrevAuthors();
        authorList.renderAuthors(self.authors);
        var end = self.controller.startCounter + 10;
        self.countContainer.innerHTML = self.controller.startCounter + " " + "-" + " " + end;
    });
}
