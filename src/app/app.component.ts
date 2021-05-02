import { Component, ɵɵsetComponentScope } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Refinitiv_Section2_Q2';
  selectedOption: any;
  json: any;
  url_specific: any;
  jsontable: any;
  headerTable: any;

  url = 'https://api.publicapis.org/categories'

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      this.json = data;
    });

    this.http.get(this.url).toPromise().then(data => {
      this.json = data;
    });

  }

  createTablefromcategory() {
    this.url_specific = 'https://api.publicapis.org/entries?category=' + this.selectedOption + '&https=true'
    console.log(this.url_specific)
    this.http.get(this.url_specific).toPromise().then(data => {
      this.jsontable = data
      this.jsontable = this.jsontable.entries
      this.headerTable = Object.keys(this.jsontable[0])
    });
  }

}
