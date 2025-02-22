import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-criar-pensamento',
  imports: [
    FormsModule],
  standalone: true, // Indica que é um Standalone Component
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

    pensamento = {
      id: '1',
      conteudo: 'Aprendendo Angular',
      autoria: 'Dev',
      modelo: ''
    }

    criarPensamento(){
      alert("Pensamento criado com sucesso!");
    }
}
