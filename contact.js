const contactLink = document.getElementById("contact_link");

contactLink.addEventListener("click", function () {
  this.classList.add("clicked"); // 添加 clicked 類別
  setTimeout(() => {
    this.classList.remove("clicked"); // 移除 clicked 類別
  }, 300); // 300 毫秒後移除 clicked 類別，可以根據需要調整時間
});


// 判斷是否為觸碰螢幕
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

// 獲取相關元素
var nameCardContainer = document.querySelector('.contact_name_card_container');

// 如果是觸碰螢幕，移除 hover 效果，並且移除 .contact_name_card_back 內容
if (isTouchDevice()) {
  nameCardContainer.classList.add('disable-hover');
  var backElement = nameCardContainer.querySelector('.contact_name_card_back');
  backElement.innerHTML = ''; // 清空內容
}