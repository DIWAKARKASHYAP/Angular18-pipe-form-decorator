import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(value , args)

    let ans = ""
    for (let i = 0; i < value.length - 5; i++) {
      ans = ans + value[i+2]

    }


    return ans
  }

}
