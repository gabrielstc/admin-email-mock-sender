import faker from 'faker'

// Template: Order Confirmation (vtexcommerce-new-order)
// Descrição: Confirmação de pedido realizado

interface GiftCard {
    id: string
    redemptionCode: string | null
    name: string | null
    caption: string
    value: number
    balance: number
    provider: string
    groupName: string | null
    inUse: boolean
    isSpecialCard: boolean
}

interface Payment {
    id: string
    paymentSystem: string
    paymentSystemName: string
    value: number
    installments: number
    referenceValue: number
    cardHolder: string | null
    cardNumber: string | null
    firstDigits: string | null
    lastDigits: string | null
    cvv2: string | null
    expireMonth: string | null
    expireYear: string | null
    url: string | null
    giftCardId: string | null
    giftCardName: string | null
    giftCardCaption: string | null
    redemptionCode: string | null
    group: string
    tid: string | null
    dueDate: string | null
    connectorResponses: Record<string, any>
    giftCardProvider: string | null
    giftCardAsDiscount: string | null
    koinUrl: string | null
    accountId: string | null
    parentAccountId: string | null
    bankIssuedInvoiceIdentificationNumber: string | null
    bankIssuedInvoiceIdentificationNumberFormatted: string | null
    bankIssuedInvoiceBarCodeNumber: string | null
    bankIssuedInvoiceBarCodeType: string | null
    billingAddress: any | null
    paymentOrigin: string | null
}

interface Transaction {
    isActive: boolean
    transactionId: string
    merchantName: string
    payments: Payment[]
}

interface PaymentData {
    giftCards: GiftCard[]
    transactions: Transaction[]
}

interface ClientProfileData {
    id: string
    email: string
    firstName: string
    lastName: string
    documentType: string
    document: string | null
    phone: string
    corporateName: string | null
    tradeName: string | null
    corporateDocument: string | null
    stateInscription: string | null
    corporatePhone: string | null
    isCorporate: boolean
    userProfileId: string
    userProfileVersion: string | null
    customerClass: string | null
    customerCode: string | null
}

interface Address {
    addressType: string
    receiverName: string
    addressId: string
    versionId: string | null
    entityId: string | null
    postalCode: string
    city: string
    state: string
    country: string
    street: string
    number: string
    neighborhood: string
    complement: string | null
    reference: string | null
    geoCoordinates: number[]
}

interface DeliveryId {
    courierId: string
    courierName: string
    dockId: string
    quantity: number
    warehouseId: string
    accountCarrierName: string
    kitItemDetails: any[]
}

interface PickupStoreInfo {
    additionalInfo: string | null
    address: string | null
    dockId: string | null
    friendlyName: string | null
    isPickupStore: boolean
}

interface Sla {
    id: string
    name: string
    shippingEstimate: string
    shippingEstimateDate: string | null
    deliveryWindow: any | null
    availableDeliveryWindows: any[]
    deliveryIds: DeliveryId[]
    listPrice: number
    price: number
    deliveryChannel: string
    pickupStoreInfo: PickupStoreInfo
    polygonName: string
    lockTTL: string
    pickupPointId: string | null
    transitTime: string
    pickupDistance: number | null
}

interface LogisticsInfo {
    itemIndex: number
    itemId: string
    selectedDeliveryChannel: string
    selectedSla: string
    lockTTL: string
    price: number
    listPrice: number
    sellingPrice: number
    deliveryWindow: any | null
    deliveryCompany: string | null
    shippingEstimate: string
    shippingEstimateDate: string | null
    slas: Sla[]
    shipsTo: string[]
    deliveryIds: DeliveryId[]
    deliveryChannels: Array<{ id: string; stockBalance: number }>
    deliveryChannel: string | null
    pickupStoreInfo: PickupStoreInfo
    addressId: string
    versionId: string | null
    entityId: string | null
    polygonName: string
    pickupPointId: string | null
    transitTime: string
}

interface ShippingData {
    id: string
    address: Address
    logisticsInfo: LogisticsInfo[]
    trackingHints: any[]
    selectedAddresses: Address[]
    availableAddresses: Address[]
    contactInformation: any[]
    contactsInfo: any[]
}

interface CustomApp {
    fields: Record<string, string>
    id: string
    major: number
}

interface CustomData {
    customApps: CustomApp[]
    customFields: any[]
}

interface AuthorizationPolicyData {
    Status: string
    DeniedPolicies: any[]
    PendingPolicies: any[]
}

