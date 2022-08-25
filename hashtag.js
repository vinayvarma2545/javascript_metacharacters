function geek() {
    var x = /\s/g;
    var y = "-";
    var str = "GeeksforGeeks is the computer "
            + "science\nportal\tfor geeks.";
    var str1 = str.replace(x, y);
    alert("The new string is: \n" + str1);
}
console.get(str1)