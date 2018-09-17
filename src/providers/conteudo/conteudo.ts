import { Injectable } from '@angular/core';

@Injectable()
export class ConteudoProvider {

  private conteudos = [
    {texto: "Opção 1"},
    {texto: "Opção 2"},
    {texto: "Opção 3"},
    {texto: "Opção 4"},
    {texto: "Opção 5"},
    {texto: "Opção 6"},
    {texto: "Opção 7"},
    {texto: "Opção 8"},
    {texto: "Opção 9"},
    {texto: "Opção 10"},
    {texto: "Opção 11"},
    {texto: "Opção 12"},
    {texto: "Opção 13"},
    {texto: "Opção 14"},
    {texto: "Opção 15"}
  ]

  /**
   * Crie um método que pode buscar do seu webservice ou banco os valores limitados por quantidade e posição inicial 
   * @param limite (Retorna quantos valores deseja) 
   * @param offset (Define a posição inicial)
   */
  getConteudos(limite: number, offset: number = 0) {
    let fim = limite + offset;
    return this.conteudos.slice(offset, fim);
  }

  /**
   * Retorna quantos elementos tem no seu banco
   */
  getTotal(): number {
    return this.conteudos.length;
  }

  constructor() {
    console.log('Hello ConteudoProvider Provider');
  }

}
