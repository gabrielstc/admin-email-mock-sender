import { useState, useCallback } from 'react'
import { useToast } from '@vtex/admin-ui'
import { MockData } from '../types'

export const useJsonEditor = (mockData: MockData | null, setMockData: (data: MockData) => void) => {
    const [isEditingJson, setIsEditingJson] = useState(false)
    const [jsonString, setJsonString] = useState('')
    const [jsonError, setJsonError] = useState('')
    const toast = useToast()

    const handleEditJson = useCallback(() => {
        setJsonString(JSON.stringify(mockData, null, 2))
        setJsonError('')
        setIsEditingJson(true)
    }, [mockData])

    const handleSaveJson = useCallback(() => {
        try {
            const parsedData = JSON.parse(jsonString)
            setMockData(parsedData)
            setIsEditingJson(false)
            setJsonError('')
            toast({
                message: '✅ Dados atualizados com sucesso!',
            })
        } catch (error) {
            setJsonError('JSON inválido: ' + (error as any).message)
        }
    }, [jsonString, setMockData, toast])

    const handleCancelEdit = useCallback(() => {
        setIsEditingJson(false)
        setJsonError('')
        setJsonString('')
    }, [])

    const handleJsonChange = useCallback((value: string) => {
        setJsonString(value)
        setJsonError('')
    }, [])

    return {
        isEditingJson,
        jsonString,
        jsonError,
        handleEditJson,
        handleSaveJson,
        handleCancelEdit,
        handleJsonChange
    }
}