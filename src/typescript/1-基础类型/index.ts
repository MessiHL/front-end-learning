let isBad: boolean = false;

let name1: string = 'tom';
let age: number = 37;
let centence: string = `hi, my name is ${name1}`;
console.log(centence);

// 数组
let list: number[] = [1,2,3];
let arr: Array<string> = ['1','3','4']

// 元组 Tuple
let tuple : [string,number] = ['tom',30];

// 枚举
enum Color {Red,Blue,Green};
let c : Color = Color.Blue;

// 类型断言
let someValue: any = 'i am string !';
let len:number = (<string>someValue).length;
let len2: number = (someValue as string).length;