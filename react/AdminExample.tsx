import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { defineMessages, FormattedMessage } from 'react-intl'
import {
  experimental_I18nProvider as I18nProvider,
  createSystem,
  PageHeader,
  PageTitle,
  ToastProvider,
} from '@vtex/admin-ui'

import EmailSender from './EmailSender'

const [ThemeProvider] = createSystem({
  key: 'admin-ui-example',
})

const messages = defineMessages({
  title: {
    id: 'admin/admin-example.title',
  },
})

function AdminExample() {
  const {
    culture: { locale },
  } = useRuntime()

  return (
    <I18nProvider locale={locale}>
      <ThemeProvider>
        <ToastProvider>
          <PageHeader>
            <PageTitle>
              <FormattedMessage {...messages.title} />
            </PageTitle>
          </PageHeader>

          <div style={{ padding: '0 4rem' }}>
            <EmailSender />
          </div>
        </ToastProvider>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default AdminExample
