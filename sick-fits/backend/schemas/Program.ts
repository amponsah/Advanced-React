import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Program = list({
  fields: {
    name: text({ isRequired: true }),
    category: select({
      isRequired: true,
      options: [
        { value: 'Childcare', label: 'Childcare' },
        { value: 'Community', label: 'Community' },
        { value: 'Construction', label: 'Building & Construction' },
        { value: 'Environment', label: 'Environment' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Teaching', label: 'Teaching' },
      ],
    }),
    description: text({ ui: { displayMode: 'textarea' } }),
    country: text(),
    status: select({
      options: [
        { value: 'DRAFT', label: 'Draft' },
        { value: 'PUBLISHED', label: 'Published' },
        { value: 'SUSPENDED', label: 'Suspended' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    fee: integer(),
    photo: relationship({
      ref: 'ProgramImage.program',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
});
