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
      <div class="bannerFooterContainer">
        <div class="asideContainer">
          <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <Goodsitem slot="reference"></Goodsitem>
          </el-popover>
          <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <Purchaseitem slot="reference"></Purchaseitem>
          </el-popover>
          <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <Logistics slot="reference"></Logistics>
          </el-popover>
          <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <Money slot="reference"></Money>
          </el-popover>
          <el-popover placement="right" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <Quotation slot="reference"></Quotation>
          </el-popover>
        </div>
        <div class="CarouselContainer">
          <el-carousel indicator-position="outside" height="25rem" style="width: 100%;">
            <el-carousel-item>
              <img src="../assets/static/banner/spanner1.jpg" style="width: 1800px;"/>
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/static/banner/spanner2.jpg" style="width: 1800px;"/>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="bodyClass">
      <Show></Show>
      <br/>
      <div class="lianhecaogou" style="background-color: rgb(221, 221, 200);width: 100%;">
        <div class="left" style="align-items: center;padding-top: 200px;width: 10%;">联<br/>合<br/>采<br/>购</div>
        <div class="right">
          <div style="border: 1px burlywood solid;padding: 10px 20px 20px 20px;">
            <div style="font-size: 30px;padding: 10px;">
              <strong>发布采购</strong>
            </div>
            <div style="margin-top: 10px;">
              <div class="catogory" style="">
                <div>
                  经营类型:
                  <el-select v-model="value" placeholder="请选择经营类型">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
                <div>
                  原料类别:
                  <el-select v-model="value" placeholder="请选择原料类别">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
                <div>
                  所在地:
                  <el-select v-model="value" placeholder="请选择所在地">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
                <div>
                  价格区间
                  <el-select v-model="value" placeholder="请选择价格区间">
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                    <el-option>111</el-option>
                  </el-select>
                </div>
              </div>
              <div style="margin-top: 20px;">
                <b>筛选结果:</b>
                <div class="selectContainer" style="display: flex;">
                  <el-card style="width: 230px;background-color: antiquewhite;">
                  <img src="@/assets/static/img/coal/1.png" style="width: 100%;">
                  <div style="margin-top: 5px;">
                    无烟煤
                  </div>
                </el-card>
                <el-card style="width: 230px;background-color: antiquewhite;">
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
          <div style="margin-bottom: 10px;border: 1px burlywood solid;padding: 10px 20px 20px 20px;">
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
        <div class="left" style="width: 10%;padding-top: 300px;">物<br/>流<br/>运<br/>输</div>
        <div class="right">
          <div>
            <h2>
              物流订单:
            </h2>
            <div style="margin-top: 10px;padding: 10px 0 10px 0;">
              <table>
                <thead>
                  <tr>
                    <th>企业名称</th>
                    <th>煤种</th>
                    <th>粒度</th>
                    <th>煤质</th>
                    <th>数量（吨）</th>
                    <th>价格（元）</th>
                    <th>交（装）地</th>
                    <th>有效期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>宁夏正源活性炭有限公司</td>
                    <td>无烟煤</td>
                    <td>三八块煤</td>
                    <td>8100大卡</td>
                    <td>7000吨</td>
                    <td>面议</td>
                    <td>临汾市</td>
                    <td>2023/3/22</td>
                  </tr>
                  <tr>
                    <td>宁夏庆华煤化集团有限公司</td>
                    <td>动力煤</td>
                    <td>三八块煤</td>
                    <td>6100大卡</td>
                    <td>6000吨</td>
                    <td>面议</td>
                    <td>榆林市</td>
                    <td>2023/3/22</td>
                  </tr>
                  <tr>
                    <td>石嘴山市惠宁煤炭制品有限公司</td>
                    <td>动力煤</td>
                    <td>沫煤</td>
                    <td>5500大卡</td>
                    <td>80000吨</td>
                    <td>面议</td>
                    <td>沧州</td>
                    <td>2023/3/21</td>
                  </tr>
                  <tr>
                    <td>宁夏祥顺通煤炭制品有限公司</td>
                    <td>炼焦煤</td>
                    <td>籽煤</td>
                    <td>3500大卡</td>
                    <td>50000吨</td>
                    <td>面议</td>
                    <td>银川</td>
                    <td>2023/3/20</td>
                  </tr>
                </tbody>
              </table>
              <div style="margin-top: 10px;padding-left: 20px;">
                <h3>
                  物流信息查询:
                </h3>
                <div>
                  <input style="width: 300px;height: 33px;margin-right: 5px;" />
                  <el-button type="primary" icon="el-icon-search">搜索</el-button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>
              货运企业一览:
            </h2>
            <div style="display: flex;margin-top: 10px;"> 
              <el-card style="width: 230px;background-color: antiquewhite;" class="card" >
                <img src="@/assets/static/img/company/1.png" style="width: 200px;">
                <div >
                  中国煤炭销售运输有限责任公司
                </div>
              </el-card>
              <el-card style="width: 230px;margin-left: 10px;background-color: antiquewhite;">
                <img src="@/assets/static/img/company/2.png" style="width: 200px;">
                <div >
                  陕西鑫源煤炭运输有限公司
                </div>
              </el-card>
            </div>
          </div>
          <div style="margin-top: 30px;">
          <h2>
            信息资讯:
          </h2>
          <div style="margin-top: 10px;">
              <ul>
                <li>涨跌互现VS煤车重堵！犯愁的煤贸商！</li>
                <li>坑口现零星探涨！附煤矿通知！</li>
                <li>煤价陷僵持！煤矿超严检查！</li>
                <li>价格上行阻力大！坑口持降！</li>
                <li>煤价涨跌止步？大企持平！港口跌超限价！</li>
              </ul>
          </div>
        </div>
        </div>
      </div>
      <div style="padding: 30px 0 0 0 ;" >
        <img src="../assets/static/img/zhuangshi.jpg" style="width: 100%;">
      </div>
      <div class="xiangmurongzi" style="background-color: rgb(221, 221, 200);">
        <div class="left" style="padding-top: 260px;">项<br/>目<br/>融<br/>资</div>
        <div class="right">
          <div style="display: flex;margin-top: 20px;justify-content: space-between;padding: 0 100px;">
            <div style="text-decoration: underline;border: 1px brown solid;font-size: 30px;padding: 10px;border-radius: 10px;background-color: antiquewhite;">
              在线填写融资需求
            </div>
            <div style="margin-left: 200px;text-decoration: underline;border: 1px brown solid;font-size: 30px;padding: 10px;border-radius: 10px;background-color: antiquewhite;">
              贸易融资申请资料
            </div>
          </div>
          <img src="../assets/static/img/rongzi.jpg" style="margin-top: 20px;width: 100%;">
          <div style="display: flex;margin-top: 20px;justify-content: space-between;padding: 0 40px;">
            <div class="shenqingtiaojianContainer">
              <div style="padding: 10px;">
                <span style="font-weight: 550;" >申请条件</span>
              </div>
                <img src="@/assets/static/img/rongziyaoqiu.jpg" />
            </div>
            <div style="border: 1px brown solid;padding: 10px;margin-left: 15px;">
              <div style="text-align: center;font-size: 1.3rem;font-weight: 550;">贸易融资信息</div>
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
                </ul>
              </div>
            </div>
          </div>
          <div style="display: flex;justify-content: space-around;margin-top: 30px;align-items: center;">
            <div>
              <div style="font-weight: 550;">
                在线客服  |  咨询电话：1333333
              </div>
              <div style="margin-top: 60px;text-align: center;">
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
            <div style="width: 60%;">
              <table>
                <tr>
                  <th>项目编号</th>
                  <th>企业名称</th>
                  <th>融资金额</th>
                </tr>
                <tr>
                  <td>djbb01365214</td>
                  <td>宁夏祥顺通煤炭有限公司</td>
                  <td>500万</td>
                </tr>
                <tr>
                  <td>djbb01365215</td>
                  <td>宁夏非凡煤炭有限公司</td>
                  <td>800万</td>
                </tr>
                <tr>
                  <td>djbb01365216</td>
                  <td>宁夏华之丰煤炭有限公司</td>
                  <td>700万</td>
                </tr>
              </table>
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
            <h2>
              条件筛选
            </h2>
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
          <div style="padding-left: 20px;">
            <h3>
              筛选结果
            </h3>
          </div>
          <div style="display: flex;margin-bottom: 10px;padding-left: 15px;">
            <el-card style="width: 230px;background-color: antiquewhite;">
                <img src="@/assets/static/img/coal/1.png" style="width: 200px;">
                <div >
                  无烟煤
                </div>
              </el-card>
              <el-card style="width: 230px;margin-left: 10px;background-color: antiquewhite;">
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
        <div class="right" style="padding: 0;margin: 0;"> 
          <img src="../assets/static/img/kuxuan.png" style="width: 100%;">
        </div>
      </div>
      <div class="hezuopingtai" style="background-color: rgb(221, 221, 200);">
        <div class="left" style="padding-top: 200px;">
          合<br/>作<br/>平<br/>台
        </div>
        <div class="right" style="text-align: center;">
            <el-input v-model="input" placeholder="输入关键字" style="width: 400px;margin-top: 10px;"></el-input><el-button type="primary">搜索</el-button>
            <hr style="margin-top: 20px;"/>
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
                <h4>合作资讯</h4>
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
            <div class="divider"></div>
            <div style="display: flex;justify-content: space-around;margin: 20px;flex-wrap: wrap;">
              <el-card style="margin: 10px 10px; background-color: antiquewhite;" >
                <img src="@/assets/static/img/cooprate/1.png" style="width: 180px;height: 180px;">
                <div style="padding: 14px;">
                  <span>循环经济合作专区</span>
                </div>
              </el-card>
              <el-card style="margin: 10px 10px;background-color: antiquewhite;">
                <img src="@/assets/static/img/cooprate/2.png" style="width: 180px;height: 180px;">
                <div style="padding: 14px;">
                  <span>原料采购合作专区</span>
                </div>
              </el-card>
              <el-card style="margin: 10px 10px;background-color: antiquewhite;">
                <img src="@/assets/static/img/cooprate/3.png" style="width: 180px;height: 180px;">
                <div style="padding: 14px;">
                  <span>产业链合作专区</span>
                </div>
              </el-card>
              <el-card style="margin: 10px 10px;background-color: antiquewhite;">
                <img src="@/assets/static/img/cooprate/4.png" style="width: 180px;height: 180px;">
                <div style="padding: 14px;">
                  <span>销售业务合作专区</span>
                </div>
              </el-card>
              <el-card style="margin: 10px 10px; background-color: antiquewhite;">
                <img src="@/assets/static/img/cooprate/5.png" style="width: 180px;height: 180px;">
                <div style="padding: 14px;">
                  <span>物流运输合作专区</span>
                </div>
              </el-card>
            </div>
        </div>
      </div>
      <div class="kejiqianyan" style="background-color: rgb(221, 221, 200);">
        <div class="left" style="padding-top: 200;">
          科<br/>技<br/>前<br/>沿
        </div>
        <div class="right">
          <div style="display: flex;justify-content: center;">
            <el-card >
              <div style="padding: 14px;">
                <span>项目申报<br/>与查询</span>
              </div>
            </el-card>
            <el-card style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>高新技术<br/>企业认定</span>
              </div>
            </el-card>
            <el-card style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>众创孵化<br/>平台认定<br/>与管理</span>
              </div>
            </el-card>
            <el-card style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>专家评审<br/>专家征集</span>
              </div>
            </el-card>
            <el-card style="margin-left: 30px;">
              <div style="padding: 14px;">
                <span>科技成果<br/>转化平台</span>
              </div>
            </el-card>
          </div>
          <hr style="margin-top: 30px;"/>
          <div style="display: flex;justify-content:space-between;padding: 0 60px;align-items: center;">
            <div style="height: 100%;font-size: 1.5rem;">
              通知公告
            </div>
            <div >
              <ul>
                <li>李强总理：积极稳妥推进碳达峰碳中和！</li>
                <li>加强基础研究是建设世界科技强国的必由之路</li>
                <li>“双碳”目标下，煤炭仍是我国主体能源</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div style="display: flex;justify-content:space-between;padding: 0 60px;align-items: center;">
            <div>
              <ul>
                <li>让煤更加“清洁”——记全国矿物加工专家、中国矿业大学教授赵跃民</li>
                <li>何满潮：能源强国建设向创新要答案</li>
                <li>卜昌森：信息化、智能化驱动 加快矿山智慧应急救援体系建设</li>
              </ul>
            </div>
            <div style="height: 100%;font-size: 1.5rem;">
              科技新闻
            </div>
          </div>
          <hr/>
          <div style="display: flex;justify-content:space-between;padding: 0 60px;align-items: center;">
            <div style="height: 100%;font-size: 1.5rem;">
              校企合作
            </div>
            <div>
              <ul>
                <li>西安科技大学矿山功能性充填研究中心科技成果通过中国煤炭工业协会鉴定</li>
                <li>学会党委书记、理事长何满潮院士主讲“小洪山讲坛”</li>
                <li>太原理工大学四名杰出学者上榜2022“中国高被引学者”榜单！</li>
              </ul>
            </div>
          </div>
          <hr/>
          <div style="border: 1px black solid;margin-top: 30px;padding: 10px 0 10px 10px;">
            <div>
              [在线互动]
            </div>
            <div style="display: grid;grid-template-columns: auto auto;padding: 10px;">
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
            name: '原煤',
            address: '宁夏正源活性炭有限公司'
          }, {
            date: '2016-05-04',
            name: '活性炭',
            address: '宁夏庆华煤化集团有限公司'
          }, {
            date: '2016-05-01',
            name: '焦炭',
            address: '宁夏平罗县兴昌煤炭有限公司'
          }, {
            date: '2016-05-03',
            name: '兰炭',
            address: '石嘴山市惠宁煤炭制品有限公司'
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
