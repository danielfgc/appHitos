var students_in = document.getElementById("alumnos-in");
var nombre = document.getElementById("input-alumno");
var contador = 0; 
var totalAlumnos = [];

if(contador==0)document.getElementById("crearGrupos").style.display= "none";

function clicar(event){         
    var n = event.currentTarget.id;
    sessionStorage.setItem("idalumn",n);   
}

function addStudent(){
    var alumn = document.createElement("button");
    var opcion = document.createElement("option");
    var clave = "alumno"+contador;
    alumn.setAttribute("class","alumnos-buttons");
    alumn.setAttribute("id",clave);
    alumn.innerHTML = nombre.value+" <span onclick='eliminarAlumno()'>X</span>";
    alumn.addEventListener("mouseover", function(event){clicar(event)});
    students_in.appendChild(alumn);
    totalAlumnos.push(nombre.value);
    nombre.value = "";
    contador++;
    opcion.value = contador;
    opcion.innerText = contador;
    document.getElementById("selector").appendChild(opcion);
    document.getElementById("crearGrupos").style.display = "initial";
}

function eliminarAlumno(){
    var galleta =sessionStorage.getItem("idalumn");   
    var hijo = document.getElementById(galleta);
    students_in.removeChild(hijo);
    totalAlumnos.splice(galleta);
    contador--;
    var ultimoHijo = document.getElementById("selector").lastChild;
    document.getElementById("selector").removeChild(ultimoHijo);
    if(contador==0)document.getElementById("crearGrupos").style.display= "none";
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
function agrupar(){
    var numgrupos = document.getElementById("selector").value;
        for(var i in numgrupos){
            var grupo = document.createElement("div");
            grupo.setAttribute("id","grupo"+i);
            var titulo = document.createElement("h3");
            titulo.innerText ="Grupo "+(i+1);
            grupo.appendChild(titulo);
            document.getElementById("student-group").appendChild(grupo);
        }
        shuffle(totalAlumnos);
    
    while(totalAlumnos.length>0){    
        for(var x =1; x <=numgrupos;x++){
                var lista =  document.createElement("li");
                lista.innerText =totalAlumnos.pop();
                document.getElementById("grupo"+x).appendChild(lista);
                
        }
    }
}

