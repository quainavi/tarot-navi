// ===============================
// 변수
// ===============================

const shuffleButton = document.querySelector(".shuffle-button");
const cardContainer = document.querySelector("#card-container");
const resultContainer = document.querySelector("#result-container");

let deck = [];
let selectedCards = [];


// ===============================
// 덱 생성
// ===============================

function createDeck() {

    deck = tarotCards.map(card => {

        return {

            ...card,

            reversed: Math.random() < 0.5

        };

    });

    deck.sort(() => Math.random() - 0.5);

}


// ===============================
// 셔플 버튼
// ===============================

shuffleButton.addEventListener("click", function () {

    cardContainer.innerHTML = "";
    resultContainer.innerHTML = "";

    selectedCards = [];

    shuffleButton.innerText = "세 장 뽑으세요";

    createDeck();

    createCards();

});


// ===============================
// 카드 생성
// ===============================

function createCards() {

    for (let i = 0; i < deck.length; i++) {

        const card = document.createElement("div");

        card.className = "card";

        card.tarotData = deck[i];

        card.style.left = "50%";
        card.style.top = "50%";

        card.dataset.canFlip = "false";

        card.addEventListener("mouseenter", function () {

            card.classList.add("hover");

        });

        card.addEventListener("mouseleave", function () {

            card.classList.remove("hover");

        });

        card.addEventListener("click", function () {

            if (card.classList.contains("selected")) {

                flipCard(card);

                return;

            }

            selectCard(card);

        });

        cardContainer.appendChild(card);

        animateShuffle(card);

    }


    setTimeout(fanCards, 1500);

}
// ===============================
// 카드 선택
// ===============================

function selectCard(card) {

    // 이미 선택했으면 종료
    if (card.classList.contains("selected")) return;

    // 3장까지만 선택
    if (selectedCards.length >= 3) return;

    card.classList.add("selected");

    selectedCards.push(card);

    const order = selectedCards.length - 1;

    const startX = cardContainer.clientWidth / 2 - 295;
    const gap = 220;

    card.style.left = `${startX + order * gap}px`;
    card.style.top = "600px";
    card.style.transform = "rotate(0deg)";

    // 이제 뒤집을 수 있음
    card.dataset.canFlip = "true";

}


// ===============================
// 카드 뒤집기
// ===============================

function flipCard(card) {

    // 선택 안 된 카드는 못 뒤집음
    if (card.dataset.canFlip !== "true") return;

    // 이미 뒤집었으면 종료
    if (card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    if (card.tarotData.reversed) {

        card.innerHTML = `
            <img
                src="${getImagePath(card.tarotData)}"
                style="
                    width:100%;
                    height:100%;
                    border-radius:10px;
                    transform:rotate(180deg);
                ">
        `;

    } else {

        card.innerHTML = `
            <img
                src="${getImagePath(card.tarotData)}"
                style="
                    width:100%;
                    height:100%;
                    border-radius:10px;
                ">
        `;

    }

    showResult(card);

}
// ===============================
// 결과 표시
// ===============================

function showResult(card) {

    const result = document.createElement("div");

    result.className = "result";

    const direction = card.tarotData.reversed
        ? "역방향"
        : "정방향";

    result.innerHTML = `
        <h3>${card.tarotData.name}</h3>
        <p>${direction}</p>
    `;

    resultContainer.appendChild(result);

}


// ===============================
// 셔플 애니메이션
// ===============================

function animateShuffle(card) {

    setTimeout(() => {

        const x =
            (Math.random() * window.innerWidth) -
            (window.innerWidth / 2);

        const y =
            (Math.random() * 500) - 250;

        const r =
            (Math.random() - 0.5) * 80;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
        card.style.setProperty("--r", `${r}deg`);

        card.classList.add("shuffle");

    }, 100);

}
// ===============================
// 부채꼴 배치
// ===============================

function fanCards() {

    const cards = document.querySelectorAll(".card");

    const button =
        document.querySelector(".shuffle-button");

    const buttonRect =
        button.getBoundingClientRect();

    const containerRect =
        cardContainer.getBoundingClientRect();

    const centerX =
        buttonRect.left -
        containerRect.left +
        buttonRect.width / 2;

    const centerY =
        buttonRect.bottom -
        containerRect.top +
        500;

    const radius = 420;

    cards.forEach((card, index) => {

        const angle =
            -70 +
            (index / (cards.length - 1)) * 140 +
            1;

        const x =
            centerX +
            Math.sin(angle * Math.PI / 180) *
            radius;

        const y =
            centerY -
            Math.cos(angle * Math.PI / 180) *
            radius;

        card.style.left =
            `${x - card.offsetWidth / 2}px`;

        card.style.top =
            `${y}px`;

        card.style.transform =
            `rotate(${angle}deg)`;

        card.classList.remove("shuffle");

    });

}
// ===============================
// 이미지 경로
// ===============================

function getImagePath(cardData) {

    if (cardData.id <= 21) {

        return `card/메이저/${cardData.file}.jpg`;

    }

    if (cardData.id <= 35) {

        return `card/완드/${cardData.file}.jpg`;

    }

    if (cardData.id <= 49) {

        return `card/컵/${cardData.file}.jpg`;

    }

    if (cardData.id <= 63) {

        return `card/소드/${cardData.file}.jpg`;

    }

    return `card/펜타클/${cardData.file}.jpg`;

}
// ===============================
// 결과 표시
// ===============================

function showResult(card) {

    // 이미 결과가 있으면 다시 만들지 않음
    if (card.resultElement) return;

    const result = document.createElement("div");

    result.className = "result";

    const direction =
        card.tarotData.reversed
            ? "역방향"
            : "정방향";

    result.innerHTML = `
        <h3>${card.tarotData.name}</h3>

        <p class="direction">
            ${direction}
        </p>
    `;

    resultContainer.appendChild(result);

    // 나중에 해석을 붙이기 위해 저장
    card.resultElement = result;

}
