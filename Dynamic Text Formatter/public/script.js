document.addEventListener("DOMContentLoaded", function () {
  const italic = document.getElementById("italic");
  const bold = document.getElementById("bold");
  const underline = document.getElementById("underline");
  const strikethrough = document.getElementById("strikethrough");
  const large = document.getElementById("large");
  const transform = document.getElementById("transform");
  const h1 = transform.querySelector("h3");

  let originalText = h1.innerHTML;

  italic.addEventListener("click", function () {
    h1.innerHTML = `<i>${originalText}</i>`;
  });

  bold.addEventListener("click", function () {
    h1.innerHTML = `<b>${originalText}</b>`;
  });

  underline.addEventListener("click", function () {
    h1.innerHTML = `<u>${originalText}</u>`;
  });

  strikethrough.addEventListener("click", function () {
    h1.innerHTML = `<s>${originalText}</s>`;
  });

  large.addEventListener("click", function () {
    h1.innerHTML = `<span style="font-size: 2em;">${originalText}</span>`;
  });
});
