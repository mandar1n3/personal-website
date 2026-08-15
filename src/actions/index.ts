 import { defineAction } from "astro:actions";
 import { z } from "astro/zod";

 export const server = {
  contactForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string().min(2),
      email: z.email()
    }),
    handler: async (input) => {
     return input; 
    }
  })
 }
