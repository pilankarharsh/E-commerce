import { defineField, defineType } from "sanity"

export const Collection = defineType({
    name: 'Collection',
    title: 'Collection',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'link',
            title: 'Link',
            type: 'url',
            description: 'Link to navigate when the banner is clicked',
            validation: Rule => Rule.required().error('URL is required')
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ],
})