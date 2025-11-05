import { LegacyEmailTemplate } from '../types'
import { emailTemplates } from '../../../mocks'

export const convertTemplatesForLegacyFormat = (templates: typeof emailTemplates): LegacyEmailTemplate[] => {
    const safeEmailTemplates = templates || []

    return safeEmailTemplates.map(template => ({
        Name: template.id,
        FriendlyName: template.friendlyName,
        Description: template.description,
        IsDefaultTemplate: false, // Todos os mockados são considerados personalizados
        AccountId: 'mock-account-id',
        AccountName: 'mock-account',
        ApplicationId: null,
        IsPersisted: true,
        IsRemoved: false,
        Type: 'mock'
    }))
}

export const getFallbackTemplates = (): LegacyEmailTemplate[] => {
    return [
        {
            Name: 'vtexid_check_email',
            FriendlyName: 'Access key',
            Description: 'Envio de chave de acesso para autenticação',
            IsDefaultTemplate: false,
            AccountId: 'mock-account-id',
            AccountName: 'mock-account',
            ApplicationId: null,
            IsPersisted: true,
            IsRemoved: false,
            Type: 'mock'
        }
    ]
}