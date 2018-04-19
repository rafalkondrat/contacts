import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactModel } from '../../shared/contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {

  @Input()
  contact: ContactModel = new ContactModel();

  @Output()
  add: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();

  clearContact() {
    this.contact = new ContactModel();
  }

  saveContact() {
    const contactClone: ContactModel = new ContactModel();
    contactClone.name = this.contact.name;
    contactClone.email = this.contact.email;
    contactClone.phone = this.contact.phone;
    this.add.emit(contactClone);

  }
}
