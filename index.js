const image = document.getElementById('image');

function setBlur() {
  let valueBlur = document.getElementById('blur').value;
  image.style.filter = `blur(${valueBlur}px)`;
}

function setSpacing() {
  const valueSpacing = document.getElementById('spacing').value;
  image.style.padding = `${valueSpacing}px`;
}

function setColor() {
  const colorPicker = document.getElementById('color').value;
  image.style.border = `5px solid ${colorPicker}`;
}