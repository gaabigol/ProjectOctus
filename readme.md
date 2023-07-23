# Project Octus

Este é um projeto feito com React, TypeScript e Vite. A seguir, vamos orientá-lo sobre como instalar as dependências e iniciar o projeto.

# Pré-requisitos

Certifique-se de ter a versão mais recente do Node.js instalada em sua máquina. Se não, você pode baixar a partir deste link.

# Instalação
Clone o repositório em sua máquina local usando git.

# bash

git clone https://link-do-seu-projeto.git
cd projectoctus
Instalação de dependências
Depois de clonar o projeto, navegue até a pasta do projeto e instale as dependências usando o comando npm.

# bash

## npm install

Este comando instalará todas as dependências necessárias listadas em package.json, incluindo as que estão na seção "dependencies" e "devDependencies".

## Scripts disponíveis
Depois de instaladas as dependências, você pode executar os seguintes scripts.

## npm run dev
Inicia o servidor de desenvolvimento Vite.

## npm run build
Gera a versão de produção do projeto, previamente verificando erros de TypeScript com o tsc.

## npm run lint
Executa o linter no código-fonte do projeto.

## npm run preview
Inicia o servidor de preview Vite para visualização de produção.

## Configuração de compilação
O projeto é configurado para usar o compilador TypeScript com opções definidas em tsconfig.json. A configuração inclui opções para lidar com recursos JavaScript mais recentes, lidar com módulos ESNext e aprimorar a segurança com a verificação estrita.

## Conclusão
Agora você está pronto para começar a trabalhar no projeto! Lembre-se de executar npm run dev para iniciar o servidor de desenvolvimento.