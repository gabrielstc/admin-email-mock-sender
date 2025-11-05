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
                    subtitle="Dados gerados automaticamente para teste"
                    color="#f57c00"
                />

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