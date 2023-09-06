import { Body, Controller, Get, Headers, Param, Post, Query, Request, UnauthorizedException } from "@nestjs/common";

@Controller("idioma")
export class IdiomaController {

  constructor() {}

  @Get(":id")
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
