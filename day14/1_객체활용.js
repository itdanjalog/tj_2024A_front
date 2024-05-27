/*
 - 주간 영화 목록 API
    1. https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
    2. 사이드 메뉴에서 '주간/주말 박스오피스' 선택 
    3. 페이지 하단에 ' 4. 응답 예시 ' 에 JSON 주소 클릭 
    	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101
    4. 해당 페이지에 나온 데이터/자료 코드를 복사 해서 JS파일변수에 대입 
      변수 = 복사한코드
    5. 순위	영화명	개봉일	누적관객수	누적매출액 순으로 HTML 테이블에 출력하시오.
*/

let 영화API = {"boxOfficeResult":{"boxofficeType":"주말 박스오피스","showRange":"20111230~20120101","yearWeekTime":"201152","weeklyBoxOfficeList":[{"rnum":"1","rank":"1","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20112207","movieNm":"미션임파서블:고스트프로토콜","openDt":"2011-12-15","salesAmt":"7840509500","salesShare":"35.8","salesInten":"-1706758500","salesChange":"-17.9","salesAcc":"40541108500","audiCnt":"1007683","audiInten":"-234848","audiChange":"-18.9","audiAcc":"5328435","scrnCnt":"697","showCnt":"9677"},{"rnum":"2","rank":"2","rankInten":"1","rankOldAndNew":"OLD","movieCd":"20112621","movieNm":"셜록홈즈 : 그림자 게임","openDt":"2011-12-21","salesAmt":"3436042500","salesShare":"15.7","salesInten":"-576328500","salesChange":"-14.4","salesAcc":"10678327500","audiCnt":"453533","audiInten":"-83422","audiChange":"-15.5","audiAcc":"1442861","scrnCnt":"363","showCnt":"5589"},{"rnum":"3","rank":"3","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20110295","movieNm":"마이 웨이","openDt":"2011-12-21","salesAmt":"3195903000","salesShare":"14.6","salesInten":"-2754931500","salesChange":"-46.3","salesAcc":"13002897500","audiCnt":"417395","audiInten":"-369911","audiChange":"-47.0","audiAcc":"1739543","scrnCnt":"605","showCnt":"7318"},{"rnum":"4","rank":"4","rankInten":"0","rankOldAndNew":"OLD","movieCd":"20113260","movieNm":"퍼펙트 게임","openDt":"2011-12-21","salesAmt":"1816656000","salesShare":"8.3","salesInten":"-829977000","salesChange":"-31.4","salesAcc":"6640940000","audiCnt":"240133","audiInten":"-109651","audiChange":"-31.3","audiAcc":"895416","scrnCnt":"396","showCnt":"4232"},{"rnum":"5","rank":"5","rankInten":"11","rankOldAndNew":"OLD","movieCd":"20113271","movieNm":"프렌즈: 몬스터섬의비밀 ","openDt":"2011-12-29","salesAmt":"1255253000","salesShare":"5.7","salesInten":"1244095000","salesChange":"11149.8","salesAcc":"1523037000","audiCnt":"165958","audiInten":"164571","audiChange":"11865.2","audiAcc":"202909","scrnCnt":"297","showCnt":"2379"},{"rnum":"6","rank":"6","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20113381","movieNm":"오싹한 연애","openDt":"2011-12-01","salesAmt":"1119236000","salesShare":"5.1","salesInten":"-288539500","salesChange":"-20.5","salesAcc":"20634684500","audiCnt":"150185","audiInten":"-44816","audiChange":"-23.0","audiAcc":"2823060","scrnCnt":"254","showCnt":"2638"},{"rnum":"7","rank":"7","rankInten":"0","rankOldAndNew":"NEW","movieCd":"19940256","movieNm":"라이온 킹","openDt":"1994-07-02","salesAmt":"1503865000","salesShare":"6.9","salesInten":"1503865000","salesChange":"100.0","salesAcc":"1841625000","audiCnt":"139102","audiInten":"139102","audiChange":"100.0","audiAcc":"171285","scrnCnt":"246","showCnt":"2661"},{"rnum":"8","rank":"8","rankInten":"-1","rankOldAndNew":"OLD","movieCd":"20112709","movieNm":"극장판 포켓몬스터 베스트 위시「비크티니와 백의 영웅 레시라무」","openDt":"2011-12-22","salesAmt":"508658000","salesShare":"2.3","salesInten":"-379868500","salesChange":"-42.8","salesAcc":"1897120000","audiCnt":"75654","audiInten":"-57269","audiChange":"-43.1","audiAcc":"285959","scrnCnt":"186","showCnt":"999"},{"rnum":"9","rank":"9","rankInten":"-3","rankOldAndNew":"OLD","movieCd":"20113311","movieNm":"앨빈과 슈퍼밴드3","openDt":"2011-12-15","salesAmt":"407125000","salesShare":"1.9","salesInten":"-697653500","salesChange":"-63.1","salesAcc":"3416675000","audiCnt":"60990","audiInten":"-104962","audiChange":"-63.2","audiAcc":"516289","scrnCnt":"169","showCnt":"968"},{"rnum":"10","rank":"10","rankInten":"-2","rankOldAndNew":"OLD","movieCd":"20112708","movieNm":"극장판 포켓몬스터 베스트 위시 「비크티니와 흑의 영웅 제크로무」","openDt":"2011-12-22","salesAmt":"390720500","salesShare":"1.8","salesInten":"-396267500","salesChange":"-50.4","salesAcc":"1595695000","audiCnt":"56991","audiInten":"-57966","audiChange":"-50.4","audiAcc":"235070","scrnCnt":"175","showCnt":"832"}]}}

