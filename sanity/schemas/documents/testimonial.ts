import { defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'petName',
      title: 'Pet Name',
      type: 'string',
    },
    {
      name: 'petType',
      title: 'Pet Type',
      type: 'string',
      options: {
        list: [
          { title: 'Dog', value: 'dog' },
          { title: 'Cat', value: 'cat' },
          { title: 'Bird', value: 'bird' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Pet Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Google', value: 'google' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Direct', value: 'direct' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'petName',
      media: 'image',
    },
  },
});
