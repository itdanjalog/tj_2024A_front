/*
  
  C(저장) : 회원가입          글쓰기                제품등록      주문등록
    JS메모리 저장               배열명.push()
    브라우저(크롬)메모리 저장     .setItem( 'key' , value );

  R(호출) : 로그인 , 내정보   전체글출력,개별글출력   제품출력      주문출력
    JS메모리 호출   전체호출:for문  , 개별호출 : 배열명[ ]
    브라우저(크롬)메모리 저장     .getItem( 'key' );

  U(수정) : 회원수정          글수정                제품수정      주문수정
    JS메모리 수정   배열명[].속성명 = 새로운값 

  D(삭제) : 회원탈퇴          글삭제                제품삭제      주문삭제
    JS메모리 삭제   배열명.splice( 인덱스 , 1 );
    브라우저(크롬)메모리 저장     .removeItem( 'key' );

*/

let boardList = []

function _write(){ console.log( "wirte()");
  // 1. HTML 입력된 데이터 가져오기 
  let title = document.querySelector('#title').value;     
  let content = document.querySelector('#content').value; 
  // 2. 유효성검사 
  // 3. 데이터 가공 ( 입력외 추가정보 , 원하는 데이터형식 => 객체)
  let board = {
    no : 1 ,              // 게시물번호
    title : title ,       // 게시물제목
    content : content ,   // 게시물내용
    writer : 'qweqwe' ,   // 게시물작성자
    date : new Date() ,   // 게시물작성일
    view : 1              // 게시물조회수 
  };
  // 4. 저장 
  boardList.push( board ); 
  // 5. 안내후 이후 처리 
  alert('글쓰기 성공'); 
  location.href="board.html"; // JS에서 페이지 전환할때 사용되는 속성 
}