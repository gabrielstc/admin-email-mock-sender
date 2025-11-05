import React from 'react'
import { FormattedMessage } from 'react-intl'
import { messages } from '../messages'

interface DataFieldProps {
    label: React.ReactNode;
    value: string;
    icon: string;
}

const DataField: React.FC<DataFieldProps> = ({ label, value, icon }) => (
    <div style={{
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e3e4e6'
    }}>
        <strong style={{ color: '#0c389f', fontSize: '12px', textTransform: 'uppercase' }}>
            {icon} {label}
        </strong>
        <p style={{ margin: '8px 0 0 0', fontSize: '16px', fontWeight: '500' }}>
            {value}
        </p>
    </div>
)

interface MockDataDisplayProps {
    mockData: any;
}

export const MockDataDisplay: React.FC<MockDataDisplayProps> = ({ mockData }) => {
    if (!mockData) return null

    return (
        <>
            {/* Grid de Dados - Mostra apenas campos que existem */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginBottom: '24px'
            }}>
                {mockData.customerName && (
                    <DataField
                        icon="👤"
                        label={<FormattedMessage {...messages.customerName} />}
                        value={mockData.customerName}
                    />
                )}
                {mockData.orderId && (
                    <DataField
                        icon="🛒"
                        label={<FormattedMessage {...messages.orderId} />}
                        value={mockData.orderId}
                    />
                )}
                {mockData.orderValue && (
                    <DataField
                        icon="💰"
                        label={<FormattedMessage {...messages.orderValue} />}
                        value={mockData.orderValue}
                    />
                )}
                {mockData.trackingCode && (
                    <DataField
                        icon="📦"
                        label={<FormattedMessage {...messages.trackingCode} />}
                        value={mockData.trackingCode}
                    />
                )}
            </div>

            {/* Endereço - só mostra se existir */}
            {mockData.deliveryAddress && (
                <div style={{
                    padding: '16px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #e3e4e6',
                    marginBottom: '16px'
                }}>
                    <strong style={{ color: '#0c389f', fontSize: '12px', textTransform: 'uppercase' }}>
                        📍 <FormattedMessage {...messages.deliveryAddress} />
                    </strong>
                    <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>
                        {mockData.deliveryAddress}
                    </p>
                </div>
            )}

            {/* Produtos - só mostra se existir */}
            {mockData.products && (
                <div style={{
                    padding: '16px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #e3e4e6',
                    marginBottom: '16px'
                }}>
                    <strong style={{ color: '#0c389f', fontSize: '12px', textTransform: 'uppercase', marginBottom: '12px', display: 'block' }}>
                        🛍️ <FormattedMessage {...messages.products} />
                    </strong>
                    {mockData.products.map((product: any, index: number) => (
                        <div key={index} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            borderBottom: index < mockData.products.length - 1 ? '1px solid #e3e4e6' : 'none'
                        }}>
                            <span style={{ fontSize: '14px' }}>
                                <strong>{product.quantity}x</strong> {product.name}
                            </span>
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#2e7d32' }}>
                                {product.price}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}