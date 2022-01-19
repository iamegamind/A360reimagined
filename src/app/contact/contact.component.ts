import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  eventTypes = [
    'Brand Activation', 'Corporate Function', 'Wedding'
  ]

  messageSubjects = [
    'Thanks!',
    'Looking For More Info',
    'I was not happy about something',
    'I\'m ready to book!',
    'Pricing Please'
  ]
  siteKey = "6Les7yEeAAAAAEFs1SOfIykmoVsUh0dVt6Uv-pOs";

  constructor(private fb: FormBuilder) {
    this.trackFormValidity();
  }

  contactForm = this.fb.group({
    fullName: [null, Validators.required],
    phoneNumber: [null, Validators.compose(
      [Validators.required,
        Validators.pattern('(\\+27|0)[\\s-]*\\d{2}[\\s-]*\\d{3}[\\s-]*\\d{4}')])],
    email: [null, Validators.compose([Validators.email, Validators.required])],
    messageSubject: [null, Validators.required],

    date: [null],
    eventType: null,
    venue: [null],
    hours: [null],
    requirements: [null],
    message: [null],
    reCaptcha: [null, Validators.required]

  });


  isShowMessageField() {
    return this.contactForm.controls['messageSubject']?.value === 'Thanks!' ||
      this.contactForm.controls['messageSubject']?.value === 'Looking For More Info' ||
      this.contactForm.controls['messageSubject']?.value === 'Pricing Please' ||
      this.contactForm.controls['messageSubject']?.value === 'I was not happy about something'
  }

  isBooking() {
    return this.contactForm.controls['messageSubject']?.value === 'I\'m ready to book!'
  }

  isPricingEnquiry() {
    return this.contactForm.controls['messageSubject']?.value === 'Pricing Please'
  }

  trackFormValidity() {
    this.contactForm.controls['messageSubject'].valueChanges
      .subscribe(value => {
        console.log('message subject value: ' + value)

        if (value === ('Thanks!' || 'Looking For More Info' || 'I was not happy about something')) {
          this.contactForm.controls['message']?.setValidators([Validators.required]);
        } else if (value === ('I\'m ready to book!' || 'Pricing Please')) {
          this.contactForm.controls['date']?.setValidators([Validators.required]);
          this.contactForm.controls['eventType']?.setValidators([Validators.required]);
          this.contactForm.controls['venue']?.setValidators([Validators.required]);
          this.contactForm.controls['hours']?.setValidators([Validators.required]);
          this.contactForm.controls['requirements']?.setValidators([Validators.required]);
        }
        this.contactForm.updateValueAndValidity()
      });
  }

  onSubmit(): void {
    alert('Thanks!');
  }

  determineMessagePlaceholder() {
    if (this.contactForm.controls['messageSubject']?.value === 'Pricing Please') {
      return "Anything you want to add? "
    } else if (this.contactForm.controls['messageSubject']?.value === 'Thanks!'
    ) {
      return "Please type message here"
    } else if (this.contactForm.controls['messageSubject']?.value === 'I was not happy about something'
    ) {
      return "Our apologies. Please type complaint"
    } else {
      return 'Message'
    }
  }
}
