import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-active-requests',
  templateUrl: './active-requests.component.html',
  styleUrls: ['./active-requests.component.css']
})
export class ActiveRequestsComponent implements OnInit {
  activeRequests: any[] = [];
  private timerSubscription: Subscription = new Subscription();

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.fetchActiveRequests();

    // Check for urgent requests every five seconds
    this.timerSubscription = interval(5000).subscribe(() => {
      this.updateUrgentRequests();
    });
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  fetchActiveRequests() {
    this.requestService.activeRequests$.subscribe(activeRequests => {
      // Sort active requests based on deadline
      this.activeRequests = activeRequests.sort((a, b) => {
        const deadlineA = new Date(a.deadline);
        const deadlineB = new Date(b.deadline);
        return deadlineA.getTime() - deadlineB.getTime();
      });
    });
  }

  markAsResolved(request: any) {
    const index = this.activeRequests.indexOf(request); // Find the index of the request
    if (index !== -1) {
      this.activeRequests.splice(index, 1); // Remove the request from the array
    }
  }  

  isExpired(request: any): boolean {
    const deadline = new Date(request.deadline);
    return deadline < new Date();
  }

  isUrgent(request: any): boolean {
    const deadline = new Date(request.deadline);
    const currentTime = new Date();
    const timeDifference = deadline.getTime() - currentTime.getTime();
    const oneHour = 60 * 60 * 1000; // in milliseconds
    return timeDifference <= oneHour;
  }

  private updateUrgentRequests(): void {
    const currentTime = new Date();
    this.activeRequests.forEach(request => {
      const deadline = new Date(request.deadline);
      const timeDifference = deadline.getTime() - currentTime.getTime();
      const oneHour = 60 * 60 * 1000; // in milliseconds
      if (timeDifference <= oneHour) {
        request.isUrgent = true;
      } else {
        request.isUrgent = false;
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid Date';
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${month} ${day}, ${year}, ${hours}:${minutes}`;
  }
}
