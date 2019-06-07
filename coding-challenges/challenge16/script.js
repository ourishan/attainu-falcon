function params(url) {
    let num1 = parseFloat(url.substring(url.indexOf('=')+1,url.indexOf('&')))
    let num2 = parseFloat(url.substring(url.lastIndexOf('=')+1,url.length))
    return num1 && num2 ? {"\"num1\"": num1, "\"num2\"": num2} : "Missing URL parameters!"
}
console.log(params("http://localhost:3000/add?num1=5&num2=3"))
console.log(params("http://localhost:3000/search"))