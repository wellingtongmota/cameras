/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_FIREBASE_API_KEY: string,
  readonly VITE_APP_FIREBASE_AUTH_DOMAIN: string,
  readonly VITE_APP_FIREBASE_DATABASE_URL: string,
  readonly VITE_APP_PROJECT_ID: string,
  readonly VITE_APP_STORAGE_BUCKET: string,
  readonly VITE_APP_MESSAGING_SENDER_ID: string,
  readonly VITE_APP__APP_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
