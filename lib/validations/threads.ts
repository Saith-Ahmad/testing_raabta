import * as z from 'zod';

export const ThreadValidation = z.object({
    thread : z.string().nonempty().min(3, {message : "Minimum Three Characters Required"}),
    accountId: z.string(),
    threadImage : z.string().optional(),
})


export const CommentValidation = z.object({
    thread : z.string().nonempty().min(3, {message : "Minimum Three Characters Required"}),
})

