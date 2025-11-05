import React from 'react'
import { FormattedMessage } from 'react-intl'
import { messages } from '../messages'

interface TemplateSelectProps {
    selectedTemplate: string;
    onTemplateChange: (templateId: string) => void;
    availableTemplates: Array<{
        Name: string;
        FriendlyName: string;
        Description?: string | null;
        IsDefaultTemplate: boolean;
    }>;
    isLoadingTemplates: boolean;
}

export const TemplateSelect: React.FC<TemplateSelectProps> = ({
    selectedTemplate,
    onTemplateChange,
    availableTemplates,
    isLoadingTemplates
}) => {
    return (
        <div style={{ marginBottom: '32px' }}>
            <label style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#142032'
            }}>
                📋 <FormattedMessage {...messages.template} />
                {!isLoadingTemplates && availableTemplates.length > 0 && (
                    <span style={{
                        marginLeft: '8px',
                        fontSize: '12px',
                        color: '#666',
                        fontWeight: '400'
                    }}>
                        ({availableTemplates.length} disponíveis)
                    </span>
                )}
            </label>
            <select
                value={selectedTemplate}
                onChange={(e) => onTemplateChange(e.target.value)}
                disabled={isLoadingTemplates}
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    border: '2px solid #e3e4e6',
                    fontSize: '14px',
                    backgroundColor: isLoadingTemplates ? '#f5f5f5' : 'white',
                    transition: 'border-color 0.2s',
                    outline: 'none',
                    cursor: isLoadingTemplates ? 'wait' : 'pointer'
                }}
                onFocus={(e) => e.target.style.borderColor = '#0c389f'}
                onBlur={(e) => e.target.style.borderColor = '#e3e4e6'}
            >
                <option value="">
                    {isLoadingTemplates ? 'Carregando templates...' : 'Selecione um template...'}
                </option>
                {!isLoadingTemplates && availableTemplates.map(template => (
                    <option key={template.Name} value={template.Name}>
                        {template.FriendlyName}
                        {template.IsDefaultTemplate ? ' (Padrão)' : ' (Mock)'}
                        {template.Description ? ` - ${template.Description}` : ''}
                    </option>
                ))}
            </select>
        </div>
    )
}