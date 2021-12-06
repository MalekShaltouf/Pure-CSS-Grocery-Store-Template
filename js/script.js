


var container1    = document.getElementsByClassName("container1"),
    con1Child2Box = container1[0].children[1].firstElementChild,
    con1Child2Btn = container1[0].children[1].lastElementChild,
    con1Child3Btn = container1[0].children[2].firstElementChild,
    con1Child4Btn = container1[0].children[3].firstElementChild.firstElementChild, 
    con7Child     = document.getElementsByClassName("con7-child")[0],
    con7ChildBox  = con7Child.children[1],
    con7ChildBtn  = con7Child.children[2];

    

    con1Child2Box.onfocus = function()
    {
        con1Child2Box.placeholder = "";
        con1Child2Box.style.outline = "none";
    };
    con1Child2Box.onblur = function()
    {
        con1Child2Box.placeholder = "search a product ...";
    };
    

    con1Child2Btn.onfocus = function()
    {
        con1Child2Btn.style.outline = "none";
    };
    con1Child4Btn.onfocus = function()
    {
        con1Child4Btn.style.outline = "none";
    };

    

    con7ChildBox.onfocus = function()
    {
        con7ChildBox.placeholder = "";
        con7ChildBox.style.outline = "none";
    };
    con7ChildBox.onblur = function()
    {
        con7ChildBox.placeholder = "Email";
    };
    con7ChildBtn.onfocus = function()
    {
        con7ChildBtn.style.outline = "none";
    };
    

    var div = document.createElement("div");
    div.style.backgroundColor = "green";
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.position = "absolute";
    div.style.top = "50px";
    div.style.left = "860px";
    

    con1Child3Btn.onclick = function()
    {
        
        document.body.appendChild(div);
        div.style.display = "block";
    };
    con1Child3Btn.onblur = function()
    {
        div.style.display = "none";
    };

