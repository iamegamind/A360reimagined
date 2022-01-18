import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = this.fb.group({
    fullName: null,
    phoneNumber: [null, Validators.required],
    email: [null, Validators.required],

    date: [null, Validators.required],
    eventType: null,
    venue: [null, Validators.required],
    hours: [null, Validators.required],
    messageSubject: [null, Validators.required],

    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    requirements: [null, Validators.required],
    message: [null, Validators.required]

  });

  hasUnitNumber = false;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  eventTypes = [
    'Brand Activation', 'Corporate Function', 'Wedding'
  ]

  messageSubjects = [
    'Thanks!',
    'Looking For More Info',
    'I\'m ready to book!',
    'Pricing Please',
    'I was not happy about something'
  ]

  isShowMessageField() {
    return this.contactForm.controls['messageSubject']?.value === 'Thanks!' || this.contactForm.controls['messageSubject']?.value === 'Looking For More Info' || this.contactForm.controls['messageSubject']?.value === 'Pricing Please' || this.contactForm.controls['messageSubject']?.value === 'I was not happy about something'
  }

  isBooking() {
    return this.contactForm.controls['messageSubject']?.value === 'I\'m ready to book!'
  }

  isPricingEnquiry() {
    return this.contactForm.controls['messageSubject']?.value === 'Pricing Please'
  }

  constructor(private fb: FormBuilder) {
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
