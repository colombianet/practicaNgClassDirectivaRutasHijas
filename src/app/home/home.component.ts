import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  sizeProperty = 10;
  color = 'primary';
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSize( size: number ): void {
    if (size === 5 && this.sizeProperty >= 30) {
      this.sizeProperty = 30;
      alert('No puedes seguir agrandando');
      return;
    } else if (size === 5) {
      this.sizeProperty += size;
    }

    if(size === -5 && this.sizeProperty <= 5) {
      this.sizeProperty = 5;
      alert('No puedes seguir disminuyendo');
      return;
    } else if(size === -5) {
      this.sizeProperty += size;
    }
  }

  changeColor( color: string): string {
    switch (color) {
      case 'danger':
        this.color = 'danger';
        break;
      case 'warning':
        this.color = 'warning';
        break;
      case 'dark':
        this.color = 'dark';
        break;
      default:
        this.color = 'primary';
        break;
    }
    return `btn-${ this.color }`;
  }

  save(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
