var A = {a:1, b:2, c:3};

// in 연산자는 객체의 키값을 반복
for (var item in A) {
  console.log(item)
  console.log(A[item]);
}

var B = [{a:1}, {b:2}, {c:3}];


for (var item in B){
  console.log(item);
}

for(let item of B){
  console.log(item);
}
