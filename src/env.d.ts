interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_API_KEY: string
  // добавь другие env переменные если есть
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}