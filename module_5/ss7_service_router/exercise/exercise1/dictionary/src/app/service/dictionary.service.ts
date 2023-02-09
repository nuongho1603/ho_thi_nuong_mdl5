import { Injectable } from '@angular/core';
import {IWord} from "../model/i-word";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
 words : IWord[] = [
   {id:1,word: "now",mean:"bây giờ"},
   {id:2,word: "water",mean:"Nước"},
   {id:3,word: "exit",mean:"thoát"},
   {id:4,word: "age",mean:"tuổi "},
   {id:5,word: "doctor",mean:"bác sĩ "},
   {id:6,word: "end",mean:"kết thúc "}
 ]
  constructor() { }

  getAll(){
   return this.words;
  }

  findById(id: number) {
   let result = this.words.filter(element => element.id ===id);
    return result[0];
  }
}
