import { Component, signal } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  name = signal('Davi');
  cont = signal(0);
  value = false;
  dogUrl =
    'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  lista = ['A', 'B', 'C', 'D', 'E'];

  changeName() {
    this.cont.update((cont) => cont + 1);
    this.name.set('Testando alteracao' + this.cont());
  }

  changeValue() {
    this.value = !this.value;
  }

  constructor(private helloWorldService: HelloWorldService) {
    this.helloWorldService.getHelloWorld().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }
}