let todoList = []
print();
function add(){
  let todoInput = document.querySelector('#todoInput').value;
  let newTodo = { 하고싶은일 : todoInput , 상태 : 'X' }

  // 1. localstorage 에 있는 todoList 가져오기 
  let localData = JSON.parse( localStorage.getItem( 'localData' ) );
  console.log( localData ); // null;
  
  // 2. 가져온 todoList(localstorage) 없으면 빈배열 대입 , 존재하면 js배열에 대입 
  if( localData == null ){ todoList = [] ;  }
  else{ todoList = localData; }

  // 3. 
  todoList.push(newTodo);                     console.log(todoList);

  // 4. 다시 localstorage 에 todoList 를 저장 하기 
  localStorage.setItem( 'localData' , JSON.stringify( todoList )  );

  alert('리스트저장성공!');
  print();
}
function print(){   // 등록하고 프린트, 원래 프린트!

  let localData = JSON.parse( localStorage.getItem( 'localData' ) );
  if( localData == null ) { todoList = [] }
  else{ todoList = localData; }

  // 어디에
  let todoBox = document.querySelector('#todoBox');
  // 무엇을
  let html = ``;
  for( i = 0 ; i < todoList.length ; i++ ){
      if(todoList[i].상태 == 'X'){
          html +=`<div id="whiteBox">
                      <span> ${todoList[i].하고싶은일} </span>
                      <div>
                          <button type="button" onclick="change(${i})">변경</button>
                          <button type="button" onclick="remove(${i})">삭제</button>
                      </div>
                  </div>`  
      }else{
          html +=`<div id="blackBox">
                      <span> ${todoList[i].하고싶은일} </span>
                      <div>
                          <button type="button" onclick="change(${i})">변경</button>
                          <button type="button" onclick="remove(${i})">삭제</button>
                      </div>
                  </div>`  
      }
  }
  // 출력
  todoBox.innerHTML = html;
}
function remove(deleteIndex){

  todoList.splice(deleteIndex,1);             console.log(todoList);

  // 4. 다시 localstorage 에 todoList 를 저장 하기 
  localStorage.setItem( 'localData' , JSON.stringify( todoList )  );

  print();

}
function change(changeIndex){

  if(todoList[changeIndex].상태 == 'X'){
      todoList[changeIndex].상태 = 'O'
  }else{
      todoList[changeIndex].상태 = 'X'
  }                                           console.log(todoList);

    // 4. 다시 localstorage 에 todoList 를 저장 하기 
    localStorage.setItem( 'localData' , JSON.stringify( todoList )  );
    
  print();

}