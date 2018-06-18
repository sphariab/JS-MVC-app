function AuthorView(author, index){
    this.author = document.createElement("li");
    this.authorImage = document.createElement("span");
    this.authorImage.classList.add("author-image");

    this.authorImage.innerHTML = author.name[0];

    this.author.classList.add("author-item");
    this.authorImage.style.backgroundColor = generateRandomBg();

    this.authorCounter = document.createElement("span");
    this.authorCounter.classList.add("author-counter");
    this.authorCounter.innerHTML = index;

    this.authorName = document.createElement("p");
    this.authorName.classList.add("author-name");
    this.authorName.innerHTML = author.name;

    this.authorPublic = document.createElement("p");
    this.authorPublic.innerHTML = author.count_pub + " " + "публ.";
    this.authorPublic.classList.add("author-public");

    this.authorContainer = document.createElement("span");
    this.authorContainer.classList.add("author-container");

    this.authorPageViews = document.createElement("span");
    this.authorPageViews.classList.add("author-views");
    this.authorPageViews.innerHTML = author.pageviews;

    this.author.appendChild(this.authorCounter);
    this.author.appendChild(this.authorImage);
    this.authorContainer.appendChild(this.authorName);
    this.authorContainer.appendChild(this.authorPublic);
    this.author.appendChild(this.authorContainer);

    if (author.topPlace) {
        this.topImage = document.createElement("img");
        this.topImage.classList.add("author-topImage");
        if(author.topPlace === '1') {
            this.topImage.src = "public/images/medals/1st.svg";
        } else if (author.topPlace === '2') {
            this.topImage.src = "public/images/medals/2nd.svg";
        } else if (author.topPlace === '3') {
            this.topImage.src = "public/images/medals/3rd.svg";
        }

        this.author.appendChild(this.topImage);
    }

    this.author.appendChild(this.authorPageViews);


     function generateRandomBg (){
        return "#"+((1<<24)*Math.random()|0).toString(16)
    }


    return  this.author
}