import { CodigoBarraMascaradoPipe } from "./pipes/codigo-barra-mascarado";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    NativeScriptModule
  ],
  declarations: [
    CodigoBarraMascaradoPipe,
  ],
  exports: [
    CodigoBarraMascaradoPipe,
  ]
})
export class ComponentsModule { }