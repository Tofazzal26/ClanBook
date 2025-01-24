const menuOpen = document.getElementById("menuShow");
const menuList = document.getElementById("menuListShow");

menuOpen.addEventListener("click", () => {
  menuList.classList.toggle("menuActive");
  menuOpen.classList.toggle("menuShowActive");
});

let communityData = [];
let currentPage = 1;
const itemPerPage = 3;

fetch("/community.json")
  .then((res) => res.json())
  .then((data) => {
    communityData = data;
    renderPage();
  });

const renderPage = () => {
  const cardCommunity = document.getElementById("cardCommunity");
  cardCommunity.innerHTML = "";
  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage;
  const currentItem = communityData.slice(start, end);
  currentItem.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `  <div class="cardParent">
    <div class="cardInfo">
      <div class="cardAvatar">
        <img src="${item?.image}" alt="" />
        <div class="avatarInfo">
          <h2>${item?.name}</h2>
          <p>${item?.job}</p>
        </div>
      </div>
      <div class="rating">
        <img src="images/star-1.png" alt="" />
        <img src="images/star-2.png" alt="" />
        <img src="images/star.png" alt="" />
        <img src="images/star.png" alt="" />
        <img src="images/star.png" alt="" />
      </div>
      <p class="cardParagraph">
        It had been a very long time since I had the idea to print the
        messages sent to my wife since I had kept the history since
        the first day... I first thought about doing it myself in PDF
        then I discovered Mon Livre SMS... Perfect!!!
      </p>
    </div>
  </div>`;

    cardCommunity.appendChild(div);
  });
};

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPage = Math.ceil(communityData.length / itemPerPage);
  if (currentPage < totalPage) {
    currentPage++;
    renderPage();
  }
});
document.getElementById("previousPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage();
  }
});
