function handleClickMenu() {
  let el = document.getElementById("menuList");
  let showClose = document.getElementById("iconClose");
  let close = document.getElementById("iconMenu");
  let body_ctrl = document.getElementById("body-control");
  el.className = "menu-list menu-list-block";
  showClose.style.display = "block";
  close.style.display = "none";
  body_ctrl.className = "nav-open-noscroll";
}
function handleClickClose() {
  let el = document.getElementById("menuList");
  let showClose = document.getElementById("iconClose");
  let close = document.getElementById("iconMenu");
  let body_ctrl = document.getElementById("body-control");
  el.className = "menu-list";
  close.style.display = "block";
  showClose.style.display = "none";
  body_ctrl.classList.remove("nav-open-noscroll");
}

async function show_1() {
  const requestURL = "/task.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const contentList = await response.json();
  showList(contentList);
}

// function showList(obj) {
//   const lists = obj;
//   for (const list of lists) {
//     for (var i = 0; i < 12; i++) {
//       var item = document.getElementById("contentList").children[i];
//       var itemChild = item.children[0];
//       var itemChild1 = itemChild.children[0];
//       var itemChild2 = itemChild1.children[0];
//       var src = itemChild2.src;

//       if (src !== "") {
//         break;
//       } else {
//         // console.log(list.cover);
//         // console.log(itemChild2);
//         // itemChild2.src = list.cover;
//       }
//     }
//   }
// }

// show_1();
