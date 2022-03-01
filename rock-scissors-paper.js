"use strict";
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// 가위, 바위, 보 배열로 할당
var rsp = ["✌️", "✊", "🖐"];
// idx에 따라 가위, 바위, 보를 화면에 출력
var rotate = document.getElementById("rotate");
var handleRotate = function (idx) {
  rotate.innerHTML = rsp[idx];
};
// 인덱스 초기값
var index = 1;
// rotate 중단을 위한 초깃값
var isRotating = false;
// rotate 시작 함수
var startRotate = function () {
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
var stopRotate = function () {
  if (isRotating) {
    clearInterval(isRotating);
  }
};
// 시작 버튼에 이벤트 부여
document.getElementById("start").addEventListener("click", startRotate);
// 가위, 바위, 보 출력 함수
var selected = document.getElementById("selected");
var handleIcon = function (idx) {
  selected.innerHTML = rsp[idx];
};
// 가위, 바위, 보 선택 버튼에 이벤트 부여
var selectBtn = document.getElementsByClassName("rspSelector");
__spreadArray([], selectBtn, true).map(function (btn, idx) {
  btn.addEventListener("click", function () {
    handleIcon(idx);
    stopRotate();
    compareResult(rotate.innerHTML, selected.innerHTML);
  });
});
// 가위, 바위, 보 비교 함수
var result = document.getElementById("result");
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