interface AdditionalInfo {
    categoriesIds: string
    productClusterId: string
    commercialConditionId: string
    dimension: {
        cubicweight: number
        height: number
        length: number
        weight: number
        width: number
    }
    brandName: string
    brandId: string
    offeringInfo: any | null
    offeringType: any | null
    offeringTypeId: any | null
}

interface PriceDefinition {
    calculatedSellingPrice: number
    total: number
    sellingPrices: Array<{
        value: number
        quantity: number
    }>
}

interface Item {
    additionalInfo: AdditionalInfo
    sellerSku: string
    priceTable: string | null
    priceValidUntil: string
    callCenterOperator: string | null
    commission: number
    freightCommission: number
    taxCode: string | null
    catalogProvider: string
    uniqueId: string
    id: string
    productId: string
    productRefId: string | null
    refId: string
    ean: string | null
    name: string
    skuName: string
    modalType: string | null
    parentItemIndex: number | null
    parentAssemblyBinding: string | null
    assemblies: any[]
    tax: number
    price: number
    listPrice: number
    manualPrice: number | null
    manualPriceAppliedBy: string | null
    sellingPrice: number
    rewardValue: number
    isGift: boolean
    preSaleDate: string | null
    productCategoryIds: string
    productCategories: Record<string, string>
    quantity: number
    seller: string
    sellerChain: string[]
    imageUrl: string
    detailUrl: string
    components: any[]
    bundleItems: any[]
    attachments: any[]
    attachmentOfferings: any[]
    offerings: any[]
    priceTags: any[]
    availability: string
    measurementUnit: string
    unitMultiplier: number
    manufacturerCode: string | null
    priceDefinition: PriceDefinition
}

interface Seller {
    subSellerId: string
    fulfillmentEndpoint: string
    id: string
    name: string
    logo: string
}

interface Total {
    id: string
    name: string
    value: number
}

interface RatesAndBenefitsData {
    rateAndBenefitsIdentifiers: any[]
    teaser: any[]
}

interface ClientPreferencesData {
    locale: string
    optinNewsLetter: boolean
}

interface MarketingData {
    utmSource: string | null
    utmMedium: string | null
    utmCampaign: string | null
    utmipage: string | null
    utmiPart: string | null
    utmiCampaign: string | null
    coupon: string | null
    marketingTags: any[]
}

interface CurrencyFormatInfo {
    currencyDecimalDigits: number
    currencyDecimalSeparator: string
    currencyGroupSeparator: string
    currencyGroupSize: number
    startsWithCurrencySymbol: boolean
}

interface StorePreferencesData {
    countryCode: string
    saveUserData: boolean
    timeZone: string
    currencyCode: string
    currencyLocale: number
    currencySymbol: string
    currencyFormatInfo: CurrencyFormatInfo
}

interface SubjectItemAttachment {
    item: string
    totalItems: number
    extraItems: number
}

interface Order {
    package: any | null
    subjectItemAttachment: SubjectItemAttachment
    cancellationReason: string | null
    paymentData: PaymentData
    cancellationRequests: any | null
    invoiceData: any | null
    clientProfileData: ClientProfileData
    shippingData: ShippingData
    customData: CustomData
    purchaseAgentData: any | null
    authorizationPolicyData: AuthorizationPolicyData | null
    items: Item[]
    sellers: Seller[]
    giftRegistryData: any | null
    receiptData: any | null
    contextData: any | null
    marketPlaceOrderId: string
    marketPlaceOrderGroup: string | null
    marketplaceServicesEndpoint: string | null
    orderFormId: string
    sequence: string
    affiliateId: string
    status: string
    callCenterOperator: string
    userProfileId: string
    hostName: string
    creationVersion: string | null
    creationEnvironment: string | null
    lastChangeVersion: string | null
    workflowInstanceId: string | null
    marketplacePaymentValue: number | null
    orderId: string
    orderGroup: string
    state: string
    isCheckedIn: boolean
    sellerOrderId: string
    storeId: string | null
    checkedInPickupPointId: string | null
    value: number
    totals: Total[]
    ratesAndBenefitsData: RatesAndBenefitsData
    clientPreferencesData: ClientPreferencesData
    commercialConditionData: any | null
    marketingData: MarketingData
    storePreferencesData: StorePreferencesData
    openTextField: any | null
    itemMetadata: any | null
    taxData: any | null
    hooksData: any | null
    changeData: any | null
    subscriptionData: any | null
    salesChannel: string
    followUpEmail: string
    creationDate: string
    lastChange: string
    timeZoneCreationDate: string
    timeZoneLastChange: string
    isCompleted: boolean
    merchantName: string
    userType: string
    roundingError: number
    allowEdition: boolean
    allowCancellation: boolean
    isUserDataVisible: boolean
    allowChangeSeller: boolean
}

