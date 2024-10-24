import { defineField, defineType } from "sanity"

export const Util_Image = defineType({
    name: 'Util_Image',
    title: 'Util_Image',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'Id',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required')
        }),
        defineField({
            name: 'name',
            title: 'Name',
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
            validation: Rule => Rule.required().error('Banner image is required')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
    ],
})