var book = (title,price,author,order) => {
    return {title, price, author, order}
}

var books = [
    book("콩쥐팥쥐",20000,"미상",1),
    book("흥부놀부",25000,"미상",2),
    book("자바의정석",35000,"정석",3),
    book("안드로이드정복",15000,"김상형",4)
];


//2.books의 타입 Array. 자바스크립트 타입 :Boolean,Null,Undefined,Number,String,Symbol (ECMAScript 6 에 추가됨) 별도: Object
console.log(books);
//3.
books.unshift({title:"이것이자바다",price: 40000, author:"김상형", order: 5});

for(let item of books){
    console.log(item);
}
//4.
console.log(4);
books.shift({title:"이것이자바다"});
console.log(books)

for(let item of books){
    console.log(item);
}
//5.
console.log(5);
books.push({title:"이것이자바다",price: 40000, author:"김상형", order: 5});
for(let item of books){
    console.log(item);
}

//6.
console.log(6);
books.pop()
for(let item of books){
    console.log(item);
}

//7.
console.log(7);
books.splice(1,0,{title:"이것이자바다",price: 40000, author:"김상형", order: 5});
for(let item of books){
    console.log(item);
}


//8.
console.log(8);
books.splice(1,1);
for(let item of books){
    console.log(item);
}
