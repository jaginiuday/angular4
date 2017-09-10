import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.css']
})
export class BypassSecurityComponent {
  url1: string;
  sanitizedUrl1: SafeUrl;
  url2: string;
  sanitizedUrl2: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url1 = 'javascript:alert("Hi there")';
    this.sanitizedUrl1 = sanitizer.bypassSecurityTrustUrl(this.url1);
    this.url2 = 'https://www.youtube.com/embed/';
    this.sanitizedUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url2);
  }
}
