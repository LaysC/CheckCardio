import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  nome: string = '';
  email: string = '';
  age: number | null = null;
  sex: string = '';
  cp: string = '';
  trestbps: number | null = null;
  chol: number | null = null;
  fbs: string = '';
  restecg: string = '';
  thalach: number | null = null;
  exang: string = '';
  oldpeak: number | null = null;
  slope: string = '';
  ca: string = '';
  thal: string = '';

  resposta: string = '';

  constructor(private http: HttpClient) {}

  enviarDados() {
    const url = `https://da92677f-f83c-4399-9c31-b3de5287f6af-00-kvr0kwlloun6.riker.replit.dev/?nome=${encodeURIComponent(this.nome)}&email=${encodeURIComponent(this.email)}&age=${this.age}&sex=${encodeURIComponent(this.sex)}&cp=${encodeURIComponent(this.cp)}&trestbps=${this.trestbps}&chol=${this.chol}&fbs=${encodeURIComponent(this.fbs)}&restecg=${encodeURIComponent(this.restecg)}&thalach=${this.thalach}&exang=${encodeURIComponent(this.exang)}&oldpeak=${this.oldpeak}&slope=${encodeURIComponent(this.slope)}&ca=${encodeURIComponent(this.ca)}&thal=${encodeURIComponent(this.thal)}`;

    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (res) => this.resposta = res,
      error: () => this.resposta = 'Erro ao enviar os dados.'
    });
  }
}
