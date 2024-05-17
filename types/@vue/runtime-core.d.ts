
import  'vue';
declare module 'vue' {
  interface ComponentCustomProperties {
    myCustomMethod: () => void;
    customProperty: string;
  }
}