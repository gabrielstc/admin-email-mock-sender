# EmailSender - Estrutura Refatorada

Esta documentação descreve a nova estrutura modular do componente EmailSender, focada em manutenibilidade e organização do código.

## 📁 Estrutura de Pastas

```
react/
├── EmailSender.tsx                 # Componente principal (refatorado)
├── components/
│   └── EmailSender/
│       ├── index.ts                # Exportações centralizadas
│       ├── types.ts                # Interfaces e tipos TypeScript
│       ├── messages.ts             # Mensagens i18n
│       ├── components/             # Componentes específicos
│       │   ├── TemplateSelect.tsx  # Seletor de templates
│       │   ├── ActionButtons.tsx   # Botões de ação
│       │   ├── MockDataDisplay.tsx # Exibição dos dados mock
│       │   ├── JsonEditor.tsx      # Editor JSON
│       │   ├── SectionHeader.tsx   # Cabeçalho de seção
│       │   └── MockDataCard.tsx    # Card completo de dados
│       ├── hooks/                  # Custom hooks
│       │   ├── useTemplateLoader.ts# Hook para carregar templates
│       │   ├── useJsonEditor.ts    # Hook para edição JSON
│       │   └── useEmailSender.ts   # Hook para envio de emails
│       └── utils/                  # Utilitários
│           ├── mockDataGenerator.ts# Gerador de dados mock
│           └── templateUtils.ts    # Utilitários para templates
└── mocks/                          # Sistema de mocks existente
```

## 🏗️ Arquitetura

### **Separação de Responsabilidades**

1. **Componentes UI** (`components/`)
   - Cada componente tem uma responsabilidade específica
   - Props bem definidas e tipadas
   - Reutilizáveis e testáveis

2. **Hooks Customizados** (`hooks/`)
   - Lógica de negócio isolada
   - Estado compartilhado de forma controlada
   - Facilita testes unitários

3. **Utilitários** (`utils/`)
   - Funções puras
   - Lógica de transformação de dados
   - Independentes de estado

4. **Tipos** (`types.ts`)
   - Interfaces centralizadas
   - Tipagem forte em todo o código
   - Melhor IntelliSense

## 🔧 Componentes

### **TemplateSelect**
```tsx
interface TemplateSelectProps {
    selectedTemplate: string;
    onTemplateChange: (templateId: string) => void;
    availableTemplates: LegacyEmailTemplate[];
    isLoadingTemplates: boolean;
}
```
- Responsável apenas pela seleção de templates
- Recebe templates como prop
- Emite eventos de mudança

### **ActionButtons**
```tsx
interface ActionButtonsProps {
    selectedTemplate: string;
    mockData: any;
    isLoading: boolean;
    onSendEmail: () => void;
}
```
- Botões de ação (enviar email)
- Estado visual baseado em props
- Callbacks bem definidos

### **MockDataCard**
- Combina `MockDataDisplay` e `JsonEditor`
- Gerencia estado interno de edição
- Interface unificada para dados mock

### **JsonEditor**
- Editor de JSON com validação
- Estados de edição controlados
- Feedback visual de erros

## 🎣 Hooks Customizados

### **useTemplateLoader**
```tsx
const { loadEmailTemplates } = useTemplateLoader()
```
- Carrega templates da API/mock
- Gerencia estado de loading
- Tratamento de erros centralizado

### **useJsonEditor**
```tsx
const {
    isEditingJson,
    jsonString,
    jsonError,
    handleEditJson,
    handleSaveJson,
    handleCancelEdit,
    handleJsonChange
} = useJsonEditor(mockData, setMockData)
```
- Gerencia estado de edição JSON
- Validação em tempo real
- Callbacks otimizados

### **useEmailSender**
```tsx
const { isLoading, sendEmail } = useEmailSender()
```
- Lógica de envio de emails
- Estado de loading
- Tratamento de erros e sucesso

## 🔄 Fluxo de Dados

1. **Inicialização**
   - `useTemplateLoader` carrega templates disponíveis
   - Estado inicial limpo

2. **Seleção de Template**
   - Usuário seleciona template
   - `useEffect` detecta mudança
   - Dados mock são gerados automaticamente

3. **Edição de Dados**
   - `useJsonEditor` gerencia estado de edição
   - Validação JSON em tempo real
   - Dados atualizados no estado principal

4. **Envio de Email**
   - `useEmailSender` processa requisição
   - Feedback visual via toast
   - Reset do formulário em caso de sucesso

## ✅ Benefícios da Refatoração

### **Manutenibilidade**
- Código organizado em módulos específicos
- Responsabilidades bem delimitadas
- Fácil localização de bugs

### **Testabilidade**
- Componentes isolados
- Hooks podem ser testados separadamente
- Props bem definidas facilitam mocking

### **Reutilização**
- Componentes podem ser usados em outros contextos
- Hooks são reutilizáveis
- Utilitários independentes

### **Performance**
- `useCallback` e `useMemo` nos hooks
- Re-renders otimizados
- Estados locais quando apropriado

### **Developer Experience**
- TypeScript completo
- IntelliSense melhorado
- Estrutura previsível

## 🚀 Como Usar

### **Importação Simplificada**
```tsx
import {
    TemplateSelect,
    useEmailSender,
    generateMockData,
    type MockData
} from './components/EmailSender'
```

### **Extensão**
Para adicionar novos componentes:

1. Criar arquivo em `components/`
2. Exportar em `index.ts`
3. Usar tipos existentes de `types.ts`
4. Seguir padrões estabelecidos

### **Modificação**
- UI: Editar componentes específicos
- Lógica: Modificar hooks correspondentes
- Dados: Ajustar em `utils/`
- Tipos: Atualizar `types.ts`

## 📈 Próximos Passos

1. **Testes Unitários**
   - Implementar testes para cada hook
   - Testes de componentes isolados
   - Coverage completo

2. **Documentação**
   - JSDoc para funções complexas
   - Exemplos de uso
   - Guias de contribuição

3. **Performance**
   - Análise de bundle size
   - Lazy loading se necessário
   - Otimizações adicionais

---

Esta refatoração mantém 100% da funcionalidade original enquanto melhora significativamente a organização e manutenibilidade do código.