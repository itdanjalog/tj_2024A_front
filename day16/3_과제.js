// 1. new Date() : 현재 날짜/시간 객체 반환
console.log( new Date() );
// 2. 현재 연도 .getFullYear()
console.log( new Date().getFullYear() );
// 3. 현재 월   .getMonth()         0부터 시작 
console.log( new Date().getMonth()+1 )
// 4. 현재 일 
console.log( new Date().getDate() )
// 5. 현재 요일 ( 0:일 ~ 6:토 )
console.log( new Date().getDay() );

// 4. new Date( 연도 , 월 , 일 ) : 사용자 정의 날짜 객체 반환
console.log( new Date( 2023 , 4 , 20 ) ); // 2023-05-29
// 5. new Date( 연도 , 월 , 0 )  : 특정 정의 날짜의 말일
console.log( new Date( 2024 , 4 , 1 ) ); // 2024-05-01
console.log( new Date( 2024 , 4 , 0 ) ); // 2024-04-말일

// ============= 모든 함수에서 사용할 변수 : 전역변수 ============== //
// 1. 월 , 일 
let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth()+1;

// 2. 객체1개 <--> 일정1개   배열1개 <---> 여러개객체
let contentList = [ 
  { content : '학원개강' , date : '2024-5-7' , color : 'blue' } ,
  { content : '은행업무' , date : '2024-5-10' , color : 'red' } ,
  { content : '5월금토놀기' , date : '2024-5-31' , color : 'gray' } ,
  { content : '신용카드발급' , date : '2024-5-7' , color : 'pink' } ,
]


// 1. 출력함수 : 실행조건 : 1. js열렸을때 2.월이 변경 되었을때
calPrint(); //  js열렸을때
function calPrint(){
  // ============================ 상단 ======================= //
  // 1. 어디에 
  let 어디에 = document.querySelector('#caltop > h5')
  // 2. 무엇을 
  let 무엇을 = `${ year }년 ${ month }월`
  // 3. 출력 
  어디에.innerHTML = 무엇을;
  // =========================== 캘린더 ======================= //
  // 1. 어디에
  let calendar = document.querySelector('#calendar');
  // 2. 무엇을
    let html = `<div class="week sunday"> 일 </div>
                  <div class="week"> 월 </div> <div class="week"> 화 </div> <div class="week"> 수 </div> 
                  <div class="week"> 목 </div> <div class="week"> 금 </div> <div class="week"> 토 </div>`; 
    // 1. year , month 변수에 저장된 날짜의 말일 구하기.
    let date = new Date( year , month , 0 );    // 2024-05-말일
    let endDay = date.getDate(); 
    // 2. year , month 변수에 저장된 날짜의 1일 요일 구하기 ( 1일 요일 앞에 공백 )
    let date2 = new Date( year , month-1 , 1 ); // 2024-05-01 
    let startWeek = date2.getDay();  console.log( startWeek ); // 0:일 1:월 2:화 3:수 ~~~ 6:토
    // * 1일의 요일까지 공백 출력 반복문
    for( let b = 1 ; b <= startWeek ; b++ ){
      html += `<div></div>`
    }


    // * 1일부터 말일까지 일수 출력 반복문 
    for( let day = 1 ; day <= endDay ; day++ ){

      // * 현재 반복되고 있는 날짜의 형식(연도-월-일) 만들기
      let date3 = `${ year }-${month}-${day}`;  console.log( date3 );

      let dayHtml = ``; // 일 마다의 일정 내용물 

      // * 일정목록에 date3 과 동일한 날짜가 있는지
      for( let i = 0 ; i<contentList.length ; i++ ){ // console.log( contentList[i] );console.log( contentList[i].date == date3 );
        
        if( contentList[i].date == date3 ){
          dayHtml += `<div style="background-color : ${ contentList[i].color} "> 
                        ${ contentList[i].content } 
                      </div>`
        }
      } // for2 end 

      html += `<div> ${ day } ${ dayHtml } </div>`; // 현재 day 출력 과 day와 일치한 일정날짜의 일정내용 출력 

    } // for1 end 
    
  // 3. 출력 
  calendar.innerHTML = html;
}

// 2. 월 변경함수 : 실행조건 : 화살표 클릭했을때
function monthChange( 매개변수 ){ console.log( 'monthChange()' );
  // 만약에 이전 버튼을 클릭하면 월에서 1차감 
  if( 매개변수 == '이전' ){ // 만일 월이 0 이면 12 을 대입하고 연도는 1차감
    month = month - 1 ; if( month == 0  ){ month = 12; year = year - 1 ; }
    // 아니고 만약에 다음 버튼을 클릭하면 월에서 1증가
  }else if( 매개변수 == '다음') {
    month = month + 1 ; if( month == 13 ){ month = 1 ; year = year + 1 ; }
  }
  // 연도 와 월 이 변경 되었으므로 출력 새로고침
  calPrint();
} 


