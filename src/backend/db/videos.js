/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { ch1, ch10, ch11, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, id1, id10, id11, id12, id13, id14, id15, id16, id2, id3, id4, id5, id6, id7, id8, id9 } from "assets/images";
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
    views: 170594,
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
    views: 94790,
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
    views: 536746,
    createdAt: "Dec 9, 2020",
    chanel_pic: ch2,
    video: "y17RuWkWdn8",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id4,
    title: "I Bet You Can't Even Name 10",
    description: `You have probably written console.log thousands of times, but you probably almost never use any of the 20+ amazing console methods available. In this video I cover every single console method and when you should use each. I also cover individual tips and tricks for console.log that you probably didn’t know about.`,
    creator: "Web Dev Simplified",
    views: 10005,
    createdAt: "Apr 16, 2022",
    chanel_pic: ch2,
    video: "UUoZ_U2_4tA",
    categoryName: "JavaScript",
  },
  {
    _id: uuid(),
    thumbnail: id5,
    title:
      "Dil Chahte Ho (LYRICAL) Jubin Nautiyal, Mandy Takhar | Payal Dev, AM Turaz |Navjit B | Bhushan Kumar",
    description: `Gulshan Kumar and T-Series presents Bhushan Kumar's "Dil Chahte Ho" LYRICAL VIDEO song; this romantic song is sung by Jubin Nautiyal & Payal Dev, composed by Payal Dev and lyrics are penned by A.M.Turaz. The video is directed by Navjit Buttar.`,
    creator: "T-Series",
    views: 60422053,
    createdAt: "Nov 5, 2020",
    chanel_pic: ch3,
    video: "_YG_tdQTOvM",
    categoryName: "T-Series",
  },
  {
    _id: uuid(),
    thumbnail: id6,
    title:
      "Video: Shaadi Karke Le Jayega Mujhe Ft Millind & Pria Gaba | Music MG, Asli Gold, Director Shabby",
    description: `Presenting song #ShaadiKarkeLeJayegaMujhe sung by #MillindGaba
    Gulshan Kumar & T-Series presents Bhushan Kumar's "Shaadi Karke Le Jayega Mujhe" featuring Millind Gaba, Pria Beniwal Gaba. Sung by MIllind Gaba, music by Music MG and lyrics are penned by Asli Gold & Millind Gaba.`,
    creator: "T-Series",
    views: 1031330,
    createdAt: "Apr 16, 2022",
    chanel_pic: ch3,
    video: "3QeaI4pHpZw",
    categoryName: "T-Series",
  },
  {
    _id: uuid(),
    thumbnail: id7,
    title:
      "LYRICAL: Chal Ghar Chalen | Malang | Aditya R K, Disha P | Mithoon ft. Arijit Singh, Sayeed Quadri",
    description: `Presenting the lyrical video for "Chal Ghar Chalen"  the upcoming bollywood movie "Malang". This romantic track is composed by Mithoon, sung by the Arijit Singh and written by Sayeed Quadri.
    The movie stars Aditya Roy Kapur, Disha Patani, Anil Kapoor and Kunal Kemmu, directed by Mohit Suri. Written by Aseem Arorra, the movie is produced by Bhushan Kumar, Krishan Kumar, Luv Ranjan, Ankur Garg, and Jay Shewakramani. `,
    creator: "T-Series",
    views: 73190621,
    createdAt: "Jan 19, 2020",
    chanel_pic: ch3,
    video: "i_NmPv5WQ0U",
    categoryName: "T-Series",
  },
  {
    _id: uuid(),
    thumbnail: id8,
    title:
      "Shiddat Title Track (Full Video) |Sunny Kaushal,Radhika Madan, Mohit Raina, Diana P | Manan Bhardwaj",
    description: `Presenting the lyrical video for "Chal Ghar Chalen"  the upcoming bollywood movie "Malang". This romantic track is composed by Mithoon, sung by the Arijit Singh and written by Sayeed Quadri.
    The movie stars Aditya Roy Kapur, Disha Patani, Anil Kapoor and Kunal Kemmu, directed by Mohit Suri. Written by Aseem Arorra, the movie is produced by Bhushan Kumar, Krishan Kumar, Luv Ranjan, Ankur Garg, and Jay Shewakramani. `,
    creator: "T-Series",
    views: 35851082,
    createdAt: "Oct 15, 2021",
    chanel_pic: ch3,
    video: "iSo9l950QLo",
    categoryName: "T-Series",
  },
  {
    _id: uuid(),
    thumbnail: id9,
    title:
      "Is comfort zone ruining your life? | Find your motivation | Ankur Warikoo Hindi Video",
    description: `Comfort is a drug and comfort zone is a cage. So how to get out of your comfort zone? Find your motivation.

    Everywhere around us the world is designed to make us comfortable. Food delivery. Social media. Instant gratification. However, the people that inspire you, the people that are really successful in life take a strange decision every single day. That strange decision, not at all strangely, makes them successful! That is also the reason most people do not make that strange decision…`,
    creator: "warikoo",
    views: 390257,
    createdAt: "Oct 5, 2020",
    chanel_pic: ch4,
    video: "zUZ-gglWOw4",
    categoryName: "Motivation",
  },
  {
    _id: uuid(),
    thumbnail: id10,
    title:
      "असफलता से डरो मत | chankya niti Motivational video",
    description: `असफलता से डरो मत  chanakya niti in hindi Motivation🔥 Students`,
    creator: "chankya motivation",
    views: 188403,
    createdAt: "Feb 6, 2022",
    chanel_pic: ch5,
    video: "Yzl-74gW_RM",
    categoryName: "Motivation",
  },
  {
    _id: uuid(),
    thumbnail: id11,
    title:
      "Work Like Me, To Become The Best - Cristiano Ronaldo (motivation)",
    description: `Cristiano Ronaldo Motivation - Work Like Me, To Become The Best

    Cristiano Ronaldo has given his everything to achieve this version of himself. “Blood, toil, and sweat” are the main Principles of the Portuguese player. He's one of the best football players in the world. 
    
    Besides his dribbling skills, and shooting power. He is known as a training machine, his ethic of work is respected by many football players.`,
    creator: "EntreXpreneur",
    views: 769957,
    createdAt: "Jul 27, 2021",
    chanel_pic: ch6,
    video: "iYoXFg5D4NU",
    categoryName: "Motivation",
  },
  {
    _id: uuid(),
    thumbnail: id12,
    title:
      "TVF || jeetu bhaiya motivational video || Kota factory best dialogue ❤️ ||SRP Guruji",
    description: `TVF | jeetu bhaiya motivational video | Kota factory best dialogue ❤️ | WhatsApp status video`,
    creator: "SRP Guruji",
    views: 768183,
    createdAt: "Jul 5, 2021",
    chanel_pic: ch7,
    video: "fbylSdQIQ9o",
    categoryName: "Motivation",
  },
  {
    _id: uuid(),
    thumbnail: id13,
    title:
      "Mr Bean's MAGICAL Evening | Mr Bean Funny Clips | Classic Mr Bean",
    description: `Bean's night on the town spells disaster for a stage magician. 

    Welcome to the Classic Mr. Bean channel! 
    Home of favourite Mr Bean clips, full episodes and movie scenes.`,
    creator: "Classic Mr Bean",
    views: 96938,
    createdAt: "Apr 16, 2022",
    chanel_pic: ch8,
    video: "1vJHDGdWYwA",
    categoryName: "Comedies",
  },
  {
    _id: uuid(),
    thumbnail: id14,
    title:
      "Phir Hera Pheri - Best of Hindi Comedy Scenes | Paresh Rawal -Akshay Kumar - Rajpal Yadav",
    description: `Watch All Comedy Scenes - Phir Hera Pheri - Paresh Rawal - Rajpal Yadav - Akshay Kumar - Nonstop Comedy 

    The lives of Raju, Shyam and Baburao change completely when they get cheated by a fraudster. Now, they must find another way to repay the loan they took from a dreaded gangster.
    
    Director: Neeraj Vora
    
    Starcast -   Akshay Kumar, Sunil Shetty, Paresh Rawal, Johnny Lever, Rajpal Yadav, Bipasha Basu, Rimi Sen
    
    Phir Hera Pheri | Best of Comedy Scenes | Johny Lever - Paresh Rawal - Rajpal Yadav - Akshay Kumar`,
    creator: "Shemaroo Comedy",
    views: 1693220,
    createdAt: "Mar 25, 2022",
    chanel_pic: ch9,
    video: "2Xh292fsCCs",
    categoryName: "Comedies",
  },
  {
    _id: uuid(),
    thumbnail: id15,
    title:
      "ये देख कर लोट पॉट हसोगे | Dhamaal (2007) (HD) Part 3 | Javed Jaffery, Arshad Warsi, Riteish Deshmukh",
    description: `Movie Name - Dhamaal (2007) 
    Cast :  Sanjay Dutt, Arshad Warsi, Riteish Deshmukh, Arshad Warsi
    Director : Indra Kumar
    
    Dhamaal is about four friends afflicted by the get rich quick virus. Their fortunes take a turn after they accidentally bump into a victim who tells them about a hidden treasure who tells them about a hidden treasure in Goa including 10 crore rupees. The group race toward Goa in Contractors stolen car little knowing that their plans will soon be foiled albeit hilariously by Police Inspector Kabir Nayak - Sanjay Dutt. `,
    creator: "Shemaroo Movie in Parts",
    views: 24544927,
    createdAt: "Sep 6, 2021",
    chanel_pic: ch10,
    video: "6Q77VgAPWok",
    categoryName: "Comedies",
  },
  {
    _id: uuid(),
    thumbnail: id16,
    title:
      "Best Scenes Of Arshad Warsi | From Lage Raho Munna Bhai & Munna Bhai M.B.B.S. | Comedy Videos",
    description: `Watch the best scenes of Arshad Warsi from the movie Munna Bhai M.B.B.S.  & Lage Raho Munna Bhai. Enjoy the video and for more entertaining videos do not forget to Subscribe 'Ultra Bollywood'.

    Starring: Sanjay Dutt, Arshad Warsi, Vidya Balan, Boman Irani, Dilip Prabhavalkar, Dia Mirza, Jimmy Sheirgill, Kulbhushan Kharbanda, Saurabh Shukla
    Director : Rajkumar Hirani
    Producer: Vidhu Vinod Chopra
    Music :  Shantanu Moitra`,
    creator: "Ultra Bollywood",
    views: 7494189,
    createdAt: "Sep 12, 2019",
    chanel_pic: ch11,
    video: "7jTOZWbW91s",
    categoryName: "Comedies",
  },
];
