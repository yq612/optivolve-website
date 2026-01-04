/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<Record<string, never>, Record<string, never>, any>
  export default component
}

declare module 'vue-toast-notification' {
  export interface ToastOptions {
    position?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left'
    duration?: number
    dismissible?: boolean
    onClick?: () => void
    onDismiss?: () => void
    queue?: boolean
    pauseOnHover?: boolean
    maxToasts?: number
    newestOnTop?: boolean
  }

  export interface Toast {
    open(message: string, type?: 'success' | 'error' | 'info' | 'warning', options?: ToastOptions): void
    success(message: string, options?: ToastOptions): void
    error(message: string, options?: ToastOptions): void
    info(message: string, options?: ToastOptions): void
    warning(message: string, options?: ToastOptions): void
    clear(): void
  }

  export function useToast(): Toast

  const Toast: {
    install(app: any, options?: ToastOptions): void
  }

  export default Toast
}
