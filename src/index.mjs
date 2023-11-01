
/**
 * const.lett等の変数宣言について
 */

// var var1 ="変数var";
// console.log(var1);

// //var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// //var変数は再宣言可能
// var var1 ="変数varを再宣言";
// console.log(var1);


// let val2 ="let変数";
// console.log(val2);

// //letは上書きが可能
// val2 ="letをうわがき";
// console.log(val2);

// //letは再宣言不可能
// let val2 ="letを再宣言";
// console.log(val2);


// const val3 ="const変数";
// console.log(val3);

// //const変数は上書き不可能
// // val3 ="const変数上書き";
// // console.log(val3);

// //const変数は再宣言も不可能
// const val3 ="const変数を再宣言";
// console.log(val3);


// //constで定義したオブジェクトは、プロパティの変更が可能
// const val4 ={
//   name:"hoge",
//   age:100,
// };

// val4.name = "hoge2";
// val4.address = "earth";
// console.log(val4);


//constで定義した配列は、プロパティの変更が可能
// const val5 =['dog','cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);




/**
 * テンプレート文字列のついて
 */
// const name ="市川";
// const age ="28";
// //「私の名前は市川です。年齢は２８歳です。」

// //これまでの方法は
// const message1 = "私の名前は"　+ name + "です。年齢は" + age + "です。"
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 =`私の名前は${name}です。年齢は${age}です。`
// console.log(message2);




/**
 * アロー関数について
 */

//これまでの関数
// function func1(str){
// //   return str;
// // }

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));


//アロー関数で書こうとすると
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));


// const func3 = (num1, num2) => {
//   return num1 + num2 ;
// };

// console.log(func3(12, 8));




/**
 * 分割代入
 */

 //オブジェクトについて
// const myProfile = {
//   name : "市川",
//   age : 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// //配列でも使える
// const myProfile = ['市川','２８']
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です、年齢は${age}歳です。`
// console.log(message4);




/**
 * デフォルト値、引数について
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
// sayHello();

// sayHello("市川");




/**
 * スプレッド構文　...  について = "順番に処理する！"
 */

//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc (arr1[0], arr1[1]);
// sumFunc (...arr1);

//配列をまとめる時
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3]  = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4] ;
// console.log(arr6);
// arr6[0] = 50; 
// console.log(arr4);


// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

//この場合arr4とarr8は同じところを参照してしまっているので、
//arr8の要素を更新するとarr4の要素も更新される。元の配列が影響を受けてしまう。
// const arr8 = arr4;
// arr8[0] = 50 ;
// console.log(arr8);
// console.log(arr4);




/**
 * mapやFilterを使った、配列の処理について
 */
const nameArr1 = ["田中", "山田", "市川"];
// for(let index = 0; index < nameArr1.length; index++){
// console.log(`${index + 1}番目は、${nameArr1[index]}です`);
// }

//mapの基本公文
// const nameArr2 = nameArr1.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//mapeメソッドで、配列を順番に渡すことが可能
//第二引数には配列の番号を渡すことが可能
// nameArr1.map((name, index)=> console.log(`${index + 1}番目は、${name}です`));


//filterはある条件に一致した値だけを返し新しい配列を生成するような関数
//returnの後に条件式を記入する
// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const NewNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(NewNumArr);

// const NewNumArr2 = nameArr1.map((name)=>{
//   if (name === "市川") {
//     return name;
//   }else{
//     return `${name}さん`;
//   }
// })
// console.log(NewNumArr2);


/**
 * 三項演算子について
 */
// ある条件　？　　　ある条件がtrueの時 : ある条件がfalseの時 が返される
//条件式を一行で記述できる

// const val1 = 1 > 0 ? 'trueです':'falseです';
// console.log(val1);

// const num = '4500';
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString():'数値を入力してください。'
// console.log(formattedNum);


// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を越えています。':'許容範囲内です。'
// }
// console.log(checkSum(43,50));



/**
 * 論理演算子の本当の意味
 */

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2がtrueのとき");
// }

// if(flag1 && flag2){
//   console.log("1も2もtrueのとき");
// }

// 『||』は、　｜｜の左側がfalseとなるとき、右側を返す。
// const num = null;
// const fee = num || "金額が未設定です。";
// console.log(fee);


// 『&&』は、　｜｜の左側がtrueとなるとき、右側を返す。
const num2 = 100; 
const fee2 = num2 && "何か設定されています。";
console.log(fee2);


