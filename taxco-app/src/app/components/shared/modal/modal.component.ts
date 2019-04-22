import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor( public modalService : ModalService) {
  }

  open(content) {
    //this.modalService.open(content);
  }

  close(content) {
    //this.modalService.open(content);
  }

}
