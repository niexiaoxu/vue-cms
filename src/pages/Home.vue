<template>
  <div>
    <el-container style="border: 1px solid #eee">
      <!--侧边栏-->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <!--菜单栏-->
        <el-menu :default-openeds="['1', '3']" style="min-height:1000px;">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!--右侧栏-->
      <el-container>
        <!--头部-->
        <el-header style="text-align: right; font-size: 12px">
          <el-row :gutter="24">
            <el-col :span="4">
              <div>
                <el-col :span="5">
                  <el-badge :value="666" class="item">
                    <el-button size="small">评论</el-button>
                  </el-badge>
                </el-col>
                <el-col :span="10">
                  <el-badge :value="34444" class="item">
                    <el-button size="small">回复</el-button>
                  </el-badge>
                </el-col>
              </div>
            </el-col>
            <el-col :span="10">
              <div style="margin-top: -10px;">
                <el-button class="el-icon-edit">写点什么</el-button>
                <el-button class="el-icon-share">分享一下</el-button>
                <el-button class="el-icon-delete" disabled>与你无缘</el-button>
                <el-dropdown style="margin: 10px">
                  <!--<i class="el-icon-setting">悬停查看</i>-->
                  <el-button class="el-icon-arrow-down">更多</el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </el-col>
            <el-col :span="10">
              <div>
                <el-input placeholder="请输入内容" v-model="select_value" class="input-with-select">
                  <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                  </el-select>
                  <el-button slot="append" icon="el-icon-search">搜索</el-button>
                </el-input>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <!--内容详情-->
        <el-main>
          <el-row :gutter="20">
            <div class="blank-cart">
              aaa
            </div>
          </el-row>
          <el-row :gutter="20">
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期"  width="100px">
              </el-table-column>
              <el-table-column prop="name" label="姓名"  width="100px">
              </el-table-column>
              <el-table-column prop="state" label="操作" width="100px">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
          </el-row>
          <el-row :gutter="20">
          <div class="block">
            <span class="demonstration"></span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="14000">
            </el-pagination>
          </div>
          </el-row>
        </el-main>

        <!--页脚-->
        <el-footer>
          <div style="text-align: center; margin-top: 20px">Copyright 天网 © 2018</div>
        </el-footer>

      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      state: '锁定',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      // isIndeterminate: true,
      tableData: Array(10).fill(item),
      select: '',
      select_value: '',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
  @import url("//unpkg.com/element-ui@2.3.6/lib/theme-chalk/index.css");
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 860px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .blank-cart {
    background-color: white;
    border: 3px;
    margin-bottom: 5px;
    height: 50px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
