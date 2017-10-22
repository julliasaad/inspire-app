import * as applicationSettings from 'application-settings';
import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentProvider {

    getEnderecoServidor() {
        let value = applicationSettings.getString('EnderecoServidor');
        if (!value) {
            value = '192.168.1.246';
            this.setEnderecoServidor(value);
        }
        return value;
    }

    setEnderecoServidor(value: string) {
        applicationSettings.setString('EnderecoServidor', value);
    }
}