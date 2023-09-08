import { Controller, Get, NotImplementedException } from "@nestjs/common";

@Controller("asincrono")
export class AsincronoController {

  constructor() {}

  @Get("ejecutar")
  async asincrono(): Promise<string> {
    console.log("Paso 1")
    const promesaGuardar : Promise<string> = this.guardarEnBD();
    const promesaBuscar : Promise<string> = this.buscarEnBD();
    console.log("Paso 2.1")
    console.log("Paso 2.2")
    console.log("Paso 2.3")
    console.log("Paso 2.4")
    console.log("Paso 2.5")
    const idGuardado: string = await promesaGuardar;
    console.log("Paso 3")
    console.log("Paso 4")
    const idEncontrado: string = await promesaBuscar;
    return idGuardado + idEncontrado;
  }

  @Get("error")
  async error(): Promise<string> {
    try {
      console.log("Paso 1")
      const promesaGuardar : Promise<string> = this.guardarEnBDFallo();
      const promesaBuscar : Promise<string> = this.buscarEnBD();
      console.log("Paso 2.1")
      console.log("Paso 2.2")
      console.log("Paso 2.3")
      console.log("Paso 2.4")
      console.log("Paso 2.5")
      const idGuardado: string = await promesaGuardar;
      console.log("Paso 3")
      console.log("Paso 4")
      const idEncontrado: string = await promesaBuscar;
      return idGuardado + idEncontrado;
    } catch (error) {
      console.log("OCURRIO UN ERROR");
      console.log(error);
    }
  }

  @Get("exception")
  async exception(): Promise<string> {
      const promesa = this.procesar();
      const valor: string = await promesa;
      return valor
  }

  async procesar(): Promise<string> {
      const valor2 = await this.procesar2();
      const valor = await this.contar(2, "PROCESAR");
      return valor + valor2;
  }

  async procesar2(): Promise<string> {
    throw new NotImplementedException("Por Realizar")
  }

  /* GUARDAR BD */
  async guardarEnBDFallo(): Promise<string> {
    console.log("Conectando a la BD");
    await this.contar(3, "FALLO");
    console.log("Conexion realizada");
    console.log("Creando objeto");
    console.log("Insertando objeto en DB");
    await this.contar(2, "GUARDANDO EN DB");
    console.log("Objeto guardado");
    return "1234567";
  }

  async guardarEnBD(): Promise<string> {
    console.log("Conectando a la BD");
    await this.contar(3, "CONECTANDO A BD");
    console.log("Conexion realizada");
    console.log("Creando objeto");
    console.log("Insertando objeto en DB");
    await this.contar(2, "GUARDANDO EN DB");
    console.log("Objeto guardado");
    return "1234567";
  }

  async buscarEnBD(): Promise<string> {
    console.log("Conectando a la BD");
    await this.contar(3, "CONECTANDO A BD");
    console.log("Conexion realizada");
    console.log("Buscando en DB");
    console.log("Objeto encontrado");
    return "5555555";
  }

  contar(segundos, proceso: string): Promise<string> {
    return new Promise(
      (cumplio, rechazo) => {
        if (proceso === 'FALLO') {
          const e = new Error("Mensaje del  Error")
          rechazo(e);
        }
        setTimeout(() => {
          cumplio(`${proceso}`);
        }, segundos * 1000)
      }
    )
  }

}
