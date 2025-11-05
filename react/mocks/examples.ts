// Exemplo de como usar os templates mockados
import { getCompleteTemplateData, emailTemplates } from './index'

// Exemplo 1: Listar todos os templates
console.log('Templates disponíveis:', emailTemplates.map(t => t.friendlyName))

// Exemplo 2: Gerar dados para um template específico
try {
    const accessKeyData = getCompleteTemplateData('vtexid_check_email')
    console.log('Dados do Access Key:', {
        templateId: accessKeyData.templateId,
        subject: accessKeyData.subject,
        recipient: accessKeyData.recipient,
        // mockData contém todos os dados mockados
    })
} catch (error) {
    console.error('Erro ao gerar dados:', (error as any).message)
}

// Exemplo 3: Dados mockados de exemplo para visualização
const exampleData = {
    "to": [{ "name": "João Silva", "email": "joao.silva@empresa.com" }],
    "aditionalData": {
        "accessKey": "A7X9K2",
        "locale": "pt-BR",
        "userAgent": "Chrome, Windows"
    },
    "_accountInfo": {
        "MainAccountName": "minhaempresa",
        "AccountName": "minhaempresa",
        "CompanyName": "Minha Empresa LTDA",
        "TradingName": "Minha Empresa"
        // ... outros campos
    }
}

export { exampleData }