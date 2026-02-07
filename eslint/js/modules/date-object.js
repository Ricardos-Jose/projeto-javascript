export default class Funcionamento {
  constructor(diasSemana, activeClass) {
    this.funcionamento = document.querySelector(diasSemana);
    if (activeClass === undefined) this.activeClass = 'aberto';
    else this.activeClass = this.activeClass;
  }
  dadosFuncionamento() {
    this.funcionamentoDias = this.funcionamento.dataset.semana
      .split(',')
      .map(Number);
    this.funcionamentoHora = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }
  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    this.diaAberta = this.funcionamentoDias.indexOf(this.diaAgora) !== -1;
    this.horarioAberto =
      this.horaAgora >= this.funcionamentoHora[0] &&
      this.horaAgora < this.funcionamentoHora[1];
    return this.diaAberta && this.horarioAberto;
  }

  verifyClass() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    } else {
      this.funcionamento.classList.remove(this.activeClass);
    }
  }
  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFuncionamento();
      this.verifyClass();
    }
    return this;
  }
}
