<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p>测试路由</p>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
  export default {
    props:{
      //属性名:值类型(String)
      author:{
        type:[String],
        default:"Even You"
      }
    }
//    data() {
//      return {
//        author: "微信公众号 jinkey-love",
//        articles: [],
//      }
//    }
  }

</script>

<style>
</style>

