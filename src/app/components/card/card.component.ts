import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() card: any;
  
  @ViewChild('modal', { read: ViewContainerRef}) 
  entry!: ViewContainerRef;
  subscription!: Subscription;

  constructor( private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.subscription = this.modalService.openModal(this.entry)
                            .subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}
