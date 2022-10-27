import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentRef!: ComponentRef<ModalComponent>;
  private componentSubscriber!: Subject<string>

  constructor() { }

  openModal(entry: ViewContainerRef) {
    this.componentRef = entry.createComponent(ModalComponent);
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.sendEvent.subscribe(() => this.send());
    this.componentSubscriber = new Subject<string>();
    
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  send() {
    this.componentSubscriber.next('send');
   
  }
}
