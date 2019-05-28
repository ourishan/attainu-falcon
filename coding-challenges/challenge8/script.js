let lang = 'english';
fetch('https://raw.githubusercontent.com/attainu-falcon/attainu-falcon/master/coding-challenges/data/books.json').then(data=>data.json()).then(data=> searchBooks(data)).then(data=>console.log(data)).catch(err=>console.log(err))

function searchBooks(books) {
  let selBooks = []
  for(book of books) {
    // console.log(typeof book.language)
    if(book.language.toLowerCase().indexOf(lang)!=-1)
      selBooks.push(book)
  }
  return selBooks
}