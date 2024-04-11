import { Component, Output, EventEmitter } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent {
  referralDescription: string = '';
  deadline: Date = new Date();

  constructor(private requestService: RequestService) { }

  @Output() requestSubmitted = new EventEmitter<void>();

  submitRequest() {
    const request = {
      referralDescription: this.referralDescription,
      deadline: this.deadline
    };
    this.requestService.submitRequest(request);
    this.requestSubmitted.emit(); // Emit event when request is submitted

    this.referralDescription = '';
    this.deadline = new Date();
  }
}
