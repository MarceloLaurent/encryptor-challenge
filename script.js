const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncripty() {
  message.style.backgroundImage = "none";

  const encryptedText = encripty(textArea.value);
  message.value = encryptedText;
  textArea.value = "";
}

function btnDecripty() {
  message.style.backgroundImage = "none";

  const encryptedText = desencriptar(textArea.value);
  message.value = encryptedText;
  textArea.value = "";
}

function btnCopy(textMessage) {
  const text = document.getElementById(textMessage);

  let selectedText = document.createRange();
  selectedText.selectNode(text);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(selectedText);
  document.execCommand("copy");
}

function encripty(encryptedString) {
  let codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encryptedString = encryptedString.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (encryptedString.includes(codeMatrix[i][0])) {
      encryptedString = encryptedString.replaceAll(
        codeMatrix[i][0],
        codeMatrix[i][1]
      );
    }
  }

  return encryptedString;
}

function desencriptar(decryptedString) {
  let codeMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  decryptedString = decryptedString.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (decryptedString.includes(codeMatrix[i][1])) {
      decryptedString = decryptedString.replaceAll(
        codeMatrix[i][1],
        codeMatrix[i][0]
      );
    }
  }

  return decryptedString;
}
