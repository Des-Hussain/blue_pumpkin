import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[MaxNumber]'
})
export class MaxNumber {

  constructor(private el: ElementRef) { }

  @Input() MaxNumber: number;
  public inputValue = "";
  @HostListener('keydown', ['$event']) onKeyDown(event) {

    let e = <KeyboardEvent> event;
    var oldValue = event.target.value;

    if(event.keyCode == 8) this.inputValue = this.inputValue.slice(0, -1);
    else if(event.key >= 0 && event.key <= 9 && this.inputValue.length != 3 ) this.inputValue += event.key;

    if(event.keyCode == 8 || parseInt(this.inputValue) <= this.MaxNumber) return;
    else {
      this.inputValue = this.inputValue.slice(0, -1);
      e.preventDefault();
    }
  }
}