import { defineField, defineType } from "sanity"

export const Announcement = defineType({
    name: 'Announcement',
    title: 'Announcement',
    type: 'document',
    fields: [
        defineField({
            name: 'message',
            title: 'Message',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required')
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
    ],
})