interface AccountInfo {
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

export interface OrderConfirmationTemplateData {
    orders: Order[]
    ordersUrl: string
    orderGroup: string
    subjectItemAttachment: SubjectItemAttachment
    split: boolean
    totalValue: number
    callCenterOperatorData: any | null
    _accountInfo: AccountInfo
}

export const generateOrderConfirmationMockData = (): OrderConfirmationTemplateData => {
    const companyName = faker.company.companyName()
    const tradingName = faker.company.catchPhrase()
    const accountName = faker.internet.domainWord()
    const userEmail = faker.internet.email()
    const orderGroup = faker.datatype.number({ min: 1000000000000, max: 9999999999999 }).toString()
    const orderId1 = `${orderGroup}-01`
    const orderId2 = `${orderGroup}-02`

    // Gerar itens para os pedidos
    const generateItem = (): Item => {
        const itemId = faker.datatype.number({ min: 1, max: 9999 }).toString()
        const productId = faker.datatype.number({ min: 1, max: 999 }).toString()
        const brandName = faker.company.companyName()
        const productName = faker.commerce.productName()
        const price = faker.datatype.number({ min: 100, max: 5000 })
        const quantity = faker.datatype.number({ min: 1, max: 5 })
        const categoryId = faker.datatype.number({ min: 1, max: 10 }).toString()
        const categoryName = faker.commerce.department()

        return {
            additionalInfo: {
                categoriesIds: `/${categoryId}/`,
                productClusterId: "",
                commercialConditionId: "1",
                dimension: {
                    cubicweight: faker.datatype.number({ min: 0.0001, max: 1, precision: 0.0001 }),
                    height: faker.datatype.number({ min: 1, max: 50 }),
                    length: faker.datatype.number({ min: 1, max: 50 }),
                    weight: faker.datatype.number({ min: 1, max: 1000 }),
                    width: faker.datatype.number({ min: 1, max: 50 })
                },
                brandName: brandName,
                brandId: faker.datatype.number({ min: 2000000, max: 2000999 }).toString(),
                offeringInfo: null,
                offeringType: null,
                offeringTypeId: null
            },
            sellerSku: itemId,
            priceTable: null,
            priceValidUntil: faker.date.future().toISOString(),
            callCenterOperator: null,
            commission: 0,
            freightCommission: 0,
            taxCode: null,
            catalogProvider: `vrn:vtex.catalog-api-proxy:-:${accountName}:master:/proxy/authenticated/catalog/pvt/sku/stockkeepingunitbyid/${itemId}`,
            uniqueId: faker.datatype.uuid().replace(/-/g, '').toUpperCase(),
            id: itemId,
            productId: productId,
            productRefId: null,
            refId: faker.datatype.number({ min: 1000000000000, max: 9999999999999 }).toString(),
            ean: null,
            name: productName,
            skuName: productName,
            modalType: null,
            parentItemIndex: null,
            parentAssemblyBinding: null,
            assemblies: [],
            tax: 0,
            price: price,
            listPrice: price,
            manualPrice: null,
            manualPriceAppliedBy: null,
            sellingPrice: price,
            rewardValue: 0,
            isGift: false,
            preSaleDate: null,
            productCategoryIds: `/${categoryId}/`,
            productCategories: {
                [categoryId]: categoryName
            },
            quantity: quantity,
            seller: `${accountName}dist${faker.datatype.number({ min: 1, max: 3 })}`,
            sellerChain: [`${accountName}dist${faker.datatype.number({ min: 1, max: 3 })}`],
            imageUrl: `https://${accountName}.vteximg.com.br/arquivos/ids/${faker.datatype.number({ min: 100000, max: 999999 })}-55-55/${faker.lorem.slug()}.jpg?v=${faker.datatype.number({ min: 100000000000000, max: 999999999999999 })}`,
            detailUrl: `/${faker.lorem.slug()}/${productId}/p`,
            components: [],
            bundleItems: [],
            attachments: [],
            attachmentOfferings: [],
            offerings: [],
            priceTags: [],
            availability: "available",
            measurementUnit: "un",
            unitMultiplier: 1,
            manufacturerCode: null,
            priceDefinition: {
                calculatedSellingPrice: price,
                total: price * quantity,
                sellingPrices: [
                    {
                        value: price,
                        quantity: quantity
                    }
                ]
            }
        }
    }

    // Gerar logística
    const generateLogisticsInfo = (items: Item[]): LogisticsInfo[] => {
        return items.map((item, index) => ({
            itemIndex: index,
            itemId: item.id,
            selectedDeliveryChannel: "delivery",
            selectedSla: "Entrega padrão",
            lockTTL: "10d",
            price: 0,
            listPrice: 0,
            sellingPrice: 0,
            deliveryWindow: null,
            deliveryCompany: null,
            shippingEstimate: "3bd",
            shippingEstimateDate: faker.date.future().toISOString(),
            slas: [
                {
                    id: "Entrega padrão",
                    name: "Entrega padrão",
                    shippingEstimate: "3bd",
                    shippingEstimateDate: faker.date.future().toISOString(),
                    deliveryWindow: null,
                    availableDeliveryWindows: [],
                    deliveryIds: [
                        {
                            courierId: "1",
                            courierName: faker.company.companyName(),
                            dockId: "1",
                            quantity: item.quantity,
                            warehouseId: "1_1",
                            accountCarrierName: faker.company.companyName(),
                            kitItemDetails: []
                        }
                    ],
                    listPrice: 0,
                    price: 0,
                    deliveryChannel: "delivery",
                    pickupStoreInfo: {
                        additionalInfo: null,
                        address: null,
                        dockId: null,
                        friendlyName: null,
                        isPickupStore: false
                    },
                    polygonName: "",
                    lockTTL: "10d",
                    pickupPointId: null,
                    transitTime: "3bd",
                    pickupDistance: null
                }
            ],
            shipsTo: ["BRA"],
            deliveryIds: [
                {
                    courierId: "1",
                    courierName: faker.company.companyName(),
                    dockId: "1",
                    quantity: item.quantity,
                    warehouseId: "1_1",
                    accountCarrierName: faker.company.companyName(),
                    kitItemDetails: []
                }
            ],
            deliveryChannels: [
                {
                    id: "delivery",
                    stockBalance: 0
                }
            ],
            deliveryChannel: null,
            pickupStoreInfo: {
                additionalInfo: null,
                address: null,
                dockId: null,
                friendlyName: null,
                isPickupStore: false
            },
            addressId: "0",
            versionId: null,
            entityId: null,
            polygonName: "",
            pickupPointId: null,
            transitTime: "3bd"
        }))
    }

    // Gerar endereço
    const generateAddress = (): Address => ({
        addressType: "business",
        receiverName: companyName,
        addressId: "0",
        versionId: null,
        entityId: null,
        postalCode: faker.address.zipCode().replace('-', ''),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        country: "BRA",
        street: faker.address.streetName(),
        number: faker.datatype.number({ min: 1, max: 9999 }).toString(),
        neighborhood: faker.address.county(),
        complement: faker.datatype.boolean() ? faker.address.secondaryAddress() : null,
        reference: null,
        geoCoordinates: [
            parseFloat(faker.address.longitude()),
            parseFloat(faker.address.latitude())
        ]
    })

    // Gerar pedidos
    const generateOrder = (sequence: string, orderId: string, items: Item[]): Order => {
        const totalValue = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        const address = generateAddress()
        const userProfileId = faker.datatype.uuid()

        return {
            package: null,
            subjectItemAttachment: {
                item: items[0]?.name.substring(0, 20) + "..." || "Item...",
                totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
                extraItems: items.reduce((sum, item) => sum + item.quantity, 0) - 1
            },
            cancellationReason: null,
            paymentData: {
                giftCards: [
                    {
                        id: faker.datatype.number({ min: 10000000000000, max: 99999999999999 }).toString(),
                        redemptionCode: null,
                        name: null,
                        caption: `Credit Limit Gift Card - Customer ${faker.datatype.number({ min: 10000000000000, max: 99999999999999 })}`,
                        value: 0,
                        balance: 0,
                        provider: "lingaro",
                        groupName: null,
                        inUse: false,
                        isSpecialCard: true
                    }
                ],
                transactions: [
                    {
                        isActive: true,
                        transactionId: faker.datatype.uuid().replace(/-/g, '').toUpperCase(),
                        merchantName: companyName,
                        payments: [
                            {
                                id: faker.datatype.uuid().replace(/-/g, '').toUpperCase(),
                                paymentSystem: faker.datatype.number({ min: 1, max: 99 }).toString(),
                                paymentSystemName: faker.random.arrayElement(['Dinheiro', 'Cartão de Crédito', 'PIX', 'Boleto']),
                                value: totalValue,
                                installments: 1,
                                referenceValue: totalValue,
                                cardHolder: null,
                                cardNumber: null,
                                firstDigits: null,
                                lastDigits: null,
                                cvv2: null,
                                expireMonth: null,
                                expireYear: null,
                                url: null,
                                giftCardId: null,
                                giftCardName: null,
                                giftCardCaption: null,
                                redemptionCode: null,
                                group: "cash",
                                tid: null,
                                dueDate: null,
                                connectorResponses: {},
                                giftCardProvider: null,
                                giftCardAsDiscount: null,
                                koinUrl: null,
                                accountId: null,
                                parentAccountId: null,
                                bankIssuedInvoiceIdentificationNumber: null,
                                bankIssuedInvoiceIdentificationNumberFormatted: null,
                                bankIssuedInvoiceBarCodeNumber: null,
                                bankIssuedInvoiceBarCodeType: null,
                                billingAddress: null,
                                paymentOrigin: null
                            }
                        ]
                    }
                ]
            },
            cancellationRequests: null,
            invoiceData: null,
            clientProfileData: {
                id: "clientProfileData",
                email: userEmail,
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                documentType: "cpf",
                document: null,
                phone: faker.phone.phoneNumber(),
                corporateName: companyName,
                tradeName: tradingName,
                corporateDocument: faker.datatype.number({ min: 10000000000000, max: 99999999999999 }).toString(),
                stateInscription: "000000000",
                corporatePhone: faker.phone.phoneNumber(),
                isCorporate: true,
                userProfileId: userProfileId,
                userProfileVersion: null,
                customerClass: null,
                customerCode: null
            },
            shippingData: {
                id: "shippingData",
                address: address,
                logisticsInfo: generateLogisticsInfo(items),
                trackingHints: [],
                selectedAddresses: [address],
                availableAddresses: [address],
                contactInformation: [],
                contactsInfo: []
            },
            customData: {
                customApps: [
                    {
                        fields: {
                            costcenterid: faker.datatype.number({ min: 10000000000000, max: 99999999999999 }).toString(),
                            vendorId: "0",
                            customerCode: `[{"seller":"${accountName}dist1","code":"${faker.datatype.number({ min: 1000, max: 99999 })}"}]`,
                            paymentConditions: `[{"seller":"${accountName}dist1","payment_method":"dinheiro"}]`
                        },
                        id: "organization",
                        major: 1
                    }
                ],
                customFields: []
            },
            purchaseAgentData: null,
            authorizationPolicyData: {
                Status: "accepted",
                DeniedPolicies: [],
                PendingPolicies: []
            },
            items: items,
            sellers: [
                {
                    subSellerId: "1",
                    fulfillmentEndpoint: `http://fulfillment.vtexcommerce.com.br/api/fulfillment?an=${accountName}dist1&affiliateId=SLR&sc=1`,
                    id: `${accountName}dist1`,
                    name: companyName,
                    logo: ""
                }
            ],
            giftRegistryData: null,
            receiptData: null,
            contextData: null,
            marketPlaceOrderId: "",
            marketPlaceOrderGroup: null,
            marketplaceServicesEndpoint: null,
            orderFormId: faker.datatype.uuid(),
            sequence: sequence,
            affiliateId: "",
            status: "",
            callCenterOperator: "",
            userProfileId: userProfileId,
            hostName: accountName,
            creationVersion: null,
            creationEnvironment: null,
            lastChangeVersion: null,
            workflowInstanceId: null,
            marketplacePaymentValue: null,
            orderId: orderId,
            orderGroup: orderGroup,
            state: faker.random.arrayElement(["payment-approved", "payment-pending", "ready-for-handling"]),
            isCheckedIn: false,
            sellerOrderId: `SLR-${orderId}`,
            storeId: null,
            checkedInPickupPointId: null,
            value: totalValue,
            totals: [
                {
                    id: "Items",
                    name: "Total dos Itens",
                    value: totalValue
                },
                {
                    id: "Discounts",
                    name: "Total dos Descontos",
                    value: 0
                },
                {
                    id: "Shipping",
                    name: "Total do Frete",
                    value: 0
                },
                {
                    id: "Tax",
                    name: "Total da Taxa",
                    value: 0
                }
            ],
            ratesAndBenefitsData: {
                rateAndBenefitsIdentifiers: [],
                teaser: []
            },
            clientPreferencesData: {
                locale: "pt-BR",
                optinNewsLetter: false
            },
            commercialConditionData: null,
            marketingData: {
                utmSource: null,
                utmMedium: faker.datatype.number({ min: 10000000000000, max: 99999999999999 }).toString(),
                utmCampaign: faker.datatype.number({ min: 10000000000000, max: 99999999999999 }).toString(),
                utmipage: null,
                utmiPart: null,
                utmiCampaign: null,
                coupon: null,
                marketingTags: []
            },
            storePreferencesData: {
                countryCode: "BRA",
                saveUserData: false,
                timeZone: "E. South America Standard Time",
                currencyCode: "BRL",
                currencyLocale: 1046,
                currencySymbol: "R$",
                currencyFormatInfo: {
                    currencyDecimalDigits: 2,
                    currencyDecimalSeparator: ",",
                    currencyGroupSeparator: ".",
                    currencyGroupSize: 3,
                    startsWithCurrencySymbol: true
                }
            },
            openTextField: null,
            itemMetadata: null,
            taxData: null,
            hooksData: null,
            changeData: null,
            subscriptionData: null,
            salesChannel: "1",
            followUpEmail: faker.internet.email(),
            creationDate: faker.date.recent().toISOString(),
            lastChange: faker.date.recent().toISOString(),
            timeZoneCreationDate: faker.date.recent().toISOString(),
            timeZoneLastChange: faker.date.recent().toISOString(),
            isCompleted: true,
            merchantName: companyName,
            userType: "",
            roundingError: 0,
            allowEdition: false,
            allowCancellation: faker.datatype.boolean(),
            isUserDataVisible: false,
            allowChangeSeller: false
        }
    }

    // Gerar itens para os pedidos
    const itemsOrder1 = Array.from({ length: faker.datatype.number({ min: 1, max: 3 }) }, () => generateItem())
    const itemsOrder2 = Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => generateItem())

