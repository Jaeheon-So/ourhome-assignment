export interface ProductCardItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: number;
  discountRate: number;
  store: string;
  best: boolean;
}

export const productList: ProductCardItem[] = [
  {
    id: "01",
    image: "image1.jpeg",
    title: "진한 사골곰탕 300g",
    subtitle: "100% 사골로 고운진한 사골곰탕",
    price: 1750,
    discountRate: 9,
    store: "실온",
    best: false,
  },
  {
    id: "02",
    image: "image2.jpeg",
    title: "아워홈 포차 꼬치어묵(시원한맛)",
    subtitle: "국산 꽃게육수를 시원하게 담은 어묵탕",
    price: 5580,
    discountRate: 30,
    store: "냉동",
    best: false,
  },
  {
    id: "03",
    image: "image3.jpeg",
    title: "얼큰한 육개장 300g",
    subtitle: "직접 솥에서 볶아 더 얼큰하고 맛있는",
    price: 3150,
    discountRate: 5,
    store: "실온",
    best: false,
  },
  {
    id: "04",
    image: "image4.jpeg",
    title: "뼈없는 갈비탕 400g",
    subtitle: "뼈를 발라내어 먹기 편한 뼈없는 갈비탕",
    price: 6600,
    discountRate: 10,
    store: "실온",
    best: false,
  },
  {
    id: "05",
    image: "image5.jpeg",
    title: "아워홈 치킨스테이크 오리지널 920g (4인분)",
    subtitle: "겉바속촉 통닭다리살 오븐구이 치킨스테이크",
    price: 17900,
    discountRate: 5,
    store: "냉동",
    best: true,
  },
  {
    id: "06",
    image: "image6.jpeg",
    title: "아워홈 들기름김 전장 20g (4gX5매)",
    subtitle: "전장김, 들기름, 반찬, 간식",
    price: 2400,
    discountRate: 5,
    store: "실온",
    best: false,
  },
  {
    id: "07",
    image: "image7.jpeg",
    title: "소고기장조림 200g",
    subtitle: "장조림, 간편반찬,꽈리고추,곤약",
    price: 3670,
    discountRate: 0,
    store: "냉장",
    best: false,
  },
  {
    id: "08",
    image: "image8.jpeg",
    title: "매콤한 칠리 닭가슴살 110g (냉장)",
    subtitle: "단백질 함량 27g, 매콤한 칠리맛",
    price: 2980,
    discountRate: 6,
    store: "냉장",
    best: false,
  },
];

export const storeColor: { [key: string]: string } = {
  실온: "#666666",
  냉장: "#3fc2ec",
  냉동: "#448ccb",
};
