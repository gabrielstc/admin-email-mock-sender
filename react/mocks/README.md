# 📧 Templates de E-mail Mockados

Esta pasta contém templates de e-mail mockados para teste no sistema de envio de e-mails VTEX.

## 📁 Estrutura

```
mocks/
├── index.ts                    # Exportações principais
├── templates/
│   ├── index.ts               # Gerenciador de templates
│   ├── vtexid_check_email.ts  # Template: Access key
│   └── [outros templates...]
└── README.md                  # Este arquivo
```

## 🛠️ Como Adicionar Novos Templates

### 1. Criar o arquivo do template

Crie um novo arquivo em `templates/` com o nome do template ID:

```typescript
// templates/novo_template.ts
import faker from 'faker'

export interface NovoTemplateData {
  // Defina a interface com base no JSON fornecido
  to: Array<{ name: string; email: string }>
  // ... outros campos
}

export const generateNovoTemplateMockData = (): NovoTemplateData => {
  return {
    // Gere dados mockados usando faker
  }
}

export const novoTemplate = {
  id: 'novo_template',
  name: 'Nome do Template',
  friendlyName: 'Nome Amigável',
  description: 'Descrição do template',
  category: 'Categoria',
  generateMockData: generateNovoTemplateMockData,
  generateSubject: (data: NovoTemplateData) => 'Subject gerado',
  getRecipient: (data: NovoTemplateData) => data.to[0]?.email || ''
}

export default novoTemplate
```

### 2. Adicionar ao índice

Adicione o import e o template ao array em `templates/index.ts`:

```typescript
import novoTemplate from './novo_template'

export const emailTemplates: EmailTemplate[] = [
  accessKeyTemplate,
  novoTemplate, // <- Adicione aqui
]
```

### 3. Testar

O template automaticamente aparecerá na lista do componente EmailSender.

## 📋 Templates Disponíveis

### vtexid_check_email (Access key)
- **Descrição**: Envio de chave de acesso para autenticação
- **Categoria**: Authentication
- **Dados mockados**: Chave de acesso, locale, user agent, informações da conta

## 🎯 Próximos Templates

Adicione aqui a lista dos próximos templates que serão implementados...

## 💡 Dicas

- Use o faker para gerar dados realistas
- Mantenha a consistência nos nomes dos campos
- Teste sempre após adicionar um novo template
- Documente campos específicos quando necessário