    const order1 = generateOrder("500529", orderId1, itemsOrder1)
    const order2 = generateOrder("500530", orderId2, itemsOrder2)

    const totalOrderValue = order1.value + order2.value
    const totalItems = itemsOrder1.reduce((sum, item) => sum + item.quantity, 0) + itemsOrder2.reduce((sum, item) => sum + item.quantity, 0)

    return {
        orders: [order1, order2],
        ordersUrl: `http://${accountName}.vtexcommercestable.com.br/account#/orders`,
        orderGroup: orderGroup,
        subjectItemAttachment: {
            item: itemsOrder1[0]?.name.substring(0, 20) + "..." || "Produto...",
            totalItems: totalItems,
            extraItems: totalItems - 1
        },
        split: true,
        totalValue: totalOrderValue,
        callCenterOperatorData: null,
        _accountInfo: {
            MainAccountName: accountName,
            AccountName: accountName,
            Cnpj: null,
            Id: faker.datatype.uuid(),
            AppId: null,
            IsActive: true,
            IsOperating: faker.datatype.boolean(),
            CreationDate: faker.date.past(2).toISOString(),
            OperationDate: null,
            CompanyName: companyName,
            TradingName: tradingName,
            City: null,
            Complement: null,
            Country: null,
            State: null,
            Address: null,
            District: null,
            Number: null,
            PostalCode: null,
            Licenses: [
                faker.datatype.number({ min: 1, max: 10 })
            ],
            ParentAccountId: null,
            ParentAccountName: null,
            InactivationDate: null,
            Platform: "vtex",
            Privacy: null,
            HasPiiRestriction: false,
            Infra: null,
            Sponsor: faker.datatype.uuid()
        }
    }
}

// Configurações do template
export const orderConfirmationTemplate = {
    id: 'vtexcommerce-new-order',
    name: 'Order confirmation',
    friendlyName: 'Confirmação de pedido',
    description: 'Confirmação de pedido realizado com sucesso',
    category: 'Commerce',
    generateMockData: generateOrderConfirmationMockData,

    // Subject padrão baseado nos dados
    generateSubject: (data: OrderConfirmationTemplateData) => {
        const orderGroup = data.orderGroup
        const totalValue = (data.totalValue / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        return `Pedido confirmado #${orderGroup} - ${totalValue}`
    },

    // Recipient padrão
    getRecipient: (data: OrderConfirmationTemplateData) => {
        return data.orders[0]?.clientProfileData?.email || ''
    }
}

export default orderConfirmationTemplate