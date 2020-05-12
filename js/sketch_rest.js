function setup() {
    // Создаем канвас, как весь браузер
    let myCanvas = createCanvas(windowWidth, windowHeight);
    // прикрепляем канвас в заранее созданный элемент
    myCanvas.parent("canvas");
}

function draw() {
  background(0);
  translate(width/2, height/2)

  noFill();
  stroke(255, 204, 0);
  strokeWeight(200);


  for (let i = 0; i < 20; i++) {
    stroke(random(-0, 50))
    ellipse(0, 0, 10 * i + 10);
  }

}

// Изменяем размер канваса, если изменился размер окна
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
