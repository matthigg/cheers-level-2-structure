import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('/cockails').subscribe(response => {
      console.log('--- response:', response)
    })
  }

  onFilter(value?: string): void {

    console.log('--- value:', value)
    
  }

}
