import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements AfterViewInit {
  @ViewChild('videoElement', { static: false }) videoElement: any;
  video: any;

  ngAfterViewInit() {
    this.startWebcam();
  }

  startWebcam() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.video = this.videoElement.nativeElement;
        this.video.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
      });
  }
}
