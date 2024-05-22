// ============================ 전역/대한민국/JS전체 ===============//
let 유재석 = '대한민국';

// ============================ 지역{} / 대한민국->인천광역시 / 일부 ===============//
if( true ){ 
  let 강호동 = '인천광역시';
  console.log( 유재석 ); // O
  console.log( 강호동 ); // O
  // console.log( 신동엽 ); // X

  // ============================ 지역{} / 대한민국->인천광역시->부평구 / 일부 ===============//
  for( let i = 0 ; i < 1 ; i++ ){
    let 신동엽 = '부평구'
    console.log( 유재석 ); // O
    console.log( 강호동 ); // O
    console.log( 신동엽 ); // O
  }
  // ============================ =============== ===============//
}  
// ============================ ================= ===============//
function 경기도( ){
  let 서장훈 = '수원시';
  return 서장훈;
}

console.log( 유재석 ); // O
//console.log( 강호동 ); // X
// console.log( 신동엽 ); // X
//console.log( 서장훈 ); // X
// ============================ ===================== ===============//

// 전역변수와 지역변수의 활용 예)

// [[[ 전역변수 ]]] 
let 배열 = [ ];

function 등록() {
  // let 배열 = [ ]; // 0.배열 선언 , 함수가 끝나면 해당 { } 안에 있는 메모리 사라짐.
  // let 입력 = prompt('성명'); // 1. 입력받고 변수에 저장한다. // 사라짐 
  
  // [[[ 지역변수 ]]]  
  let 입력 = document.querySelector('#성명').value;
  
  배열.push(입력); // 2. 입력받은 데이터를 배열에 저장한다.
  document.querySelector('#출력박스').innerHTML = 배열; // 3. HTML에 출력한다.

  // --
  document.querySelector('#성명').value = '';

}

// 함수 사용하는 이유 
  // 1. 반복되는 코드를 한번에 정의 하고 필요에 따라 호출해서 반복 작업을 피 할수 있다. [ 코드 양 줄이기 ]
  // 2. 긴 프로그램을 기능별로 함수를 구성해서 여러 함수로 모듈화[ 조각/레고 ] 로 전체 코드의 가독성[읽기] 좋다
  // 3. 기능별(함수별)로 수정이 편하고 유지보수 쉽다.
  // 4. 매개변수/인수 에 따른 서로 다른 결과물 ex) x=3 일때와 x=5 일때 서로다른 결과
  // 5. { } 지역변수 사용하기 때문에 메모리 효율성이 좋다. 
    // 함수실행 될떄 메모리 할당 되고 함수가 종료 될때 메모리 초기화/사라짐
