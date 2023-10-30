/* 
cat:  https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg
dog:  https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg
bird: https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg
fish: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H7Yb30u3WF_hq9nJR5qV8kecf0mUhJoDnA&usqp=CAU
*/
///. Could use "const" to link directly to the image instead of typing out all the code below.///
//. also you can just change the link and not change the code if you use "const".///
function showCat() {
    document.querySelector("#image-demo").src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg"
};

function showDog() {
    // your code here...
    //1. Go into the dom and grab the img element 
    document.querySelector("#image-demo").src="https://kb.rspca.org.au/wp-content/uploads/2018/11/golder-retriever-puppy.jpeg"
    //2. Change its source attribute to point to the dog img url
};

function showBird() {
    // your code here...
    document.querySelector("#image-demo").src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg"};

function showFish() {
    // your code here...
     document.querySelector("#image-demo").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H7Yb30u3WF_hq9nJR5qV8kecf0mUhJoDnA&usqp=CAU"};

