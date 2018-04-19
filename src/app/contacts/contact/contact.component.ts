import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactModel } from '../../shared/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @Input()
  contact: ContactModel;

  @Output()
  delete: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();

  @Output()
  edit: EventEmitter<ContactModel> = new EventEmitter<ContactModel>();

  constructor() {
  }

  removeContact(contact: ContactModel) {
    this.delete.emit(contact);
  }

  editContact(contact: ContactModel) {
    this.edit.emit(contact);
  }
}
