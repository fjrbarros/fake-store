# Fake Store

## Aplicação que simula uma loja on-line :desktop_computer:

### Algumas tecnologias utilizadas:
 - ReactJs
   - redux-toolkit, react-redux, react-router.
   - TypeScript
   - Axios.
   - Jest, react-testing-library
 - [Material.ui](https://material-ui.com/) (para components)
 
 A aplicação pode ser acessada pelo link: https://fake-store-demo.herokuapp.com/

### Esta aplicação possui apenas 4 páginas:
  - Home (path: /)

  ![image](https://user-images.githubusercontent.com/44577035/170900429-ed2fd7be-9ae8-4d77-a284-25997ca2877a.png)
  - Shop (path: /shop)

  ![image](https://user-images.githubusercontent.com/44577035/170900637-930a01f8-73b9-4a61-8dac-aafcb412a611.png)
  
  - Cart (path: /cart)

  ![image](https://user-images.githubusercontent.com/44577035/170901312-b57188d1-6453-4f08-a54c-5b0c86cdc14b.png)

  - Not found (path: /*)

  ![image](https://user-images.githubusercontent.com/44577035/170901347-87f84461-34f1-4046-8ee7-e478fcf518e3.png)


### Passos para utilizar esta aplicação:

ps: você precisa ter o [Git](https://git-scm.com/) instalado em sua máquina.

1. Fazer o clone do repositorio. :octocat:	
    > git clone https&#xfeff;:https://github.com/fjrbarros/fake-store.git

    este comando vai fazer um clone do repositorio para uma pasta com o nome `fake-store`,

    para acessar usar o comando `cd meu_tcc_front`

2. Executar a aplicação. :arrow_forward:	 

   Para executar a aplicação pode ser utilizado duas formas, usando npm ou yarn.
    
   Você pode instalar o [Node](https://nodejs.org/en/), o npm ja vem junto.
   
   uma vez na raiz do projeto e com npm ou yarn instalado.
   
   execute o comando `yarn install` ou `npm run install`, isso vai ler e baixar todos pacotes que tem no arquivo package.json.
   
   execute o comando `yarn start` ou `npm run start`, isso vai iniciar o projeto, apos isso, acesse a url http://localhost:3000/
   
3. Testes (em desenvolvimento).
   - Ao executar o comando `yarn test` todos os testes da aplicação serão executados.
   - Ao executar o comando `yarn coverage` será executado os testes de cobertura de toda aplicação.
   
Divirta-se :grinning:
