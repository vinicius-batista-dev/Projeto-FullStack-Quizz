# Quizz

<p> Este é um simples projeto que tem o principal objetivo de perguntas e respostas. </p>

## Clona o projeto na sua maquina

    git clone https://github.com/vinicius-batista-dev/perguntas-respostas.git

## Logo em seguida instala os pacotes

    npm install

## Depois de instalar os pacotes é so iniciar

    node index.js
    
## Injecao no banco de dados 
### Essa é uma funcao que vai criar o nome da tabela juntamente com as colunas título, e a descrição

    const Pergunta = conn.define('pergunta', {
    titulo:{
        type: sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelize.TEXT,
        allowNull: false
        }
    });


