<template>
  <!-- 页面主样式  -->
  <!-- 页面容器布局 -->
  <div class="about">
    <el-container>
      <el-header>头</el-header>
      <el-container>
        <el-aside width="200px">侧边栏</el-aside>
        <el-main>主体</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<!--
scoped lang="less": 设置格式生效
-->
<style lang="less" scoped>
// 样式 -->
// el-header: 顶栏容器
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

// el-aside: 侧边栏容器
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

// el-main: 主要区域容器
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

/*
* 设置layout容器铺满整个页面
*/
.el-container {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}

.el-header {
  padding: 0;
  z-index: 1000;
}

// header菜单需要靠右的添加.fr即可
// (如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>)
.el-header .fr {
  float: right;
}

.el-header .el-menu {
  border-bottom: none;
}

.el-aside, .el-main {
  padding-top: 60px;
}

.el-aside {
  background: #545c64;
}

.el-aside .el-menu {
  border-right: none;
}


</style>
