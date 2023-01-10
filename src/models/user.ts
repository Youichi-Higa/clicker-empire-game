import { Item } from './item';

export class User {
  constructor(
    public readonly name: string,
    public age: number = 20,
    public days: number = 0,
    public money: number = 50000,
    public burgerCount: number = 0,
    public incomePerClick: number = 25,
    public incomePerSec: number = 0,
    public stock: number = 0,
    public itemList: Item[]
  ) {}
}
