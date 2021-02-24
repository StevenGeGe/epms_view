<template>

  <div class="app">
    <el-container>
      <el-aside :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
                class="app-side app-side-left">
        <div class="app-side-logo">
          <img :width="isCollapse ? '60' : '60'"
               height="60"
               src="@/assets/logo.png"/>
        </div>
        <div>
          <!-- 我是样例菜单 -->
          <el-menu :collapse="isCollapse"
                   @open="handleOpen"
                   class="el-menu-vertical-demo"
                   default-active="1-4-1">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item disabled
                          index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>

      <el-container>
        <el-header class="app-header">
          <div @click.prevent="toggleSideBar"
               style="width: 60px; cursor: pointer;">
            <i class="el-icon-d-arrow-left" v-show="!isCollapse"></i>
            <i class="el-icon-d-arrow-right" v-show="isCollapse"></i>
          </div>
          <!-- 我是样例菜单 -->
          <el-menu @select="handleSelect"
                   active-text-color="#409EFF"
                   class="el-menu-demo tab-page"
                   default-active="1"
                   mode="horizontal">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item disabled
                          index="3">消息中心
            </el-menu-item>
            <el-menu-item index="4">
              <a href="#">订单管理</a>
            </el-menu-item>
          </el-menu>

          <div class="app-header-userinfo">
            <el-dropdown :hide-on-click="false"
                         trigger="hover">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item @click.native="logout"
                                  divided>退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>

export default {
  name: "Container",
  data() {
    return {
      username: '',
      isCollapse: false
    }
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse
    },
    logout: function () {
      this.$confirm('确认退出?', '提示', {})
          .then(() => {
            sessionStorage.removeItem('user');
            this.$router.push('/login');
          })
          .catch(() => {
          });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted: function () {
    let user = sessionStorage.getItem('user');
    if (user) {
      this.username = user;
    }
  },
}

</script>

<style scoped>

</style>