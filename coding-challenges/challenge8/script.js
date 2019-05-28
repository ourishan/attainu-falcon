function search() {
    let lang = document.getElementsByTagName('input')[0].value;
    // let lang = 'english'
    // fetch('books.json').then(data => data.json()).then(data => searchBooks(data)).then(data => renderTable(data)).catch(err => console.log(err))
    $.ajax({
        url: 'books.json',
        dataType: 'JSON',
        success: function (books) {
            searchBooks(books)
        }
    })

    function searchBooks(books) {
        let selBooks = []
        for (book of books) {
            // console.log(typeof book.language)
            if (book.language.toLowerCase().indexOf(lang) != -1)
                selBooks.push(book)
        }
        renderTable(selBooks)
        // return selBooks
    }

    function renderTable(books) {
        // console.log(books[0])
        let root = document.getElementsByTagName('tbody')[0]
        root.innerHTML = ''; 
        for (book in books) {
            // console.log(books[book])
            let row = root.insertRow()
            for (const key in books[book]) {
                // console.log(key)
                if (key == 'title') {
                    let cell = row.insertCell()
                    cell.innerText = books[book][key]
                }
            }
            for (const key in books[book]) {
                // console.log(key)
                if (key != 'imageLink' && key != 'title') {
                    let cell = row.insertCell()
                    cell.innerText = books[book][key]
                }
            }
        }
    }
}
document.getElementsByTagName('button')[0].addEventListener('click', search)