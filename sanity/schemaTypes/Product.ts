import {defineField, defineType}  from 'sanity'

export const Product = defineType ({
    name: 'Product',
    title: 'Product',
    description: 'A list of products',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required().min(3).error('name is to short')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'sku',
            title: 'SKU',
            type: 'string',
            validation: Rule => Rule.required().error('Product ID required')
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                {title: 'T-Shirt', value: 't-shirt'},
                {title: 'Shirt', value: 'shirt'},
                {title: 'Jean', value: 'Jean'},
                {title: 'Shoes', value: 'shoes'},
                {title: 'Kurta', value: 'kurta'},
                {title: 'Sharee', value: 'sharee'},
                {title: 'Drees', value: 'Dress'},
                {title: 'Heel', value: 'heel'}
                ],
                layout: 'radio' // Optional: use 'dropdown' for a dropdown list instead of radio buttons
            },
            validation: Rule => Rule.required().error('Category is required')
          }),
          defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: Rule => Rule.required().positive().error('Price must be a positive number')
          }),
          defineField({
            name: 'discountPrice',
            title: 'Discount Price',
            type: 'number',
            description: 'Discounted price (if applicable)',
            validation: Rule => Rule.min(0).max(100).error('Discount price should be between 0 and 100')
          }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required().error('Product image is required')
        }),
        defineField({
            name: 'sizes',
            title: 'Sizes & Stock',
            type: 'array',
            of: [
                {
                type: 'object',
                fields: [
                    {
                    name: 'size',
                    title: 'Size',
                    type: 'string',
                    options: {
                        list: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                        layout: 'dropdown'
                    },
                    validation: Rule => Rule.required().error('Size is required')
                    },
                    {
                    name: 'stock',
                    title: 'Stock Quantity',
                    type: 'number',
                    validation: Rule => Rule.required().min(0).error('Stock quantity must be a positive number')
                    }
                ]
                }
            ],
            validation: Rule => Rule.required().min(1).error('At least one size is required')          
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            validation: Rule => Rule.required().error('Color is required')
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        
        defineField({
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
                list: [
                {title: 'Men', value: 'men'},
                {title: 'Women', value: 'women'},
                {title: 'Kids', value: 'kids'},
                {title: 'Unisex', value: 'unisex'}
                ],
                layout: 'radio' // Optional: use 'dropdown' for a dropdown list instead of radio buttons
            },
            validation: Rule => Rule.required().error('Gender is required')
        }),
        defineField({
            name: 'fit',
            title: 'Fit',
            type: 'string',
            options: {
                list: [
                {title: 'Oversized', value: 'oversized'},
                {title: 'Slim', value: 'slim'},
                {title: 'Regular', value: 'regular'}
                ],
                layout: 'radio' // Optional: use 'dropdown' for a dropdown list instead of radio buttons
            },
            validation: Rule => Rule.required().error('Fit is required')
        }),
        defineField({
            name: 'occasion',
            title: 'Occasion',
            type: 'string',
            options: {
                list: [
                {title: 'Casual', value: 'casual'},
                {title: 'Formal', value: 'formal'},
                {title: 'Party', value: 'party'},
                {title: 'Athletic', value: 'athletic'}
                ],
                layout: 'radio' // Optional: use 'dropdown' for a dropdown list instead of radio buttons
            },
            validation: Rule => Rule.required().error('Fit is required')
        }),
        defineField({
            name: 'neck',
            title: 'Neck',
            type: 'string',
            options: {
                list: [
                {title: 'Round', value: 'round'},
                {title: 'Polo', value: 'polo'},
                {title: 'Hoddie', value: 'hoddie'},
                {title: 'V-Neck', value: 'v-neck'}
                ],
                layout: 'radio' // Optional: use 'dropdown' for a dropdown list instead of radio buttons
            },
        }),
    ],
})