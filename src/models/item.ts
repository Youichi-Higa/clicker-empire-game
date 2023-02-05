export class Item {
  constructor(
    public readonly name: string,
    public readonly type: 'ability' | 'investment' | 'realState',
    public currentAmount: number,
    public readonly maxAmount: number,
    public readonly perMoney: number,
    public perRate: number,
    public price: number,
    public readonly url: string
  ) {}
}
