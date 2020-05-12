function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
}

function draw() {
  background(0);
  translate(width, height);

  noFill();
  stroke(255, 204, 0);
  strokeWeight(150);


  for (let i = 0; i < 40; i++) {
    stroke(random(-250, 50))
    ellipse(0, 0, 150 * i + 50);
  }
}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
