let list = document.getElementsByClassName('list')[0]; //ul
let field = document.getElementById('field');   //추가 입력
let edit_field = document.getElementById('edit_field'); //수정 입력
let edit_list = document.querySelector('.edit_list')    //수정중인 li


// 할 일 추가
function addTodo(){
    
    if(field.value == ''){
        alert('내용을 입력해주세요');
    } else{
        let addList = document.createElement("li");
        let addBtn = document.createElement("button");
        let addBtn2 = document.createElement("button");
        addList.innerHTML= field.value; //기재란 내용 넣기
        list.appendChild(addList)
        addList.appendChild(addBtn);
        addList.appendChild(addBtn2);
        addList.addEventListener( "click", complete); //완료 이벤트 추가
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
    e.target.classList.toggle('comp'); //완료, 미완료 토글 버튼
}

//목록 선택 삭제
function del(e){
    let delOne = e.target.parentElement; //선택된 부모요소
    delOne.remove(); 
}
// 할 일 수정
function edit(e){

    document.querySelector('.inputField.edit').style.display='flex'
    edit_field.focus();
    let editOne = e.target.parentElement; //수정 할 li 선언
    editOne.style.color='red';  //수정중 텍스트 표시
    editOne.classList.add('edit_list');
    edit_field.innerHTML='';

    let editBtn = document.querySelectorAll('.editBtn') ;//수정 버튼 숨기기
    for(i=0; i< editBtn.length; i++){
        editBtn[i].style.zIndex='-9999'; 
    }
    let delBtn = document.querySelectorAll('.delBtn') ;//삭제 버튼 숨기기
    for(i=0; i< editBtn.length; i++){
        delBtn[i].style.zIndex='-9999'; 
    }


}

//수정 버튼 클릭
function editTodo(){
    if( edit_field.value == ''){
        alert('내용을 입력해주세요')
    }else{
        let edit_list = document.querySelector('.edit_list')

        edit_list.innerText = edit_field.value;
        document.querySelector('.inputField.edit').style.display='none'
        edit_list.style.color='#000';
        let addBtn = document.createElement("button");
        let addBtn2 = document.createElement("button");
        edit_list.appendChild(addBtn);
        edit_list.appendChild(addBtn2);
        addBtn.innerText='X';
        addBtn.classList.add('delBtn');
        addBtn2.innerText='수정';
        addBtn2.classList.add('editBtn');
        addBtn.addEventListener( "click", del ); //삭제 버튼 이벤트 추가
        addBtn2.addEventListener( "click", edit ); //수정 버튼 이벤트 추가
        edit_list.classList.remove('edit_list')

        edit_field.value=''; //수정 기재란 초기화

        let editBtn = document.querySelectorAll('.editBtn'); //수정 버튼 보이기
        for(i=0; i< editBtn.length; i++){
            editBtn[i].style.zIndex='0'; 
    
        }
        let delBtn = document.querySelectorAll('.delBtn'); //삭제 버튼 보이기
        for(i=0; i< delBtn.length; i++){
            delBtn[i].style.zIndex='0'; 
    
        }
    

    }
    field.focus(); //추가 기재란 포커스
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