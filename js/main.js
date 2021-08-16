'use strict';

// console.log('Hello World from main.js');
// console.log("it's me");
// console.log('it\'s me');

// console.log('Hel\nlo Wo\trld');

// console.log('Hello' + 'World');

// let price = 150;

// console.log(price * 140);
// console.log(price * 160);


// price = 170;

// console.log(price * 140);
// console.log(price * 160);


// console.log(parseInt('5, 10')+ 3);

// console.log('5' + 3.to_s);


// const price = 1000


// const signal = "pink";

// switch (signal) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Coution!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('wrong signal!')
//     break;
// }


// for (let i = 1; i <= 10; i++) {
//   // console.log('hollo');
//   // console.log('hello + i');
//   console.log(`hello ${i}`);
// }


// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } 


// let hp = -50;

// do {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// } while (hp > 0) 



// for (let i = 1; i <= 10; i++) {
//   if (i === 4) {
//   //   if (i % 3 === 0) {
//   //   continue;
//   break;
//   }
//   console.log(i);
// }


// function sum(a, b, c) {
//   // console.log(a + b +c);
//   return a + b + c;
// }

// const sum = function(a, b, c) {
//   // console.log(a + b +c);
//   return a + b + c;
// };


// const sum = (a, b, c) => a + b + c;

// sum(1,2,3);
// sum(4,5,6);

// const total = sum(1,2,3) + sum(4,5,6);
// console.log(total);


// const double = function(a) {
//   return a * 2;
// };


// const double = (a) => a * 2;
// console.log(double(12));


// function f() {
//   const x = 1;
//   console.log(x);
// };

// f();



// {
//   const x = 100;
//   console.log(x);
// }


// const score = 80;
// const score = 90;
// const score = 40;
// {
//   const scores = [80, 90, 40];
// //   console.log(scores[1]);

// //   scores[2] = 44;
// //   console.log(scores[2]);

//   console.log(scores.length);
// }


// {
//   const scores = [80,90,40,70];
//   // scores.push(60, 50);
//   // scores.shift();
//   // //

//   scores.splice(1, 1, 40, 50);

//   // console.log(`Score: ${scores[0]}`);
//   // console.log(`Score: ${scores[1]}`);
//   // console.log(`Score: ${scores[2]}`);

//   // for (let i = 0; i < 3; i++) {
//   for (let i = 0; i < scores.length; i++) {
//     console.log(`Score ${i}: ${scores[i]}`);
//   }
// }


// {
//   const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   // console.log(scores);

//   function sum(a, b) {
//     console.log(a + b);
//   }
//   sum(...otherScores);
// }


// {
//   const scores = [80, 90, 40, 70];

//   // const [a, b, c, d] = scores;
//   // console.log(a);
//   // console.log(b);
//   // console.log(c);
//   // console.log(d);
  
// //   const [a, b, ...others] = scores;
// //   console.log(a);
// //   console.log(b);
// //   console.log(others);

//   // let x = 30;
//   // let y = 70;
//   // [x, y] = [y, x];
//   // console.log(x);
//   // console.log(y);

//   // scores.forEach((score) => {
//   scores.forEach((score, index) => {
//     console.log(`Score ${index}: ${score}`);
//   });

// }

// {
//   const prices = [180, 190, 200];

//   // const updatedPricesprices.map((price) => {
//   //   return price + 20;
//   // });
//   const updatedPrices = prices.map(price => price + 20);
//   console.log(updatedPrices);
// }


// {
//   const numbers = [1, 4, 7, 8, 10];

//   // const evenNumbers = numbers.filter(number => {
//   //   if (number % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // });


//   const evenNumbers = numbers.filter(number => number % 2 === 0);

//   console.log(evenNumbers);
// }


// {
//   // const point = [100, 100];

//   const point = {
//     x: 100,
//     y: 180,
//   };

//   point.x = 120;

//   // console.log(point.x);
//   // console.log(point['y']);

//   point.z = 90;
//   delete point.y;
//   console.log(point);
// }


// {
//   const otherProps = {
//     r: 4,
//     color: 'red,'
//   };
  
