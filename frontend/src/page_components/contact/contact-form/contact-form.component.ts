import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ComingSoonPopupComponent } from './coming-soon-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ComingSoonPopupComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;
  showPopup: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      question: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
        // Here you would typically send the form data
        console.log('Form submitted:', this.contactForm.value);
        this.openComingSoonPopup(); // Show popup
    }
  }

    openComingSoonPopup() {
        this.showPopup = true;
    }

    closeComingSoonPopup() {
        this.showPopup = false;
    }
}
