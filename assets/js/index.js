"use strict";

const mainTitle = createElement(
  "h1",
  { classNames: ["main-title"] },
  document.createTextNode("Уличная мода")
);

const mainText = createElement(
  "p",
  { classNames: ["main-text"] },
  document.createTextNode(
    "Главным источником новых явлений уличной моды, как правило, является молодёжь, однако есть и более зрелые её представители. Наибольшую популярность явление уличной моды приобрело в крупных городских центрах, они же являются местом создания новых решений и развития современной уличной моды."
  )
);

const mainBtn = createElement(
  "button",
  {
    classNames: ["main-btn"],
    events: { click: () => clearTimeout(indexSetTimeout) },
  },
  document.createTextNode("Подписаться")
);

const main = createElement(
  "div",
  { classNames: ["main"] },
  mainTitle,
  mainText,
  mainBtn
);

const indexSetTimeout = setTimeout(() => {
  const spamClose = createElement(
    "button",
    {
      classNames: ["spam-close"],
      events: {click: () => {
        spamOpacity.style.opacity = 0;
        spamBlock.style.opacity = 0;
        spamBlock.style.left ='-100%';
      }}
    },
    document.createTextNode("X")
  );

  const spamText1 = createElement(
    "p",
    {
      classNames: ["spam-text"],
    },
    document.createTextNode(
      "Только для новых пользователей, при заказе онлайн скидка 15%."
    )
  );

  const spamText2 = createElement(
    "p",
    {
      classNames: ["spam-text"],
    },
    document.createTextNode("Не упусти свой момент")
  );

  const spamTitle = createElement(
    "h2",
    {
      classNames: ["spam-title"],
    },
    document.createTextNode("Играем по крупному! Дополнительная скидка 15%")
  );

  const spamImage1 = createElement("img", {
    classNames: ["spam-image"],
    attributes: { src: "./assets/images/spam-img1.jpg" },
  });

  const spamImage2 = createElement("img", {
    classNames: ["spam-image"],
    attributes: { src: "./assets/images/spam-img2.jpg" },
  });

  const spamImages = createElement(
    "div",
    {
      classNames: ["spam-images"],
    },
    spamImage1,
    spamImage2
  );

  const spamOpacity = createElement("div", {
    classNames: ["spam-opacity"],
    styles: { opacity: 0.8 },
  });

  const spamBlock = createElement(
    "div",
    {
      classNames: ["spam-block"],
      styles: { opacity: 1 },
    },
    spamImages,
    spamTitle,
    spamText1,
    spamText2,
    spamClose
  );

  document.body.append(spamOpacity, spamBlock);
}, 3000);

document.body.append(main);

function createElement(
  tag,
  { classNames = [], attributes = {}, events = {}, styles = {} },
  ...children
) {
  const elem = document.createElement(tag);

  elem.classList.add(...classNames);

  for (const [typeEvent, handleEvent] of Object.entries(events)) {
    elem.addEventListener(typeEvent, handleEvent);
  }

  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    elem.setAttribute(nameAttr, valueAttr);
  }

  for (const [nameStyle, valueStyle] of Object.entries(styles)) {
    elem.style[nameStyle] = valueStyle;
  }

  elem.append(...children);

  return elem;
}
