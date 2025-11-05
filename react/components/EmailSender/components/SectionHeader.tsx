import React from 'react'

interface SectionHeaderProps {
    icon: string;
    title: React.ReactNode;
    subtitle: string;
    color?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    icon,
    title,
    subtitle,
    color = '#0c389f'
}) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '2px solid #e3e4e6'
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px'
            }}>
                <span style={{ color: 'white', fontSize: '20px' }}>{icon}</span>
            </div>
            <div>
                <h3 style={{
                    margin: '0 0 4px 0',
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#142032'
                }}>
                    {title}
                </h3>
                <p style={{
                    margin: 0,
                    color: '#727272',
                    fontSize: '14px'
                }}>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}