// Types para o EmailSender
export interface LegacyEmailTemplate {
    Name: string;
    FriendlyName: string;
    Description?: string | null;
    IsDefaultTemplate: boolean;
    AccountId: string;
    AccountName: string;
    ApplicationId?: number | null;
    IsPersisted: boolean;
    IsRemoved: boolean;
    Type: string;
}

export interface MockData {
    customerName?: string;
    customerEmail?: string;
    storeName?: string;
    orderId?: string;
    orderValue?: string;
    trackingCode?: string;
    deliveryAddress?: string;
    products?: Array<{
        name: string;
        price: string;
        quantity: number;
        image: string;
    }>;
    email?: string;
    subject?: string;
    [key: string]: any;
}

export interface EmailSenderState {
    selectedTemplate: string;
    isLoading: boolean;
    mockData: MockData | null;
    isEditingJson: boolean;
    jsonString: string;
    jsonError: string;
    availableTemplates: LegacyEmailTemplate[];
    isLoadingTemplates: boolean;
}