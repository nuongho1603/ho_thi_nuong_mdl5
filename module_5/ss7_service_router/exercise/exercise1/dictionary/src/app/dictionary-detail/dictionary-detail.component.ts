import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../model/i-word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
 iword? : IWord;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService)
  { this.activatedRoute.paramMap.subscribe(next => {
    const id = next.get("id");
    if (id != null){
      this.iword = dictionaryService.findById(parseInt(id));
      console.log(this.iword);
    }
  })

  }

  ngOnInit(): void {
  }

}
