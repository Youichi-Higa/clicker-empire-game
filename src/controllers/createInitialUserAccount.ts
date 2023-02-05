import { Item } from '@/models/item';
import { User } from '@/models/user';

export const createInitialUserAccount = (username: string): User => {
  const itemList = [
    new Item(
      'Flip machine',
      'ability',
      0,
      500,
      25,
      0,
      15000,
      'https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png'
    ),
    new Item(
      'ETF Stock',
      'investment',
      0,
      -1,
      0,
      0.1,
      300000,
      'https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png'
    ),
    new Item(
      'ETF Bonds',
      'investment',
      0,
      -1,
      0,
      0.07,
      300000,
      'https://cdn.pixabay.com/photo/2016/03/31/20/51/chart-1296049_960_720.png'
    ),
    new Item(
      'Lemonade Stand',
      'realState',
      0,
      1000,
      30,
      0,
      30000,
      'https://cdn.pixabay.com/photo/2012/04/15/20/36/juice-35236_960_720.png'
    ),
    new Item(
      'Ice Cream Truck',
      'realState',
      0,
      500,
      120,
      0,
      100000,
      'https://cdn.pixabay.com/photo/2020/01/30/12/37/ice-cream-4805333_960_720.png'
    ),
    new Item(
      'House',
      'realState',
      0,
      100,
      32000,
      0,
      20000000,
      'https://cdn.pixabay.com/photo/2016/03/31/18/42/home-1294564_960_720.png'
    ),
    new Item(
      'TownHouse',
      'realState',
      0,
      100,
      64000,
      0,
      40000000,
      'https://cdn.pixabay.com/photo/2019/06/15/22/30/modern-house-4276598_960_720.png'
    ),
    new Item(
      'Mansion',
      'realState',
      0,
      20,
      500000,
      0,
      250000000,
      'https://cdn.pixabay.com/photo/2017/10/30/20/52/condominium-2903520_960_720.png'
    ),
    new Item(
      'Industrial Space',
      'realState',
      0,
      10,
      2200000,
      0,
      1000000000,
      'https://cdn.pixabay.com/photo/2012/05/07/17/35/factory-48781_960_720.png'
    ),
    new Item(
      'Hotel Skyscraper',
      'realState',
      0,
      5,
      25000000,
      0,
      10000000000,
      'https://cdn.pixabay.com/photo/2012/05/07/18/03/skyscrapers-48853_960_720.png'
    ),
    new Item(
      'Bullet-Speed Sky Railway',
      'realState',
      0,
      1,
      30000000000,
      0,
      10000000000000,
      'https://cdn.pixabay.com/photo/2013/07/13/10/21/train-157027_960_720.png'
    ),
  ];

  return new User(username, 20, 0, 50000, 0, 25, 0, 0, itemList);
};
