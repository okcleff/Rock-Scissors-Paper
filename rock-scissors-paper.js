"use strict";

// 가위, 바위, 보 배열로 할당
const rsp = ["✌️", "✊", "🖐"];

// idx에 따라 가위, 바위, 보를 화면에 출력
const rotate = document.getElementById("rotate");
const handleRotate = (idx) => {
  rotate.innerHTML = rsp[idx];
};

// 인덱스 초기값
let index = 1;

// rotate 중단을 위한 초깃값
let isRotating = false;

// rotate 시작 함수
const startRotate = () => {
  result.innerHTML = ""; // 결과 문구 초기화
  selected.innerHTML = ""; // 결과 화면 초기화
  isRotating = setInterval(function () {
    if (index === 0) {
      handleRotate(0);
      index = 1;
    } else if (index === 1) {
      handleRotate(1);
      index = 2;
    } else if (index === 2) {
      handleRotate(2);
      index = 0;
    }
  }, 100);
};

// rotate 중단 함수
const stopRotate = () => {
  if (isRotating) {
    clearInterval(isRotating);
  }
};

// 시작 버튼에 이벤트 부여
document.getElementById("start").addEventListener("click", startRotate);

// 가위, 바위, 보 출력 함수
const selected = document.getElementById("selected");
const handleIcon = (idx) => {
  selected.innerHTML = rsp[idx];
};

// 가위, 바위, 보 선택 버튼에 이벤트 부여
const selectBtn = document.getElementsByClassName("rspSelector");

[...selectBtn].map((el, idx) => {
  el.addEventListener("click", () => {
    handleIcon(idx);
    stopRotate();
    compareResult(rotate.innerHTML, selected.innerHTML);
  });
});

// 가위, 바위, 보 비교 함수
const result = document.getElementById("result");
function compareResult(left, right) {
  if (
    (left === "✌️" && right === "✌️") ||
    (left === "✊" && right === "✊") ||
    (left === "🖐" && right === "🖐")
  ) {
    return (result.innerHTML = "비겼습니다.");
  } else if (
    (left === "✌️" && right === "🖐") ||
    (left === "✊" && right === "✌️") ||
    (left === "🖐" && right === "✊")
  ) {
    return (result.innerHTML = "졌습니다.");
  } else {
    return (result.innerHTML = "이겼습니다.");
  }
}
