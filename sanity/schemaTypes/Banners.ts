import { defineField, defineType } from "sanity"

export const Banners = defineType({
    name: 'Banners',
    title: 'Banners',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required')
        }),
        defineField({
            name: 'imageWeb',
            title: 'ImageWeb',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required().error('Banner image is required')
        }),
        defineField({
            name: 'imageMobile',
            title: 'ImageMobile',
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