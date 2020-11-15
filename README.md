<h2 align="center">
  Desafio Trainee Biopark
</h2>

## Configurações Iniciais
1. Para instalar as dependências necessárias do projeto, basta acessar a pasta backend e executar o comando: 

```sh
yarn
```

2. Verificar configurações do banco de dados no arquivo ormconfig.json, se compatível com o computador local.

3. Após a verificação das informações no arquivo, executar comando referente as migrations ao banco de dados:

```sh
yarn typeorm migration:run
```

4. Executar servidor em localhost, executar o comando:

```sh
yarn dev:server
```

## Instruções

* Endereço local de acesso a API: http://localhost:3333
* As rotas disponíveis são:
    * POST (http://localhost:3333/appointments) - Criação do agendamento.
    * GET (http://localhost:3333/appointments/SubstituirPeloIdDoAgendamento) - Verifica o status do agendamento.
    * DELETE (http://localhost:3333/appointments/SubstituirPeloIdDoAgendamento) - Realiza a exclusão do agendamento.
