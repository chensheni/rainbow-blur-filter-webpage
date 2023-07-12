var image;

function upload(){
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function makeRainbow() {
  var imgHeight = image.getHeight()
  var y1 = 1/7*imgHeight;
  var y2 = 2/7*imgHeight;
  var y3 = 3/7*imgHeight;
  var y4 = 4/7*imgHeight;
  var y5 = 5/7*imgHeight;
  var y6 = 6/7*imgHeight;  
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    // red
    if (pixel.getY() <= y1){
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } 
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);
      }
    }
    // orange
    else if (pixel.getY() > y1 && pixel.getY() <= y2){
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);
      }
    }
    // yellow
    else if (pixel.getY() > y2 && pixel.getY() <= y3){
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    // green
    else if (pixel.getY() > y3 && pixel.getY() <= y4){
      if (avg < 128){
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      } else{
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);
      }
    }
    // blue
    else if (pixel.getY() > y4 && pixel.getY() <= y5){
      if (avg < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else{
        pixel.setRed(2*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    // indigo
    else if (pixel.getY() > y5 && pixel.getY() <= y6){
      if (avg < 128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      } else{
        pixel.setRed(1.2*avg - 51);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);
      }
    }
    // violet
    else if (pixel.getY() > y6 && pixel.getY() <= imgHeight){
      if (avg < 128){
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      } else{
        pixel.setRed(0.4*avg + 153);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(0.4*avg + 153);
      }
    }
  }
  var imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}

function makeBlur() {
  var widthImg = image.getWidth();
  var heightImg = image.getHeight();
  
  var imgNew = new SimpleImage(widthImg, heightImg);
  
  for (var pixel of imgNew.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    var rand = Math.random() * 11;
    if (rand >= 5)
    {
      var rand1 = Math.random() * 5 - 2.25;
      var rand2 = Math.random() * 5 - 2.25;
      if ((0 <= x + rand1) && (x + rand1 <= widthImg) &&
          (0 <= y + rand2) && (y + rand2 <= heightImg))
      {
        var currentPixel = image.getPixel(x + rand1, y + rand2);
        imgNew.setPixel(x, y, currentPixel);
      } 
      else
      {
        var currentPixel = image.getPixel(x, y);
        imgNew.setPixel(x, y, currentPixel);
      }
    } 
    else 
    {
      var currentPixel = image.getPixel(x, y);
      imgNew.setPixel(x, y, currentPixel);
    }
  }
  var imgcanvas = document.getElementById("can");
  imgNew.drawTo(imgcanvas);
}
  
  /*
  var imgHeight = image.getHeight()
  var y1 = 1/7*imgHeight;
  var y2 = 2/7*imgHeight;
  var y3 = 3/7*imgHeight;
  var y4 = 4/7*imgHeight;
  var y5 = 5/7*imgHeight;
  var y6 = 6/7*imgHeight;  
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    // red
    if (pixel.getY() <= y1){
      if (avg < 128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
  */