// Read Synchrously
var fs = require("fs");
console.log("\n *START* \n");
var contents = fs.readFileSync("skp.json");

var jsonContents = JSON.parse(contents);

function getCategory(data) {
    if ( data.length == 0 ) {
        return false;
    }
    data.forEach(category => {
        if ( category.categories.length>0 ) {
            console.log('category.id', category.id);
            console.log('category.name', category.name);
            console.log('category.description', category.description);
            console.log('category.categories.length', category.categories.length);

            getCategory(category.categories);
        }
    });
}

if  ( jsonContents.code == 200 ) {
    console.log('Success!!');

    console.log('jsonContents.result.id', jsonContents.result.id);
    console.log('jsonContents.result.name', jsonContents.result.name);
    console.log('jsonContents.result.description', jsonContents.result.description);

    jsonContents.result.sites.forEach(site => {
        console.log('site.id', site.id);
        console.log('site.name', site.name);
        console.log('site.description', site.description);

        site.categories.forEach(category => {
            console.log('category.id', category.id);
            console.log('category.name', category.name);
            console.log('category.description', category.description);

            console.log('category.categories.length', category.categories.length);

            /**
             * @todo recursive
             */
            if ( category.categories.length>0 ) {
                getCategory(category.categories);
            }
        });
    });

}

 
console.log("\n *EXIT* \n");