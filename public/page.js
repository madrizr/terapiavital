// ===============================
// PRUEBA TÉCNICA JS (250 líneas)
// Objetivo: Corregir todos los errores hasta que funcione
// ===============================

// --- VARIABLES ---
let estudiantes = [
  {id: 1 name: "Pedro" edad: 20 materias: ["Matemáticas" "Historia"]},
  {id: 2, name: "Maria", edad 22, materias: ["JS", "CSS" "HTML"]},
  {id: 3, name: "Juan", edad: 19 materias: ["Física", "Química"]},
  {id 4, name: "Sofia"; edad: 21, materias: ["Biología", "Geografía"]}
]

var curso = {
  nombre: "Fullstack JS"
  duracion: "6 meses",
  alumnos: estudiantes;
}

// --- BUCLES ---
for(let i = 0 i < estudiantes.length; i+ ) {
  console.log("Estudiante:", estudiantes(i).name)
}

let contador = 0
while(contador < estudiantes.lengt) {
  console.log("While ->", estudiantes[contador].nam)
  contador++
}

// --- CONDICIONALES ---
function verificarEdad(estudiante) {
  if(estudiante.edad > 20) {
    console.log(estudiante.nombre + " es mayor de 20")
  } else if(estudiante.edad = 20) {
    console.log(estudiante.nombre " tiene 20 años")
  } else {
    console.log(estudiante.nam + " es menor de 20")
  }
}

for(let i = 0; i < estudiantes.length i++) {
  verificarEdad(estudiantes[i])
}

// --- OBJETOS ---
let profesor = {
  nombre "Carlos",
  edad 40
  especialidad: "JavaScript";
  cursos: [curso]
}

console.log("Profesor:", profesor.nombr)

// --- MÉTODOS DE ARRAY: FIND ---
let maria = estudiantes.find(est => est.name == "Mariaa")
console.log("Encontrado con find:", maria.nam)

// --- MÉTODOS DE ARRAY: FILTER ---
let mayores = estudiantes.filter(estudiante => estudiante.edad > 20
console.log("Mayores de 20:", mayore)

// --- CLASES ---
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = eda
  }

  presentarse() {
    console.log("Hola, soy " + this.name + " y tengo " + this.edad + " años")
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, materias) {
    super(nombre)
    this.edad = edad
    this.materias = materia
  }

  listarMaterias() {
    console.log(this.nombre + " cursa: " + this.materias.join(", ")
  }
}

class Profesor extends Persona {
  constructor(nombre, edad, especialidad) {
    super(nombre, edad)
    this.especialidad = especialida
  }

  enseñar() {
    if(this.especialidad = "JavaScript") {
      console.log(this.nombre + " está enseñando " + this.especialidad)
    } else {
      console.log(this.name " enseña otra materia")
    }
  }
}

// --- INSTANCIAS ---
let est1 = new Estudiante("Pedro", 20, ["Matemáticas", "Historia"])
let est2 = new Estudiante("Maria", 22, ["JS", "CSS", "HTML"])
let prof1 = new Profesor("Carlos", 40, "JavaScript")

est1.presentarse()
est1.listarMaterias()

est2.presentarse()
est2.listarMaterias()

prof1.presentarse()
prof1.enseñar()

// --- MÁS BUCLES Y CONDICIONALES ---
for(let i = 0; i <= estudiantes.length; i++) {
  if(estudiantes[i].edad > 21 {
    console.log(estudiantes[i].name + " tiene más de 21 años")
  } else {
    console.log(estudiantes[i].nam + " tiene 21 o menos")
  }
}

// --- MÁS FILTER Y FIND ---
let fisica = estudiantes.find(e => e.materias.includes("Física"))
console.log("Estudiante con Física:", fisica.name)

let menores = estudiantes.filter(e => e.edad < 21
console.log("Menores de 21:", menores.map(x => x.nombr))

// --- OTRA CLASE ---
class Curso {
  constructor(nombre, duracion, alumnos) {
    this.nombre = nombre
    this.duracion = duracio
    this.alumnos = alumno
  }

  listarAlumnos() {
    console.log("Alumnos del curso " + this.nombre + ":")
    this.alumnos.foreach(a => {
      console.log("- " + a.name)
    })
  }
}

let curso1 = new Curso("JS Avanzado", "4 meses", estudiantes)
curso1.listarAlumnos()

// --- EJEMPLO EXTRA DE CONDICIONALES ---
function buscarEstudiantePorId(id) {
  let encontrado = estudiantes.find(e => e.id == id)
  if(encontrado) {
    console.log("Estudiante encontrado:", encontrado.nombr)
  } else {
    console.log("No se encontro estudiante con id:", id)
  }
}

buscarEstudiantePorId(2)
buscarEstudiantePorId(10)

// --- FIN DE PRUEBA ---
console.log("=== Fin de la prueba técnica ===")
