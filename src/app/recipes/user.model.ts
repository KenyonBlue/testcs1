export class User {
   public name: string;
   public squaaad: string[];
   public imagePath: string;

   constructor(name: string, squaaad?: string[], imagePath?: string) {
       this.name = name;
       this.squaaad = squaaad;
       this.imagePath = imagePath;
   }
}