import { useCallback } from 'react'
import { useToast } from '@vtex/admin-ui'
import { convertTemplatesForLegacyFormat, getFallbackTemplates } from '../utils/templateUtils'
import { LegacyEmailTemplate } from '../types'
import { emailTemplates } from '../../../mocks'

export const useTemplateLoader = () => {
    const toast = useToast()

    const loadEmailTemplates = useCallback(async (): Promise<LegacyEmailTemplate[]> => {
        try {
            // Simular um pequeno delay para mostrar o loading
            await new Promise(resolve => setTimeout(resolve, 500))

            // Converter templates mockados para o formato esperado pelo componente
            console.log('emailTemplates import:', emailTemplates)

            const legacyTemplates = convertTemplatesForLegacyFormat(emailTemplates)

            toast({
                message: `${legacyTemplates.length} templates mockados carregados com sucesso!`,
            })

            return legacyTemplates

        } catch (error) {
            console.error('Error loading mock templates:', error)
            toast({
                message: 'Erro ao carregar templates mockados',
            })

            // Fallback para pelo menos um template
            return getFallbackTemplates()
        }
    }, [toast])

    return { loadEmailTemplates }
}