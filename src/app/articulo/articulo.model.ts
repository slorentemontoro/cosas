export class Articulo {


    constructor(
      id: number, 
      nombre: string, 
      imagen: string, 
      precio: number
  ) {
      this.id = id
      this.nombre = nombre
      this.imagen = imagen
      this.precio = precio
    }
      private id: number;
      private nombre: string;
      private imagen: string;
      private precio: number;
  
    public getId(): number {
      return this.id;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public getImagen(): string {
      return this.imagen;
    }
  
    public getPrecio(): number {
      return this.precio;
    }
  
    }