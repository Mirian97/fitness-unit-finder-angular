<img src="./public/assets/images/logo.jpg" alt="Logo" width="100%" />

# 🏋️‍♂️Desafio Frontend - Smart Fit

Neste repositório, compartilho minha solução para o desafio da SmartFit, onde utilizei minhas habilidades em Angular para desenvolver uma aplicação funcional e otimizada.

## 📒 Sobre o desafio

A Smart Fit, atuante no segmento de fitness, enfrentou diversas mudanças durante a pandemia. Como resposta, surgiu a necessidade de desenvolver uma página para consultar o status das unidades (abertas ou fechadas).

Neste desafio, foram implementadas as seguintes funcionalidades, conforme as regras de negócio estabelecidas:

### Funcionalidades

- Carregamento das unidades a partir do arquivo JSON [locations.json](https://test-frontend-developer.s3.amazonaws.com/data/locations.json) via requisição `GET`.
- Consulta de todas as unidades disponíveis. <br/>
- Pesquisa de unidades com filtros personalizados.
- Exibição da previsão do número total de resultados.
- Listagem detalhada das unidades encontradas após a busca.

### Regras de negócio

- Filtra unidades com base no status de abertura (abertas ou fechadas).
- Aplica filtros conforme o horário de funcionamento.
- Exibe a mensagem "Nenhuma unidade encontrada" quando não há resultados disponíveis.
- Valida e apresenta os ícones corretos conforme o status de cada unidade.

## 🌟 Layout

O layout da aplicação foi desenvolvido com base nos materiais fornecidos, que incluem designs para dispositivos móveis e desktop, além de diretrizes para cores, imagens e fontes. A fidelidade ao layout original foi preservada, garantindo que a aplicação seja responsiva e ofereça uma experiência otimizada em dispositivos móveis, tablets e desktops.

## ⚒️ Como Executar

Para executar a aplicação localmente, siga os passos abaixo:

1. Clone este repositório:

```bash
  git clone https://github.com/Mirian97/fitness-unit-finder-angular.git
  cd fitness-unit-finder-angular

```

2. Instale as dependências

```bash
  npm install
```

3. Inicie a aplicação

```bash
  npm start
```
