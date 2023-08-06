import { 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent implements  OnChanges, OnInit, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

@Input() valorInicial:number = 10;

  constructor(
) { }

  ngOnInit(): void {
    console.log('onInit')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
