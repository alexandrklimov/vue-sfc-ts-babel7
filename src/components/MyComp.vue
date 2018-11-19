<template>
    <div>
        <input type="text" v-model="value"/>
        <div>Inputed text: {{value}}</div>
        <button @click="value = null">Reset</button>
    </div>
</template>

<script lang="ts">
    import Component from 'vue-class-component';
    import Vue from "vue";

   /* @Component({})
    export default class MyComponent extends Vue{
        value = '';
    }*/
    export default {
        name: "MyComp",
        data: function(){
            return {
                value:''
            }
        },
        methods:{
            myMeth1: function() : void{
                let meth2: (arg1: string, arg2: string) => number = function(arg1: string, arg2: string) : number{
                    let meth3: (arg: number) => number = (arg: number) => 42;
                    return meth3(arg1.concat(arg2).length);
                }
            }
        }
    }

</script>

<style scoped>

</style>