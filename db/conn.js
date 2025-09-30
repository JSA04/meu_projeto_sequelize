const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize('nodesequelize', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log,
  define: {
    timestamps: true, 
    underscored: false, 
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000, 
    idle: 10000,
  },
});

// Função para testar a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com Postgres estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
  }
}

testConnection();

module.exports = sequelize;