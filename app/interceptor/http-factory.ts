import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { InterceptedHttp } from "./intercepted-http";
import { RouterExtensions } from "nativescript-angular/router";
import { EnvironmentProvider } from "../providers/environment-provider";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, routerExtensions: RouterExtensions, environmentProvider: EnvironmentProvider): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, routerExtensions, environmentProvider);
}