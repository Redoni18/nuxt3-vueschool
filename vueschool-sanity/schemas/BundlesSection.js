export default {
    name: 'pricingBundle',
    title: 'Pricing Bundle',
    type: 'document',
    fields: [
      {
        name: 'bundleType',
        title: 'Bundle Type',
        type: 'string',
        description: 'Enter the title of the pricing bundle (e.g., Basic, Professional, Premium)',
        validation: Rule => Rule.required(),
      },
      {
        name: 'packageOffers',
        title: 'Package Offers',
        type: 'array',
        of: [{ 
          type: 'object',
          fields: [
            {
              name: 'packageOffering',
              title: 'Package Offering',
              type: 'string',
              description: 'Enter the offer for this package',
              validation: Rule => Rule.required(),
            },
            {
              name: 'appliesToPackage',
              title: 'Applies to package',
              type: 'boolean',
              description: 'Check if this offer applies to this bundle',
            },
          ],
        }],
        description: 'Enter the different package offers as bullet points',
        validation: Rule => Rule.required(),
      },
    ],
  };
  