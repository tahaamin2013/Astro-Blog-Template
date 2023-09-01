import { defineConfig } from 'astro/config';
import sanity from "@sanity/astro";

export default defineConfig({
  integrations: [sanity({
    projectId: '104tbncl',
    dataset: 'canals',
    apiVersion: '2023-02-08',
    useCdn: false,
  })]
});