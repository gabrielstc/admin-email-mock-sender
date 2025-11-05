// Índice de todos os templates de e-mail mockados
import accessKeyTemplate from './vtexid_check_email'
import orderConfirmationTemplate from './vtexcommerce_new_order'

export interface EmailTemplate {
    id: string
    name: string
    friendlyName: string
    description: string
    category: string
    generateMockData: () => any
    generateSubject: (data: any) => string
    getRecipient: (data: any) => string
}

// Lista de todos os templates disponíveis
export const emailTemplates: EmailTemplate[] = [
    accessKeyTemplate,
    orderConfirmationTemplate,
    // Adicione novos templates aqui conforme forem criados
]

// Função para buscar template por ID
export const getTemplateById = (templateId: string): EmailTemplate | undefined => {
    return emailTemplates.find(template => template.id === templateId)
}

// Função para listar templates por categoria
export const getTemplatesByCategory = (category: string): EmailTemplate[] => {
    return emailTemplates.filter(template => template.category === category)
}

// Categorias disponíveis
export const templateCategories = [
    'Authentication',
    'Commerce',
    'Order',
    'Payment',
    'Shipping',
    'Account',
    'Marketing',
    'System'
]

// Função para gerar dados mockados para um template específico
export const generateMockDataForTemplate = (templateId: string): any => {
    const template = getTemplateById(templateId)
    if (!template) {
        throw new Error(`Template com ID "${templateId}" não encontrado`)
    }
    return template.generateMockData()
}

// Função para gerar subject baseado no template e dados
export const generateSubjectForTemplate = (templateId: string, data: any): string => {
    const template = getTemplateById(templateId)
    if (!template) {
        throw new Error(`Template com ID "${templateId}" não encontrado`)
    }
    return template.generateSubject(data)
}

// Função para obter recipient baseado no template e dados
export const getRecipientForTemplate = (templateId: string, data: any): string => {
    const template = getTemplateById(templateId)
    if (!template) {
        throw new Error(`Template com ID "${templateId}" não encontrado`)
    }
    return template.getRecipient(data)
}