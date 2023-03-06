const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// newTodo push하기 위한 빈 객체
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(evt) {
  // 삭제하고 싶은 li (button의 부모)
  // console.log(evt.target.parentElement)
  const li = evt.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  // handleToDoSubmit 에서 보낸 값
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  // button click event
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  // li 안에 span, button 넣기
  li.append(span);
  li.append(button);
  // ul 안에 li 넣기
  toDoList.append(li);
}

function handleToDoSubmit(evt) {
  // 기본 동작 방지
  evt.preventDefault();
  // 초기화 전에 인풋의 현재 값을 새로운 변수에 복사
  const newTodo = toDoInput.value;
  // 인풋값 초기화
  toDoInput.value = "";
  const newObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newObj);
  // 복사된 값을 paintToDo 함수에 보냄
  paintToDo(newObj);
  // localstorage에 저장
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parse = JSON.parse(savedToDos);
  // 이전 todo들을 복원
  toDos = parse;
  parse.forEach(paintToDo);
}
