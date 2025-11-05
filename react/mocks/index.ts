// Mock data manager para templates de e-mail
export * from './templates'

// Re-exporta funções úteis para uso direto
export {
    emailTemplates,
    getTemplateById,
    getTemplatesByCategory,
    templateCategories,
    generateMockDataForTemplate,
    generateSubjectForTemplate,
    getRecipientForTemplate
} from './templates'

// Função de conveniência para obter dados completos de um template
import {
    generateMockDataForTemplate,
    generateSubjectForTemplate,
    getRecipientForTemplate
} from './templates'

export const getCompleteTemplateData = (templateId: string) => {
    const mockData = generateMockDataForTemplate(templateId)
    const subject = generateSubjectForTemplate(templateId, mockData)
    const recipient = getRecipientForTemplate(templateId, mockData)

    return {
        templateId,
        mockData,
        subject,
        recipient
    }
}

// Tipos exportados para TypeScript
export type { EmailTemplate } from './templates'