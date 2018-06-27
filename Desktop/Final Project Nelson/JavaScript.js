var users = []; //Esto va a ser lo que divida quie
var totalBill= 0;
var doc = document.getElementById("display");
var tips =0;
//Funcion que creat los objetos en mi array

/* function add*/

			function bill(){
				users = [];
				var names= document.getElementById('User').value.split(',')
				totalBill= parseFloat(document.getElementById("bill").value)
				//var avg = totalBill/names.length; 
				var tips = parseFloat(document.getElementById('Tipping').value)
				//var avg = (tips * totalBill)/ names.length;
				//var avg=Math.round(total * 100)/100;

				//var avg = totalBill/names.length;
				//dollar:(tips * avg ) + avg.toFixed(2)
				//console.log(totalBill, names.length, tips)
				totalBill=(totalBill*tips) + totalBill;
				console.log(totalBill, tips, names.length)
				var avg = totalBill/names.length;
				for (var i = 0; i< names.length ; i++) {
					var Person = { name: names[i], dollar: avg.toFixed(2), porcengate: 100/names.length }
					users.push(Person);
				}
			}
			function show(){
				doc.innerHTML = ""
					//This is to create a P tag for all my names
				for (var i =0; i < users.length; i++ ){
					var row = document.createElement('div')
					row.setAttribute('class',"row")

					var ptag= document.createElement("p")
					ptag.innerHTML= users[i].name
					ptag.setAttribute("class","userDisplay")
					row.appendChild(ptag)
					//This is to create 
					var input = document.createElement("input")
					input.setAttribute("type","number")
					input.setAttribute("max","100")
					input.setAttribute("step","1")
					input.setAttribute("class","userDisplay")
					input.value = users[i].porcengate
					input.addEventListener("change", C)
					input.id = i 
					row.appendChild(input)
					// 
					var dollar = document.createElement("p")
					dollar.innerHTML=  "$"+users[i].dollar
					dollar.setAttribute('class','userDisplay')
					row.appendChild(dollar) 
					doc.appendChild(row)
				}
			}

			function C (){
			 	console.log(this)
			 	users[this.id].porcengate= this.value
			 	users[this.id].dollar = (this.value/100) * totalBill;
			 	show()
			}

			function D(){
			users[this.id].porcengate.toFixed(2)
			users[this.id].dollar.toFixed(2)
			}

			function saveData(){
				bill()
				show()
			}

/* Random color generator for the boxes and the triangles//
 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $(".row").css("background-color", getRandomColor());
}

 */
/*	Tengo que reaccinar el porcentaje del elemento del objeto al precionar la caja con un input el porcentaje tiene que ser reaccinado.
	function if the user change the percentage of each bill. it will affect their dollar ammount.
	this will affect variable dollar. The function will listen to input. The input will be set equal to the new value.
	I dont know how to do it but I can check on w3d. It needs to have an event listener? why if the event is happening between the own HTML, 
	Then I have to make the input runs trough.
	Will it need a new parameter in the object.
*/

// Necesito saber como comvertir numeros enteros a porcentaje
//Funcion que divide el costo equitativamente entre cada usuario
//Se divide la factura equitativamente. 
//Cada Objeto de recibe un porcentaje equitativo del la factura
// No se como agregar todos los datos en la factura.
// Podria anadir todo en la suma de cada uno de los objetos.
// No se como arreglar mi codigo y hacerlo mas eficiente