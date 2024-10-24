import { defineField, defineType } from "sanity";

export const Categories = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required().error('Title is required')
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required().error('Image is required')
    }),
    defineField({
      name: 'categoryType',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'MEN', value: 'MEN' },
          { title: 'WOMEN', value: 'WOMEN' }
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required().error('Category type is required')
    }),
  ],
});
