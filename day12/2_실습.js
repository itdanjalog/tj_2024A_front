/*
  실습2 : 웹 가계부 만들기
    [요구사항]
    1. 항목마다 날짜 , 항목명 , 금액 3가지를 저장 해주세요.
    2. 등록된 금액의 총합계를 하단에 출력 해주세요.
    3. 출력은 <table> 사용해주세요.   

    + 

    ( 설계 )
    
    [ 백엔드 ]
    1. 메모리 구성 : (성연) 배열 3개 
      let dateList = [ ]
      let nameList = [ ] 
      let moneyList = [ ]

    2. 기능 구성 : (재명) 2개 
      add(){ } 1. 입력/저장 함수 
      total(){ } 2. 총합계 함수 

    3. 기능 구현 (희진)
      1. 입력/저장 함수 
        [ 로직 순서 ] 1.입력받고 2.배열저장 3. 안내 
      2. 총합계 함수
        [ 로직 순서 ] 1.배열에 있는걸 가져와서 다 더해준다. 2.총합계 보여준다.

    [ 프론트엔드 ]
    0. 스케치/프로토타입 
    1. HTML 구성 (세빈)
      <input /> 3개 
      <button /> 1개
      <table> 1개

    2. HTML 구현 

    [백엔드/프론트엔드 연동 ]
    1. 선택자 
    2. onclick

    add() : 버튼 클릭시 
    total() : 등록처리 되었을때.


    [ 유지보수 ]
    1. 합계를 했더니 더하기 가 아니고 연결이 됨.
      - 해결책 : money -> Number( money )
      
*/
// 메모리 구성 
let dateList = [ ]; 
let nameList = [ ] ; 
let moneyList = [ ]

function add(){ 
  // [ 로직 순서 ] 1.입력받고 2.배열저장 3. 안내   (민석)
  // 1. 
  let dateInput = document.querySelector('#dateInput');
  let nameInput = document.querySelector('#nameInput');
  let moneyInput = document.querySelector('#moneyInput');

  let date = dateInput.value;
  let name = nameInput.value;
  let money = Number( moneyInput.value ) ;
  
  // 2. 
  dateList.push( date );
  nameList.push( name );
  moneyList.push( Number( money ) );

  // 3. 
  alert('항목 저장 성공');
  
  // 4.
  total();

}

function total(){ 
  // [ 로직 순서 ] 1.배열에 있는걸 가져와서 다 더해준다. 2.총합계 보여준다. (재연)

  let sum = 0;  // 총합계 변수 

  // i부터 0부터 마지막 인덱스까지 = 배열을 순차적으로 순회(하나씩 금액 호출)
  for( let i = 0 ; i < moneyList.length ; i++ ){
    // 배열의 i번째 인덱스의 금액 호출
    sum += moneyList[i]; // 누적합계 : 배열내 금액의 총합계 계산중 
  } // for end 

  // HTML 출력
    // 1. 어디에 
  let moneyTable = document.querySelector('#moneyTable');
    // 2. 무엇을 
  let html = `<tr><th>총합계</th><th>${ sum }</th></tr>` 
  console.log( html );
    // 3. 대입 
  moneyTable.innerHTML = html;

} // f end 
