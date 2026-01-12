import { type SchemaTypeDefinition } from 'sanity'

import { eventType } from './event'
import { departmentType } from './department'
import { partnerType } from './partner'
import { consultingPortfolioType } from './consultingPortfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, departmentType, partnerType, consultingPortfolioType],
}
