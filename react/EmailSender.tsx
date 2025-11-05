import React, { useState, useEffect } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { FormattedMessage } from 'react-intl'
import {
    experimental_I18nProvider as I18nProvider,
    createSystem,
    Card,
    PageHeader,
    PageTitle,
    ToastProvider,
} from '@vtex/admin-ui'
import { getCompleteTemplateData } from './mocks'
import {
    TemplateSelect,
    ActionButtons,
    MockDataCard,
    SectionHeader,
    useTemplateLoader,
    useJsonEditor,
    useEmailSender,
    generateMockData,
    messages,
    LegacyEmailTemplate,
    MockData
} from './components/EmailSender'

const [ThemeProvider] = createSystem({
    key: 'admin-ui-example',
})

function EmailSenderContent() {
    // Estados principais
    const [selectedTemplate, setSelectedTemplate] = useState('')
    const [mockData, setMockData] = useState<MockData | null>(null)
    const [availableTemplates, setAvailableTemplates] = useState<LegacyEmailTemplate[]>([])
    const [isLoadingTemplates, setIsLoadingTemplates] = useState(false)

    // Hooks customizados
    const { loadEmailTemplates } = useTemplateLoader()
    const { isLoading, sendEmail } = useEmailSender()
    const {
        isEditingJson,
        jsonString,
        jsonError,
        handleEditJson,
        handleSaveJson,
        handleCancelEdit,
        handleJsonChange
    } = useJsonEditor(mockData, setMockData)

    // Carregar templates na inicialização
    useEffect(() => {
        const loadTemplates = async () => {
            setIsLoadingTemplates(true)
            try {
                const templates = await loadEmailTemplates()
                setAvailableTemplates(templates)
            } finally {
                setIsLoadingTemplates(false)
            }
        }

        loadTemplates()
    }, [loadEmailTemplates])

    // Atualizar dados mockados quando template mudar
    useEffect(() => {
        if (selectedTemplate) {
            try {
                // Tentar usar dados mockados específicos do template
                const templateData = getCompleteTemplateData(selectedTemplate)
                setMockData(templateData.mockData)
            } catch (error) {
                console.warn(`Template mockado não encontrado para ${selectedTemplate}, usando dados genéricos`)
                // Fallback para dados genéricos
                const data = generateMockData()
                setMockData(data)
            }
        }
    }, [selectedTemplate])

    // Handlers
    const handleSendEmail = async () => {
        const success = await sendEmail(selectedTemplate, mockData)
        if (success) {
            // Limpar formulário após envio bem-sucedido
            setSelectedTemplate('')
            setMockData(null)
            handleCancelEdit()
        }
    }

    return (
        <>
            <PageHeader>
                <PageTitle>
                    📧 <FormattedMessage {...messages.title} />
                </PageTitle>
            </PageHeader>

            <div style={{
                padding: '32px',
                backgroundColor: '#f8f9fa',
                minHeight: 'calc(100vh - 100px)'
            }}>
                {/* Informações principais */}
                <div style={{
                    marginBottom: '24px',
                    textAlign: 'center',
                    color: '#525252'
                }}>
                    <h2 style={{
                        fontSize: '18px',
                        fontWeight: '500',
                        margin: '0 0 8px 0'
                    }}>
                        <FormattedMessage {...messages.subtitle} />
                    </h2>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                        Teste templates de e-mail com dados realistas gerados automaticamente
                    </p>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Card Principal - Formulário */}
                    <Card>
                        <div style={{ padding: '32px' }}>
                            <SectionHeader
                                icon="✉️"
                                title="Configurações do E-mail"
                                subtitle="Selecione um template e personalize os dados para envio"
                            />

                            <TemplateSelect
                                selectedTemplate={selectedTemplate}
                                onTemplateChange={setSelectedTemplate}
                                availableTemplates={availableTemplates}
                                isLoadingTemplates={isLoadingTemplates}
                            />

                            <ActionButtons
                                selectedTemplate={selectedTemplate}
                                mockData={mockData}
                                isLoading={isLoading}
                                onSendEmail={handleSendEmail}
                            />
                        </div>
                    </Card>

                    {/* Card de Dados Mockados */}
                    <MockDataCard
                        mockData={mockData}
                        isEditingJson={isEditingJson}
                        jsonString={jsonString}
                        jsonError={jsonError}
                        onEditJson={handleEditJson}
                        onSaveJson={handleSaveJson}
                        onCancelEdit={handleCancelEdit}
                        onJsonChange={handleJsonChange}
                    />
                </div>
            </div>
        </>
    )
}

function EmailSender() {
    const {
        culture: { locale }
    } = useRuntime()

    return (
        <I18nProvider locale={locale}>
            <ThemeProvider>
                <ToastProvider>
                    <EmailSenderContent />
                </ToastProvider>
            </ThemeProvider>
        </I18nProvider>
    )
}

export default EmailSender