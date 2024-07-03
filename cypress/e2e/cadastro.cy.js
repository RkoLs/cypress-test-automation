import { aguardarCarregamento, clicarFazerInscricao, preencherNome, preencherSobrenome, preencherDataNascimento, preencherCPF, preencherEmail, preencherConfirmacaoEmail, preencherSenha, preencherConfirmacaoSenha, selecionarProficiencia, concordarTermos, preencherCEP, preencherNumeroResidencial, preencherComplemento, clicarProximoDadosPessoais, clicarProximoEndereco } from '../support/utils';



describe('Acessar página inicial e realizar cadastro de usuario com sucesso', () => {

    beforeEach(() => {
        // Antes de cada teste, visite a página de cadastro
        cy.visit('https://qastage.buildbox.one/18/cadastro/');
    });

    it('Realizar o cadastro com sucesso', () => {
        // Clicar fazer inscrição de cadastro
        clicarFazerInscricao();

        // Act: Preencher dados de cadastro usando métodos personalizados
        preencherNome('Beatriz Assunção');
        preencherSobrenome('Assunção');
        preencherDataNascimento('13/03/1991');
        preencherCPF('181.039.963-78');
        preencherEmail('beatriz-assuncao98@telecall.com');
        preencherConfirmacaoEmail('beatriz-assuncao98@telecall.com');
        preencherSenha('4kMQKyxIhJ');
        preencherConfirmacaoSenha('4kMQKyxIhJ');
        selecionarProficiencia('Intermediate');
        concordarTermos();

        cy.screenshot('cadastroPreenchido'); // Captura de tela antes de clicar no botão para cadastrar

        clicarProximoDadosPessoais();

        // Preencher Endereço
        preencherCEP('58400-706');

        aguardarCarregamento();

        preencherNumeroResidencial('984');
        preencherComplemento('Apt 50');

        cy.screenshot('enderecoPreenchido'); // Captura de tela antes de clicar no botão para cadastrar

        clicarProximoEndereco();
    });
});

/*describe('Acessar página inicial e realizar cadastro de usuario sem sucesso', () => {

    beforeEach(() => {
        // Antes de cada teste, visite a página de cadastro
        cy.visit('https://qastage.buildbox.one/18/cadastro/');
    });

    it('Realizar o cadastro com dados invalidos ', () => {


        // Clicar fazer inscrição de cadastro
        clicarFazerInscricao();

        // Act: Preencher campos com dados inválidos
        preencherNome('#!#$%'); // Nome caracteres especiais
        preencherSobrenome('!@$'); // Sobrenome caracteres especiais
        preencherDataNascimento('99/99/9999'); // Data de nascimento inválida
        preencherCPF('123.456.789-00'); // CPF inválido
        preencherEmail('emailinvalido@.com'); // Email inválido
        preencherConfirmacaoEmail('emailinvalido@.com'); // Confirmação de email inválida
        preencherSenha('senha1'); // Senha muito curta
        preencherConfirmacaoSenha('senha12'); // Confirmação senha diferente
        selecionarProficiencia('Intermediate'); // 
        concordarTermos();

        // Validação de mensagem de data de nascimento inválida
        cy.get(':nth-child(2) > :nth-child(1) > .form-container > .input-error').should('be.visible')
            .and('contain.text', 'Data de nascimento inválida');

        // Validação de mensagem de CPF inválido
        cy.get(':nth-child(2) > :nth-child(2) > .form-container > .input-error').should('be.visible')
            .and('contain.text', 'CPF inválido');

        // Validação de mensagem de email inválido 
        cy.get(':nth-child(3) > :nth-child(1) > .form-container > .input-error').should('be.visible')
            .and('contain.text', 'Email inválido');


        cy.screenshot('cadastroDadosInvalidos');




    });
});

describe('Acessar página inicial e realizar cadastro sem sucesso', () => {
    it('Realizar o cadastro com dados já cadastrados ', () => {


        // Act
        // Simular um cadastro sem preencher todos os campos obrigatórios

        // Assert: Adicionar asserções para verificar se o cadastro não foi realizado devido a campos obrigatórios não preenchidos
    });
});*/