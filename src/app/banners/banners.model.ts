export class Banner {
  constructor(id: number, nombre: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
  }
  private id: number;
  private nombre: string;
  private imagen: string;

  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getImagen(): string {
    return this.imagen;
  }
}
