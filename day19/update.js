/*
  회원 비밀번호 수정 페이지 
    
  1. 현재 로그인된 회원의 비밀번호를 수정 처리
    
  2. 현재 비밀번호를 입력받고 새로운 비밀번호를 2번 입력받기
  
  3. 유효성검사 
    1. 입력받은 현재 비밀번호가 로그인된 회원의 비밀번호와 일치한지 체크
    2. 새로운 비밀번호와 새로운 비밀번호 확인 일치한지 체크 
    3. 비밀번호는 5글자 이상만 가능 

  4. 만일 수정 성공시 로그아웃 처리 

*/
let memberList = [];

// 1. 수정함수 : 수정 버튼을 클릭했을때 
function update(){
  // 1. 
  let pw  =           document.querySelector('#pw').value
  let newPw  =        document.querySelector('#newPw').value
  let newPwConfirm =  document.querySelector('#newPwConfirm').value

  // 2. 유효성검사 
    // 1. 현재로그인된 회원의 비밀번호가 입력한 현재비밀번호와 일치한지
      // - 현재 로그인된 회원의 번호 가져오기 
  let loginNo = sessionStorage.getItem('loginNo');
      // - 회원목록 호출 
  memberList = JSON.parse( localStorage.getItem('memberList') );
  if( memberList == null ) { memberList = [] }
      // - 회원목록내에서 로그인된 회원 객체찾기 
  let findResult = false; // for문내에서 특정 조건의 충족여부를 저장하는 변수  
  let findIndex = 0;  // 현재 로그인된 회원의 회원목록 인덱스 번호 
  
  for( let i = 0 ; i < memberList.length ; i++ ){
    if( memberList[i].no == loginNo && memberList[i].pw == pw  ) {
      findResult = true; // 특정 조건을 찾았을때 변수에 값 수정 
      findIndex = i;    // 특정 조건의 충족하는 index 번호 저장
      break; // for문 탈출 
    }
  }
      // 특정 조건의 결과에 따라 로직처리 
  if( findResult == false ){ alert( '회원의 비밀번호가 일치하지 않습니다.'); return; }

    // 2. 새로운 비밀번호와 새로운 비밀번호 확인 일치한지 체크 
    // 3. 비밀번호는 5글자 이상만 가능 
  if( newPw.length < 5 || newPwConfirm.length < 5 ){
    alert('새로운 비밀번호는 5글이상으로 해주세요'); return;
  }
  if( newPw != newPwConfirm ){
    alert('새로운 두 비밀번호가 일치하지 않습니다.'); return;
  }

  // 3. 수정처리 
    // 누구를[ findIndex ] : 현재 로그인된 회원의 객체
  memberList[ findIndex ].pw = newPw;
    // 회원목록내 변화가 있으므로 localStorage 에 memberList 다시 저장 
  localStorage.setItem( 'memberList' , JSON.stringify(memberList));
  
  // 4. 안내후 로그아웃 
  alert('비밀번호가 변경 되었습니다. 다시 로그인 해주세요.');
  location.href="login.html";
  
}