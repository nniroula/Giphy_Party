
API_KEY = "H2l1HvsLctcEDaDXua3TlnlnnZcBtbN8"
base_url = "api.giphy.com/v1/gifs/search"
/*
random_gif_search = "api.giphy.com/v1/gifs/random"
search_suggestion = "api.giphy.com/v1/tags/related/{term}" // term is string
*/

function giffyCall(){
const giphy_call = axios.get(`http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=H2l1HvsLctcEDaDXua3TlnlnnZcBtbN8`);
// xhr.done(function(data) { console.log("success got data", data); });
console.log(giphy_call)
}
giffyCall()
/*
http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym.

*/

//get div to hald gif from html file, use jQuery as by api too
let $placeToholdGif = $("#gifHere")
// user input for searching a gif
let $userInput = $("#gifSearch")

function getGif(response){
    // how many gifs to search to get the correct one
    let searchCount = response.data.length;       // not my idea
    // if length is greater than 0
    if (searchCount){
        // to generate random gif
        let randIndex = Math.floor(Math.random() * searchCount);
        let $gifHolder = $("<div>");    // not my concept
        $newGif = $("<img", {
            src: response.data[randIndex].images.original.url,
            class: "w-100"       
        });
        $gifHolder.append($newGif);
        $placeToholdGif.append($gifHolder);
    }
}

$("form").on("submit", async function(event){
    event.preventDefault();
    let findGif = $userInput.val();
    let resp = await axios.get(base_url, {
        params: {
            q: findGif,
            api_key: API_KEY
        }
    });
    getGif(resp.data);      // Not my idea
});

$("#getRid").on("click", function(){
    $placeToholdGif.empty();
})
