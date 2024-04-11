import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private activeRequestsSubject = new BehaviorSubject<any[]>([]);
  activeRequests$ = this.activeRequestsSubject.asObservable();

  constructor() { }

  submitRequest(request: any) {
    request.entryTime = new Date(); // Set entry time
    const activeRequests = this.activeRequestsSubject.getValue();
    activeRequests.push(request);
    this.activeRequestsSubject.next(activeRequests);
  }
}