//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,
//   };
//   // console.log(point);

// const {x, r, ...others} = point;
// console.log(x);
// console.log(r);
// console.log(others);

// }


// {
//   const point = {
//     x: 100,
//     y: 180,
//   };

//   // const keys = Object.keys(point);
//   // keys.forEach(key => {
//   //   console.log(`key: ${key} Value: ${point[key]}`);
//   // })

//   const points = [
//     {x:30, y:20},
//     {x:10, y:50},
//     {x:40, y:40},
//   ];
//   console(points[1].y);
// }


// {
//   // let x = 1;
//   // let y = x;
//   // x = 5;
//   // console.log(x);
//   // console.log(y);
  
//   // let x = [1, 2];
//   // let y = x;
//   // x[0] = 5;
//   // console.log(x);
//   // console.log(y);

//   let x = [1, 2];
//   let y = [...x];
//   x[0] = 5;
//   console.log(x);
//   console.log(y);
// }


// {
//   const str = 'hello';

//   // console.log(str.length);

//   console.log(str.substring(2, 4));

//   console.log(str[1]);
// }


// {
//   const d = [2019, 11, 14];

//   // console.log(d.join('/'));
//   // console.log(d.join(''));

//   const t = '17:08:24';
//   // console.log(t.split(':'));
//   // console.log(t);

//   const [hour, minute ,second] = t.split(':');
//   console.log(hour);
//   console.log(minute);
//   console.log(second);
// }


// {
//   const scores = [10, 3, 9];

//   let sum = 0;

//   scores.forEach(score => {
//     sum += score;
//   });

//   const avg = sum /scores.length;

//   // console.log(sum);
//   // console.log(avg);
  
//   // console.log(Math.floor(avg)); // 小数点以下切り捨て
//   // console.log(Math.ceil(avg));　// 小数点以下を切り上げ
//   // console.log(Math.round(avg)); // 四捨五入
//   // console.log(avg.toFixed(3)); // 指定した桁数

//   console.log(Math.random()); // ゲーム制作などで欠かせない乱数
// }


// {
//   // console.log(Math.random()); // ゲーム制作などで欠かせない乱数

//   console.log(Math.floor(Math.random() * (6 + 1 - 1)) + 1);
// }


// {
//   const d = new Date();
//   // console.log(d);

//   console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`);
//   console.log(`${d.getTime()}`);
// }


// {
//   const d = new Date(2019, 10);
//   d.setHours(10,20,30);
//   d.setDate(31);
//   d.setDate(d.getDate() + 3);
//   console.log(d);
// }


// {
//   // alert('hello');

//   const answer = confirm('削除しますか');
//   if (answer) {
//     console.log('削除しました');
//   } else {
//     console.log('キャンセルしました');
//   }
// }


// {
//   let i = 0;
//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
  //       clearInterval(intervalId);
  //     }
  //   }
  
  //   const intervalId = setInterval(showTime, 1000);
  // }
  
  
// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     const timeoutId  = setTimeout(showTime, 1000);
//     i++;
//     if (i > 2) {
//       clearTimeout(timeoutId);
//     }
//   }
//   showTime();
// }


// {
//   // const name = 'taguchi';
//   const name = 5;

//   try {
//     console.log(name.toUpperCase());
//   } catch (e) {
//     console.log(e);
//   }


//   console.log('finish!')
// }


// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} いいね`);
//     }
//   }

//   const posts = [
//     new Post('javacript lesson,,,'),
//     new Post('konntiha'),
//   ];


//   // show(posts[0]);
//   posts[0].show();
//   posts[1].show();
// }


// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   const posts = [
//     new Post('javacript lesson,,,'),
//     new Post('konntiha'),
//   ];

//   posts[0].like();

//   // show(posts[0]);
//   // posts[0].show();
//   // posts[1].show();
// }



// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }

//     static showInfo() {
//       console.log('Post class version 1.0');
//     }
//   }

//   const posts = [
//     new Post('javacript lesson,,,'),
//     new Post('konntiha'),
//   ];

//   // posts[0].like();

//   Post.showInfo();
// }



{
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }



  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }

  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}
