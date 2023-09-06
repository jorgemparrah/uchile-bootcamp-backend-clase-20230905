import { Body, Controller, Get, Headers, Param, Post, Query, Request, UnauthorizedException } from "@nestjs/common";

@Controller("idioma")
export class IdiomaController {

  constructor() {}

  @Get("asincrono")
  async asincrono(): Promise<string> {
    const promesa5 = this.contar(5);
    const promesa3 = this.contar(3);
    console.log("PASO 1");
    const nacimiento = 1999;
    console.log("PASO 2");
    const actual = 2023;
    console.log("PASO 3");
    const edad = actual - nacimiento;
    console.log("PASO 4");
    this.procesar();
    const contar3 = await promesa3;
    console.log("PASO 5");
    if (edad > 30) {
      console.log("Mayor a 30");
    } else {
      console.log("Menor a 30");
    }
    console.log("PASO 6");
    const contar5 = await promesa5;
    console.log("PASO 7");
    return contar5 + contar3;
  }

  contar(segundos): Promise<string> {
    return new Promise((resolve) => {
      console.log(`COMENCE A CONTAR: ${segundos} segundos`)
      setTimeout(() => {
        console.log(`FINALICE LA CUENTA: ${segundos} segundos` )
        resolve(`CONTADOR LISTO: ${segundos}`);
      }, segundos * 1000)
    })
  }

  @Get("sincrono")
  sincrono(): string {
    const nacimiento = 1999;
    const actual = 2023;
    const edad = actual - nacimiento;
    this.procesar();
    if (edad > 30) {
      console.log("Mayor a 30");
    } else {
      console.log("Menor a 30");
    }
    return "PRUEBA";
  }

  procesar() {
    console.log("PROCESAR");
    const nombre = "Jorge";
    const apellido = "Celi";
    const edad = 22;
    if (nombre === "Jorge" && apellido === "Celi" && edad === 22) {
      console.log("Bienvenido");
    }
    console.log("FINALIZO PROCESAR");
  }

  @Get("ejemplo/:id")
  getHello(@Request() request): string {
    console.log(request.query);
    console.log(request.params);
    const codigoSeguridad = request.headers["seguridad"];
    if (codigoSeguridad !== '1234567') {
      throw new UnauthorizedException("No esta autorizado");
    }
    const categoria = request.query["categoria"];
    const precio = request.query["precio"];
    console.log(precio);
    console.log(categoria);
    return "GET";
  }

  @Get("query")
  query(@Query("categoria") categoria: string, @Query("precio") precio: number): string {
    console.log(precio);
    console.log(categoria);
    return "GET";
  }

  @Get("headers")
  headers(@Headers("seguridad") codigoSeguridad: string): string {
    if (codigoSeguridad !== '1234567') {
      throw new UnauthorizedException("No esta autorizado");
    }
    return "GET";
  }

  @Get("params/:id")
  params(@Param("id") id: number): string {
    console.log(id);
    return "GET";
  }


  @Post("id/:id")
  getHello2(@Request() request: Request): string {
    const body = request.body;
    console.log(body);
    console.log(request.headers);
    return "GET";
  }

  @Post("body")
  body(@Body() body): string {
    console.log(body);
    return "GET";
  }

}
