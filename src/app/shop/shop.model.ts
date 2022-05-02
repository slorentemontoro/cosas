export class Shop {


  constructor(
    id: number, 
    nombre: string, 
    imagen: string, 
    precio: number,
    favorito: boolean
) {
    this.id = id
    this.nombre = nombre
    this.imagen = imagen
    this.precio = precio
    this.favorito = favorito
  }
    private id: number;
    private nombre: string;
    private imagen: string;
    private precio: number;
    private favorito: boolean;

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

  public getFavorito(): boolean{
    return this.favorito;
  }


  }