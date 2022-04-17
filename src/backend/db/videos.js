/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { ch1, ch2, id1, id2, id3, id4 } from "assets/images";
import { v4 as uuid } from "uuid";
export const videos = [
  {
    _id: uuid(),
    thumbnail: id1,
    title:
      "Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question",
    description: `- What is Prototype?
      - What is Prototypal Inheritance?
      - What is Prototype Chain?
      - Why we call it __proto__ ?
      - What is inhertance in Javascript?
      `,
    creator: "Akshay Saini",
    views: "170,594",
    createdAt: "Mar 30, 2019",
    chanel_pic: ch1,
    video: "wstwjQ1yqWQ",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id2,
    title: "TRUST ISSUES with setTimeout() | Namaste JavaScript Ep.17",
    description: `This BONUS video covers the fundamentals of setTimeout, how it works behind the scenes. We also discover that setTimeout does not guarantee that the callback method will be executed exactly after a certain delay. Hence, there are trust issues with setTimeout. 😅

    Moreover, we will also cover the case of setTimeout with 0 delay. It's a very famous Interview question and confuses a lot of new developers. 
    
    Towards the end, I also show the demo of how you can set up exactly the same playground to write code, just like I do in these videos. Check that out and I highly recommend you to set up a similar playground and experiment a lot with code while watching Namaste JavaScript 🙏
    
    The only request is to watch this Episode of Namaste JavaScript with full attention. 
      `,
    creator: "Akshay Saini",
    views: "94,790",
    createdAt: "Jan 18, 2021",
    chanel_pic: ch1,
    video: "nqsPmuicJJc",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id3,
    title: "Learn DOM Manipulation In 18 Minutes",
    description: `DOM manipulation is tough. There are lots of methods and techniques you need to master and it is not obvious which methods are best for each scenario. In this video I cover the 14 most important DOM manipulation methods that you need to know.`,
    creator: "Web Dev Simplified",
    views: "536,746",
    createdAt: "Dec 9, 2020",
    chanel_pic: ch2,
    video: "y17RuWkWdn8",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id4,
    title: "I Bet You Can’t Even Name 10",
    description: `You have probably written console.log thousands of times, but you probably almost never use any of the 20+ amazing console methods available. In this video I cover every single console method and when you should use each. I also cover individual tips and tricks for console.log that you probably didn’t know about.`,
    creator: "Web Dev Simplified",
    views: "10,005",
    createdAt: "Apr 16, 2022",
    chanel_pic: ch2,
    video: "UUoZ_U2_4tA",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id1,
    title:
      "Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question",
    description: `- What is Prototype?
      - What is Prototypal Inheritance?
      - What is Prototype Chain?
      - Why we call it __proto__ ?
      - What is inhertance in Javascript?
      `,
    creator: "Akshay Saini",
    views: 170594,
    createdAt: "Mar 30, 2019",
    chanel_pic: ch2,
    video: "wstwjQ1yqWQ",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id1,
    title:
      "Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question",
    description: `- What is Prototype?
      - What is Prototypal Inheritance?
      - What is Prototype Chain?
      - Why we call it __proto__ ?
      - What is inhertance in Javascript?
      `,
    creator: "Akshay Saini",
    views: 170594,
    createdAt: "Mar 30, 2019",
    chanel_pic: ch2,
    video: "wstwjQ1yqWQ",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id1,
    title:
      "Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question",
    description: `- What is Prototype?
      - What is Prototypal Inheritance?
      - What is Prototype Chain?
      - Why we call it __proto__ ?
      - What is inhertance in Javascript?
      `,
    creator: "Akshay Saini",
    views: 170594,
    createdAt: "Mar 30, 2019",
    chanel_pic: ch2,
    video: "wstwjQ1yqWQ",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id1,
    title:
      "Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question",
    description: `- What is Prototype?
      - What is Prototypal Inheritance?
      - What is Prototype Chain?
      - Why we call it __proto__ ?
      - What is inhertance in Javascript?
      `,
    creator: "Akshay Saini",
    views: 170594,
    createdAt: "Mar 30, 2019",
    chanel_pic: ch2,
    video: "wstwjQ1yqWQ",
    categoryName: "JavaScript",
  },
];
