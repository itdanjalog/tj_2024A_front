/*
  JS 제어문(반복문)
  for
    - 조건충족일때 특정 범위내 코드를 반복 실행
    - for형태 
      for( 초기값 ; 조건문 ; 증감식 ){ 반복실행코드; }
      1. 초기값 : 반복을 할때 반복의 카운터/횟수 체크하는 변수의 처음값 
      2. 조건문 : 반복실행문이 실행되는 조건 이므로 true 이면 { } 실행 아니면 for 종료
      3. 증감식 : 반복변수의 증가 혹은 감소 변화 연산식/패턴 
          반복변수 = 반복변수+1  vs  반복변수 += 1  vs  반복변수++
      4. 실행코드 : 조건문이 true일때 실행할 코드 
    - 흐름순서 
      1. 초기값 -> 2.조건문 -> 3.실행코드 -> 4.증감식 -> 5.조건문 -> 6.실행코드
                                        -> 증감식 -> 조건문 -> 실행코드 
                                        -> 증감식 -> 조건문 -> 실행코드 
                                        ---------- 조건문에 false가 될때까지 반복
                                        ---------- false 이면 for{ } 탈출/종료 한다. 
    
    - 어디서부터 어디까지 몇씩증감 하면서 무엇을 실행하는지?

    - 배열 과 반복문 
      배열의 인덱스는 순차적인 순서가 존재한다.
      1. 배열 순회
        - 반복변수를 index 처럼 사용.
        for( let index = 0 ; index < 배열변수.length ; index++ ){ }
      2. 향상된 for문 
        1. for( let 반복변수 in 배열변수 ){ }   : 배열변수내 인덱스를 순차적으로 하나씩 반복변수에 대입 반복 
        2. for( let 반복변수 of 배열변수 ){ }   : 배열변수내 데이터를 순차적으로 하나씩 반복변수에 대입 반복 
      3. *스트림 반복 함수 : forEach() , map() , filter() 등등

    - for 중첩 
      for( ) { 
        for( ) { }
      }

    - 무한루프 / 종료없는 반복
      for( ; ; ){ }
      while(true){ }
      - 의미없는 코드 반복은 메모리 과부하
      - 조건문(IF) 과 break
    
    - 반복문 키워드 
      1. break;     // 가장 가까운 for문의 { } 탈출/종료/끝내기 
      2. continue;  // 가장 가까운 for문의 증감식으로 이동 

*/
// 1. 동일한 코드를 입력하기 위해서는 ctrl+c -> v 하면 된다. 복사붙여넣기 한계가 있다.
console.log('콜라 구매');
console.log('콜라 구매');
console.log('콜라 구매');
console.log('콜라 구매');
console.log('콜라 구매'); // 5번 반복
// - 1부터 5까지 1씩증가하면서 '콜라 구매' 출력 
for( let 반복변수 = 1 ; 반복변수 <= 5 ; 반복변수++  ){  console.log('콜라 구매'); }

// 2. 1~10 숫자 출력하시오. i는 1부터 10까지 1씩증가 하면서 i 출력  
for( let i = 1 ; i <= 10 ; i++ ){ console.log( i ) ; }

// 3. 1~10 숫자의 누적합계 값 출력하시오. i는 1부터 10까지 1씩증가 하면서 누적합계 계산해서 출력
let sum = 0;  // 1. 누적값 저장하는 변수는 1번만 선언해야 하므로 for 밖에 선언 
for( let i = 1 ; i <= 10 ; i++ ){ console.log( i );
  sum = sum + i; // vs  sum += i    : 누적합계
  console.log( sum );
}
// 4. 1~100까지의 7배수만 누적합계 값 출력하시오. , i는 0부터 100까지 7씩증가 하면서 누적합계 계산해서 출력 
let sum2 = 0;
for( let i = 1 ; i<=100 ; i+=7 ){
  sum2 += i; // 누적합계 
}
console.log( `sum2 : ${sum2} ` );

// 5. 반복문을 이용하여 구구단 중에 2단 만 출력하시오. 예) 2 X 1 = 2  ~~~ 2 X 9 = 18
console.log( ` 2 X 1 = 2 `);    console.log( ` 2 X 2 = 4 `);    console.log( ` 2 X 3 = 6 `);
console.log( ` 2 X 4 = 8 `);    console.log( ` 2 X 5 = 10 `);   console.log( ` 2 X 6 = 12 `);
console.log( ` 2 X 7 = 14 `);   console.log( ` 2 X 8 = 16 `);   console.log( ` 2 X 9 = 18 `); 

// 곱 : 곱은 1부터 9까지 1씩증가하면서 연산후 출력 
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){
  console.log( ` 2 X ${ 곱 } = ${ 2*곱 }` );
}

// 6. 배열의 데이터개수 : 3개 , 인덱스 : 0~2
let 과일상자 = [ '사과' , '포도' , '딸기' ];
// 인덱스는 0 부터 2까지 1씩증가
for( let index = 0 ; index <= 2 ; index++ ){ 
  console.log( 과일상자[index] ); 
}
// 인덱스는 0 부터 배열명.length -1 까지
for( let index = 0 ; index <= 과일상자.length-1 ; index++ ){ 
  console.log( 과일상자[index]) 
}

