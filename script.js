// Document.ready
var app = {};

app.ul = $(".essentials"); 

// function for adding items
app.addItem = function(item){
    // create list item and add it to .essentials
    const essentialItem = `<li>${item}</li>`;
    app.ul.append(essentialItem);
}

// function for adding headings
app.addHeading = function(item) {
    const itemHeader = `<li class="heading">${item}</li>`;
    app.ul.append(itemHeader);
};

// function for submitting the form
app.init = function() {
    $('form').on('submit', function(e) {
        e.preventDefault(); 
        console.log('hello');
        const item = $('input[type=text]').val();
        if ($('input[type=checkbox]:checked').length>0){
            app.addHeading(item);
        }else{
            app.addItem(item);
        }

        //clear input
        $(this)[0].reset();
    });
    // sortable with jQuery UI 
    $('ul').sortable(
        {
            connectWith: ".connect"
        }
    );
};

$(function() {
    console.log("linked");
    app.addItem('film'); 
    app.addHeading('Might Need'); 
    app.addItem('film'); 
    app.init();
    console.log("done");
});

