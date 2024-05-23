/*
  실습1 : 회원가입 과 로그인 구현 페이지 구현하기
    [요구사항] 
    1. 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
    2. 아이디 와 비밀번호가 기존 데이터와 일치 했을때 로그인 성공 아니면 실패 해주세요.
    
    [ 개발 순서 ]
    요구사항 분석 
      1. 회원가입 : 저장 C
      2. 로그인   : 기존 데이터와 비교 R , 논리

    (백엔드)
    1. 메모리 구성 
      1. 여럿 아이디 와 비밀번호를 저장하는 저장소 필요
      let idList =  [ ]
      let pwList =  [ ]
      전역변수 왜 ? 1. 특정 구역에서 저장할 데이터가 아니기 떄문에
                    2. 모든 함수{ } 에서 사용하기 위해서 

      2. 두 배열간 인덱스가 같으면 하나의 회원
                    유재석
        idList[0]   qwe123
        pwList[0]   1234

    2. 기능/서비스 구성 / 구현
      1. 회원가입 처리 == 함수 
        signup 
        [ 로직 순서도 ]
          1. 아이디/비밀번호 입력받는다. 입력장치 : html
          2. 입력받은 데이터를 각 배열에 저장한다.
          3. 안내 메시지
      2. 로그인 처리  == 함수 
        login 
        [ 로직 순서도 ]
          1. 아이디/비밀번호 입력받는다.
          2. 입력받은 데이터를 각 배열내 존재하는지 비교한다.
          3. 안내 메시지  

    (프론트엔드)
    1. 회원가입 화면
      1. 아이디 input , 비밀번호 input 
      2. 회원가입 처리 button
    2. 로그인 화면 
      1. 아이디 input , 비밀번호 input 
      2. 회원가입 처리 button
    
    3 각 페이지 꾸미기 

    ( 백엔드 / 프론트엔드 연동 )
    각 button 에 JS 함수 연동 

*/

// 1. 메모리 구성 
let idList =  [ ] // let/const 이용한 변수상수 선언 키워드 
let pwList =  [ ] // 변수/상수가 저장할수 있는 데이터 타입 : 문자,숫자,논리,[],function
// 변수/상수의 유효범위 : 1.전역변수 2.지역변수 : 특정 { } 안에서 선언된 변수/상수 는 { } 밖에서 호출 될수 없다.
 
// 2. 함수 구성 
  // 1. 함수 선언 : function 함수명( 매개변수 ){ 로직; retrun; }
  // 2. 함수 호출 : JS: 함수명( )
  //                HTML 이벤트 함수 onlcik = "함수명()"
function signup( ){ console.log('signup()');
  // 2-1 
  let signupId = document.querySelector('#signupId'); console.log( signupId );
    // document.querySelector() : 라이브러리 함수 : 미리 만들어진 도구/함수
      //  document : HTML , querySelector('HTML내 선택자') : 해당 선택자가 존재하면 html요소 반환 없으면 null
  let signupPw = document.querySelector('#signupPw'); console.log( signupPw );
  // 2-2
  let id = signupId.value;  console.log( id );
      // HTML요소의 속성 : 1. innerHTML(div,ol,table 등 <> </> ) 2.value ( input , select , textarea 등)
      // HTML요소객체/DOM객체  : DOM객체.속성명 , INPUT객체.value : input 입력된 데이터 호출 
  let pw = signupPw.value;  console.log( pw );
  // 2-3 입력받은 데이터를 각 배열에 저장한다.
      // 배열변수.push( 데이터 ) : 배열에 추가한다. 
  idList.push( id );  console.log( idList );
  pwList.push( pw );  console.log( pwList );
  // 3-4 안내 메시지 
  alert('회원가입 성공');
  return;
}
// 2. 함수 구성 
function login( ){ 
  // 2-1
  let loginId = document.querySelector('#loginId');
  let loginPw = document.querySelector('#loginPw');
  // 2-2 
  let id = loginId.value;
  let pw = loginPw.value;
  // 3-3 . 비교 
    // 3-1 아이디가 기존 배열내 존재하는지 
  let index = idList.indexOf( id );
    // 배열변수.indexOf( 찾을데이터 ) : 배열내 찾을데이터가 존재하면 인덱스(0이상)반환 아니면 -1
  if( index != -1 ){
    // 3-2 아이디가 존재하면 패스워드 검증 
    if( pwList[ index ] == pw  ){   // 배열변수[ 인덱스 ] : 배열변수내 해당 인덱스의 데이터 반환 
      alert(' 로그인 성공 ');        // if( 조건 ){ 참로직 }else{ 거짓로직 }
    }
    else{
      alert(' 패스워드가 다릅니다.')
    }
  }else{
    alert('없는 아이디 입니다. ')
  }
}

