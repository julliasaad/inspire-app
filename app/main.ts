import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

platformNativeScriptDynamic({ startPageActionBarHidden: true }).bootstrapModule(AppModule);
