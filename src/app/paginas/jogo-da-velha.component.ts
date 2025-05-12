import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../componentes/modal.componente';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
})

export class JogoDaVelhaComponent {
  jogador1 = '';
  jogador2 = '';
  tamanho = 0; // Deixei o tamanho fixo, mas poderia deixar dinamico, recebendo do input.

  jogoIniciado = false;
  tabuleiro: string[] = [];
  jogadorAtual = 'O';
  lado = 3;
  vencedor: string | null = null;

  /* 1. Calcula o lado do tabuleiro com base no tamanho (assume quadrado).
   * 2. Inicializa o tabuleiro com casas vazias.
   * 3. Define o jogador atual como 'O'.
   * 4. Zera o vencedor.
   * 5. Salva os dados dos jogadores e tamanho no localStorage.
   */

  iniciarJogo() {

    debugger;
    this.lado = Math.sqrt(this.tamanho);
    this.tabuleiro = Array(this.tamanho).fill('');
    this.jogoIniciado = true;
    this.jogadorAtual = 'O';
    this.vencedor = null;

    localStorage.setItem('jogador1', this.jogador1);
    localStorage.setItem('jogador2', this.jogador2);
    localStorage.setItem('tamanho', this.tamanho.toString());
  }

  /* 1. Verifica se a casa já está ocupada ou se o jogo já acabou.
   * 2. Marca a casa com o símbolo do jogador atual.
   * 3. Verifica se o jogador venceu.
   *    - Se sim, define o vencedor e exibe alerta.
   * 4. Se todas as casas estiverem preenchidas, declara empate.
   * 5. Caso contrário, troca para o outro jogador.
   */
  jogar(index: number) {
    debugger;
    if (this.tabuleiro[index] || this.vencedor) return;

    this.tabuleiro[index] = this.jogadorAtual;

    if (this.verificarVencedor()) {
      this.vencedor = this.jogadorAtual === 'O' ? this.jogador1 : this.jogador2;
      alert(`Vitória de ${this.vencedor}!`);
    } else if (this.tabuleiro.every(cell => cell !== '')) {
      this.vencedor = 'Empate';
      alert('Empate!');
    } else {
      this.jogadorAtual = this.jogadorAtual === 'O' ? 'X' : 'O';
    }
  }

  /* 1. Cria arrays com todas as linhas possíveis de vitória:
   *    - Horizontais
   *    - Verticais
   *    - Diagonal principal
   *    - Diagonal secundária
   * 2. Verifica se alguma dessas linhas contém só símbolos do jogador atual.
   * 3. Retorna true se encontrou linha vencedora, false caso contrário.
   */
  verificarVencedor(): boolean {
    const linhas = [];

    debugger;

    for (let i = 0; i < this.tamanho; i += this.lado) {
      linhas.push(this.tabuleiro.slice(i, i + this.lado));
    }

    for (let i = 0; i < this.lado; i++) {
      linhas.push(this.tabuleiro.filter((_, index) => index % this.lado === i));
    }

    linhas.push(this.tabuleiro.filter((_, index) => index % (this.lado + 1) === 0));

    linhas.push(this.tabuleiro.filter((_, index) => index % (this.lado - 1) === 0 && index !== 0 && index !== this.tamanho - 1));

    return linhas.some(linha => linha.every(cell => cell === this.jogadorAtual));
  }

  /* reiniciar()
   * Aqui faz o seguinte:
   * 1. Reseta o estado do jogo para permitir nova partida.
   * 2. Esvazia o tabuleiro.
   * 3. Zera o vencedor.
   */
  reiniciar() {
    this.jogoIniciado = false;
    this.tabuleiro = [];
    this.vencedor = null;
  }
}
