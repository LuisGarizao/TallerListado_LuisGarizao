export class Pelicula {
  public codPelicula: number;
  public nombrePelicula: string;
  public protagonistaPelicula: string;
  public generoPelicula: string;
  public imagenPelicula: string;
  public imagenPeliculaBase64: string;

  constructor(cod: number, nom: string, pro: string, gen: string, imag: string, base: string) {
    this.codPelicula = cod;
    this.nombrePelicula = nom;
    this.protagonistaPelicula = pro;
    this.generoPelicula = gen;
    this.imagenPelicula = imag;
    this.imagenPeliculaBase64 = base;
  }
}
