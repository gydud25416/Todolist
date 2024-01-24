let list = document.getElementsByClassName('list')[0]; //ul
let field = document.getElementById('field');   //추가 입력
let edit_field = document.getElementById('edit_field'); //수정 입력
let edit_list = document.querySelector('.edit_list')    //수정중인 li

//엔터로 입력
field.addEventListener("keypress", function(e){
    if(e.keyCode == 13){
        addTodo();
        return false;
    }
    return false;
});

// 할 일 추가
function addTodo(){
    
    if(field.value == ''){
        alert('내용을 입력해주세요');
    } else{
        let addList = document.createElement("li");
        let addP = document.createElement('p');
        let addBtn = document.createElement("button");
        let addBtn2 = document.createElement("button");
        addP.innerHTML= field.value; //기재란 내용 넣기
        list.prepend(addList);
        addList.appendChild(addP)
        addList.appendChild(addBtn);
        addList.appendChild(addBtn2);
        addP.addEventListener( "click", complete); //완료 이벤트 추가
        addBtn.innerText='X';
        addBtn.classList.add('delBtn')
        addBtn2.innerText='수정';
        addBtn2.classList.add('editBtn')
        addBtn.addEventListener( "click", del ); //삭제 버튼 이벤트
        addBtn2.addEventListener( "click", edit ); //수정 버튼 이벤트
    }
    field.value = '';
    field.focus();

  
}  

//할 일 완료
function complete(e){
    e.target.parentElement.classList.toggle('comp'); //완료, 미완료 토글 버튼 p태그의 부모(li)
    if(e.target.parentElement.classList.contains('comp') == true){
            list.appendChild(e.target.parentElement);
    }else{
        list.prepend(e.target.parentElement);
    }
}

//목록 선택 삭제
function del(e){
    let delOne = e.target.parentElement; //선택된 부모요소
    delOne.remove(); 
}
// 할 일 수정 중
function edit(e){
 let editOne = e.target.parentElement; //수정 할 li 선언
    editOne.classList.add('edit_list'); //li class=edit_list

    let editInput = document.createElement('input'); //li 내 input 추가
    let editP =document.querySelector('.edit_list p');

    editInput.value = editP.innerText; //input 값 = 수정할 일
    editP.style.display = 'none'; //p 숨기기
    editOne.prepend(editInput); //li input추가

    let editBtn = document.querySelectorAll('.editBtn') ;//수정 버튼 숨기기
    for(i=0; i< editBtn.length; i++){
        editBtn[i].style.display='none'; 
    }
    let delBtn = document.querySelectorAll('.delBtn') ;//삭제 버튼 숨기기
    for(i=0; i< delBtn.length; i++){
        delBtn[i].style.display='none'; 
    }
    editInput.focus();

    editInput.addEventListener("keypress", function(e){
        if(e.keyCode == 13){
            editTodo(e);
            // alert('dk')
        }
    })
    editInput.addEventListener("change", function(e){
        
            editTodo(e);
            // alert('dk')
       
    })
}




//수정 완료
function editTodo(e){
    if( e.target.value == ''){
        alert('내용을 입력해주세요')
    }else{
        let edit_list = document.querySelector('.edit_list') //수정한 li
        let addP =document.querySelector('.edit_list p');
        let addBtn = document.querySelectorAll(".edit_list button")[0];
        let addBtn2 = document.querySelectorAll(".edit_list button")[1];

        addP.innerText = e.target.value; // 입력한값 p태그에 넣기
        document.querySelector('.list input').remove(); //기재란 삭제
        addBtn.innerText='X';
        addBtn.classList.add('delBtn');
        addBtn2.innerText='수정';
        addBtn2.classList.add('editBtn');
        addBtn.addEventListener( "click", del ); //삭제 버튼 이벤트 추가
        addBtn2.addEventListener( "click", edit ); //수정 버튼 이벤트 추가
        edit_list.classList.remove('edit_list');//클래스 명 삭제
        addP.style.display="block" //p태그 보이기
        let editBtn = document.querySelectorAll('.editBtn'); //수정 버튼 보이기
        for(i=0; i< editBtn.length; i++){
            editBtn[i].style.display='block'; 
    
        }
        let delBtn = document.querySelectorAll('.delBtn'); //삭제 버튼 보이기
        for(i=0; i< delBtn.length; i++){
            delBtn[i].style.display='block'; 
    
        }
    

    }
    e.target.focus(); //추가 기재란 포커스
}  

// 전체삭제
function allDel(){
    if(confirm("할 일 목록을 비우시겠습니까?") == true){ //확인 누르면
        
        if( list.innerText == ''){
            alert('할 일 목록이 없습니다.')
        }else{
            list.innerText = '';
            alert('할 일 목록을 비우는데 성공했습니다.')
        }
    }
}