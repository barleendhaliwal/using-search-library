import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Configuration, Model } from 'my-lib'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetRequestService } from '../get-request.service';

// @Injectable({providedIn: 'root'})
// export class BridgeService implements BridgeServiceAdapter {
//     hello() { alert('hello Word') }
// }

class DummyModel {
  name: string
  description: string
  x: string
  id: number

  constructor(name: string, description: string, type: string, x: string, id: number) {
    this.name = name
    this.description = description
    this.x = x
    this.id = id

  }
}


@Component({
  selector: 'app-expt',
  templateUrl: './expt.component.html',
  styleUrls: ['./expt.component.css']
})
export class ExptComponent implements OnInit {


  config: Configuration
  form!: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient, public getservice: GetRequestService) {

    this.config = {
      suggestionsUrl: `http://localhost:3000/search`,
      displayPropertyName: 'name',
      recentSearchUrl: `http://localhost:3000/search/recents`,
      models: [
          {
          name: "ToDo",
          displayName: "List",
          imageUrl: "https://picsum.photos/id/1022/50"
        },
        {
          name: "User",
          displayName: "Users",
          imageUrl: 'https://picsum.photos/id/1/50'

        },
      ],
      order: [{ name: 'ASC' }, { description: 'DESC' }],
      limit: 100,
      limitByType: true,
      categorizeResults: true,
      hideRecentSearch: false,
      hideCategorizeButton:false,
      saveInRecents:true
    }

  }

  @ViewChild('search') public searchInput!: ElementRef;
  clear() {
    console.log('here')
    console.log(this.searchInput)
    this.searchInput.nativeElement.value = ''
    this.searchInput.nativeElement.focus()
  }


  ngOnInit(): void {

    this.form = this.fb.group({
      firstName: [],
      search: []
    })
    // this.form.controls['search'].disable();
    // this.http.get(`http://[::1]:3000/search?query=%7B%0A%20%20%22match%22%3A%20%22item%22%0A%0A%20%20%0A%7D`).subscribe((value)=>{
    //   console.log(value)
    // })
  }

  onSubmit() {
    console.log(this.form.value)
    // console.log(this.form.get('firstName')!.value)
  }

  log(event: string) {
    console.log(event, '!!!!!!!!!!!!!!!!')
  }


}
