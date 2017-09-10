import { Component } from '@angular/core';

@Component({
  selector: 'app-inter-html-binding',
  templateUrl: './inter-html-binding.component.html',
  styleUrls: ['./inter-html-binding.component.css']
})
export class InterHtmlBindingComponent {
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = 'Template <script>alert("Hello")</script> <b>Syntax</b>';
}
