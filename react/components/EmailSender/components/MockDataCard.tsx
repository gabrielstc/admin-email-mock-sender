import React from 'react'
import { Card } from '@vtex/admin-ui'
import { FormattedMessage } from 'react-intl'
import { SectionHeader } from './SectionHeader'
import { MockDataDisplay } from './MockDataDisplay'
import { JsonEditor } from './JsonEditor'
import { messages } from '../messages'
import { MockData } from '../types'

interface MockDataCardProps {
    mockData: MockData | null;
    selectedTemplate: string;
    isEditingJson: boolean;
    jsonString: string;
    jsonError: string;
    onEditJson: () => void;
    onSaveJson: () => void;
    onCancelEdit: () => void;
    onJsonChange: (value: string) => void;
}

export const MockDataCard: React.FC<MockDataCardProps> = ({
    mockData,
    selectedTemplate,
    isEditingJson,
    jsonString,
    jsonError,
    onEditJson,
    onSaveJson,
    onCancelEdit,
    onJsonChange
}) => {
    if (!mockData) return null

    return (
        <Card style={{ marginTop: '24px' }}>
            <div style={{ padding: '32px' }}>
                <SectionHeader
                    icon="📊"
                    title={<FormattedMessage {...messages.mockData} />}
                    subtitle={selectedTemplate === 'custom'
                        ? "📝 Para templates customizados, edite o JSON com os dados necessários para seu template"
                        : "Dados gerados automaticamente para teste"
                    }
                    color="#f57c00"
                />

                {selectedTemplate === 'custom' && (
                    <div style={{
                        marginBottom: '20px',
                        padding: '16px',
                        backgroundColor: '#fff3e0',
                        borderRadius: '8px',
                        border: '1px solid #ffb74d'
                    }}>
                        <div style={{
                            fontSize: '14px',
                            color: '#e65100',
                            fontWeight: '500',
                            marginBottom: '8px'
                        }}>
                            🛠️ Template Customizado
                        </div>
                        <div style={{ fontSize: '13px', color: '#bf360c' }}>
                            Para templates customizados, você deve editar o JSON abaixo com os dados específicos que seu template espera.
                            Os dados iniciais são genéricos - personalize conforme necessário.
                        </div>
                    </div>
                )}

                <MockDataDisplay mockData={mockData} />

                <JsonEditor
                    mockData={mockData}
                    isEditingJson={isEditingJson}
                    jsonString={jsonString}
                    jsonError={jsonError}
                    onEditJson={onEditJson}
                    onSaveJson={onSaveJson}
                    onCancelEdit={onCancelEdit}
                    onJsonChange={onJsonChange}
                />
            </div>
        </Card>
    )
}