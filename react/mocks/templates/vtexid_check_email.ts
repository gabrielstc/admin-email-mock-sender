import faker from 'faker'

// Template: Access key (vtexid_check_email)
// Descrição: Envio de chave de acesso para autenticação

export interface AccessKeyTemplateData {
    to: Array<{
        name: string
        email: string
    }>
    aditionalData: {
        accessKey: string
        locale: string
        userAgent: string
    }
    _accountInfo: {
        MainAccountName: string
        AccountName: string
        Cnpj: string | null
        Id: string
        AppId: string | null
        IsActive: boolean
        IsOperating: boolean
        CreationDate: string
        OperationDate: string | null
        CompanyName: string
        TradingName: string
        City: string | null
        Complement: string | null
        Country: string | null
        State: string | null
        Address: string | null
        District: string | null
        Number: string | null
        PostalCode: string | null
        Licenses: number[]
        ParentAccountId: string | null
        ParentAccountName: string | null
        InactivationDate: string | null
        Platform: string
        Privacy: string | null
        HasPiiRestriction: boolean
        Infra: string | null
        Sponsor: string
    }
}

export const generateAccessKeyMockData = (): AccessKeyTemplateData => {
    const companyName = faker.company.companyName()
    const tradingName = faker.company.companySuffix() + ' ' + faker.company.catchPhraseNoun()
    const accountName = faker.internet.domainWord()
    const userName = faker.name.findName()
    const userEmail = faker.internet.email()

    return {
        to: [
            {
                name: userName,
                email: userEmail
            }
        ],
        aditionalData: {
            accessKey: faker.random.alphaNumeric(6).toUpperCase(),
            locale: faker.random.arrayElement(['pt-BR', 'en-US', 'es-ES']),
            userAgent: faker.random.arrayElement([
                'Chrome, Windows',
                'Chrome, Mac OS X',
                'Firefox, Windows',
                'Safari, Mac OS X',
                'Edge, Windows'
            ])
        },
        _accountInfo: {
            MainAccountName: accountName,
            AccountName: accountName,
            Cnpj: faker.datatype.boolean() ?
                faker.datatype.number({ min: 10000000000000, max: 99999999999999 }).toString() : null,
            Id: faker.datatype.uuid(),
            AppId: faker.datatype.boolean() ? faker.datatype.number({ min: 1, max: 999 }).toString() : null,
            IsActive: true,
            IsOperating: faker.datatype.boolean(),
            CreationDate: faker.date.past(2).toISOString(),
            OperationDate: faker.datatype.boolean() ? faker.date.recent(30).toISOString() : null,
            CompanyName: companyName,
            TradingName: tradingName,
            City: faker.address.city(),
            Complement: faker.datatype.boolean() ? faker.address.secondaryAddress() : null,
            Country: faker.address.country(),
            State: faker.address.state(),
            Address: faker.address.streetAddress(),
            District: faker.address.county(),
            Number: faker.datatype.number({ min: 1, max: 9999 }).toString(),
            PostalCode: faker.address.zipCode(),
            Licenses: [
                faker.datatype.number({ min: 1, max: 10 }),
                ...(faker.datatype.boolean() ? [faker.datatype.number({ min: 11, max: 20 })] : [])
            ],
            ParentAccountId: faker.datatype.boolean() ? faker.datatype.uuid() : null,
            ParentAccountName: faker.datatype.boolean() ? faker.internet.domainWord() : null,
            InactivationDate: null,
            Platform: 'vtex',
            Privacy: faker.datatype.boolean() ? faker.random.arrayElement(['public', 'private', 'restricted']) : null,
            HasPiiRestriction: faker.datatype.boolean(),
            Infra: faker.datatype.boolean() ? faker.random.arrayElement(['aws', 'azure', 'gcp']) : null,
            Sponsor: faker.datatype.uuid()
        }
    }
}

// Configurações do template
export const accessKeyTemplate = {
    id: 'vtexid_check_email',
    name: 'Access key',
    friendlyName: 'Access key',
    description: 'Envio de chave de acesso para autenticação',
    category: 'Authentication',
    generateMockData: generateAccessKeyMockData,

    // Subject padrão baseado nos dados
    generateSubject: (data: AccessKeyTemplateData) => {
        return `Sua chave de acesso: ${data.aditionalData.accessKey}`
    },

    // Recipient padrão
    getRecipient: (data: AccessKeyTemplateData) => {
        return data.to[0]?.email || ''
    }
}

export default accessKeyTemplate