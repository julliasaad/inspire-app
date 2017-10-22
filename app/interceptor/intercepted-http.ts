import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import dialogs = require("ui/dialogs");
import { RouterExtensions } from "nativescript-angular/router";
import { EnvironmentProvider } from '../providers/environment-provider';


@Injectable()
export class InterceptedHttp extends Http {

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
        private routerExtensions: RouterExtensions,
        private environmentProvider: EnvironmentProvider
    ) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options).map((res: Response) => res)
            .catch(err => {
                if (err.status === 401 && url !== `http://${this.environmentProvider.getEnderecoServidor()}/mobile/api/authorize`) {
                    dialogs.alert({
                        title: "Sua sessão expirou",
                        message: "Faça o login novamente",
                        okButtonText: "OK"
                    }).then(() => {
                        this.routerExtensions.navigate([`/login`], { clearHistory: true });
                    });
                } else {
                    return err;
                }
                return err;
            });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
            options.headers.append('Content-Type', 'application/json');
        }

        return options;
    }
}