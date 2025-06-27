/**
 * Le fichier shims-vue.d.ts permet à TypeScript de reconnaître les fichiers .vue
 * comme des composants Vue, ce qui évite les erreurs d’import
 * et améliore l’auto-complétion dans l’éditeur.
 */

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
