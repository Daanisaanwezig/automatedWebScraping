const axios =   require("axios");
const cheerio = require("cheerio");
const data =    require("./data.json");

const url =         data.url;
const searching =   data.searching;
let found =         false;

axios.get(url)
.then(async function (response) {
    let $ = cheerio.load(response.data);
    searchWebsite(searching, data.type, $('body'), "$('body')[0]")
})
.catch(function (error) {
    // Is not able to parse the website, throws an error in the console.
    console.log("Something went wrong when trying to retrieve data from the website.")
    console.log(error);
})

function searchWebsite(searching, type, $, code) {
    if (type == "text"  && $.data == searching ||
        type == "class" && $.attribs.class == searching ||
        type == "id"    && $.attribs.id == searching)
    {
        let code;
        if      (type == "text") {code = `.data`}
        else if (type == "class") {code = `.attribs.class`}
        else if (type == "id") {code = `attribs.class`}
        if ($.data == searching)
        {
            found = true;
            reverseEngineer($, code)
            return;
        }
    }
    if ($.children)
    {
        if (found == true) { return ;}
        if (!$.length)
        {
            $.children.forEach(child => {
                searchWebsite(searching, type, child);
            });
        } else {
            for (let i = 0; i < $.length; i++) {
                $[i].children.forEach(child => {
                    searchWebsite(searching, type, child)
                });
            }
        }
    }
}

function reverseEngineer($, code) {
    console.log("$('body')[0]" + code)
    if ($.name == "body") { return code; } else {
        childInParentFinder($, code);
    }
}

function childInParentFinder($, code) {
    let counter = 0;
    $.parent.children.forEach(child => {
        if (child == $)
        {
            code = `.children[${counter}]` + code
        }
        counter++;
    });
    reverseEngineer($.parent, code);
}