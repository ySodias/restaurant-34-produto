Feature: Criando produto

  Scenario: Criação de pagamento bem sucedido
    Given Eu tenho um produto válido
    When Eu submeto os dados para criar o produto
    Then o produto deve ser criado com sucesso

#   Scenario: Failed payment due to insufficient funds
#     Given I have a payment request with insufficient funds
#     When I submit the payment
#     Then the payment should be declined
