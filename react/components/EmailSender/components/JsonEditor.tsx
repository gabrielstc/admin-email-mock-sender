import React from 'react'

interface JsonEditorProps {
    mockData: any;
    isEditingJson: boolean;
    jsonString: string;
    jsonError: string;
    onEditJson: () => void;
    onSaveJson: () => void;
    onCancelEdit: () => void;
    onJsonChange: (value: string) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({
    mockData,
    isEditingJson,
    jsonString,
    jsonError,
    onEditJson,
    onSaveJson,
    onCancelEdit,
    onJsonChange
}) => {
    return (
        <div style={{
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e3e4e6'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px'
            }}>
                <strong style={{ color: '#0c389f', fontSize: '12px', textTransform: 'uppercase' }}>
                    📋 Dados do Template (Editável)
                </strong>
                <div>
                    {!isEditingJson ? (
                        <button
                            onClick={onEditJson}
                            style={{
                                fontSize: '12px',
                                padding: '6px 12px',
                                backgroundColor: '#f8f9fa',
                                border: '1px solid #e3e4e6',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                color: '#0c389f'
                            }}
                        >
                            ✏️ Editar JSON
                        </button>
                    ) : (
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button
                                onClick={onSaveJson}
                                style={{
                                    fontSize: '12px',
                                    padding: '6px 12px',
                                    backgroundColor: '#0c389f',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                            >
                                ✅ Salvar
                            </button>
                            <button
                                onClick={onCancelEdit}
                                style={{
                                    fontSize: '12px',
                                    padding: '6px 12px',
                                    backgroundColor: '#6c757d',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                            >
                                ❌ Cancelar
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {jsonError && (
                <div style={{
                    backgroundColor: '#ffebee',
                    color: '#d32f2f',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    marginBottom: '12px',
                    border: '1px solid #ffcdd2'
                }}>
                    ⚠️ {jsonError}
                </div>
            )}

            {!isEditingJson ? (
                <pre style={{
                    background: '#fff',
                    padding: '12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    overflow: 'auto',
                    maxHeight: '300px',
                    margin: 0,
                    border: '1px solid #ddd',
                    cursor: 'pointer'
                }}
                    onClick={onEditJson}
                    title="Clique para editar"
                >
                    {JSON.stringify(mockData, null, 2)}
                </pre>
            ) : (
                <textarea
                    value={jsonString}
                    onChange={(e) => onJsonChange(e.target.value)}
                    style={{
                        width: '100%',
                        minHeight: '300px',
                        padding: '12px',
                        borderRadius: '4px',
                        border: jsonError ? '2px solid #d32f2f' : '1px solid #ddd',
                        fontSize: '12px',
                        fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, monospace',
                        backgroundColor: '#fff',
                        resize: 'vertical',
                        outline: 'none',
                        boxSizing: 'border-box'
                    }}
                    placeholder="Cole aqui seu JSON personalizado..."
                    spellCheck={false}
                />
            )}

            <div style={{
                marginTop: '8px',
                fontSize: '11px',
                color: '#666',
                fontStyle: 'italic'
            }}>
                💡 Dica: {isEditingJson ? 'Use Ctrl+A para selecionar tudo, depois cole seu JSON' : 'Clique no JSON acima ou no botão "Editar" para modificar os dados'}
            </div>
        </div>
    )
}