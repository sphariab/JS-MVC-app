function Controller(model){
    var self = this;
    this.model = model;
    this.startCounter = 0;
    this.endCounter = 9;

    this.getAuthors = function(){
        return self.model.getAuthors();
    };

    this.authors = this.getAuthors();

    markTopAuthors();

    this.getNextAuthors = function () {

        if (this.endCounter < self.model.authors.length) {
            this.startCounter = this.startCounter + 10;
            this.endCounter = this.endCounter + 10;
        }

        return this.paginateAuthors(this.startCounter, this.endCounter);
    };

    this.getPrevAuthors = function (){

        if (this.startCounter > 0) {
            this.startCounter = this.startCounter - 10;
            this.endCounter = this.endCounter - 10;
        }

        return this.paginateAuthors(this.startCounter, this.endCounter);
    };

    this.findAuthor = function(name){
        var result;

        if (name) {
            result = this.authors.filter(function(author) {
                return author.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
            });

        } else {
            result = this.authors;
        }

        return result;
    };

    this.paginateAuthors = function(startNum, endNum) {
        var result;

        result = this.authors.filter(function(author, index) {
            if (index >= startNum && index <= endNum) {
                return author
            }
        });

        return result;
    };

    function markTopAuthors () {
        var sortedAuthors = self.authors.slice();
        sortedAuthors.sort(function (a, b) {
            return b.pageviews - a.pageviews
        }).slice(0,3);

        self.authors.map(function(item, index){
            item.name === sortedAuthors[0].name ? item.topPlace = '1' :
                item.name === sortedAuthors[1].name ? item.topPlace = '2' :
                    item.name === sortedAuthors[2].name ? item.topPlace = '3' :
                        item.topPlace = false;
        });
    }
}