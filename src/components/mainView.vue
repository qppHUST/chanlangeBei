<template>
  <div>
    <div class="information-container">
      <span class="information-left"> 您好，欢迎来到平台！ 【请<a href="#">登录</a> | <a href="#">客户注册</a> | <a href="#">信息更改</a> 】 </span>
      <span class="information-right"> 我的消息 | 个人中心 | 客服专区 | <img src="../assets/static/img/call.png" />客服电话: 800 820 8820 </span>
    </div>
    <el-divider></el-divider>
    <div class="header-container">
      <img src="../assets/static/logo.png" />
      <div class="searchcontainer">
        <el-input style="max-width: 20rem" placeholder="请输入内容" clearable> </el-input>
        <el-button type="primary" icon="el-icon-search"> 搜索 </el-button>
      </div>
      <div class="comeback-container">
        <img src="../assets/static/img/back.png" style="width: 1rem" />
        返回官网
      </div>
    </div>
    <div class="bannerContainer">
      <div class="bannerHeaderContainer">
        <div id="specialText">热门服务</div>
        <div><router-link to="/main" style="text-decoration: none; color: white">网站首页</router-link></div>
        <div><router-link to="#" style="text-decoration: none; color: white">晋控品牌</router-link></div>
        <div>
          <el-dropdown :hide-on-click="false">
            <router-link to="#" class="el-dropdown-link" id="specialText1">市场交易</router-link>
            <el-dropdown-menu slot="dropdown" style="background-color: rgb(79, 63, 255)">
              <el-dropdown-item><router-link to="#" style="text-decoration: none; color: white">挂牌销售</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="#" style="text-decoration: none; color: white">挂牌采购</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="#" style="text-decoration: none; color: white">竞价销售</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="#" style="text-decoration: none; color: white">竞价采购</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="#" style="text-decoration: none; color: white">运力竞价</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div><router-link to="#" style="text-decoration: none; color: white">流程服务</router-link></div>
        <div><router-link to="#" style="text-decoration: none; color: white">交易交收</router-link></div>
        <div><router-link to="#" style="text-decoration: none; color: white">资金支付</router-link></div>
        <div><router-link to="#" style="text-decoration: none; color: white">能源行情</router-link></div>
        <div><router-link to="#" style="text-decoration: none; color: white">晋控物贸</router-link></div>
        <div><router-link to="#" style="text-decoration: none; color: white">化工交易</router-link></div>
      </div>
      <router-view></router-view>
    </div>
    <div class="bodyClass">
      <Show></Show>
      <br/>
      <div class="lianhecaogou" style="background-color: rgb(221, 221, 200);">
        <div class="left">联<br/>合<br/>采<br/>购</div>
        <div class="right">
          <div style="border: 1px burlywood solid;padding: 5px 20px 20px 20px;">
            <div style="font-size: 30px;">
              <strong>发布采购</strong>
            </div>
            <div style="margin-top: 10px;">
              <div class="catogory" style="display: flex;flex-wrap: wrap;background-color: aliceblue;width: 50vw;">
                <div>
                  经营类型:
                  <el-select v-model="value" placeholder="请选择">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
                <div>
                  原料类别:
                  <el-select v-model="value" placeholder="请选择">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
                <div>
                  所在地:
                  <el-select v-model="value" placeholder="请选择">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
                <div>
                  价格区间
                  <el-select v-model="value" placeholder="请选择">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
              </div>
              <div style="margin-top: 20px;">
                <b>筛选结果:</b>
                <div class="selectContainer" style="display: flex;">
                  <el-card style="width: 230px;">
                  <img src="@/assets/static/img/coal/1.png" style="width: 100%;">
                  <div style="margin-top: 5px;">
                    无烟煤
                  </div>
                </el-card>
                <el-card style="width: 230px;">
                  <img src="@/assets/static/img/coal/2.png" style="width: 200px;">
                  <div style="margin-top: 5px;">
                    褐煤
                  </div>
                </el-card>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div style="margin-bottom: 10px;border: 1px burlywood solid;padding: 5px 20px 20px 20px;">
            <div style="font-size: 30px;">
              <strong>发布销售</strong>
            </div>
            <div style="text-align: center;">
              <img src="@/assets/static/img/sales.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="wuliuyunshu" style="background-color: rgb(221, 221, 200);">
        <div class="left">物<br/>流<br/>运<br/>输</div>
        <div class="right">
          <div>
            <strong>
              物流订单:
            </strong>
            <div>
              <el-table
                :data="tableData"
                style="width: 50vw">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div>
            <strong>
              物流订单:
            </strong>
            <div>
              <el-table
                :data="tableData"
                max-height="200"
                style="width: 50vw">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
              <div>
                <strong>物流信息查询</strong>
                <div>
                  <input style="width: 300px;height: 33px;margin-right: 5px;" />
                  <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <strong>
              货运企业:
            </strong>
            <div style="display: flex;"> 
              <el-card style="width: 230px;">
                <img src="@/assets/static/img/company/1.png" style="width: 200px;">
                <div >
                  中国煤炭销售运输有限责任公司
                </div>
              </el-card>
              <el-card style="width: 230px;margin-left: 10px;">
                <img src="@/assets/static/img/company/2.png" style="width: 200px;">
                <div >
                  陕西鑫源煤炭运输有限公司
                </div>
              </el-card>
            </div>
          </div>
          <div>
          <strong>信息资讯:</strong>
          <div>
              <el-table
                :data="tableData" 
                style="width: 50vw;"
                max-height="200">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
              <el-table
                :data="tableData" 
                style="margin-top: 10px;margin-bottom: 10px;width: 50vw;"
                max-height="200">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
          </div>
        </div>
        </div>
      </div>
      <div class="xiangmurongzi" style="background-color: rgb(221, 221, 200);">
        <div class="left">项<br/>目<br/>融<br/>资</div>
        <div class="right">
          <div style="display: flex;width: 100%;margin-top: 20px;">
            <div style="text-decoration: underline;border: 1px brown solid;font-size: 30px;padding: 10px;border-radius: 10px;background-color: antiquewhite;">
              在线填写融资需求
            </div>
            <div style="margin-left: 200px;text-decoration: underline;border: 1px brown solid;font-size: 30px;padding: 10px;border-radius: 10px;background-color: antiquewhite;">
              贸易融资申请资料
            </div>
          </div>
          <div style="display: flex;margin-top: 20px;">
            <div style="border: 1px brown solid;padding: 10px;">
              申请条件
              <div>
                <img src="@/assets/static/img/rongzi.jpg" />
              </div>
            </div>
            <div style="border: 1px brown solid;padding: 10px;margin-left: 15px;">
              贸易融资信息
              <div>
                <ul>
                  <li>山东海化集团有限公司预付款融资1357万</li>
                  <li>酒钢（集团）天工矿业投资有限公司应收账款融资2490万</li>
                  <li>宁夏电投西夏热电有限公司应收账款融资1150万</li>
                  <li>平顶山姚孟发电有限责任公司预付款融资594万</li>
                  <li>华能莱芜发电有限公司应收账款融资1150万</li>
                  <li>国电山东燃煤有限公司预付款融资1140万</li>
                  <li>通化钢铁股份有限公司应收账款融资5900万</li>
                  <li>山西兆光发电有限责任公司应收账款融资1080万</li>
                  <li>大唐甘肃发电有限公司八〇三热电厂应收账款融资1005万</li>
                  <li>石钢京诚装备技术有限公司应收账款融资3700万</li>
                  <li>日照钢铁供应有限公司预付款融资1910万</li>
                  <li>大唐山东电力燃料有限公司应收账款融资1596万</li>
                  <li>国电康平发电有限公司预付款融资940万</li>
                  <li>山西漳电同达热电有限公司预付款融资1050万</li>
                </ul>
              </div>
            </div>
          </div>
          <div style="display: flex;justify-content: space-around;margin-bottom: 10px;">
            <div>
              <div style="margin: 70px 0 0 0;">
                在线客服  |  咨询电话：1333333
              </div>
              <div style="margin-top: 100px;text-align: center;">
                <table >
                  <tr>
                    <th>资信评级企业</th>
                    <th>贸易融资项目</th>
                  </tr>
                  <tr>
                    <td>2000家</td>
                    <td>150个</td>
                  </tr>
                </table>
              </div>
            </div>
            <div>
              <el-table
                :data="tableData"
                style="width: 30vw">
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="chengpinxiaoshou" style="background-color: rgb(221, 221, 200);">
        <div class="left">
          成<br/>品<br/>销<br/>售
        </div>
        <div class="right">
          <div>
            <strong>条件筛选</strong>
          </div>
          <div style="display: flex;flex-wrap: wrap;" class="catogory">
            <div>
              经营类型:
              <el-select v-model="value" placeholder="请选择">
                <el-option>111</el-option>
                <el-option>111</el-option>
                <el-option>111</el-option>
              </el-select>
            </div>
            <div>
              原料类别：
              <el-select v-model="value" placeholder="请选择">
                <el-option>111</el-option>
                <el-option>111</el-option>
                <el-option>111</el-option>
              </el-select>
            </div>
            <div>
              所在地：
              <el-select v-model="value" placeholder="请选择">
                <el-option>111</el-option>
                <el-option>111</el-option>
                <el-option>111</el-option>
              </el-select>
            </div>
            <div>
              价格区间：
              <el-select v-model="value" placeholder="请选择">
                <el-option>111</el-option>
                <el-option>111</el-option>
                <el-option>111</el-option>
              </el-select>
            </div>
          </div>
          <div>
            <strong>筛选结果</strong>
          </div>
          <div style="display: flex;margin-bottom: 10px;">
            <el-card style="width: 230px;">
                <img src="@/assets/static/img/coal/1.png" style="width: 200px;">
                <div >
                  无烟煤
                </div>
              </el-card>
              <el-card style="width: 230px;margin-left: 10px;">
                <img src="@/assets/static/img/coal/2.png" style="width: 200px;">
                <div >
                  褐煤
                </div>
              </el-card>
          </div>
        </div>
      </div>
      <div class="hangyeyanjiu" style="background-color: rgb(221, 221, 200);">
        <div class="left">
          行<br/>业<br/>研<br/>究
        </div>
        <div class="right"> 

        </div>
      </div>
      <div class="hezuopingtai" style="background-color: rgb(221, 221, 200);">
        <div class="left" style="padding: 20px 70px ;">
          合<br/>作<br/>平<br/>台
        </div>
        <div class="right" style="text-align: center;">
            <el-input v-model="input" placeholder="输入关键字" style="width: 400px;margin-top: 30px;"></el-input><el-button type="primary">搜索</el-button>
            <hr/>
            <div style="display: flex;padding-right: 10px;margin-top: 20px;">
              <el-carousel height="200px" style="width: 300px;">
                <el-carousel-item >
                  <img src="@/assets/static/img/carousel/1.png" style="height: 200px;"/>
                </el-carousel-item>
                <el-carousel-item >
                  <img src="@/assets/static/img/carousel/2.png" style="height: 200px;"/>
                </el-carousel-item>
                <el-carousel-item >
                  <img src="@/assets/static/img/carousel/3.png" style="height: 200px;"/>
                </el-carousel-item>
              </el-carousel>
              <div style="width: 1px;height: 250px;background-color: black;margin: 0px 0 0 20px;"></div>
              <div>
                <div>合作资讯</div>
                <div style="text-align: left;">
                  <ul>
                    <li>石嘴山市工信局积极开展《中华人民共和国中小企业促进法》</li>
                    <li>石嘴山市到新型中小企业(2022年度)名单公示</li>
                    <li>工信部联合印发《关于推进黄河绕城工业绿色发展的指导意见》</li>
                    <li>石嘴山市第一批增能绿色工厂和数字化车间(2022年度)名单公示</li>
                  </ul>
                </div>
              </div>
            </div>
            <div style="width: 97%; height: 30px; background-color: aqua;"></div>
            <div style="display: flex;justify-content: space-around;margin: 20px;flex-wrap: wrap;">
              <el-card :body-style="{ padding: '10px' }" >
                <img src="@/assets/static/img/cooprate/1.png" style="width: 180px;">
                <div style="padding: 14px;">
                  <span>循环经济合作专区</span>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '10px' }" style="margin-left: 20px;">
                <img src="@/assets/static/img/cooprate/2.png" style="width: 180px;">
                <div style="padding: 14px;">
                  <span>原料采购合作专区</span>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '10px' }" style="margin-left: 20px;">
                <img src="@/assets/static/img/cooprate/3.png" style="width: 180px;">
                <div style="padding: 14px;">
                  <span>产业链合作专区</span>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '10px' }" style="margin-top: 10px;">
                <img src="@/assets/static/img/cooprate/4.png" style="width: 180px;">
                <div style="padding: 14px;">
                  <span>销售业务合作专区</span>
                </div>
              </el-card>
              <el-card :body-style="{ padding: '10px' }" style="margin-top: 10px;">
                <img src="@/assets/static/img/cooprate/5.png" style="width: 180px;">
                <div style="padding: 14px;">
                  <span>物流运输合作专区</span>
                </div>
              </el-card>
            </div>
        </div>
      </div>
      <div class="kejiqianyan" style="background-color: rgb(221, 221, 200);">
        <div class="left" style="padding: 20px 70px 0 70px;">
          科<br/>技<br/>前<br/>沿
        </div>
        <div class="right">
          <div style="display: flex;justify-content: center;">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px;">
                <span>项目申报<br/>与查询</span>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>高新技术<br/>企业认定</span>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>众创孵化<br/>平台认定<br/>与管理</span>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>专家评审<br/>专家征集</span>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }" style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>科技成果<br/>转化平台</span>
              </div>
            </el-card>
          </div>
          <hr/>
          <div style="display: flex;">
            <div style="height: 100%;padding: 30px 10px 0 10px;">
              通知公告
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <hr/>
          <div style="display: flex;">
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div style="height: 100%;padding: 30px 10px 0 10px;">
              科技新闻
            </div>
          </div>
          <hr/>
          <div style="display: flex;">
            <div style="height: 100%;padding: 30px 10px 0 10px;">
              校企合作
            </div>
            <div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <hr/>
          <div style="border: 1px black solid;">
            <div>
              [在线互动]
            </div>
            <div style="display: grid;grid-template-columns: auto auto;">
              <div style="border: 1px black solid;padding: 5px 20px 5px 5px;width: 110px;margin: 20px 0 10px 30px;">
                <img src="@/assets/static/img/onlineInteract/1.png" style="width: 18px;" /><span style="float: right;" >科创信箱</span>
              </div>
              <div style="border: 1px black solid;padding: 5px 20px 5px 5px;width: 110px;margin: 20px 0 10px 30px;">
                <img src="@/assets/static/img/onlineInteract/2.png" style="width: 18px;" /><span style="float: right;" >我要提问</span>
              </div>
              <div style="border: 1px black solid;padding: 5px 20px 5px 5px;width: 110px;margin: 20px 0 10px 30px;">
                <img src="@/assets/static/img/onlineInteract/3.png" style="width: 18px;" /><span style="float: right;" >调查征集</span>
              </div>
              <div style="border: 1px black solid;padding: 5px 20px 5px 5px;width: 110px;margin: 20px 0 10px 30px;">
                <img src="@/assets/static/img/onlineInteract/4.png" style="width: 18px;" /><span style="float: right;" >信息查询</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
import Goodsitem from './subComponents/goodsitem.vue'
import Purchaseitem from './subComponents/purchaseitem.vue'
import Logistics from './subComponents/logistics.vue'
import Money from './subComponents/money.vue'
import Quotation from './subComponents/quotation.vue'
import Show from './subComponents/show.vue'
export default {
  data() {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      imgStr:[
        '../assets/static/img/carousel/1.png',
        '../assets/static/img/carousel/2.png',
        '../assets/static/img/carousel/3.png',
      ]
    }
  },
  methods: {},
  components: {
    Goodsitem,
    Purchaseitem,
    Logistics,
    Money,
    Quotation,
    Show,
  },
}
</script>

<style>
@import url('../assets/css/main.css');
</style>
