/*
  게시물 상세 페이지 
    - 전체출력 페이지에서 특정 제목 클릭시 <a> 이용한 상세페이지 이동
    - 무엇의 특정 게시물을 클릭 했는지 식별 필요하다.
      1. localStorage , sessionStorage 저장 , 문자형식 지원 
      2. JS 변수 저장 X [ 페이지 전환되면 JS도 초기화 ]
      3. * URL(주소)에 매개변수 넣어주는 방식 
        - 쿼리스트링 방식 , 문자형식 지원 , 주로 간단한 데이터 식별자 
        URL ? 변수명 = 데이터  
        URL ? 변수명 = 데이터 & 변수명 = 데이터 

        - <a href="view.html?no=7">   변수명 : no   , 값 : 7
        
    - JS 에서 URL 매개변수를 호출하는 방법 
      1. let urlParams = new URL( location.href ).searchParams;
      2. let value = urlParams.get('key');

  1. 현재 클릭된 게시물 번호를 찾는다.
  2. 해당 게시물번호의 게시물을 검색한다.
  3. 검색된 결과를 HTML에 출력한다.
*/
// 1. new URL( 검색할URL ) : URL(주소)의 정보 호출 , location.href : 현재 URL
console.log( new URL( location.href ) )
// 2. new URL( location.href ).searchParams       : 쿼리스트링( ? 뒤로 매개변수들 )
console.log( new URL( location.href ).searchParams )
// 3. new URL( location.href ).searchParams.get('key')
console.log( new URL( location.href ).searchParams.get('no') );
// ================================================================== //

// 1. 현재 URL 경로상의 'no' 이름의 매개변수 값 호출 , view.html?no=7
let urlParams = new URL( location.href ).searchParams;
let no = urlParams.get( 'no' ); // 클릭된 게시물 번호 

let boardList = [ ];

// 2. 게시물 출력 : js열렸을때
board();
function board(){ console.log( 'board()');
  // 1. 어디에 
  let boardBox = document.querySelector('#boardBox')
  // 2. 무엇을 
  let html = ``;

    // 1. 모든 게시물 목록을 가져온다. localStorage 
  boardList = JSON.parse( localStorage.getItem( 'boardList') ) ;
  if( boardList == null ){ boardList = []; }
    // 2. 모든 게시물 목록에서 클릭된 게시물번호와 일치한 게시물 찾기 
  let findIndex = -1;
  for( let i = 0 ; i<boardList.length ; i++ ){
    if( boardList[i].no == no ){ findIndex = i; break; }
  }
  let board = boardList[ findIndex ]; // 찾은 인덱스의 객체를 호출해서 board변수에 대입
    // 3. 찾은 인덱스의 게시물 정보를 출력 
  html += `<div>${ boardList[ findIndex ].title }</div>
            <div>${ boardList[ findIndex ].content }</div>
            <div>${ boardList[ findIndex ].no }</div>
            <div>${ board.writer }</div>
            <div>${ board.date }</div>
            <div>${ board.view }</div>`

  // 3. 출력 
  boardBox.innerHTML = html;
}

// 3. 삭제  : 삭제 버튼을 클릭했을때 
// * 단 현재 로그인된 회원과 게시물의 작성자와 일치할 경우에만
function _delete( ){ console.log("_delete()");

  // 1. 누구를 : 현재 페이지의 게시물번호 = no
  // 2. 해당 삭제할 게시물번호의 인덱스 찾기 
  let findBoardIndex = -1;
  for( let i = 0 ; i<boardList.length ;i++ ){
    if( boardList[i].no == no ){ findBoardIndex = i; break; }
  }

  if( myBoardCheck(findBoardIndex) == false ){
    alert('해당 게시물의 작성자만 삭제 가능합니다.');
    return;
  }

  // 삭제 
  boardList.splice( findBoardIndex , 1 ); // JS배열내 객체 삭제 
  // * localStorage 데이터 최신화 
  localStorage.setItem( 'boardList' , JSON.stringify(boardList) );

  alert('삭제 성공');
  location.href="board.html";
  return;

}

// 4. 수정페이지로 이동함수  : 수정버튼 클릭시
// - 로그인된회원 - 게시물작성자 일치 여부
function modify(){

  // 1. 누구를 : 현재 페이지의 게시물번호 = no
  // 2. 해당 삭제할 게시물번호의 인덱스 찾기 
  let findBoardIndex = -1;
  for( let i = 0 ; i<boardList.length ;i++ ){
    if( boardList[i].no == no ){ findBoardIndex = i; break; }
  }
  
  if( myBoardCheck( findBoardIndex ) == false  ){
    alert('해당 게시물의 작성자만 수정 가능합니다.');
    return;
  }

  // - 무엇을 수정할껀지 매개변수 전달
  location.href = `modify.html?no=${ no }`;
}

// 5. 현재 로그인된 회원의 글인지 유효성 함수 
function myBoardCheck( findBoardIndex ){
  // 1. 로그인 상태 체크 
  let loginNo = sessionStorage.getItem('loginNo');
  if( loginNo == null ){ return false; }
    // 2. 로그인된 회원아이디 와 게시물작성자 아이디 와 다르면 실패
  let memberList = [];
  memberList = JSON.parse( localStorage.getItem('memberList') ) ;
  if( memberList == null ){ memberList = []; }

 for( let i = 0 ; i < memberList.length ; i++ ){
    if( memberList[i].no == loginNo 
        && memberList[i].id == boardList[ findBoardIndex ].writer  ){
        return true;
    }
  }
  return false;
}





















