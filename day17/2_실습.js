/*
  localStorage 활용
    방문록 : 1.방문내용 2.작성일
*/
let 방문목록 = []
// 1. 
function 등록함수(){ 
  // 1. 
  let 내용 = document.querySelector('#내용').value;
  let date = new Date();
  let 작성일 = `${ date.getFullYear() }-${ date.getMonth()+1 }-${ date.getDate() }`
  // 2. 
  let 방문 = { 내용 : 내용 , 작성일 : 작성일 };
  // 3.

    // - 먼저 기존에 localStorage 있는 데이터 가져오기 
    console.log( localStorage.getItem('방문목록') ); // 없으면 : null , 있으면 [ ]
  방문목록 = JSON.parse( localStorage.getItem('방문목록') ); 
    console.log( 방문목록 );
  // 만약에 기존에 localStorage 가 없으면 빈배열 대입해준다.
  if( 방문목록 == null ){ 방문목록 = [ ]; }
  
  방문목록.push( 방문 );

  // 새로운 데이터를 배열에 저장 했으면 localStorage 다시 저장한다.
  localStorage.setItem( '방문목록' , JSON.stringify( 방문목록 ) );

  출력함수();
}
// 2. 
출력함수();
function 출력함수(){

  // - 먼저 기존에 localStorage 있는 데이터 가져오기 
  방문목록 = JSON.parse( localStorage.getItem('방문목록') ) ;
  if( 방문목록 == null ) return;

  // 1. 
  let 출력구역 = document.querySelector('#출력구역');
  // 2. 
  let html = '';
    for( let i = 0 ; i < 방문목록.length ; i++ ){
      html += `<div> ${ 방문목록[i].내용}  /  ${ 방문목록[i].작성일} </div>`
    }
  // 3.
  출력구역.innerHTML = html;
}
