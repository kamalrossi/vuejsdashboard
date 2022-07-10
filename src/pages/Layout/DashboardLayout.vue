<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/post">
        <md-icon>person</md-icon>
        <p>Post</p>
      </sidebar-link>
      <sidebar-link to="/author">
        <md-icon>content_paste</md-icon>
        <p>Author</p>
      </sidebar-link>
      <sidebar-link to="/comment">
        <md-icon>library_books</md-icon>
        <p>Comment</p>
      </sidebar-link>
      <sidebar-link to="/advertisement">
        <md-icon>bubble_chart</md-icon>
        <p>Advertisement</p>
      </sidebar-link>
      <sidebar-link to="/comment">
        <md-icon>location_on</md-icon>
        <p>Comment</p>
      </sidebar-link>
      <sidebar-link to="/review">
        <md-icon>notifications</md-icon>
        <p>Review</p>
      </sidebar-link>
      <sidebar-link to="/settings" class="active-pro">
        <md-icon>unarchive</md-icon>
        <p>Settings</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
};
</script>
