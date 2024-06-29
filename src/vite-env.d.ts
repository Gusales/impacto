/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VOUNCHERS_API_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}