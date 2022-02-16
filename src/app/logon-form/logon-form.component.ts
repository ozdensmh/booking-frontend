import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { RetrieveBooking } from '../types';

@Component({
  selector: 'app-logon-form',
  templateUrl: './logon-form.component.html',
  styleUrls: ['./logon-form.component.css'],
})
export class LogonFormComponent implements OnInit {
  bookingCode: string = '';
  familyName: string = '';
  submitted: boolean = false;
  verificationError: boolean = false;

  panelOpenState: boolean = false;

  retrieveBooking: any;

  public retrieveBookingForm: FormGroup;

  @Output() hideLogonForm: EventEmitter<boolean> = new EventEmitter();
  hideLogon: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService
  ) {
    this.retrieveBookingForm = this.formBuilder.group({
      bookingCode: [
        this.bookingCode,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(6),
          Validators.pattern(/^[2-9a-zA-Z]+$/),
        ],
      ],
      familyName: [
        this.familyName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.retrieveBookingForm.status === 'INVALID') {
      return;
    }
    this.getRetrieveBooking();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.retrieveBookingForm.controls;
  }

  async getRetrieveBooking() {
    this.bookingCode = this.retrieveBookingForm
      .get('bookingCode')
      ?.value.toUpperCase();
    this.familyName = this.retrieveBookingForm
      .get('familyName')
      ?.value.toUpperCase();

    const result = await this.bookingService.getBookingDetails(
      this.bookingCode,
      this.familyName
    );

    this.retrieveBooking = result;
    this.verificationError = this.retrieveBooking.bookingCode === null;

    this.hideLogon = result?.bookingCode ? true : false;

    await this.handleLogonFormShow();
  }

  async handleLogonFormShow() {
    this.hideLogonForm.emit(this.hideLogon);
  }
}
