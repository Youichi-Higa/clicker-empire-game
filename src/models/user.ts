import { Item } from './item';

export class User {
  constructor(
    public readonly name: string,
    public age: number,
    public days: number,
    public money: number,
    public burgerCount: number,
    public incomePerClick: number,
    public incomePerSec: number,
    public stock: number,
    public itemList: Item[]
  ) {}
}
