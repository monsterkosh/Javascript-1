const peliculas = [];
class pelis {
  constructor(id, nombre, director) {
    this.id = id;
    this.nombre = nombre;
    this.director = director;
  }
}
peliculas.push(new pelis(1, "Chungking Express", "Wong Kar-wai"));
peliculas.push(new pelis(2, "Boogie nights", "Paul Thomas Anderson"));
peliculas.push(new pelis(3, "Kynodontas", "Yorgos Lanthimos"));
peliculas.push(new pelis(4, "A most violent year", "J. C. Chandor"));
peliculas.push(new pelis(5, "Eraserhead", "David Lynch"));
let peliculasOrdenadas = peliculas.sort(pelis.id);
console.log(peliculasOrdenadas);
