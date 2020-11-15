<h3 align="center">
  Desafio Trainee Biopark
</h3>

## Configurações Iniciais
1. Para instalar as dependencias necessárias do projeto, basta executar o comando: 

```sh
yarn
```

2. Verificar configurações do banco de dados no arquivo ormconfig.json, se compatível com o computador local.

3. Após a verificação das informações no arquivo, executar comando referente as migrations ao banco de dados:

```sh
yarn typeorm migration:run
```

## Instruções

* Endereço local de acesso a API: http://localhost:3333
* As rotas disponíveis são:
    * POST (http://localhost:3333/appointments) - Criação do agendamento.
    * GET (http://localhost:3333/appointments/substituir pelo id do agendamento) - Verifica o status do agendamento.
    * DELETE (http://localhost:3333/appointments/substituir pelo id do agendamento) - Realiza a exclusão do agendamento.
