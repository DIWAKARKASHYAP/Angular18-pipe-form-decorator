import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  pure: false
})
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let outputArr = value.split(/(?=[A-Z])/)

    console.log("----------------------")
    return outputArr.join(" ");

  }
}

// let splitedArr = [];

// let startInd = 0;
// let endInd = 0;

// value = value + 'A';

// for (let i = 0; i < value.length; i++) {
//   if (value[i] === value[i].toUpperCase()) {
//     endInd = i;
//     splitedArr.push(value.substring(startInd, endInd));
//     startInd = i;
//   }
// }

// return splitedArr.join(' ');
