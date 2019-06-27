import Vue from "vue"
import "./assets/index.scss"
import SayHellow from "@/cmp/SayHellow"
const app=new Vue({
  el:"#app",
  components:{
    SayHellow
  },
  template:"<SayHellow></SayHellow>",
  data:{
    message:"hellew web pack"
  },
   async created(){
     this.test()
  },
  methods:{
    test:()=>{
      console.log(123);
    }
  }
})
console.log("123")
