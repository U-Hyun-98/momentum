const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evt) {
  // 기본 동작 방지
  evt.preventDefault();
  // form에 hidden 클래스 추가
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 인풋창 입력값
  const username = loginInput.value;
  // 로컬스토리지 추가
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  // h1 텍스트 추가
  greeting.innerHTML = `Hello ${username}`;
  // h1에 hidden 클래스 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // 유저정보가 없을 때 인풋창 보여주기
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 있으면 h1 보여주기
  paintGreetings(savedUsername);
}