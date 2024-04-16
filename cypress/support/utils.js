// support/utils.js

// Métodos de preenchimento

// Preenche o campo de nome com o valor fornecido
export const preencherNome = (nome) => {
    cy.get('[data-cy="input-signup-personal-data-firstName"]').type(nome);
};

// Preenche o campo de sobrenome com o valor fornecido
export const preencherSobrenome = (sobrenome) => {
    cy.get('[data-cy="input-signup-personal-data-lastName"]').type(sobrenome);
};

// Preenche o campo de data de nascimento com o valor fornecido
export const preencherDataNascimento = (data) => {
    cy.get('[data-cy="input-signup-personal-data-birthDate"]').type(data);
};

// Preenche o campo de CPF com o valor fornecido
export const preencherCPF = (cpf) => {
    cy.get('[data-cy="input-signup-personal-data-cpf"]').type(cpf);
};

// Preenche o campo de e-mail com o valor fornecido
export const preencherEmail = (email) => {
    cy.get('[data-cy="input-signup-personal-data-email"]').type(email);
};

// Preenche o campo de confirmação de e-mail com o valor fornecido
export const preencherConfirmacaoEmail = (email) => {
    cy.get('[data-cy="input-signup-personal-data-email-confirm"]').type(email);
};

// Preenche o campo de senha com o valor fornecido
export const preencherSenha = (senha) => {
    cy.get('[data-cy="input-signup-personal-data-password"]').type(senha);
};

// Preenche o campo de confirmação de senha com o valor fornecido
export const preencherConfirmacaoSenha = (senha) => {
    cy.get('[data-cy="input-signup-personal-data-password-confirm"]').type(senha);
};

// Preenche o campo de CEP com o valor fornecido e em seguida remove o foco do campo
export const preencherCEP = (cep) => {
    cy.get('[data-cy="input-signup-address-cep"]').type(cep).blur();
};

// Preenche o campo de número residencial com o valor fornecido
export const preencherNumeroResidencial = (numero) => {
    cy.get('[data-cy="input-signup-address-number"]').type(numero);
};

// Preenche o campo de complemento com o valor fornecido
export const preencherComplemento = (complemento) => {
    cy.get('[data-cy="input-signup-address-complement"]').type(complemento);
};

// Métodos de clique

// Clica no botão de fazer inscrição
export const clicarFazerInscricao = () => {
    cy.get('[data-cy="button-btn-enroll"]').click();
};

// Clica no botão de avançar na tela de dados pessoais e de acesso
export const clicarProximoDadosPessoais = () => {
    cy.get('[data-cy="button-signup_submit_button_1"]').click();
};

// Clica no botão de avançar na tela de endereço
export const clicarProximoEndereco = () => {
    cy.get('[data-cy="button-signup_submit_button_3"]').click();
};

// Clica na opção de proficiência especificada
export const selecionarProficiencia = (proficiencia) => {
    cy.contains('span', 'Selecione a proficiência...').click();
    cy.contains('span', proficiencia).click();
};

// Marca a opção de concordância com os termos de política e privacidade
export const concordarTermos = () => {
    cy.get('[data-cy="input-signup-personal-data-lgpd"]').check();
};


// Aguarda o carregamento de preenchimento automatico de Estado, Cidade, Bairro e Endere
export const aguardarCarregamento = () => {
    cy.get('.animate-spin').should('be.visible');
    cy.get('.animate-spin').should('not.be.visible');
}