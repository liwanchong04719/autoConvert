<template>
  <div id="app">
    <h1>hello VUE</h1>
    <secondCom author="我是作者"></secondCom>
    <div v-drag v-bgcolor="'lightblue'" style=" left:0;top:0; position: absolute; width: 100px; height: 100px;"></div>
    <first-com></first-com>
    <ul>
      <li v-bgcolor="'yellow'">
        <router-link to='/first'>路由去第一个组件</router-link>
      </li>
      <li v-bgcolor="'pink'">
        <router-link to='/second'>路由去第一个组件</router-link>
      </li>
      <li v-bgcolor="green">where do you want to go</li>
    </ul>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceIn"
      leave-active-class="animated swing">
      <router-view></router-view>
    </transition>
    <button @click="toggle">toggle</button>
    <transition name="fade">
      <div v-if="isShow" :style="style">
        show and hide by transition!!
      </div>
    </transition>

    <button @click="show = !show">
      Toggle render
    </button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceIn"
      leave-active-class="animated swing"
    >
      <p v-if="show" :style="style">hello</p>
    </transition>

    <Father>
      <Son>1</Son>
      <Son>2</Son>
      <Son>3</Son>
    </Father>
    <br/>
    <v-one></v-one>

    <div>
      <span>测试is动态切换组件</span>
      <span class="iscontents" v-on:click="changecontent('home')">home</span>
      <span class="iscontents" v-on:click="changecontent('contents')">contents</span>
      <span class="iscontents" v-on:click="changecontent('contact')">contact</span>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceIn"
    >
      <div :is="currentView" :style="viewStyle">

      </div>

    </transition>
    <login-view></login-view>



  </div>
</template>

<script>
  import firstCom from './components/firstCom.vue';
  import secondCom from './components/secondCom.vue';
  import loginView from './views/loginView.vue';
  import Vue from 'vue';
  import '../static/css/animate.css';

  var Son = {
    template: "<div>son 在这里！！</div>"
  };

  var Father = {
    template: "<div>father嵌套son要有个插槽，否则显示不出来son<slot></slot></div>"
  };

  var home = {
    template: "<div>这是主页</div>"
  };
  var contents = {
    template: "<div>这是主要内容</div>"
  };
  var contact = {
    template: "<div>请联系我们</div>"
  };


  //props用来获取组件上自定义的属性值，父传子,props定义在子组件上
  var vTwo = {
    props: {
      //属性名:值类型(String)
      title: {
        type: [String, Number],
        default: "xxxxxx"
      }
    },
    template: `<div class="well">{{title}}</div>`
  }

  var vOne = {
    template: `<div class="well">父组件<v-two title="父组件嵌套子组件并给子组件传值一"></v-two><v-two title="父组件嵌套子组件并传值二" ></v-two></div>`,
    components: {
      vTwo
    },
    data: function () {
      return {
        n: 1,
        m: 3
      }
    }
  }

  export default {
    name: 'app',
    data() {
      return {
        green: 'green',
        isShow: false,
        show: true,
        style: 'width:100px;height:100px;background-color:pink;',
        viewStyle: 'width:500px;height:200px;background-color:lightyellow;margin:0 auto',
        currentView: home
      }
    },
    components: {
      firstCom,
      secondCom,
      Father,
      Son,
      vOne,
      vTwo,
      home,
      contents,
      contact,
      loginView
    },
    methods: {
      toggle: function () {
        this.isShow = !this.isShow
      },
      changecontent: function (val) {
          this.currentView = val ;
      }
    },
  }


  //全局的指令:改变背景色 v-xxx
  Vue.directive("bgcolor", function (el, binding) {
    el.style.background = binding.value
  })
  Vue.directive("drag", function (el, binding) {
    el.onmousedown = function (e) {

      var sx = e.clientX - el.offsetLeft;
      var sy = e.clientY - el.offsetTop;

      document.onmousemove = function (e) {
        var ex = e.clientX - sx;
        var ey = e.clientY - sy;

        el.style.left = ex + "px";
        el.style.top = ey + "px";
      }

      document.onmouseup = function (e) {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  })

</script>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100px);
  }

  .iscontents {
    background-color:salmon;
    width: 90%;
    margin: 0 auto;
    cursor: pointer;
  }
</style>
