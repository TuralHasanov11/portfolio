/// <reference types="vite/client" />
declare module 'maath/random/dist/maath-random.esm';
declare module '@portabletext/to-html'

interface ImportMetaEnv {
    readonly VITE_CONTACT_EMAIL_ADDRESS: string
    readonly VITE_LINKEDIN_ADDRESS: string
    readonly VITE_GITHUB_ADDRESS: string
    readonly VITE_YOUTUBE_ADDRESS: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }