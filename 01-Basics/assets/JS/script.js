var isAdmin = false;  //Booloean
    document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
    document.write(`<p>isAdmin = ${isAdmin}</p>`);

    var title = "Welcome to JS";  //String
    document.write(`<p>title = ${typeof(title)}</p>`);
    document.write(`<p>title = ${title}</p>`);

    var xx = 12342;
    document.write(`<p>xx = ${typeof(xx)}</p>`);
    document.write(`<p>xx = ${xx}</p>`);

    var yy = 34.343;  //number, float, hexa and exponential =>number
    document.write(`<p>yy = ${typeof(yy)}</p>`);
    document.write(`<p>yy = ${yy}</p>`);

    //Array
    var colors = ["orange", "blue", "green", "red", "yellow"]
    document.write(`<p>colors = ${typeof(colors)}</p>`);
    document.write(`<p>colors = ${colors}</p>`);

    //Object
    var user= {
        //key : value, => property
        name: "Ramesh",
        email: "ramesh@gmail.com"
    };
    document.write(`<p>user = ${typeof(user)}</p>`);
    document.write(`<p>user = ${user}</p>`);
