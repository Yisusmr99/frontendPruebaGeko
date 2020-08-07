import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from '@angular/common/http';
import {RecordService} from '../services/record.service';
import {Record} from '../interfaces/record';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  records: Record[];

  constructor(private recordService:RecordService, private httpClient: HttpClient) {
    this.recordService.get().subscribe((data:Record[])=>{
      this.records = data;
      console.log(data)
    },(error)=>{  
      console.log(error);
    })
   }

  ngOnInit(): void {
  }
  faEye = faEye;
}
