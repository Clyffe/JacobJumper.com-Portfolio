import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.js';

interface ContactForm {
  name: string;
  email: string; 
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  form : ContactForm =  { name: '', email: '', message: '' };
  submitted = false;
  sending = false;
  emailJS_service_id = environment.EMAILJS_SERVICE_ID;
  emailJS_publicKey = environment.EMAILJS_PUBLICKEY;
  emailJs_template = environment.EMAILJS_TEMPLATEID;


  sendEmail() {
    console.log(this.form)

    emailjs.send(this.emailJS_service_id, this.emailJs_template, {...this.form}, this.emailJS_publicKey)
  }

  reset() {
    this.form = { name: '', email: '', message: '' };
    this.submitted = false;
  }
}
