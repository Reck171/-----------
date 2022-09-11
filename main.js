function numfunc(num) {
    document.form.inputbar.value = document.form.inputbar.value + num;
}

function clean() {
    document.form.inputbar.value = " ";
}

function del() {
    var string = document.form.inputbar.value;
    document.form.inputbar.value = string.substring(0, string.length-1);
}

function equal() {
    var string = document.form.inputbar.value;
    document.form.inputbar.value = eval(string);
}