import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "E:/Nuxt/The-Wake-Nuxt-3-TailwindCSS-Strapi/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}