const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

// const donwloadQrCode = document.querySelector("#donwload__button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) {
    qrCodeBtn.innerText = "Digite sua URL acima";
    return;
  }
  qrCodeBtn.innerText = "Gerando código...";
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });

}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

//adicionar a criação do qr code apertando ender
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
