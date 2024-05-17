import { defineComponent, getCurrentInstance } from "vue";

defineComponent({
    setup(){
       const proxy = getCurrentInstance()?.proxy
       proxy?.customProperty
        return () => <div></div>
    }
})