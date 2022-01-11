"use strict";

// const r = "✊";
// const s = "✌️";
// const p = "🖐";

// const rsp = {
//   r: "✊",
//   s: "✌️",
//   p: "🖐",
// };

const rsp = ["✊", "✌️", "🖐"];

function handleIcon(imoticon) {
  const iconList = document.getElementById("iconList");
  const iconLi = document.createElement("li");
  const icon = `${imoticon}`;

  iconLi.innerHTML = icon;
  iconLi.className = "shownIcon";

  const shownIcon = document.getElementsByClassName("shownIcon");

  if (shownIcon.length) {
    iconList.removeChild(shownIcon[0]);
    iconList.appendChild(iconLi);
  } else {
    iconList.appendChild(iconLi);
  }
}

const rspBtn = document.getElementsByClassName("rsp");

for (let i = 0; i < rspBtn.length; i++) {
  rspBtn[i].addEventListener("click", (e) => {
    e.target.name === "rock"
      ? handleIcon(rsp[0])
      : e.target.name === "scissors"
      ? handleIcon(rsp[1])
      : handleIcon(rsp[2]);
  });
}
