# Exemplo Scroll solicitando mais itens

Analisar os arquivos:
- src/pages/home/home.ts
- src/pages/home/home.html
- src/providers/conteudo/conteudo.ts



---
### Provider (conteudo.ts)
Será preciso criar um provider que possua um método que retorne o total de itens buscados

```typescript
/**
   * Retorna quantos elementos tem no seu banco
   */
  getTotal(): number {
    return this.conteudos.length;
  }

```

Como também um método que retorne os itens em partes (Semelhante a uma busca no banco por LIMIT e OFFSET)

```typescript
 /**
   * Crie um método que pode buscar do seu webservice ou banco os valores limitados por quantidade e posição inicial 
   * @param limite (Retorna quantos valores deseja) 
   * @param offset (Define a posição inicial)
   */
  getConteudos(limite: number, offset: number = 0) {
    let fim = limite + offset;
    return this.conteudos.slice(offset, fim);
  }

```

### Page (home.ts)

Na sua crie um atributo que irá receber a lista de itens;  um atributo que cheque se ainda existe itens a buscar; um atributo que marque quantos itens já buscou, para saber qual deve ser o começo da próxima busca:

```typescript
  private conteudos: any[] = [];
  private quantidade: number = 4; //De quantos em quantos elementos retornar
  private comecando = 0; //Quantos já buscou
  private possuiMais = true; //Checa se ainda tem itens para exibir o botão 
```

Crie também um método para buscar mais elementos:

```typescript
  buscarMais() {
    //Solicite ao provider buscar os novos itens com um limite de resultados e o junte (concatene) com os que já buscou antes
    this.conteudos = this.conteudos.concat(this.conteudoProvider.getConteudos(this.quantidade, this.comecando));
    //Cada vez que buscar, atualize a variavel comecando para ela começar a buscar da próxima vez pelos próximos;
    this.comecando += this.quantidade;
    //Cheque se ainda tem mais itens
    this.possuiMais  = (this.conteudoProvider.getTotal() > this.comecando);
  }
```


### HTML (home.html)

Exiba a lista de itens e o botão para buscar mais, casso ainda tenha conteúdo para buscar:

```html

  <ion-list>
    <ion-item *ngFor="let conteudo of conteudos">
      <p>{{conteudo.texto}}</p>
    </ion-item>
  </ion-list>
  
  <button ion-button full [hidden]="!possuiMais" (click)="buscarMais()">BuscarMais</button>
```


----------
## Baixando o exemplo
Para visualizar o exemplo, tenha o git instalado e execute os comandos abaixo no terminal/cmd:

```cmd
git clone https://github.com/CarlosWGama/ionic-scroll-exemplo.git ./exemplo-scroll
cd exemplo-scroll
npm install
ionic serve
```
