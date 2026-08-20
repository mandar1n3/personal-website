 import { defineAction } from "astro:actions";
 import { z } from "astro/zod";

 export const server = {
  contactForm: defineAction({
    accept: "form",
    input: z.object({
      name: z.string("Invalid input").min(2, "Name must be at least 2 characters long"),
      email: z.email("Incorrect email address"),
      subject: z.string("Invalid input").min(2, "Subject must be at least 2 charactes long"),
      message: z.string("Invalid input").min(10, "Message too short minimum 10 characters"),
    }),
    handler: async (input) => {
     return input; 
    }
  })
 }
