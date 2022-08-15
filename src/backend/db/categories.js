import { FashionImg, GamingImg, LearningImg, MoviesImg, MusicImg, NewsImg, SportsImg, TrendingImg } from "assets/images";
import { v4 as uuid } from "uuid";



export const categories = [
  
  {
    _id: uuid(),
    categoryName: "Trending",
    img: TrendingImg
  },
  {
    _id: uuid(),
    categoryName: "Music",
    img: MusicImg
  },
  {
    _id: uuid(),
    categoryName: "Movies",
    img: MoviesImg
  },
  {
    _id: uuid(),
    categoryName: "Gaming",
    img: GamingImg
  },
  {
    _id: uuid(),
    categoryName: "News",
    img: NewsImg
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    img: SportsImg
  },
  {
    _id: uuid(),
    categoryName: "Learning",
    img: LearningImg
  },
  {
    _id: uuid(),
    categoryName: "Fashion & Beauty",
    img: FashionImg
  },
  {
    _id: uuid(),
    categoryName: "Comedies",
  },
  {
    _id: uuid(),
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    categoryName: "T-Series",
  },
  {
    _id: uuid(),
    categoryName: "Motivation",
  },
  
];