// 1. 구조 확인
console.log( 영화API );                                     // 자료 원본 
  // 영화API : 객체 { boxOfficeResult:값  }

console.log( 영화API.boxOfficeResult );                      // 자료 결과 정보 , 주간 박스오피스 전체 정보
  // 영화API.boxOfficeResult : { weeklyBoxOfficeList:값 }

console.log( 영화API.boxOfficeResult.weeklyBoxOfficeList ); // 주간 박스오피스의 영화 정보 목록 
  // 영화API.boxOfficeResult.weeklyBoxOfficeList : [ 객체 , 객체 , 객체 , 객체 ]

console.log( 영화API.boxOfficeResult.weeklyBoxOfficeList[1].rank ); // 2번째 영화 정보의 순위
console.log( 영화API.boxOfficeResult.weeklyBoxOfficeList[1].movieNm ); // 2번째 영화 정보의 영화명
  //  [ 객체[0] , 객체[1] , 객체[2] , 객체[3] ]
  // 객체[1] : { rank : 값 , movieNm : 값 }

// 2. HTML 출력 함수 : 실행조건 :1.JS열렸을떄 : 어디에 무엇을 출력 판단하기 
moviePrint()// 함수 실행 : js가 실행될때 함수 1번 실행해주기.
function moviePrint(){ // 함수 정의/만들기 
  // 1. 어디에
  let 어디에 = document.querySelector('#tableBody')

  // 2. 무엇을 
  let 무엇을 = ``;

  let 영화목록 = 영화API.boxOfficeResult.weeklyBoxOfficeList;

  for( let i = 0 ; i < 영화목록.length ; i++ ){
    
    let 영화 = 영화목록[i]; console.log( 영화 );
    
    // 무엇을에 반복해서 누적 HTML 문자열 누적 대입
    // 반복1회 마다 tr/행 1개  
    무엇을 += `<tr>
                <td> ${ 영화.rank	 } </td>
                <td> ${ 영화목록[i].movieNm } </td>
                <td> ${ 영화목록[i].openDt } </td>
                <td> ${ 영화.audiAcc } </td>
                <td> ${ 영화.salesAcc } </td>
              </tr>`
    console.log( 무엇을 );
  }

  // 3. 대입/출력 
  어디에.innerHTML = 무엇을;

}







