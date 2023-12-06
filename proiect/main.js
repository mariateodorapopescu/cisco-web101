Element.prototype.insertChildAtIndex = function(child, index) {
    if (!index) index = 0
    if (index >= this.children.length) {
        this.appendChild(child)
    } else {
        this.insertBefore(child, this.children[index])
    }
}
let selector = document.getElementById('list')
addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let txt = selector.value;
        selector.classList.add("element");
        var para = document.createElement("div");
        let check = this.document.createElement('button');
        check.setAttribute("id", "text");
        check.addEventListener('click', function() { alert("merge"); });
        //ibidem pentru x
        let ics = this.document.createElement('button');
        var text = document.createTextNode(txt);
        document.getElementsByClassName("container")[0].appendChild(para);
        para.appendChild(check);
        para.appendChild(text);
        selector.value = "";
    }
});
let i;
let v = document.getElementsByClassName("element").length;
//mai fac un div in afara lor si in ala pun numarul ^