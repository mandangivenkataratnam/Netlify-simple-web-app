import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from '../../service/data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: false,
  
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private service:DataService,private title:Title,private meta:Meta) {
    this.title.setTitle('Search movies - showtime');
    this.meta.updateTag({name:'description',content:'search here movies like avatar,war etc'});
   }

   ngOnInit(): void {
  }

  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }

}
