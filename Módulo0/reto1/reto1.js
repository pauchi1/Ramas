probar = function(){
   var areaRectangulo = calcularAreaRectangulo(10,5);
   console.log("area Rectangulo: "+areaRectangulo);
   var areaCuadrado = calcularAreaCuadrado(8);
   console.log("area Cuadrado: "+areaCuadrado);
   var perimetroRectangulo = calcularPerimetroRectangulo(10,5);
   console.log("perimetro Rectangulo: "+perimetroRectangulo);
   var perimetroCuadrado = calcularPerimetroCuadrado(8);
   console.log("perimetro Cuadrado: "+perimetroCuadrado);
   var promedio=calcularPromedio(10,20,15,15);
   console.log("promedio:"+promedio);
   
}

function calcularAreaRectangulo(base, altura) {
   let areaRectangulo;
   areaRectangulo = base * altura;
   return areaRectangulo;
}

function calcularAreaCuadrado(lado) {
   let areaCuadrado;
   areaCuadrado = lado * lado;
   return areaCuadrado;
}

function calcularPerimetroRectangulo(base, altura) {
   let perimetroRectangulo;
   perimetroRectangulo = (2 * base) + (2 * altura);
   return perimetroRectangulo;
}

function calcularPerimetroCuadrado(lado) {
   let calcularPerimetroCuadrado;
   calcularAreaCuadrado = lado + lado + lado + lado;
   return calcularAreaCuadrado;
}

function calcularPromedio(valor1, valor2, valor3, valor4) {
   let promedio;
   promedio = (valor1 + valor2 + valor3 + valor4) / 4;
   return promedio;
}