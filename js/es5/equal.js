//등호 두개는 한쪽을 형변환 한 다음에 비교.
console.log(2 != "2");
console.log(2 !== "2");

// null, undefined, 0, empty string, false => false
var a;
if(a) {
  console.log('a is undefined');
}
