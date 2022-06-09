export interface Seller {
  id: number;
  city: string;
  name: string;
  refs: string;
}

export interface BaseCardPosting {
  cost: number;
  qty: number;
  name: string;
  line: string;
  seller: Seller;
  source: string;
  stamp: string;
  url: string;
}

export interface RawCardPosting extends BaseCardPosting {
  eng_name: string;
  rus_name: string;
}

export interface CardPosting extends BaseCardPosting {
  engName: string;
  rusName: string;
}
