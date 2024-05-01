import {z} from 'zod'

export const createtaskSchema = z.object({
    title: z.string({
        required_error: 'Name is required'
    }),
    description: z.string({
        required_error: 'Description is required'
    }),
    date: z.string({
        required_error: 'Date is required'
    }).datetime().optional(),
})