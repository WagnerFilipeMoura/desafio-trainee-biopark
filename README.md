<h1 align="center">
  Desafio Trainee Biopark
</h1>

## Softwares Necessários
* Node - Versão > 10
* Postgre

## Configurações Iniciais
1. Para instalar as dependências necessárias do projeto, basta acessar a pasta backend e executar o comando: 

```sh
yarn
```

2. Verificar configurações do banco de dados no arquivo ormconfig.json, se compatível com as configurações do banco de dados local.

3. Realizar a criação manual do banco de dados(Postgre) com o nome: (Ou nome do banco de dados informado no passo anterior no arquivo ormconfig.json) 

```sh
trainee_biopark
```

4. Após a verificação das informações no arquivo e criação do banco de dados, executar comando referente as migrations(tabelas e regras) do banco de dados:

```sh
yarn typeorm migration:run
```

5. Iniciar o servidor em localhost, executar o comando:

```sh
yarn dev:server
```

## Instruções

* Endereço local de acesso a API: http://localhost:3333
* As rotas disponíveis são:
    * POST (http://localhost:3333/appointments) - Criação do agendamento.
    * GET (http://localhost:3333/appointments/SubstituirPeloIdDoAgendamento) - Verifica o status do agendamento.
    * DELETE (http://localhost:3333/appointments/SubstituirPeloIdDoAgendamento) - Realiza a exclusão do agendamento.

* Acesso ao software com as respectivas rotas configuradas:

<div align="center">
  <a href="https://insomnia.rest/run/?label=Desafio%20Trainee%20Biopark&uri=https%3A%2F%2Fgithub.com%2FWagnerFilipeMoura%2Fdesafio-trainee-biopark%2Fblob%2Fmain%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</div>

## Testes
1. Para realizar a execução de testes, executar o comando: 

```sh
yarn jest
```