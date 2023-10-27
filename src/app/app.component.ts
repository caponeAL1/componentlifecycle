import { Component, SimpleChanges } from '@angular/core';
import {  
  OnChanges,  
  OnInit,  
  DoCheck,  
  AfterContentInit,  
  AfterContentChecked,  
  AfterViewInit,  
  AfterViewChecked,  
  OnDestroy  
} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewChecked,AfterViewInit {
  firstName:string='Unknown';
  lastName:string='Unknown';
  ngAfterViewInit(): void {
    console.log('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log('Method not implemented.');
  }
  ngAfterContentChecked(): void {
    console.log('Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('Component destroyed at'+ new Date());
  }
  ngOnInit(): void {
    var today=new Date();
    console.log('Component getting initialized at'+today);
  }
  title = 'componentlifecycle';
}
