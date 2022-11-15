Feature: Testando API star wars

  Scenario: Testando retorno people/1/
    Given "https://swapi.dev/people/1/"
    When method get
    Then status 200

  Scenario: Testando retorno people/1/ com dados inválidos
    Given "https://swapi.dev/people/1/1234"
    When method get
    Then status 404