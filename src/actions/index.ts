 import { defineAction } from "astro:actions";
 import { z } from "astro/zod";

 export const server = {
  contactForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string("Name must be at least 2 characters long").min(2),
      email: z.email("Incorrect email address"),
      subject: z.string("Subject must be at least 2 charactes long").min(2),
      message: z.string("Message too short minimum 10 characters").min(10),
    }),
    handler: async (input) => {
     return input; 
    }
  })
 }
