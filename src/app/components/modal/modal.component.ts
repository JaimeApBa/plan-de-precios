import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  constructor() { } 
  @Input() body: string = '';
  @Output() closeMeEvent = new EventEmitter();
  @Output() sendEvent = new EventEmitter();
  isSubmitted: boolean = false;
  email = new FormControl('', [Validators.required, Validators.pattern(/^[\w._-]+@[\w._-]+\.[a-z]{2,6}$/i)]);

  ngOnInit(): void {
    console.log('Modal init');
  }

  closeMe() {
    this.closeMeEvent.emit();
  }
  send() {
    this.isSubmitted = true;
    this.sendEvent.emit();
  }
  ngOnDestroy(): void {
    console.log('Modal destroyed');
  }

}
