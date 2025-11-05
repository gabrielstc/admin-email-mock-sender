import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

interface EmailData {
  accountName: string
  serviceType: number
  templateName: string
  jsonData: any
}

interface EmailRequest {
  templateName: string
  email: string
  jsonData: any
}



interface EmailHistory {
  id: string
  templateName: string
  email: string
  status: string
  sentDate: string
  subject: string
}

export default class Message extends ExternalClient {
  public constructor(context: IOContext, options?: InstanceOptions) {
    super(
      `http://${context.account}.vtexcommercestable.com.br/api/mail-service/pvt/`,
      context,
      {
        ...options,
        timeout: 15000,
      }
    )
  }

  private get defaultHeaders() {
    return {
      'Authorization': `Bearer ${this.context.authToken}`,
      'VtexIdclientAutCookie': this.context.authToken,
      'X-Vtex-Use-Https': 'true',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  }

  // Método original mantido para compatibilidade
  public async sendMail(
    abandonedCartData: any,
    abandonedCartTemplate: string
  ): Promise<string> {
    const data: EmailData = {
      accountName: this.context.account,
      serviceType: 0,
      templateName: abandonedCartTemplate,
      jsonData: {
        ...abandonedCartData,
      },
    }

    return this.http.post(`sendmail`, data, {
      metric: 'send-mail',
      headers: this.defaultHeaders,
    })
  }

  // Envio de e-mail mais robusto
  public async sendEmail(emailRequest: EmailRequest): Promise<any> {
    // Usar os dados reais da requisição com o formato correto
    const data = {
      accountName: this.context.account,
      serviceType: 0,
      templateName: emailRequest.templateName,
      jsonData: {
        // Incluir todos os dados do template
        ...emailRequest.jsonData
      }
    }

    try {
      // Enviar email com os dados reais
      return await this.http.post(`sendmail`, data, {
        metric: 'send-email',
        headers: this.defaultHeaders,
      })
    } catch (error) {
      throw error
    }
  }



  // Listar provedores de e-mail
  public async getProviders(): Promise<any[]> {
    return this.http.get(`providers`, {
      metric: 'get-providers',
      headers: this.defaultHeaders,
    })
  }

  // Histórico de e-mails enviados
  public async getEmailHistory(params?: {
    page?: number
    size?: number
    templateName?: string
    email?: string
    startDate?: string
    endDate?: string
  }): Promise<{ emails: EmailHistory[], totalCount: number }> {
    const queryParams = new URLSearchParams()

    if (params?.page) queryParams.append('page', params.page.toString())
    if (params?.size) queryParams.append('size', params.size.toString())
    if (params?.templateName) queryParams.append('templateName', params.templateName)
    if (params?.email) queryParams.append('email', params.email)
    if (params?.startDate) queryParams.append('startDate', params.startDate)
    if (params?.endDate) queryParams.append('endDate', params.endDate)

    const url = `history${queryParams.toString() ? `?${queryParams.toString()}` : ''}`

    return this.http.get(url, {
      metric: 'get-email-history',
      headers: this.defaultHeaders,
    })
  }

  // Buscar no histórico com filtros avançados
  public async searchEmailHistory(searchData: {
    templateName?: string
    email?: string
    status?: string
    startDate?: string
    endDate?: string
    page?: number
    size?: number
  }): Promise<{ emails: EmailHistory[], totalCount: number }> {
    return this.http.post(`history/search`, searchData, {
      metric: 'search-email-history',
      headers: this.defaultHeaders,
    })
  }

  // Validar template (útil para preview)
  public async validateTemplate(templateName: string, jsonData: any): Promise<{
    isValid: boolean
    preview: string
    errors?: string[]
  }> {
    const data = {
      templateName,
      jsonData,
    }

    return this.http.post(`templates/validate`, data, {
      metric: 'validate-template',
      headers: this.defaultHeaders,
    })
  }

  // Buscar templates de e-mail disponíveis
  public async getTemplates(): Promise<any[]> {
    // This method is not used since we handle the API call directly in the service
    // Keeping it for compatibility but throwing an error to indicate it should use the service endpoint
    throw new Error('Use the service endpoint /_v/email-templates instead')
  }


}
