import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = false;
  sending = false;

  async send() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending = true;
    // Simulate network delay
    await new Promise(r => setTimeout(r, 1200));
    this.sending = false;
    this.submitted = true;
  }

  reset() {
    this.form = { name: '', email: '', message: '' };
    this.submitted = false;
  }
}
