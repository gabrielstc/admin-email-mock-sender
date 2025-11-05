# VTEX Email Mock Sender

Uma aplicação VTEX IO para envio de e-mails padrões da VTEX com dados mockados através de uma interface administrativa moderna.

## 📧 Funcionalidades

### Tela de Envio de E-mails
- **Interface administrativa moderna**: Desenvolvida com [admin-ui design system](https://admin-ui.vercel.app/)
- **Templates pré-definidos**: 6 tipos de e-mails padrões da VTEX
  - Confirmação de Pedido
  - Pedido Enviado
  - Pedido Entregue
  - Redefinição de Senha
  - E-mail de Boas-vindas
  - Newsletter Promocional

### Dados Mockados Automáticos
- **Geração automática**: Dados realistas gerados automaticamente com Faker.js
- **Informações do cliente**: Nome, e-mail, endereço
- **Dados do pedido**: ID, valor, produtos, código de rastreamento
- **Produtos simulados**: Lista de produtos com preços e quantidades

### Funcionalidades Avançadas
- **Preview de e-mail**: Visualização antes do envio
- **Histórico de envios**: Tabela com todos os e-mails enviados
- **Status de entrega**: Acompanhamento do status de cada e-mail
- **Validação de formulário**: Campos obrigatórios e validações
- **Feedback visual**: Toasts de sucesso e erro
- **Loading states**: Indicadores de carregamento durante envio

## 🛠️ Tecnologias

- **VTEX IO**: Plataforma de desenvolvimento
- **Admin-UI**: Sistema de design da VTEX
- **TypeScript**: Linguagem de programação
- **React**: Biblioteca de interface
- **React Intl**: Internacionalização (PT, EN, ES)
- **Faker.js**: Geração de dados mockados
- **Node.js**: Backend service

## 🚀 Como usar

1. Clone o repositório
2. Execute `vtex link` no diretório do projeto
3. Acesse `/admin/app/email-sender` no admin da sua loja
4. Selecione um template de e-mail
5. Os dados mockados serão gerados automaticamente
6. Personalize o destinatário e assunto se necessário
7. Clique em "Enviar E-mail"

## 📱 Navegação

A aplicação adiciona uma nova seção no menu lateral do admin:
- **Exemplo Admin-UI** > **Envio de E-mails**

## 🔧 Estrutura do Projeto

```
├── admin/
│   ├── navigation.json    # Configuração do menu
│   └── routes.json       # Rotas da aplicação
├── react/
│   ├── EmailSender.tsx   # Componente principal
│   └── ...              # Outros componentes
├── node/
│   ├── index.ts         # Serviço backend
│   └── service.json     # Configuração das rotas
├── messages/
│   ├── pt.json          # Traduções em português
│   ├── en.json          # Traduções em inglês
│   └── es.json          # Traduções em espanhol
└── manifest.json        # Configuração da app
```

## 🌐 Internacionalização

A aplicação suporta 3 idiomas:
- 🇧🇷 Português (pt)
- 🇺🇸 Inglês (en)
- 🇪🇸 Espanhol (es)

## 🎯 Casos de Uso

- **Testes de e-mail**: Validar templates antes da produção
- **Demonstrações**: Mostrar diferentes tipos de e-mail para clientes
- **Desenvolvimento**: Testar integrações de e-mail sem dados reais
- **Treinamento**: Ensinar equipes sobre os e-mails da VTEX
