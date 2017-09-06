<template>
<div id="main-menu">
<!-- nav bar -->
<header>
  <!--<div class="navbar-fixed">-->
    <nav class="blue darken-3">
      <div class="nav-wrapper">
        <a data-activates="slide-out" class="button-collapse left brand-logo">{{appName}}</a>
        <ul class="right hide-on-small-only">
          <li><a>Action 1</a></li>
          <li><a>Action 2</a></li>
        </ul>
      </div>
    </nav>
  <!--</div>-->
</header>
<!-- nav bar -->

<!-- side navbar -->
<ul id="slide-out" class="side-nav fixed">
  <li>
    <div class="userView">
      <div class="background blue darken-3"></div>
      <a><span class="white-text name">Name</span></a>
      <a><span class="white-text email">Email</span></a>
    </div>
  </li>
  <li><a class="subheader">Items</a></li>
  <li>
    <a><i class="material-icons">star</i>Item</a>
  </li>
  <li><div class="divider"></div></li>
  <li><a href="#!"><i class="material-icons">person_outline</i>Logout</a></li>
  <li><div class="divider hide-on-med-and-up"></div></li>
  <li><a class="subheader hide-on-med-and-up">Go To</a></li>
  <li class="hide-on-med-and-up"><a>Action 1</a></li>
  <li class="hide-on-med-and-up"><a>Action 2</a></li>
</ul>
<!-- side navbar -->

<!-- router view -->
<main>
  <router-view>No page present</router-view>
</main>
<!-- router view -->

</div>
</template>

<script>
export default {
  name: 'main-menu',
  mounted: function(){
    $(".button-collapse").sideNav()
    $('ul.tabs').tabs()
  },
  computed: {
    appName() {
      return this.$store.state.appName
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header, main, footer {
      padding-left: 300px;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }
</style>
