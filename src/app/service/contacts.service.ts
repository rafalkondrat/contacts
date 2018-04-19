import { Injectable } from '@angular/core';
import { ContactModel } from '../shared/contact.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  contacts: ContactModel[] = [];

  constructor(private http: HttpClient) {
    const contact1: ContactModel = new ContactModel();
    contact1.name = 'John Doe';
    contact1.email = 'john.doe@gmail.com';
    contact1.phone = '777-666-555';

    const contact2: ContactModel = new ContactModel();
    contact2.name = 'Paco De Lucia';
    contact2.email = 'paco.de.lucia@gmail.com';
    contact2.phone = '123-234-346';

    const contact3: ContactModel = new ContactModel();
    contact3.name = 'Jan Kowalski';
    contact3.email = 'jan.kowalski@gmail.com';
    contact3.phone = '154-122-185';
    this.contacts = [contact1, contact2, contact3];
  }

  findAll(): ContactModel[] {
    return this.contacts;
  }

  findAllFromDB() {
    return this.http.get('/api/v1/contacts', this.httpOptions);
  }


  remove(contact: ContactModel): boolean {
    const index = this.contacts.indexOf(contact, 0);
    if (index > -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }

  add(contact: ContactModel) {
    this.contacts.push(contact);
    return true;
  }
}
