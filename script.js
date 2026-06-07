function addEnterListener(textInput, checkbox) {
    textInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            var newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.className = "myCheckbox";

            var newText = document.createElement("input");
            newText.type = "text";
            newText.placeholder = "_________________";
            newText.className = "myText";

            var newLine = document.createElement("br");

            newCheckbox.addEventListener("change", function() {
                if (this.checked) {
                    newText.style.textDecoration = "line-through";
                    newText.style.color = "gray";
                } else {
                    newText.style.textDecoration = "none";
                    newText.style.color = "black";
                }
            });

            addEnterListener(newText, newCheckbox);

            document.body.appendChild(newLine);
            document.body.appendChild(newCheckbox);
            document.body.appendChild(newText);
            newText.focus();
        }
        if(event.key === "Backspace" && textInput.value === ""){
    event.preventDefault();
    var chk = textInput.previousElementSibling;
    var br = chk.previousElementSibling;
    var prevText = br.previousElementSibling;
    
    document.body.removeChild(textInput);
    document.body.removeChild(chk);
    document.body.removeChild(br);
    
    prevText.focus();
}
    });
}

document.querySelector(".myCheckbox").addEventListener("change", function() {
    if (this.checked) {
        document.querySelector(".myText").style.textDecoration = "line-through";
        document.querySelector(".myText").style.color = "gray";
    } else {
        document.querySelector(".myText").style.textDecoration = "none";
        document.querySelector(".myText").style.color = "black";
    }
});

addEnterListener(document.querySelector(".myText"));