// 7. 향상된 FOR문 
for( let index in 과일상자 ){ console.log( index ); }
for( let 과일 of 과일상자 ){ console.log( 과일 ); }

// 8. 반복문을 이용하여 <ol> </ol> 안에 <li> 학생명 <li> 하나씩 HTML에 출력하시오.
let studentList = [ '유재석' , '강호동' , '신동엽' ]; 

let html = ``;
for( let index = 0 ; index <= studentList.length-1 ; index++ ){
  html += `<li> ${ studentList[index] } </li>`
  // = 대입 , += 누적합계
}
console.log( html );
document.querySelector('.studentList').innerHTML = html;

// 9. for 중첩  
for( let 부모 = 1 ; 부모 <= 5 ; 부모++ ){ // 1부터 5까지 1씩증가반복 ( 5회전 )
  console.log( `부모 : ${ 부모 }` );

  for( let 자식 = 1 ; 자식 <= 3 ; 자식++ ){ // 1부터 3까지 1씩증가반복 ( 3회전 * 5 => 15회전 )
     console.log( `>>>>자식 : ${ 자식 }`)
  } //for2 end 

} // for1 end 

// 10. for 중첩을 이용한 구구단( 2단~9단 ) 출력하시오.
// 1. 단 : 2부터 9까지 1씩 증가.  , 상위for
console.log( '2 X 1 = 2');  console.log( '3 X 1 = 3');  console.log( '4 X 1 = 4');
console.log( '5 X 1 = 5');  console.log( '6 X 1 = 6');  console.log( '7 X 1 = 7');
console.log( '8 X 1 = 8');  console.log( '9 X 1 = 9');
// 2. 곱 : 1부터 9까지 1씩 증가.  , 하위for
console.log( '2 X 1 = 2');  console.log( '2 X 2 = 2');  console.log( '2 X 3 = 2');
console.log( '2 X 4 = 2');  console.log( '2 X 5 = 2');  console.log( '2 X 6 = 2');
console.log( '2 X 7 = 2');  console.log( '2 X 8 = 2');  console.log( '2 X 9 = 2');
// 1-1
for( let 단 = 2 ; 단 <= 9 ; 단++ ){ }
// 2-1
for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){ }
//3. 
for( let 단 = 2 ; 단 <= 9 ; 단++ ){       // 단 : 8회 
  for( let 곱 = 1 ; 곱 <= 9 ; 곱++ ){     // 곱 : 9회 
    console.log( ` ${ 단 } X ${ 곱 } = ${ 단*곱 } `); // 9*8 => 72회 출력 
    break;
  }
  break;
}// 

// 11. 
// for( ; ; ){ console.log('무한반복'); } // 메모리 과부하의 오류발생 
for( ; ; ){
  // prompt, alert , confirm 등등 함수들은 입력/출력시 모든JS 코드실행 중지(wait) 됨.
  let input = prompt('무한입력중 : '); 
  console.log( input );
  if( input == 'X' || input == 'x' ){ break; }
}

// 12. break; 이용한 1부터 10까지 1씩증가하면서 출력 , 만일 5 이면 반복문 종료 
for( let i = 1 ; i <= 10 ; i++ ){
  if( i == 5 ){ break; } // i가 5이면 반복문 종료. 
  console.log( i ); // 1 , 2 , 3 , 4 , 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
}
// 13 . continue; 이용한 1부터 10까지 1씩증가하면서 출력 , 만일 5이면 건너뛰기.
for( let i = 1 ; i <= 10 ; i++ ){
  if( i == 5 ){ continue; } // i가 5이면 for문의 증감식으로 이동 
  console.log( i );
}

// 14. 입력받은 데이터를 numArray 에 push(추가) 하기
  // 조건1 : 중복 입력은 가능하지만 중복 저장은 불가능 하도록 하기 
  // 조건2 : 배열의 중복 데이터 없이 6개의 숫자가 등록되면 반복문 종료
let numArray = [ ]
// 1. 총 6번의 입력받는다. (6회)
for( let i = 1 ; i<=6 ; i++ ){ 
  // 2. 입력받고 변수에 저장한다.
  let num = prompt( `${i}번째 의 수 입력`);
    // ********* 중복 제외 ***********
      // 입력받은 숫자가 배열내 존재하면 for문 증감식으로 이동
    if( numArray.indexOf( num ) >= 0 ) { 
      alert('중복입니다. 다시 입력 ')
      i--;      // 현재 반복변수의 카운터는 무효/차감
      continue; // continue; 또는 break; 만나면 아래코드는 실행되지 않는다. 
    }
  // 3. 배열 저장한다.
  numArray.push( num ); 
  // 4. 만약에 배열의 길이/데이터개수 가 6 이면 반복문 종료  
  if( numArray.length == 6 ){ break; }
}
// 4. for문이 끝나고 배열 상태 출력 
console.log( numArray );









