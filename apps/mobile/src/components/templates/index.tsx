import ErrorBoundaryTemplate from './ErrorBoundaryTemplate'
import PageTemplateLargeAppBar from './PageTemplate/PageTemplateLargeAppBar'
import PageTemplateRoot from './PageTemplate/PageTemplateRoot'
import TabTemplateNavigation from './TabTemplate/TabTemplateNavigation'
import TabTemplateRoot from './TabTemplate/TabTemplateRoot'

const Template = {
  Tab: {
    Root: TabTemplateRoot,
    Navigation: TabTemplateNavigation
  },
  Page: {
    Root: PageTemplateRoot,
    LargeAppBar: PageTemplateLargeAppBar
  },
  ErrorBoundary: ErrorBoundaryTemplate
}

export default Template
