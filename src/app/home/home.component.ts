import { Component, OnInit } from '@angular/core';
import {BoardService} from '../services/board.service';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Board,Colum0,Colum1,Colum2,Colum3,Colum4,Colum5,Colum6,Colum7,Colum8, Name} from '../interfaces/board';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boards: Board[];
  colum0:Colum0 ={
    a0: 5,
    a1: 6,
    a2: null,
    a3: 8,
    a4: 4,
    a5: 7,
    a6: null,
    a7: null,
    a8: null
  };
  colum1:Colum1 ={
    b0: 3,
    b1: null,
    b2: 9,
    b3: null,
    b4: null,
    b5: null,
    b6: 6,
    b7: null,
    b8: null
  };
  colum2:Colum2 ={
    c0: null,
    c1: null,
    c2: 8,
    c3: null,
    c4: null,
    c5: null,
    c6: null,
    c7: null,
    c8: null
  };
  colum3:Colum3 ={
    d0: null,
    d1: 1,
    d2: null,
    d3: null,
    d4: 8,
    d5: null,
    d6: null,
    d7: 4,
    d8: null
  };
  colum4:Colum4 ={
    e0: 7,
    e1: 9,
    e2: null,
    e3: 6,
    e4: null,
    e5: 2,
    e6: null,
    e7: 1,
    e8: 8
  };
  colum5:Colum5 ={
    f0: null,
    f1: 5,
    f2: null,
    f3: null,
    f4: 3,
    f5: null,
    f6: null,
    f7: 9,
    f8: null
  };
  colum6:Colum6 ={
    g0: null,
    g1: null,
    g2: null,
    g3: null,
    g4: null,
    g5: null,
    g6: 2,
    g7: null,
    g8: null
  };
  colum7:Colum7 ={
    h0: null,
    h1: null,
    h2: 6,
    h3: null,
    h4: null,
    h5: null,
    h6: 8,
    h7: null,
    h8: 7
  };
  colum8:Colum8 ={
    i0: null,
    i1: null,
    i2: null,
    i3: 3,
    i4: 1,
    i5: 6,
    i6: null,
    i7: 5,
    i8: 9
  };
  name:Name = {
    name: null
  }
  constructor(private boardService: BoardService, private httpClient: HttpClient) { 
    this.boardService.get().subscribe((data:Board[])=>{
      this.boards =data;
    }, (error)=>{
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

  saveBoard(){
    this.boardService.save(this.colum0,this.colum1,this.colum2,this.colum3,this.colum4,
      this.colum5,this.colum6,this.colum7,this.colum8,this.name).pipe(map((response: any) => response)).
      subscribe(data =>{
        if (data.status_code == 200) {
          alert(data.message);
        }else{
          alert(data.message);
        }
      });
  }

}
