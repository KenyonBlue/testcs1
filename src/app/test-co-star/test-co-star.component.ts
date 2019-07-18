import { Component, OnInit, NgModule } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-test-co-star',
  templateUrl: './test-co-star.component.html',
  styleUrls: ['./test-co-star.component.scss']
})

export class TestCoStarComponent implements OnInit {



  constructor() {

    // ************************** everything below this line is for testing ****************************************
    

    console.log('goodmorning2');















    // ************************** testing arrowfunctions and es6 recap ****************************************


    // class ShoppingList {
    //   groceries: string[] = [];

    //   constructor() {
    //       // this.groceries = [];
    //   }
    //   addItem(item: string) {
    //     this.groceries.push(item);
    //   };

    //   removeItem(item: any) {
    //     this.groceries = this.groceries.filter((grocery) => item !== grocery)
    //   };
    // }

    // const myNewlist = new ShoppingList();

    // myNewlist.addItem('some stuff');
    // myNewlist.addItem('some more stuff');

    // console.log(myNewlist.groceries);

    // myNewlist.removeItem('some stuff')

    // console.log(myNewlist.groceries);







    // ************************** classes spread operator , arrow functions immutability ****************************************



  //   class ShoppingList2 {
  //     groceries: string[];

  //     constructor() {
  //       this.groceries = [];
  //     }

  //     addItem(item: string) {
  //       this.groceries === [...this.groceries, item];
  //     }

  //     removeItem(item) {
  //       this.groceries = this.groceries.filter((grocery) =>  item !== grocery)
  //     }
  //   }

  //   const myNewList = new ShoppingList2();
  //   console.log('myNewList:', myNewList.groceries)
    
  //   myNewList.addItem('pear');
  //   myNewList.addItem('orange');
    



    

  //   // ----------------------------------------------------------------- below this is es5 above is es6

  //   function ShoppingList() {
  //     this.groceries = [];
  //   }

  //   ShoppingList.prototype.addItem = function (item: string) {
  //     this.groceries.push(item)
  //   }

  //   ShoppingList.prototype.removeItem = function (item: string) {
  //     this.groceries = this.groceries.filter(function (grocery) {
  //       return item !== grocery;
  //     })
  //   }

  //   var mylist = new ShoppingList();
  //  mylist.addItem('bananas');
  //   mylist.addItem('apples');
  //   console.log(mylist.groceries);
  //  mylist.removeItem('bananas');

  //  console.log(mylist.groceries);
// -----------------------------------------------------------------



      




    
    // ************************** emitting declaration files ****************************************

    // /*export*/ class Foo {
    //   constructor(public name: string) {}
    //   bar(age: number) {}
    // }

    // how to create own path and folder names for these above 



    
    // ************************** writing decleration files using lodash  ****************************************

  //  declare module 'lodash' {   
  //   interface loDashStatic {
  //     log(item: string): void;
  //   }
  //   //  export function chunk(collection: any, size?: number): any {}
  //  }

  //   // examples of what loDash can do
  //   _.chunk([1,2,4,3,4,5,6,7], 3);













    // ************************** string enums and inlining members ****************************************

//     const enum Sizes {
//       small = 'small',
//       medium = 'medium',
//       large = 'large'
//     }

//       let selected: Sizes = Sizes.small;

//       function update(size: Sizes): void {
//         selected = size;
//  }

//       update(Sizes.medium);

//       console.log(selected);




    


   // ************************** function overload **************************************** ?????????? 

  //  function reverse(str: string): string;
  //  function reverse<T>(arr: T[]): T[];


  //   function reverse<T>(stringOrArray: string | T[]): string | T[] {
  //     if(typeof stringOrArray === 'string') {
  //       return stringOrArray
  //       .split('')
  //       .reverse()
  //       .join('');
  //     } 
  //     return stringOrArray.slice().reverse(); 
  //   }

  //   const revPep = reverse('pepperoni')
  //   const revArr = reverse(['asdf','kenhon', 'somethingagain'])
    
  //   console.log('revPep:', revPep)
  //   console.log('revArr:', revArr)


   // ************************** function generics **************************************** ?????????? 




  //  class Pizza {
  //    constructor(public name: string, public price: number ) {}
  //  } 

  //   class List<T>  {
  //     private list: T[];

  //     addItem(item: T): void {
  //       this.list.push(item);
  //     }

  //     getList(): T[] {
  //       return this.list
  //     }
  //   }

  // const list = new List<Pizza>();

  // list.addItem(new Pizza('pep' , 15));

  // const pizzas = list.getList();

  // class Coupon {
  //   constructor(private name: string) {
      
  //   }
  // }

  //   const anotherList = new List<Coupon>();
  //   const somethingff = anotherList.addItem(new Coupon('PIZZAA25'))










    // ************************** interface vs classes ****************************************


    // // interface Artist {
    // //   name: string
    // // }

    // class ArritstCreator {
    //     constructor(public name: string) {
          
    //     }
    // }

    // function artistFactory({name}: ArritstCreator) {
    //     return new ArritstCreator(name)
    // }










// ************************** everything below this line is for testing ****************************************


    // interface Item {
    //   name: string
    // }

    //   interface Artist extends Item {
    //     songs: number;
    //   }

    //   type Artist2 = Artist & Item;

    //   const artist2: Artist2 = {
    //     name: 'something2',
    //     songs: 2
    //   }
    //   console.log('artist2:', artist2)


    //   const artist: Artist = {
    //     songs: 2,
    //     name: 'something'
    //   }


    //   console.log('artist:', artist)


















           // ************************** testing ****************************************
      
          //  interface Order {
          //    id: string;
          //    amount: number;
          //    currency: number;
          //  }

          //  interface Paypal {
          //     type: 'paypal';
          //     email: string
          //  }

          //  interface Stripe {
          //    type: 'stripe';
          //    card: string;
          //    cvg: string
          //  }

          //  const order: Order = {
          //    id: 'kahsd8y0u',
          //    amount: 4,
          //    currency: 25,
          //  }


          //  const paypal: Paypal = {
          //    type: 'paypal',
          //   email: "string"
          //  }

          //  const stripe: Stripe = {
          //   type: 'stripe',
          //   card: '0003 4683 4478 9237',
          //   cvg: '834'
          //  }

          //  type CheckoutCard = Order & Stripe;
          //  type CheckoutPayPal = Order & Paypal;

          //  const checkOutCard: CheckoutCard = {
          //    ...order,
          //    ...stripe
          //  }

          //  const checkoutPaypal: CheckoutPayPal = {
          //    ...order,
          //    ...paypal
          //  }

          //  type Payload = CheckoutCard | CheckoutPayPal;

          // function checkOut(payload: Payload) {
          //   if(payload.type === "stripe") {
          //     return checkOutCard;
          //   } 
          //   return checkoutPaypal;
          // }
          
          
          // console.log('checkOut using card:', checkOut(checkOutCard))
          // console.log('checkOut using paypal:', checkOut(checkoutPaypal))
          












       // ************************** Discriminated [tagged] Unions  ****************************************





      //  interface Order {
      //   id: string;
      //   amount: number;
      //   currency: number;
      // }

      // interface Stripe {
      //   type: 'stripe'
      //   card: string;
      //   cvc: string;
      // }
    
      // interface Paypal {
      //   type: 'paypal'
      //   email: string;
      // }

      // type CheckoutCard = Order & Stripe;
      // type CheckoutPayPal = Order & Paypal; 
      // const order: Order = {
      //   id: 'asdlkfal',
      //   amount: 3,
      //   currency: 13.67,
      // }

      // const orderCard: CheckoutCard = {
      //   ...order, 
      //   type: 'stripe',
      //   card: '0000 4444 7777 7878',
      //   cvc: '123'
      // }
      
      // const orderPaypal: CheckoutPayPal = {
      //   ...order,
      //   type: 'paypal',
      //   email: 'test@test.com'
      // }
      
      // type Payload = CheckoutCard | CheckoutPayPal;
      
      // function checkout(payload: Payload) {
      //   if(payload.type === 'stripe') {
      //     return orderCard;
      //   } 
      //   if (payload.type === 'paypal') {
      //     return payload.email;
      //   }
      // };
      
      // const orderUsingCard = checkout(orderCard);
      // const completedCheckout2 = checkout(orderPaypal);

      // console.log('orderUsingCard:', orderUsingCard)
      // console.log('orderPaypal:', completedCheckout2)









      
      // console.log('orderPaypal:', orderPaypal)
      // console.log('orderCard:', orderCard)
      
    
    //     // ************************** intersection types ****************************************

    //     interface Order {
    //       id: string;
    //       amount: number;
    //       currency: number;
    //     }

    //     interface Stripe {
    //       card: string;
    //       cvc: string;
    //     }
      
    //     interface Paypal {
    //       email: string;
    //     }
    //     // //
    //     // type CheckoutCard = Order                //we also would like to use stripe as well;
    //     // //                                        this is where we can use intersection type.

    //     type CheckoutCard = Order & Stripe;
    //     type CheckoutPayPal = Order & Paypal;  // by doing this the code becomes easier to read as opposed to extending an interface that may be in a seperate file

    //     const order: Order = {
    //       id: 'asdlkfal',
    //       amount: 3,
    //       currency: 13.67,
    //     }

    //     const orderCard: CheckoutCard = {
    //       ...order, //the ability to use everything from the const order. 
    //       card: '0000 4444 7777 7878',
    //       cvc: '123'
    //     }
        
    //     const orderPaypal: CheckoutPayPal = {
    //       ...order,
    //       email: 'test@test.com'
    //     }

        
    //     console.log('orderPaypal:', orderPaypal)
    //     console.log('orderCard:', orderCard)
    
    // console.log('working');
    
    
    
    // ************************** literal type guard and the "in" operator  ****************************************

      // class Song {
      //   kind: 'song'
      //   constructor(public title: string, public duration: number) {}
      // }
  
      // class Playlist {
      //   kind: 'playlist'
      //   constructor(public name: string,  song: Song[]) {}
      // }
  
      // // here we will return item but before that we will check if the title exist using the "in" operator
      // function isSong(item: T): item is Song {
      //   return "title" in  item ;
      // }
  
      // function getSongInfo(item: Song | Playlist) {
      //   // if (isSong(item) ) {
      //     if (item instanceof Song) {

      //   return item.title + ' ' + item.duration
      //     }
      //     return item.name
      // }
      // const newSongAdded = getSongInfo(new Song('lets go diddy', 40000));
      // const newPlaylistToAdd = getSongInfo(new Playlist('new playlist',[new Song('new song to list', 80000)]));
      
      // console.log('newPlaylistToAdd:', newPlaylistToAdd)
      // console.log('newSongAdded:', newSongAdded)


      // const exist = "blur" in window;
      // console.log('window:', window)
      // console.log('exist:', exist)


        // ************************** replacing instance of with user defined type guard  ****************************************

    // class Song {
    //   constructor(public title: string, public duration: number) {}
    // }

    // class Playlist {
    //   constructor(public name: string,  song: Song[]) {}
    // }

    // // this is the new added function that allows us to define type guard ourselves 
    // function isSong(item: T): item is Song {
    //   return item instanceof Song;
    // }

    // function getSongInfo(item: Song | Playlist) {
    //     if (isSong(item) ) {
    //       return item.title + ' ' + item.duration
    //     }
    //     return item.name
    // }
    // const newSongAdded = getSongInfo(new Song('lets go diddy', 40000));
    // const newPlaylistToAdd = getSongInfo(new Playlist('new playlist',[new Song('new song to list', 80000)]));
    
    // console.log('newPlaylistToAdd:', newPlaylistToAdd)
    // console.log('newSongAdded:', newSongAdded)













    // ************************** lerning how to use instance of  ****************************************

    // class Song {
    //   constructor(public title: string, public duration: number) {}
    // }

    // class Playlist {
    //   constructor(public name: string,  song: Song[]) {}
    // }

    // function getSongInfo(item: Song | Playlist) {
    //     if (item instanceof Song) {
    //       return item.title + ' ' + item.duration
    //     }
    //     return item.name
    // }
    // const newSongAdded = getSongInfo(new Song('lets go diddy', 40000));
    // const newPlaylistToAdd = getSongInfo(new Playlist('new playlist',[new Song('new song to list', 80000)]));
    
    // console.log('newPlaylistToAdd:', newPlaylistToAdd)
    // console.log('newSongAdded:', newSongAdded)





    // class Foo {
    //   bar() {}
    // }

    // const bar = new Foo();

    // console.log(Object.getPrototypeOf(bar) === Foo.prototype)

    // // a better way to get this accomplished is by using the instance of feature? 

    // console.log('bar instanceof Foo:', bar instanceof Foo)













    // interface CoStar {
    //   name: 'string'
    // }

    // const coStar = {
    //   name: 'CoStar',
    // }

    // function getName(obj: string) {
    //   return `compT name is ${obj}`
    // }

    // const name = getName('someCompT');
    // console.log('name:', name)















    // ************************** everything above this line is for testing ****************************************
   }

  ngOnInit() {
  }







}
