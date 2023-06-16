<!--
 * @Description: 工作台
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/pages/work/index.vue
-->
<template>
  <div class="work">
    <p class="work-title">工作台</p>
    <div class="work-tab">
      <el-tabs v-model="topActive" class="work-tab-tabs" @tab-click="handleClickTab">
        <el-tab-pane label="概览" name="1"></el-tab-pane>
        <el-tab-pane label="荣誉证书" name="2"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="work-info" v-if="topActive == 1">
      <div class="work-info-left">
        <el-card shadow="hover">
          <div class="card-heard">我的信息</div>
          <div class="work-info-cont">
            <p>
              <!-- <el-statistic title="主体" :value="268500" /> -->
              <span>主体</span>
              <span>1200</span>
            </p>
            <p>
              <span>资质</span>
              <span>1200</span>
            </p>
            <p>
              <span>证书</span>
              <span>1200</span>
            </p>
            <p>
              <span>员工</span>
              <span>1200</span>
            </p>
            <p>
              <span>项目</span>
              <span>1200</span>
            </p>
          </div>
          <div class="work-info-btn">
            <el-button type="primary">创建资源</el-button>
            <el-button>证书转调</el-button>
          </div>
        </el-card>
        <div class="work-danger">
          <div>
            <el-card shadow="hover">
              <div class="card-heard">资源预警</div>
              <div class="work-danger-box">
                <div class="work-danger-count" style="background: #f8efef">
                  <span>证书预警</span>
                  <span style="color: #c80000">1200</span>
                </div>
                <div class="work-danger-count" style="background: #f8efef">
                  <span>员工预警</span>
                  <span style="color: #c80000">1200</span>
                </div>
              </div>
            </el-card>
          </div>
          <div>
            <el-card shadow="hover">
              <div class="card-heard">工单处理</div>
              <div class="work-danger-box">
                <div class="work-danger-count">
                  <span>已提交</span>
                  <span>1200</span>
                </div>
                <div class="work-danger-count" style="background: #fff7d1">
                  <span>处理中</span>
                  <span>1200</span>
                </div>
                <div class="work-danger-count" style="background: #e8fbec">
                  <span>已完成</span>
                  <span>1200</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>

        <el-card shadow="hover">
          <div class="card-heard bot-line-no">新闻政策</div>
          <div class="">
            <div class="news-title">
              <el-tabs v-model="newsActive" class="work-tab-tabs" @tab-click="handleClickNews">
                <el-tab-pane name="1">
                  <template #label>
                    <el-badge is-dot :hidden="true" class="dot-coin">
                      <span>通知公告</span>
                    </el-badge>
                  </template>
                </el-tab-pane>
                <el-tab-pane label="政策文件" name="2">
                  <template #label>
                    <el-badge is-dot :hidden="false" class="dot-coin">
                      <span>政策文件</span>
                    </el-badge>
                  </template>
                </el-tab-pane>
                <el-tab-pane label="办事大厅" name="3">
                  <template #label>
                    <el-badge is-dot :hidden="false" class="dot-coin">
                      <span>办事大厅</span>
                    </el-badge>
                  </template>
                </el-tab-pane>
                <el-tab-pane label="招标公告" name="4">
                  <template #label>
                    <el-badge is-dot :hidden="false" class="dot-coin">
                      <span>招标公告</span>
                    </el-badge>
                  </template>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="news-list">
              <p class="flex-between" v-for="(item, index) in 6" :key="index">
                <span>关于2021年度第一批省级技能大师工作室申报的通知</span>
                <span>2021-06-01</span>
              </p>
            </div>
            <div class="news-pages">
              <Pages :pageSize="pages.pageSize" :pageNum="pages.pageNum" :total="pages.total" @changePage="changePage" />
            </div>
          </div>
        </el-card>
      </div>
      <div class="work-info-right">
        <div style="margin-bottom: 20px">
          <el-card shadow="hover">
            <div class="card-heard">账户信息</div>
            <div class="info-list">快板网集团有限公司</div>
            <div class="info-date">
              有效期：2021-06-01 至 2021-06-01
              <el-button link size="small" @click="">续费</el-button>
            </div>
          </el-card>
        </div>

        <div style="margin-bottom: 20px">
          <el-card shadow="hover">
            <div class="card-heard">转调历史</div>
            <div class="news-list">
              <p v-for="(item, index) in 2" :key="index">
                <b></b>
                <span>关于2021年度第一批省级技能大师工作室申报的通知</span>
              </p>
              <p v-for="(item, index) in 2" :key="index">
                <b></b>
                <span>关于2021年度第一批省级技能大</span>
              </p>
            </div>
          </el-card>
        </div>

        <div>
          <el-card shadow="hover">
            <div class="card-heard bot-line-no">常见问题</div>
            <div class="">
              <div class="news-title">
                <el-tabs v-model="questionActive" class="work-tab-tabs" @tab-click="handleClickQuestion">
                  <el-tab-pane label="工商财税" name="1"></el-tab-pane>
                  <el-tab-pane label="资质咨询" name="2"></el-tab-pane>
                  <el-tab-pane label="证书咨询" name="3"></el-tab-pane>
                  <el-tab-pane label="托管咨询" name="4"></el-tab-pane>
                </el-tabs>
              </div>
              <div class="news-list">
                <p v-for="(item, index) in 6" :key="index">
                  <Icons name="helpcenter" size="14" style="margin-right: 5px; color: #409eff" />
                  <span>关于2021年度第一批省级技能大师工作室申报大师工作室申报大师工作室申报</span>
                </p>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <div class="work-pic" v-if="topActive == 2">
      <!-- <p class="work-add">
        <el-button type="primary" @click="addPic">添加荣誉</el-button>
      </p> -->
      <div class="work-pic-list">
        <div class="work-pic-list-box" v-for="(item, index) in 13" :key="index">
          <el-card shadow="hover">
            <img src="" alt="" />
          </el-card>
        </div>
      </div>
    </div>
  </div>
  <Dialogs ref="dialog" title="测试用">
    <home-test ref="hometest" @test="test" />
  </Dialogs>
