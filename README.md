# 📱 Catálogo Interativo Mobile

Aplicativo mobile desenvolvido para a disciplina de Mobile Development,
utilizando React Native com Expo.

O projeto apresenta um catálogo de produtos de uma loja online,
permitindo autenticação, navegação por categorias e visualização dos
detalhes de cada produto.

## 🎯 Objetivo

Desenvolver uma aplicação mobile responsiva e funcional para apresentação
de produtos, utilizando uma API REST real e boas práticas de organização
em React Native.

## 🚀 Funcionalidades

- Tela de login com validação de campos
- Armazenamento temporário dos dados do usuário
- Catálogo de produtos
- Categorias Masculino e Feminino
- Consumo de API REST
- Exibição de imagens dos produtos
- Exibição de preço em Real brasileiro (R$)
- Exibição de descontos
- Tela de detalhes do produto
- Navegação utilizando o ID do produto
- Logout
- Tratamento de carregamento dos produtos

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- Axios
- Redux Toolkit
- React Navigation
- DummyJSON API

## 🌐 API utilizada

A aplicação utiliza a API pública DummyJSON para obtenção dos produtos.

https://dummyjson.com/

## 📁 Estrutura do projeto

```text
mobile_catalogo_entrega/
│
├── src/
│   ├── components/
│   │   └── ProductCard.js
│   │
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── ProductsScreen.js
│   │   └── ProductDetailsScreen.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   └── store/
│       └── store.js
│
├── App.js
├── app.json
├── babel.config.js
├── package.json
├── .gitignore


## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js instalado
- Expo instalado
- Aplicativo Expo Go no celular

### Instalação

No terminal, dentro da pasta do projeto:

```bash
npm install

npx expo start

Microsoft Windows [versão 10.0.19045.6466]
(c) Microsoft Corporation. Todos os direitos reservados.

C:\Users\Borges\Desktop\mobile_catalogo_entrega>npx expo start
Starting project at C:\Users\Borges\Desktop\mobile_catalogo_entrega
Starting Metro Bundler
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ █▀▀ ████  █ ▄▄▄▄▄ █
█ █   █ █▄▀██▀█▄  █ █   █ █
█ █▄▄▄█ █ ▄ █ ▄█ ██ █▄▄▄█ █
█▄▄▄▄▄▄▄█ █ ▀▄█ █▄█▄▄▄▄▄▄▄█
█▄▄▀ ▀█▄ █▀█  ▄▀▄▄▀  ▄▀▄▄▀█
███▀▀█▄▄█ ▀▀  ▀ ▀█▄▀ ▀▀█▄▄█
█▄▄▄█ █▄▀ ▀▄ █  █▀█ ▄█ ██▀█
█▄▀▄▄▄ ▄▄█ █ █▀█▀█  ▄▄▀██▄█
█▄▄▄▄█▄▄█▀█ █ ▀▄█ ▄▄▄ █ ▄ █
█ ▄▄▄▄▄ █▄▀▄▄ █▄  █▄█  ▀ ▄█
█ █   █ █▀  ▀▄▄▀▀  ▄▄ █▀▄██
█ █▄▄▄█ █▀▀ ██    ▄█▄  ▄█▄█
█▄▄▄▄▄▄▄█▄▄▄██▄▄█▄▄▄█▄▄█▄▄█

› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Using Expo Go
› Press s │ switch to development build

› Press a │ open Android
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor

› Press ? │ show all commands
 
Logs for your project will appear below. Press Ctrl+C to exit.
Android Bundled 1574ms node_modules\expo\AppEntry.js (949 modules)
