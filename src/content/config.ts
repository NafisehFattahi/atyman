import { defineCollection, z } from "astro:content";
const productsBlueCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsBlue = {
  productBlue: productsBlueCollection,
};

const productsGreenCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsGreen = {
  productGreen: productsGreenCollection,
};

const productsOrangeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsOrange = {
  productOrange: productsOrangeCollection,
};

const productsOrange1Collection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsOrange1 = {
  productOrange1: productsOrange1Collection,
};

const productsBlue1Collection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsBlue1 = {
  productBlue1: productsBlue1Collection,
};

const productsGreen1Collection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsGreen1 = {
  productGreen1: productsGreen1Collection,
};

const productsNewCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsNew = {
  productNew: productsNewCollection,
};

const servicesListCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsServices = {
  servicesList: servicesListCollection,
};

const machinaryListCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    productName: z.string(),
    description: z.string(),
    video: z.string(),
    videodescription: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collectionsMachinary = {
  machinaryList: machinaryListCollection,
};
