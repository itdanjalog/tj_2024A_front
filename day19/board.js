/*

  전체 글 출력 페이지 
    - 글 등록시 모든 게시물이 localStorage 저장된 상태
*/

let boardList = [];

// 1. 출력함수 : js가 열렸을때
boardPrint();
function boardPrint(){
  // * 
  boardList = JSON.parse( localStorage.getItem( 'boardList' )) ;
  if( boardList == null ){ boardList = [ ]; }
  
  // 1. 어디에
  let boardTbody = document.querySelector('#boardTbody'); 
  // 2. 무엇을
  let html = '';
  for( let i = 0 ; i < boardList.length ; i++  ){
    html += `<tr> 
              <th> ${ boardList[i].no }  </th> 
              <th> <a href="view.html?no=${ boardList[i].no }"> ${ boardList[i].title } </a>  </th> 
              <th> ${ boardList[i].writer }  </th> 
              <th> ${ boardList[i].date }  </th> 
              <th> ${ boardList[i].view }  </th>  
            </tr>`
  }
  // 3. 출력/대입 
  boardTbody.innerHTML = html ; 
}