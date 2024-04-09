# Desafio Front-End Angular - Aplicativo de Dispositivos IoT

Este projeto é parte do processo seletivo para a vaga de Desenvolvedor Front-End Angular no Centro de Pesquisas Avançadas Wernher von Braun.

## Sobre o Projeto

O projeto consiste em desenvolver uma interface de usuário em Angular para uma aplicação de cadastro e compartilhamento de acesso à dispositivos de IoT. Os usuários podem autenticar-se na aplicação, cadastrar novos dispositivos, visualizar uma lista de dispositivos cadastrados, editar informações dos dispositivos e excluir dispositivos da plataforma.

## Instruções de Uso

### Pré-requisitos

- Node.js e npm instalados
- Angular CLI instalado (`npm install -g @angular/cli`)

### Instalação

1. Clone este repositório: `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. Navegue até o diretório do projeto: `cd seu-repositorio`
3. Instale as dependências: `npm install`

### Execução

1. Inicie a aplicação: `ng serve`
2. Acesse a aplicação em: `http://localhost:4200`

### Uso

- Faça o login na aplicação utilizando suas credenciais.
- Clique em "Criar" para adicionar um novo dispositivo.
- Visualize a lista de dispositivos cadastrados na página inicial.
- Clique em "Editar" para modificar as informações de um dispositivo.
- Clique em "Excluir" para remover um dispositivo.

## Decisões de Design e Implementação

### Design

- A interface do usuário foi projetada seguindo os princípios de usabilidade e design limpo.
- A ideia da interface era que fosse a mais simples possível, a fim de aproveitar melhor o tempo de desenvolvimento e garantir uma melhor qualidade de código.
- Foi utilizado um layout simples para garantir uma boa experiência de usuário em diferentes dispositivos.

### Implementação

- Foi utilizada a arquitetura de componentes do Angular para modularizar o código.
- Foram implementadas medidas de segurança para proteger os dados dos usuários, assim como o Guard de autenticação que não permite que determinadas telas sejam acessadas sem que o usuário esteja devidamente logado.

## Testes Unitários

Foram adicionados testes unitários para verificar o comportamento dos componentes e serviços da aplicação em uma escala simples. Mais testes podem ser adicionados para cobrir mais cenários e garantir a qualidade do código.

## Melhorias Futuras

- Extender a cobertura dos testes no projeto.
- Componentizar ainda mais os elementos.
- Adicionar funcionalidades avançadas, como filtros de pesquisa e ordenação na lista de dispositivos.
- Melhorar a interface de usuário com animações e microinterações.
- Adicionar um fluxo mais direto no cadastro e edição de um dispositivo.
- Adicionar uma função que trate as mensagens de erro de forma mais adequada e padronizada.

# Ajuda sobre o repositório.

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) na versão 13.2.5.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar algum dos arquivos de origem.

## Geração de Código

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilação

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Execução de Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a [Página de Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).
