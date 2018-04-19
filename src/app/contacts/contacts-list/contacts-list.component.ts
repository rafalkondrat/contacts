import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactModel } from '../../shared/contact.model';
import { ContactsService } from '../../service/contacts.service';
import { NewContactComponent } from '../new-contact/new-contact.component';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
  providers: [ContactsService]
})

export class ContactsListComponent implements OnInit {

  contacts: ContactModel[] = [];

  editedContact: ContactModel;

  @ViewChild(NewContactComponent) newContactComponent;

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
    this.reloadContactsList();
  }

  removeContact(contact: ContactModel) {
    if (this.contactService.remove(contact)) {
      this.reloadContactsList();
    }
  }

  editContact(contact: ContactModel) {
    this.editedContact = contact;
  }

  addContact(contact: ContactModel) {
    if (this.contactService.add(contact)) {
      this.reloadContactsList();
    }
  }

  isContactsListEmpty(): boolean {
    return this.contacts.length === 0;
  }

  private reloadContactsList() {
    // this.contacts = this.contactService.findAll();

    this.contactService.findAllFromDB().subscribe((res: any) => {
      console.log(res);
      this.contacts = res;
    });
  }
}
