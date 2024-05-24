/*

  요구사항 확인
    [ 비회원 게시판 ]
    1. 글 등록 하는데 비회원제 이면서 제목 과 내용 과 비밀번호 입력 해주세요.
    2. 모든 글 출력하는데 날짜 , 제목 , 조회수 순으로 출력해주세요. 
    3. 모든 글에서 제목을 클릭하면 상세 글 이 출력되고 모든 정보 출력 될수 있도록 해주세요.
      <날짜 , 제목 , 조회수 , 내용 >
    4. 상세 글에서 수정시 비밀번호를 입력받아 일치할 경우에만 새로운 내용을 입력받고 수정해주세요.
    5. 상세 글에서 삭제시 비밀번호를 입력받아 일치할 경우에만 삭제
  
  -요구사항 분석 -> 설계
    [ 백엔드 ]
    1.메모리 구성
      1. 등록용:제목 , 내용 , 비밀번호 
      2. 출력용:날짜 , 조회수 
      - 1안(배열) :  배열 5개 
        1. title = [ title1, title2 , title3 ] , 
          content = [ content1 ,content2,content3 ] , 
          password = [ password1 , password2 , password3] , 
          date = [ date1 , date2 , date3 ] , 
          view = [ view1 , view2 , view3 ]

        2. boardList = [ 
              [ title1,content1,password1,date1 ] ,
              [ title2,content2,password2,date2 ] ,
              [ title3,content3,password3,date3 ] 
            ]

      - 2안(문자열)
          boardList = [ "title1,content1,password1,date1" , "title2,content2,password2,date2" , "title3,content3,password3,date3" ]
            - " " 하나의 문자열이 하나의 게시물이 되고 , 쉼표 기준으로 게시물의 정보 구분한다.
          boardList = "title1,content1,password1,date1\ntitle2,content2,password2,date2\ntitle3,content3,password3,date3"
            - 전체 게시물을 " " 하고 각 게시물은 \n 구분하고 , 쉼표는 각 게시물의 정보를 분류한다.

      - 3안(객체)
    2.기능 구성 
      1. 등록 create( )
      2. 모든글출력 allRead( )
      3. 상세글출력 read( )
      4. 수정 update( )
      5. 삭제 delete( )
    3.기능 마다의 로직 순서도  
      1. create( ) : 1. HTML에서 입력받은 값 가져오기 2.유효성검사 3.배열 저장 4. 안내                                                                
      2. allRead( ) : 1. (어디에)출력할html요소호출 2. (무엇을)반복문 이용한 배열내 데이터를 HTML형식 구성 3.(출력/대입) 구성한html를 요소에 대입           
      3. read( )    : 1. 상세정보의 인덱스를 받고 2. 해당 인덱스의 정보를 출력한다( 어디에 무엇을 출력 )                                                
      4. update( ) : 1. 업데이트할 인덱스를 받고 2. 비밀번호를 새롭게 입력받아 3. 입력받은 비밀번호와 해당 인덱스의 비밀번호와 일치하면 4. 해당 인덱스 수정 
      5. delete() : 1. 삭제할 인덱스를 받고 2. 비밀번호를 새롭게 입력받아 3. 입력받은 비밀번호와 해당 인덱스의 비밀번호와 일치하면 4. 해당 인덱스 삭제       
    [ 프론트엔드 ]
    1. HTML 구성 

  개발/구현 
    [ 각 파트별 구현 ]
    [ 연동 ]
  테스트

  유지보수
*/

  let boardList = [ 
    "제목입니다,내용입니다,1234,2024-05-24,3" , 
    "두번째제목이야,또내용입니다,4567,2024-05-25,0" 
  ]

// 1. 
function _create(){ 
  // 1-1 
  let title = document.querySelector('#titleInput').value;
  let content = document.querySelector('#contentInput').value;
  let password = document.querySelector('#passwordInput').value;
  // 2-1 입력받지 않은 데이터를 초기화 
  let date = new Date(); // new Date() : 현재 날짜/시간 를 반환해주는 클래스; 
    console.log( date );
    console.log( date.getFullYear() ); // 연도 만 추출                   2024
    console.log( date.getMonth() ); // 월 만 추출 ( 1월:0  ~ 12월:11 )    4[5월]
    console.log( date.getDate() ); //  일 만 추출                         24
    console.log( date.getHours() ); // 시 만 추출                       11
    console.log( date.getMinutes() ); // 분 만 추출                     17
    console.log( date.getSeconds() ); // 초 만 추출                     42
  // 원하는 날짜 추출 해서 가공 
  let currentYear = date.getFullYear(); 
  let currentMonth = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1 ;
  let currentDay =  date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
  date = `${ currentYear }-${ currentMonth }-${ currentDay }` // 날짜 구성 

  let view = 0; // 처음 등록시 조회수는 0부터 시작
  // 3. ,쉼표 구분해서 하나의 문자열로 만들자. 
  let board = `${title},${content},${password},${date},${view}`; console.log( board );
  // 4. 배열 등록 
  boardList.push( board ); console.log( boardList ); 
  // 5. 등록 성공 
  alert('등록성공')
}
// 2. 
function _allRead(){ }
// 3. 
function _read(){ }
// 4.
function _update(){ }
// 5.
function _delete(){ }