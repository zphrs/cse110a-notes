import { defineCollection, z } from "astro:content"
// 2. Define your collection(s)
const noteCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    date: z.date(),
    nextNote: z.string().optional(),
    prevNote: z.string().optional(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  notes: noteCollection,
}
