/*
  0. 키워드 : JS회사에서 미리 만든 의미/기능 담긴 단어
  1. 세미콜론 ; 
    - 컴퓨터에게 문장 마침 알림 역할 
    - 한줄에 코드문장이 1개일때 생략 가능.
    - 한줄에 코드문장이 2개 이상일때는 코드문장마다 ; 마침.
  
  2. 데이터 타입
    typeof data     : data 타입/형식 을 출력
    - HTML 언어는 문자열 

  3. 문자열 처리 
    1. " " , ' ' , ` `
      - `백틱 문자열 템플릿
      ` 문자열${JS코드} 문자열${JS코드} 문자열${JS코드} 문자열 `

    2. 변수호출 이나 연산 는 문자처리 안됨.
  
  4. 문자열과 배열과 같다.

*/
// 1. 
console.log('사과');
console.log('바나나'); console.log('포도');
// 2. 
console.log( typeof '사과' );   // string : 문자열 
console.log( typeof 10 );       // number : 숫자 
console.log( typeof true );     // boolean : 논리
console.log( typeof [ 1 , 2] ); // object : 객체( array 포함 )
// 3. 
console.log( '유재석' );    // 문자
console.log( "35000" );     // 문자
// console.log( '유재석35000"); // 불가능 '열고 "닫기
console.log( '유재석"30"' );
console.log( "유재석'30'");
console.log( `유재석"30" `);
// 4. 
let 나이 = 40;
console.log( '유재석' + '강호동' );       // 문자열+문자열 : 연결연산자 : 유재석강호동
console.log( '유재석'+30);                // 문자열+숫자  : 연결연산자 : 유재석30
console.log( '유재석' + 나이 );           // 문자열+변수  : 연결연산자 : 유재석40
console.log( `${'유재석'}${'강호동'}`);   // ${ data }${ data }
console.log( `${'유재석'}${30}`);         //  ${ data }${ data }
console.log( `유재석${나이}`)             // `문자열${ JS코드 }문자열${ JS코드 }`
// 4-2
let 직원1 = '유재석';
let 직원2 = '강호동';

let ageHTML1 = "<ol> <li>"+직원1+"</li> <li>"+직원2+"</li> </ol>";
document.write( ageHTML1 );

let ageHTML2 = `<ol> <li>${직원1}</li> <li>${직원2}</li> </ol>`;
document.write( ageHTML2 );

// 5. 
let 차량번호 = '250어7142'
console.log( 차량번호[1] );                // 5
console.log( 차량번호.length );            // 8
let 잘라낸차량번호 = 차량번호.split('어');  // 특정 문자 기준으로 분리해서 배열 반환 
console.log( 잘라낸차량번호 );

// 예1 > 2명의 사원이름을 입력받아 HTML(table)형식으로 출력하시오. 

let 사원1 = prompt('사원1 사원명 : ');// 1. 사원 이름을 입력받기 2.변수에 저장한다.
  console.log( 사원1 );
let 사원2 = prompt('사원2 사원명 : ');// 1. 사원 이름을 입력받기 2.변수에 저장한다.
  console.log( 사원2 );
// 3. HTML 형식의 문자열을 저장하는 배열 
  // 1. HTML 에서 표현하고자는 HTML 마크업 만들어서 복붙 하자.
  // 2. `` 백틱 템플릿 에서 변수를 호출시 ${ 변수명 }
let tableHTML = `<table>
                    <tr>
                      <th> 번호 </th> <th> 이름 </th>
                    </tr>
                    <tr>
                      <td> 1 </td> <td> ${ 사원1 } </td>
                    </tr>
                    <tr>
                      <td> 2 </td> <td> ${ 사원2 } </td>
                    </tr>
                </table>`
  console.log( tableHTML );

// 4. HTML 문자열이 저장된 변수 을 HTML에 출력하자 
document.write( tableHTML );


