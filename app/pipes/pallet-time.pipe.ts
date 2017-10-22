import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'palletTime' })
export class PalletTime implements PipeTransform {

    transform(value: number): string {
        if (value <= (60 * 24)) {
            let hours, minutes;

            hours = Math.floor(value / 60);
            minutes = value % 60;

            return `${hours}:${minutes}`
        } else {
            let days = Math.floor(value / (60 * 24))

            if (days === 1) {
                return `${days} dia`;
            }

            return `${days} dias`;
        }
    }
}