</template>
<script setup>
import HomeTest from "@/components/home/homeTest.vue";
import Dialogs from "@/components/public/dialogs.vue";

import stores from "@/store";
import Icons from "@/components/public/icons.vue";
import Pages from "@/components/public/pages.vue";
import {routerJump} from "@/assets/js/utils.js";
const props = defineProps({});

function handleClick(tab, event) {
  console.log(tab, event);
}
//横向滚动

//分页
const pages = reactive({
  pageSize: 10,
  pageNum: 2,
  total: 40,
});
function changePage(page) {
  console.log(page);
  pages.pageNum = page;
}

//顶部tab
const topActive = ref("1");
function handleClickTab() {
  console.log(topActive.value);
}

// 新闻政策
const newsActive = ref("1");
function handleClickNews() {
  console.log(newsActive.value);
}

//荣誉列表
const dialog = ref(null);
function addPic() {
  dialog.value.openDialog();
}

//常见问题
const questionActive = ref("1");
function handleClickQuestion() {}

function test() {
  console.log("test");
  dialog.value.closeDialog();
}
</script>
<style scoped lang="scss">
.work-title {
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
}
.work-tab-tabs {
  height: 40px;
  margin-bottom: 8px;
  background: #fff;
  :deep(.el-tabs__nav-wrap) {
    .el-tabs__item {
      min-width: 70px;
      padding: 0px;
      font-weight: normal;
      font-size: 13px;
    }
  }
  .dot-coin {
    :deep(.el-badge__content) {
      right: 2px;
      width: 6px;
      height: 6px;
    }
  }
}
.work-tab {
  position: relative;
}

.work-info {
  display: flex;
  height: 100%;
  padding: 0 20px;
  .work-info-left {
    height: 100%;
    flex: 1;
    background-color: inherit;
    margin-right: 20px;
    padding: 10px 0;
    .work-info-cont {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-top: 25px;
      > p {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        > span {
          font-size: 24px;
          color: #606266;
          font-weight: bold;
          &:first-child {
            font-size: 12px;
            margin-bottom: 12px;
            font-weight: bold;
          }
        }
      }
    }
    .work-info-btn {
      margin-top: 20px;
      padding-left: 15px;
    }
    .work-danger {
      display: flex;
      padding: 20px 0;
      > div {
        flex: 1;
        &:first-child {
          margin-right: 20px;
        }
      }
      .work-danger-box {
        display: flex;
        margin-left: 15px;
        .work-danger-count {
          flex: 1;
          background: #f7f9fa;
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 20px 25px;
          > span {
            &:first-child {
              font-size: 12px;
              color: #606266;
              font-weight: bold;
              margin-bottom: 10px;
            }
            &:last-child {
              font-size: 24px;
              font-weight: bold;
              color: #333;
            }
          }
        }
      }
    }
  }
  .work-info-right {
    flex: none;
    width: 340px;
    height: 100%;
    background-color: inherit;
    padding: 10px 0;
  }
  .news-title {
    padding: 0 5px;
  }
  .news-list {
    margin-top: 10px;
    padding: 0 15px;

    > p {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      > b {
        width: 5px;
        height: 5px;
        background-color: #e6a23c;
        border-radius: 50%;
        margin-right: 10px;
      }
      > span {
        &:first-child {
          font-size: 1px;
          color: #606266;
        }
        &:last-child {
          font-size: 12px;
          color: #909399;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow: ellipsis;
        }
      }
      span:hover {
        color:  rgba(40,120,255,0.8);
        cursor: pointer;
      }
    }
  }
  .news-pages {
    padding: 0 8px;
  }
  .info-list {
    padding: 0 15px;
    font-size: 14px;
    color: #555;
    line-height: 20px;
  }
  .info-date {
    margin-top: 5px;
    padding: 0 15px;
    font-size: 13px;
    color: #909399;
    line-height: 20px;
  }
}
.work-pic {
  padding: 0 20px;
  .work-add {
    text-align: right;
  }
  .work-pic-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    .work-pic-list-box {
      margin-right: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      img {
        width: 200px;
        height: 150px;
        padding: 0 15px;
        object-fit: cover;
      }
    }
  }
}
</style>
