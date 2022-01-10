import {Injectable} from '@angular/core';
import './assets/js/smtp'
import {Mailer, Message} from './app/model/message';
import {HttpClient} from '@angular/common/http';
import {environment} from './environments/environment';

declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  sendEmail() {
    this.http.post(environment.mailJetBaseUrl + '/send', this.createMessages())
  }

  createMessages() {
    const fromMailer: Mailer = {Email: '', Name: ''};
    const toMailer: Mailer[] = [{Email: '', Name: ''}];
    const messages: Message[] = [{
      From: fromMailer,
      To: toMailer,
      Subject: '',
      HTMLPart: '',
      TextPart: ''
    }];

    return messages;
  }

}
