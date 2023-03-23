const input = document.getElementById("paraNumberCount");
const container = document.querySelector(".container");

const generateWords = (n) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text = "";
  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * (letters.length - 1)).toFixed(0);
    text += letters[random];
  }
  return text;
};

const generatePara = (value) => {
  const numOfWords = Number(input.value);
  if (numOfWords == "") {
    alert("Enter Valid Number");
  } else {
    const p = document.createElement("p");
    let data = "";
    for (let i = 0; i < numOfWords; ++i) {
      const randomNum = (Math.random() * 15).toFixed(0);
      data += generateWords(randomNum);
      data += " ";
    }
    p.innerText = data;
    p.setAttribute("class", "paras");
    container.append(p);
  }
};
