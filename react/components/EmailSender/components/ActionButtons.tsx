import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button, Flex, FlexSpacer } from '@vtex/admin-ui'
import { messages } from '../messages'

interface ActionButtonsProps {
    selectedTemplate: string;
    mockData: any;
    isLoading: boolean;
    onSendEmail: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
    selectedTemplate,
    mockData,
    isLoading,
    onSendEmail
}) => {
    return (
        <Flex>
            <Button
                variant="primary"
                onClick={onSendEmail}
                loading={isLoading}
                disabled={!selectedTemplate || !mockData}
            >
                {isLoading ? (
                    <>🔄 <FormattedMessage {...messages.sending} /></>
                ) : (
                    <>🚀 <FormattedMessage {...messages.send} /></>
                )}
            </Button>

            <FlexSpacer />

            {mockData && (
                <span style={{
                    backgroundColor: '#e8f5e8',
                    color: '#2e7d32',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500'
                }}>
                    ✅ Dados mockados carregados
                </span>
            )}
        </Flex>
    )
}