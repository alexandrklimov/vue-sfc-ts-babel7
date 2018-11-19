import Vue from 'vue';
//import MyComp from './components/MyComp.vue';
import MyComp from './components/MyComp.vue';

new Vue({
    el: "#app",
    components: {
        MyComp
    },
    methods: {
        myFunc: function () {
            let meth2: (arg1: string, arg2: string) => number = function (arg1: string, arg2: string): number {
                let meth3: (arg: number) => number = (arg: number) => 42;
                return meth3(arg1.concat(arg2).length);
            }
        }
    },
    template: `
<div>
    <div>My Application</div>
    <my-comp></my-comp>        
</div>
  `
});
