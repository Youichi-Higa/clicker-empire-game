import { Item } from '@/models/item';

export const displayItemIncome = (item: Item) => {
  if (item.type === 'ability') return `￥${item.perMoney} /click`;
  else if (item.type === 'investment') return `￥${item.perRate}％ /sec`;
  else return `￥${item.perRate} /sec`;
};
