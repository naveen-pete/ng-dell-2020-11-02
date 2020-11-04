// JavaScript Modules
//
export class Product {
  id: number;
  name: string;
  isAvailable: boolean;

  constructor(id: number, name: string) {
    this.id = 10;
    this.name = 'iPhone X';
  }

  showDetails() {
    console.log('product details');
    console.log('id:', this.id);
    console.log('name:', this.name);

    this.getDetails();
  }

  getDetails(): string {
    return '';
  }
}

export function sayHi() {
  console.log('Hi Angular');
}
