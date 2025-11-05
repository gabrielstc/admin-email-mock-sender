// Export all components
export { TemplateSelect } from './components/TemplateSelect'
export { ActionButtons } from './components/ActionButtons'
export { MockDataDisplay } from './components/MockDataDisplay'
export { JsonEditor } from './components/JsonEditor'
export { SectionHeader } from './components/SectionHeader'
export { MockDataCard } from './components/MockDataCard'

// Export hooks
export { useTemplateLoader } from './hooks/useTemplateLoader'
export { useJsonEditor } from './hooks/useJsonEditor'
export { useEmailSender } from './hooks/useEmailSender'

// Export utils
export { generateMockData } from './utils/mockDataGenerator'
export { convertTemplatesForLegacyFormat, getFallbackTemplates } from './utils/templateUtils'

// Export types
export type { LegacyEmailTemplate, MockData, EmailSenderState } from './types'

// Export messages
export { messages } from './messages'