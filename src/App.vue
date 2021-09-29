<template>
  <div class="main">
    <div class="nav">江都区企业数字化赋能平台</div>
    <div class="nav_btn">
      <div class="btn_left">
        <a href="">
          <div class="btn_list listActive">主页</div>
        </a>
        <a href="">
          <div class="btn_list">XX流转</div>
        </a>
        <a href="">
          <div class="btn_list">空天地</div>
        </a>
        <a href="">
          <div class="btn_list">生长监测</div>
        </a>
      </div>
      <div class="btn_right">
        <a href="">
          <div class="btn_list">生产加工</div>
        </a>
        <a href="">
          <div class="btn_list">仓储管理</div>
        </a>
        <a href="">
          <div class="btn_list">流通销售</div>
        </a>
        <a href="">
          <div class="btn_list">数据中心</div>
        </a>
      </div>
    </div>
    <div class="content">
      <div class="centerBox">
        <div class="baseBox centerMainBox1" style="height: 70%">
          <div class="baseBoxLeft left">
            <div class="boxTitle">企业数字画像</div>
            <img src="./img/left.png" alt="" />
            <!-- <table class="equipment_table env_table">
              <tr>
                <td>指标</td>
                <td>标准值</td>
                <td>当前值</td>
                <td>预警</td>
              </tr>
              <tr>
                <td>温度</td>
                <td>18～20℃</td>
                <td>9℃</td>
                <td>正常</td>
              </tr>
              <tr>
                <td>湿度</td>
                <td>40%～60%</td>
                <td>52%</td>
                <td>正常</td>
              </tr>
              <tr>
                <td>风速</td>
                <td>0m/s~4m/s</td>
                <td>2m/s</td>
                <td>正常</td>
              </tr>
              <tr>
                <td>降水</td>
                <td>2mm~4mm</td>
                <td>0mm</td>
                <td style="color: red">偏低</td>
              </tr>
            </table> -->
            <div style="width: 90%; height: 90%; margin-left:5%" id="radar"></div>
          </div>
          <div class="baseBoxRight right">  
            <ul class="plant">
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>入驻企业</span>
                    <img src="./img/qqzmj.png" alt="" />
                  </div>
                  <p class="">350000</p>
                  <span class="spans3"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>建筑面积</span>
                    <img src="./img/ccc2.png" alt="" />
                  </div>
                  <p class="">180</p>
                  <span class="spans2" style="background: #499bff"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>税收总额</span>
                    <img src="./img/ccc.png" alt="" />
                  </div>
                  <p class="">82000</p>
                  <span class="spans3" style="background: #f2ce43"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div class="clear plantTop">
                    <span class="flexLeft">科技专利数</span>
                    <img class="flexright" src="./img/cy.png" alt="" />
                  </div>

                  <p class="plantNum1">3207</p>
                  <span class="spans0"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div class="clear plantTop">
                    <span class="flexLeft">共享人才数</span>
                    <img class="flexright" src="./img/cq.png" alt="" />
                  </div>
                  <p class="plantNum1">157</p>
                  <span class="spans1"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>政策申请</span>
                    <img src="./img/cn.png" alt="" />
                  </div>
                  <p class="">360000</p>
                  <span class="spans2"></span>
                </a>
              </li>
            </ul>

            <div class="graph" id="graph">
            </div>
            <div style="position:absolute;left:36%;top:25%">
              <p style="color:rgb(145 204 117);z-index:999;">{{echartsData.network[0].company}}</p>
              <p v-for="(item,index) in echartsData.network.slice(0,3)" :key="index" style="color:rgb(84 112 198);">
                {{item.shareholder}}
              </p>
              
            </div>
            <!-- 地图 -->
            <div class="map" id="map"></div>
          </div>
        </div>

        <div class="baseBox centerMainBox2" style="height: 30%">
          <img src="./img/down.png" alt="" />
          <div class="boxTitle2" style="width: 26%">统计数据</div>
          <div class="csbaseBox1 bottom">
            <!-- <ul class="baseDatas">
              <li class="left">
                <a href="">
                  <div class="borderRight"></div>
                  <span>茶园统计</span>
                </a>
              </li>
              <li class="left">
                <a href="">
                  <div class="borderRight"></div>
                  <span>茶企统计</span>
                </a>
              </li>
              <li class="left">
                <a href="">
                  <div class="borderRight"></div>
                  <span>茶农统计</span>
                </a>
              </li>
            </ul> -->

            <!-- <table class="tableDetalis">
              <tr>
                <td>名称</td>
                <td>类型</td>
                <td>面积</td>
                <td>名称</td>
                <td>类型</td>
                <td>面积</td>
                <td>姓名</td>
                <td>品种</td>
                <td>面积</td>
              </tr>
              <tr>
                <td>青云观茶园</td>
                <td>企业</td>
                <td>1800亩</td>
                <td>如需商用，请联系qq:863512936</td>
                <td>私营</td>
                <td>3283亩</td>
                <td>刘新武</td>
                <td>云台大叶</td>
                <td>10亩</td>
              </tr>
              <tr>
                <td>彩云谷茶园</td>
                <td>企业</td>
                <td>380亩</td>
                <td>如需商用，请联系qq:863512936</td>
                <td>私营</td>
                <td>6200亩</td>
                <td>张方</td>
                <td>碧香早</td>
                <td>15亩</td>
              </tr>
              <tr>
                <td>赵家坪茶园</td>
                <td>合作社</td>
                <td>510亩</td>
                <td>如需商用，请联系qq:863512936</td>
                <td>私营</td>
                <td>5800亩</td>
                <td>李小维</td>
                <td>槠叶齐</td>
                <td>12亩</td>
              </tr>
              <tr>
                <td>马路口茶园</td>
                <td>个人</td>
                <td>17亩</td>
                <td>如需商用，请联系qq:863512936</td>
                <td>私营</td>
                <td>30000亩</td>
                <td>王骁骁</td>
                <td>黄金茶</td>
                <td>11亩</td>
              </tr>
            </table> -->
            <p><span>公司：</span>{{echartsData.COMPANY_NAME}}</p>
            <p><span>地址：</span>{{echartsData.COMPANY_ADDRESS}}</p>
            <p><span>法人：</span>{{echartsData.operName}}</p>
            <p><span>监管局：</span>{{echartsData.belongOrg}}</p>
            <p><span>经济型：</span>{{echartsData.econKind}}</p>
            <p><span>注册资金：</span>{{echartsData.REGISTER_CURRENCY}}</p>
            <p><span>注册资本：</span>{{echartsData.tag_registCapi}}</p>
            <p><span>行业类型：</span>{{echartsData.INDUSTRY}}</p>
            <p><span>公司服务：</span>{{echartsData.CAP}}</p>
            <p><span>历史名字：</span>{{echartsData.historyNames}}</p>
            <p><span>公司类型：</span>{{echartsData.COMPANY_TYPE}}</p>
            <p><span>创办日期：</span>{{echartsData.termStart}}</p>
            <!-- <p><span>政府通知：</span>{{echartsData.policy}}</p> -->
          </div>
        </div>
      </div>
      <div class="leftBox right" style="width: 23%">
        <div class="baseBox baseBox1" style="margin-bottom: 15px; height: 40%">
          <img src="./img/right.png" alt="" />
          <div class="csbaseBox1">
            <div class="boxTitle">消息列表</div>

            <div class="content1">
              <ul>
                <li style="display: block" class="contList">
                  <!-- 四个角描边 stat -->
                  <div class="leftTopLine1"></div>
                  <div class="leftTopLine2"></div>
                  <div class="rightTopLine1"></div>
                  <div class="rightTopLine2"></div>
                  <div class="leftBottomLine1"></div>
                  <div class="leftBottomLine2"></div>
                  <div class="rightBottomLine1"></div>
                  <div class="rightBottomLine2"></div>

                  <div class="boxVideo">
                    <div class="scroll-content">
                      <p v-for="(item, index) in messageData" :key="index">
                        {{item.des}}
                      </p>
                    </div>
                    <!-- <el-table ref="table" :data="messageData" style="width: 100% ;height:100%" :show-header="false">
                      <el-table-column prop="des" align="left" label="发布消息" class-name="scroll-content">
                      </el-table-column>
                    </el-table> -->
                  </div>
                </li>
                <li class="contList">
                  <!-- 四个角描边 stat -->
                  <div class="leftTopLine1"></div>
                  <div class="leftTopLine2"></div>
                  <div class="rightTopLine1"></div>
                  <div class="rightTopLine2"></div>
                  <div class="leftBottomLine1"></div>
                  <div class="leftBottomLine2"></div>
                  <div class="rightBottomLine1"></div>
                  <div class="rightBottomLine2"></div>

                  <div class="boxVideo">
                    <video class="video-js vjs-big-play-centered" data-setup="{}" controls>
                      <source src="http://hls01open.ys7.com/openlive/cf40f99cc9cb4a23bd52e0b2119b534c.m3u8"
                        type="application/x-mpegURL" />
                    </video>
                  </div>
                </li>
                <li class="contList">
                  <!-- 四个角描边 stat -->
                  <div class="leftTopLine1"></div>
                  <div class="leftTopLine2"></div>
                  <div class="rightTopLine1"></div>
                  <div class="rightTopLine2"></div>
                  <div class="leftBottomLine1"></div>
                  <div class="leftBottomLine2"></div>
                  <div class="rightBottomLine1"></div>
                  <div class="rightBottomLine2"></div>

                  <div class="boxVideo"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="baseBox baseBox2" style="margin-bottom: 15px; height: 29.5%">
          <img src="./img/right2.png" alt="" />
          <!-- 四个角描边 end -->
          <div class="boxTitle2">企业分布</div>
          <div class="boxRader" id="Progress" style="width: 90%; height: 90%; margin-left:5%"></div>
        </div>
        <div class="baseBox baseBox3" style="height: 28.9%">
          <img src="./img/right3.png" alt="" />
          <!-- 四个角描边 end -->
          <div class="boxTitle2">税收分布</div>
          <div class="boxRader" id="mains" style="width: 90%; height: 90%; margin-left:5%"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import 'echarts/extension/bmap/bmap'
  export default {
    name: "App",
    mounted() {
      this.drawMap();
      this.drawGraph();
      this.drawPie();
      this.drawBar();
      this.drawRadar();
      const table = this.$refs.table;
      echartsData.network.slice(0,4)
      console.log(echartsData.network.slice(0,4));
      // 拿到表格中承载数据的div元素
      //let scrollHeight = this.$refs.table.bodyWrapper.scrollHeight;

      const divData = table.bodyWrapper;
      var scrollHeight = divData.scrollHeight;
      // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
      setInterval(() => {
        // 元素自增距离顶部1像素
        divData.scrollTop += 1;

        // this.$nextTick(() => {
        //   let scrollHeight = this.$refs.table.bodyWrapper.scrollHeight;
        //   this.$refs.table.bodyWrapper.scrollTop = scrollHeight;
        // });
        // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
        if (divData.clientHeight + divData.scrollTop > divData.scrollHeight) {
          // 重置table距离顶部距离
          this.$refs.table.bodyWrapper.scrollTop = 0;
          //divData.scrollTop = 0;
        }
      }, 100);
    },
    data() {
      return {
        echartsData: {},
        messageData: [{
          des: "发布消息XXX"
        },
        {
          des: "发布消息XXX"
        },
        {
          des: "发布消息XXX"
        },
        {
          des: "发布消息XXX"
        },
        {
          des: "发布消息XXX"
        },
        {
          des: "发布消息XXX"
        },
        {
          des: "发布消息XXX"
        }
        ],
        listData: [
       {
        "radar": {
          "indicator": [
            {
                "name": "基础能力",
                "max": 6500
            },
            {
                "name": "经营管理",
                "max": 16000
            },
            {
                "name": "科技创新",
                "max": 30000
            },
            {
                "name": "只能创造",
                "max": 38000
            },
            {
                "name": "可持续发展",
                "max": 52000
            },
            {
                "name": "信用风险",
                "max": 25000
            }
        ],
            "series": [
                {
                    "name": "Budget vs spending",
                    "type": "radar",
                    "data": [
                        {
                            "value": [
                                4200,
                                3000,
                                20000,
                                35000,
                                50000,
                                18000
                            ],
                            "name": "全部企业"
                        },
                        {
                            "value": [
                                5000,
                                14000,
                                28000,
                                26000,
                                42000,
                                21000
                            ],
                            "name": "化工制造业"
                        },
                        {
                            "value": [
                                6632,
                                6516,
                                7786,
                                9373,
                                6539,
                                9195
                            ],
                            "name": "扬州宁达贵金属有限公司"
                        }
                    ]
                }
            ]
        },
        "network": [
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "樊启鸿",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "樊红杰",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "格林美股份有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "扬州市龙川产业投资发展有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "扬州创美企业管理合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "郭卫星",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "江苏匀升股权投资基金合伙企业（有限合伙）",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "广州立丰产业投资基金合伙企业（有限合伙）",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "扬州远方产业扶持基金合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "张继洁",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "扬州宁达贵金属有限公司",
                "shareholder": "马怀义",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "扬州龙川钢管有限公司",
                "shareholder": "扬州远方产业扶持基金合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "江苏新马新材料开发有限公司",
                "shareholder": "扬州远方产业扶持基金合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "扬州田治科技有限公司",
                "shareholder": "扬州远方产业扶持基金合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "江苏星通北斗航天科技有限公司",
                "shareholder": "扬州远方产业扶持基金合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            }
        ],
        "COMPANY_NAME": "扬州宁达贵金属有限公司",
        "location": [
            119.676912,
            32.475328
        ],
        "Unnamed: 0": 40,
        "index": 41,
        "actualCapi": "18000 万人民币",
        "COMPANY_ADDRESS": "扬州市江都区宜陵镇工业园区",
        "belongOrg": "扬州市江都区市场监督管理局",
        "categoryNew": 115601,
        "checkDate": "6/29/2021",
        "COMPANY_CODE": "91321012759691433R",
        "currency_unit": "CNY",
        "districtCode": 321012,
        "domain": "C4200",
        "econKind": "有限责任公司(自然人投资或控股)",
        "econKindCode": 1130,
        "historyNames": "",
        "id": "247ebca1-2b99-4e27-a982-0424985eac82",
        "operName": "樊启鸿",
        "orgNo": "759691433",
        "REGISTER_NUMBER": 321088000000000,
        "REGISTER_CURRENCY": "18000 万人民币",
        "BUSINESS_SCOPE": "金银“三废”、铜、锌、铅、锡、铂回收、加工，电子废弃物资源再生与无害化处置，废液晶显示屏处置利用，氯化钙生产销售，高纯氧化锗、还原锗锭（锗粉）、区熔锗锭、锗单晶、锗片的生产销售，普通货运，自营和代理各类商品及技术的进出口业务。（国家限定企业经营或禁止进出口的商品和技术除外）（依法须经批准的项目，经相关部门批准后方可开展经营活动）_x000D_\n一般项目：金属材料销售；有色金属合金销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "startDate": "4/8/2004",
        "status": "存续",
        "tags": "17",
        "termEnd": "4/30/2024",
        "termStart": "4/8/2004",
        "type_new": 1,
        "listed": "未知",
        "COMPANY_TYPE": "有限责任公司",
        "tag_registCapi": "注册资本一亿至十亿",
        "code": "C",
        "number": 42,
        "INDUSTRY": "制造业",
        "CAP": "废弃资源综合利用业 ",
        "policy": "市政府办公室关于印发《仪征市农药包装物集中回收统一处理试点实施方案》的通知;县政府办公室关于印发《宝应县铸造、有色金属行业大气污染综合治理攻坚行动方案》的通知;区政府办公室关于印发《关于开展工业企业资源集约利用综合评价工作的实施意见》的通知",
        "locations": "623;241;364"
    },
    {
        "radar": {
            "indicator": [
                {
                    "name": "基础能力",
                    "max": 6500
                },
                {
                    "name": "经营管理",
                    "max": 16000
                },
                {
                    "name": "科技创新",
                    "max": 30000
                },
                {
                    "name": "只能创造",
                    "max": 38000
                },
                {
                    "name": "可持续发展",
                    "max": 52000
                },
                {
                    "name": "信用风险",
                    "max": 25000
                }
            ],
            "series": [
                {
                    "name": "Budget vs spending",
                    "type": "radar",
                    "data": [
                        {
                            "value": [
                                4200,
                                3000,
                                20000,
                                35000,
                                50000,
                                18000
                            ],
                            "name": "全部企业"
                        },
                        {
                            "value": [
                                5000,
                                14000,
                                28000,
                                26000,
                                42000,
                                21000
                            ],
                            "name": "化工制造业"
                        },
                        {
                            "value": [
                                5239,
                                9909,
                                6950,
                                8113,
                                6010,
                                7240
                            ],
                            "name": "江苏峰业科技环保集团股份有限公司"
                        }
                    ]
                }
            ]
        },
        "network": [
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "周平",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "王斌",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "许峰",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "朱文山",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "于光喜",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "于万桃",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "许德富",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "于万琴",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "王永忠",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "冯景峰",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "颜少云",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "王文兵",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "许斌",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "阚兆梅",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "华桂宏",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "刘永君",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "胡元华",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "王飞",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "扬州万德天成创业投资中心（普通合伙）",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "江苏峰业科技环保集团股份有限公司",
                "shareholder": "北京方壶天地创业投资中心（有限合伙）",
                "type": "内资合伙企业",
                "count": 1
            }
        ],
        "COMPANY_NAME": "江苏峰业科技环保集团股份有限公司",
        "location": [
            119.487887,
            32.603258
        ],
        "Unnamed: 0": 30,
        "index": 31,
        "actualCapi": "15000 万人民币",
        "COMPANY_ADDRESS": "江苏省扬州市江都区邵伯镇昭关京杭村",
        "belongOrg": "江苏省扬州市场监督管理局",
        "categoryNew": 115601,
        "checkDate": "12/21/2020",
        "COMPANY_CODE": "91321000759691417P",
        "currency_unit": "CNY",
        "districtCode": 321012,
        "domain": "C3500",
        "econKind": "股份有限公司(非上市、自然人投资或控股)",
        "econKindCode": 1222,
        "historyNames": "江苏峰业电力环保有限公司, 江苏峰业电力环保集团有限公司, 江苏峰业电力设备有限公司",
        "id": "1cdc21ed-1c8f-4641-ac5f-a7650c28bc8a",
        "operName": "许德富",
        "orgNo": "759691417",
        "REGISTER_NUMBER": 321088000000000,
        "REGISTER_CURRENCY": "30132 万人民币",
        "BUSINESS_SCOPE": "大气污染防治、水污染防治、固体废物处理处置、污染修复工程的设计、施工、调试和污染修复工程药剂的研发、生产、销售；火力发电厂工程的设计、施工、调试；节能改造工程的设计、施工、调试；新型高效、无污染SCR催化剂的研发、生产、销售；市政公用工程的设计、施工、调试；机电设备安装工程的设计、施工、调试；房屋建筑工程的施工；防腐保温工程和化工石油设备管道工程施工；非标准件、钢结构、金属容器和环保设备的研发、设计、制造和安装；电力钢管塔、管件、法兰、五金构件、电力金具的制作、安装；钢材、线缆和防火、防腐材料的销售；设备、货物的进出口，海外电力、环保、市政工程的承揽实施。（依法须经批准的项目，经相关部门批准后方可开展经营活动）_x000D_\n许可项目：电力设施承装、承修、承试（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以审批结果为准）_x000D_\n一般项目：配电开关控制设备制造；配电开关控制设备销售；配电开关控制设备研发；电力设施器材制造；机械电气设备制造；电气机械设备销售；环境保护专用设备制造；环境保护专用设备销售（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "startDate": "4/8/2004",
        "status": "存续",
        "tags": "17",
        "termEnd": "-",
        "termStart": "4/8/2004",
        "type_new": 1,
        "listed": "未知",
        "COMPANY_TYPE": "股份有限公司",
        "tag_registCapi": "注册资本一亿至十亿",
        "code": "C",
        "number": 35,
        "INDUSTRY": "制造业",
        "CAP": "专用设备制造业 ",
        "policy": "县政府办公室关于成立县电力安全生产专业委员会的通知;关于印发《仪征市电力设施保护工作意见》的通知;市政府关于印发《扬州市建设工程安全生产监督管理办法》的通知",
        "locations": "222;645;45"
    },
    {
        "radar": {
            "indicator": [
                {
                    "name": "基础能力",
                    "max": 6500
                },
                {
                    "name": "经营管理",
                    "max": 16000
                },
                {
                    "name": "科技创新",
                    "max": 30000
                },
                {
                    "name": "只能创造",
                    "max": 38000
                },
                {
                    "name": "可持续发展",
                    "max": 52000
                },
                {
                    "name": "信用风险",
                    "max": 25000
                }
            ],
            "series": [
                {
                    "name": "Budget vs spending",
                    "type": "radar",
                    "data": [
                        {
                            "value": [
                                4200,
                                3000,
                                20000,
                                35000,
                                50000,
                                18000
                            ],
                            "name": "全部企业"
                        },
                        {
                            "value": [
                                5000,
                                14000,
                                28000,
                                26000,
                                42000,
                                21000
                            ],
                            "name": "化工制造业"
                        },
                        {
                            "value": [
                                8993,
                                7842,
                                9030,
                                9364,
                                8886,
                                6951
                            ],
                            "name": "江苏天雨环保集团有限公司"
                        }
                    ]
                }
            ]
        },
        "network": [
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "王旗军",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "陈国明",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "田正祥",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "李武华",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "王大华",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "王明根",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "卜恒桂",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "芦黎平",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "刘玉华",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "徐乃祥",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "王忠民",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "田广东",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏天雨环保集团有限公司",
                "shareholder": "扬州鑫雨企业管理合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            }
        ],
        "COMPANY_NAME": "江苏天雨环保集团有限公司",
        "location": [
            119.561779,
            32.607928
        ],
        "Unnamed: 0": 26,
        "index": 27,
        "actualCapi": "5050 万人民币",
        "COMPANY_ADDRESS": "扬州市江都区真武镇滨湖",
        "belongOrg": "扬州市江都区市场监督管理局",
        "categoryNew": 115601,
        "checkDate": "6/18/2020",
        "COMPANY_CODE": "91321012732284918P",
        "currency_unit": "CNY",
        "districtCode": 321012,
        "domain": "C3500",
        "econKind": "有限责任公司(自然人投资或控股)",
        "econKindCode": 1130,
        "historyNames": "扬州天雨环保机械制造有限公司",
        "id": "60091cad-819e-435b-9fcf-99436b02e235",
        "operName": "王明根",
        "orgNo": "732284918",
        "REGISTER_NUMBER": 321088000000000,
        "REGISTER_CURRENCY": "5050 万人民币",
        "BUSINESS_SCOPE": "给排水、污水处理设备、水工金属结构产品、压力容器设计、制造、安装及营运管理；起重机械制造、安装；非压力工业管道、低压配电、给排水设备安装、维修；铸造；汇线桥架、滑触线制造、加工；软件系统研发及销售；装璜服务；花木园林绿化工程、船舶工程施工；经营本企业自产产品及技术的出口业务；经营本企业生产、科研所需的原辅材料、仪器仪表、机械设备、零配件及技术的进口业务；经营进料加工和“三来一补”业务。以下经营范围_x000D_\n一般项目：水环境污染防治服务；大气环境污染防治服务；土壤环境污染防治服务（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）",
        "startDate": "11/8/2001",
        "status": "存续",
        "tags": "17",
        "termEnd": "-",
        "termStart": "11/8/2001",
        "type_new": 1,
        "listed": "未知",
        "COMPANY_TYPE": "有限责任公司",
        "tag_registCapi": "注册资本五千万至一亿",
        "code": "C",
        "number": 35,
        "INDUSTRY": "制造业",
        "CAP": "专用设备制造业 ",
        "policy": "关于转发市政府关于促进先进制造业加快发展的政策意见等文件的通知;县政府办公室关于印发《宝应县铸造、有色金属行业大气污染综合治理攻坚行动方案》的通知;关于进一步规范船舶企业用工行为及严格执行工资保证金制度的通知",
        "locations": "1181;241;687"
    },
    {
        "radar": {
            "indicator": [
                {
                    "name": "基础能力",
                    "max": 6500
                },
                {
                    "name": "经营管理",
                    "max": 16000
                },
                {
                    "name": "科技创新",
                    "max": 30000
                },
                {
                    "name": "只能创造",
                    "max": 38000
                },
                {
                    "name": "可持续发展",
                    "max": 52000
                },
                {
                    "name": "信用风险",
                    "max": 25000
                }
            ],
            "series": [
                {
                    "name": "Budget vs spending",
                    "type": "radar",
                    "data": [
                        {
                            "value": [
                                4200,
                                3000,
                                20000,
                                35000,
                                50000,
                                18000
                            ],
                            "name": "全部企业"
                        },
                        {
                            "value": [
                                5000,
                                14000,
                                28000,
                                26000,
                                42000,
                                21000
                            ],
                            "name": "化工制造业"
                        },
                        {
                            "value": [
                                5455,
                                5163,
                                7648,
                                6812,
                                7805,
                                7636
                            ],
                            "name": "江苏捷凯电力器材有限公司"
                        }
                    ]
                }
            ]
        },
        "network": [
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "孙兵",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "庄大清",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "朱绵兵",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "丁根林",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "朱正林",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "王国林",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "万军",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "徐有颜",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "赵庆国",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏捷凯电力器材有限公司",
                "shareholder": "樊忠明",
                "type": "自然人股东",
                "count": 1
            }
        ],
        "COMPANY_NAME": "江苏捷凯电力器材有限公司",
        "location": [
            119.628928,
            32.449554
        ],
        "Unnamed: 0": 22,
        "index": 23,
        "actualCapi": "8000 万人民币",
        "COMPANY_ADDRESS": "扬州市江都区仙女镇砖桥",
        "belongOrg": "扬州市江都区市场监督管理局",
        "categoryNew": 115601,
        "checkDate": "11/29/2018",
        "COMPANY_CODE": "91321012140755771B",
        "currency_unit": "CNY",
        "districtCode": 321012,
        "domain": "C3824",
        "econKind": "有限责任公司(自然人投资或控股)",
        "econKindCode": 1130,
        "historyNames": "江苏捷凯电力器材集团公司",
        "id": "15df70f1-4592-46dc-8e86-eb8b89e63e4c",
        "operName": "赵庆国",
        "orgNo": "140755771",
        "REGISTER_NUMBER": 321088000000000,
        "REGISTER_CURRENCY": "8000 万人民币",
        "BUSINESS_SCOPE": "电力金具、绝缘子金属附件、电缆附件、电缆接线端子、光缆附件、防坠落装置、冶金机械、建筑脚手扣件、电流互感器、直流系统接地自动检测仪、耐磨耐热铸件、铁塔、铁附件、电线、电缆、开关、变压器、电站成套机组及配件、制造、加工、销售，五金电器、标准件、金属材料、炉料销售，自营和代理各类商品及技术的进出口业务（国家限定企业经营或禁止进出口的商品及技术除外）。（依法须经批准的项目，经相关部门批准后方可进行经营活动）",
        "startDate": "12/18/1993",
        "status": "存续",
        "tags": "17",
        "termEnd": "-",
        "termStart": "12/18/1993",
        "type_new": 1,
        "listed": "未知",
        "COMPANY_TYPE": "有限责任公司",
        "tag_registCapi": "注册资本五千万至一亿",
        "code": "C",
        "number": 38,
        "INDUSTRY": "制造业",
        "CAP": "电气机械和器材制造业 ",
        "policy": "县政府关于《扬州市苏尔电气有限公司“6.2”一般高处坠落事故调查报告》的批复;关于转发市政府关于促进先进制造业加快发展的政策意见等文件的通知;关于转发《关于印发＜扬州市江都区冶金等工贸行业专项行动实施方案＞的通知》的通知",
        "locations": "131;1181;1298"
    },
    {
        "radar": {
            "indicator": [
                {
                    "name": "基础能力",
                    "max": 6500
                },
                {
                    "name": "经营管理",
                    "max": 16000
                },
                {
                    "name": "科技创新",
                    "max": 30000
                },
                {
                    "name": "只能创造",
                    "max": 38000
                },
                {
                    "name": "可持续发展",
                    "max": 52000
                },
                {
                    "name": "信用风险",
                    "max": 25000
                }
            ],
            "series": [
                {
                    "name": "Budget vs spending",
                    "type": "radar",
                    "data": [
                        {
                            "value": [
                                4200,
                                3000,
                                20000,
                                35000,
                                50000,
                                18000
                            ],
                            "name": "全部企业"
                        },
                        {
                            "value": [
                                5000,
                                14000,
                                28000,
                                26000,
                                42000,
                                21000
                            ],
                            "name": "化工制造业"
                        },
                        {
                            "value": [
                                6339,
                                7957,
                                8596,
                                5513,
                                6872,
                                7151
                            ],
                            "name": "江苏江都农村商业银行股份有限公司"
                        }
                    ]
                }
            ]
        },
        "network": [
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏江澄环保设备工程有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏中惠医疗科技股份有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏沪武建设工程有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州市永益棉业有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江都市曙光电力器材有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏中都建设工程有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏普信华泰科技有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏华江建设集团有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州新达锌业有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州市华伦溶剂有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州市兴发锌业有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "马茂书等1204名自然人",
                "type": "其他投资者",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江都市富友针织有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州四星集团公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏龙川船业集团有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州市科晨海绵有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州华凯机械有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江苏龙腾坤鑫建设发展有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "江都市鸣天建筑安装工程有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏江都农村商业银行股份有限公司",
                "shareholder": "扬州海川船业有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏中惠医疗科技股份有限公司",
                "shareholder": "居小平",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏中惠医疗科技股份有限公司",
                "shareholder": "居婷",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏中惠医疗科技股份有限公司",
                "shareholder": "刘莹",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏中惠医疗科技股份有限公司",
                "shareholder": "刘轩铭",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏中惠医疗科技股份有限公司",
                "shareholder": "石荟琳",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏龙诚融资担保有限公司",
                "shareholder": "江苏中惠医疗科技股份有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "扬州市江都区龙诚农村小额贷款有限公司",
                "shareholder": "江苏中惠医疗科技股份有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "庞永祥",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "田凯",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "汤原先",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "吴迎兵",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "马彦争",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "吴祥兵",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "蒋思源",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "汤林先",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "张书林",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "华盼科",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "曾鸣",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "王金卿",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "庞长军",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "曹新民",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "周安宏",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "朱丹",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "乐正林",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "周湘东",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "扬州鑫盛管理咨询合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "江苏华江建设集团有限公司",
                "shareholder": "扬州汇鑫管理咨询合伙企业(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "江苏华江祥瑞现代建筑发展有限公司",
                "shareholder": "江苏华江建设集团有限公司",
                "type": "企业法人",
                "count": 1
            },
            {
                "company": "江苏龙腾坤鑫建设发展有限公司",
                "shareholder": "刘建",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏龙腾坤鑫建设发展有限公司",
                "shareholder": "徐莉",
                "type": "自然人股东",
                "count": 1
            },
            {
                "company": "江苏龙腾坤鑫建设发展有限公司",
                "shareholder": "扬州市联鑫建筑项目管理咨询中心(有限合伙)",
                "type": "内资合伙企业",
                "count": 1
            },
            {
                "company": "江苏龙腾坤鑫建设发展有限公司",
                "shareholder": "江苏融汇建设集团有限公司",
                "type": "企业法人",
                "count": 1
            }
        ],
        "COMPANY_NAME": "江苏江都农村商业银行股份有限公司",
        "location": [
            119.582227,
            32.431829
        ],
        "Unnamed: 0": 123,
        "index": 124,
        "actualCapi": "35000 万人民币",
        "COMPANY_ADDRESS": "扬州市江都区龙城路21号",
        "belongOrg": "江苏省扬州市场监督管理局",
        "categoryNew": 115601,
        "checkDate": "9/16/2020",
        "COMPANY_CODE": "91321000140938287H",
        "currency_unit": "CNY",
        "districtCode": 321012,
        "domain": "J6600",
        "econKind": "股份有限公司(非上市、自然人投资或控股)",
        "econKindCode": 1222,
        "historyNames": "江都市农材信用合作社联合社, 江都市农村信用合作社联合社, 江都市农村信用合作联社",
        "id": "29301ae5-faca-4d05-8176-f91b1c021790",
        "operName": "尚修国",
        "orgNo": "140938287",
        "REGISTER_NUMBER": 321088000000000,
        "REGISTER_CURRENCY": "58361 万人民币",
        "BUSINESS_SCOPE": "吸收公众存款；发放短期、中期和长期贷款；办理国内结算；办理票据承兑与贴现；代理发行、代理兑付、承销政府债券；买卖政府债券、金融债券；从事同业拆借；从事银行卡业务；代理收付款项；提供保管箱服务；保险兼业代理业务；外汇存款；外汇贷款；外汇汇款；外币兑换；国际结算；外汇票据的承兑和贴现；外汇担保；同业外汇拆借；资信调查、咨询和见证业务；经中国银行业监督管理委员会批准的其他业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）",
        "startDate": "10/13/1995",
        "status": "存续",
        "tags": "",
        "termEnd": "-",
        "termStart": "10/13/1995",
        "type_new": 1,
        "listed": "未知",
        "COMPANY_TYPE": "股份有限公司",
        "tag_registCapi": "注册资本一亿至十亿",
        "code": "J",
        "number": 66,
        "INDUSTRY": "金融业",
        "CAP": "货币金融服务 ",
        "policy": "关于印发《仪征市金融支持高层次人才创业创新政策支持意见》的通知;印发关于进一步加大金融支持实体经济发展的实施意见的通知;关于印发《仪征市小微企业“政银企合作”业务管理办法》的通知",
        "locations": "565;1040;567"
    }
        ],
     Index: '0',
     nun: '',
     colors: '',
     value: '扬州宁达贵金属有限公司',
      };
    },
    created() {
      this.echartsData = this.listData[0]
            console.log( this.echartsData)
    },
    watch: {
      // this.index
      echartsData: {
        handler(val,oldval) {
          // console.log(val);
          this.drawRadar(val)
          this.drawGraph()
        }
      },
      colors: {
        handler(val) {
          this.drawMap()
          console.log(val);
        }
      }
    },
    methods: {
      drawMap() {
        var chartDom = document.getElementById('map');
        var myChart = this.$echarts.init(chartDom);
        var option;
        var that = this
        var list = []
        // var value = ''
        var color = this.colors
        this.listData.forEach((item, index) =>{
          var obj = {
            name: item.COMPANY_NAME,
            value: item.location
          }
          list.push(obj)
          // this.list1.push(item)

        })
        console.log(list);
        var busLines = [{
          "coords": [[
            119.461982,
            32.647683
          ],
          [
            119.467516,
            32.648523
          ],
          [
            119.473972,
            32.646578
          ],
          [
            119.477715,
            32.644693
          ],
          [
            119.480938,
            32.644176
          ],
          [
            119.484484,
            32.645269
          ],
          [
            119.487242,
            32.648211
          ],
          [
            119.487842,
            32.651417
          ],
          [
            119.490394,
            32.657565
          ],
          [
            119.495068,
            32.660938
          ],
          [
            119.501578,
            32.662427
          ],
          [
            119.50995,
            32.662523
          ],
          [
            119.512914,
            32.661779
          ],
          [
            119.519934,
            32.661671
          ],
          [
            119.522656,
            32.662307
          ],
          [
            119.527832,
            32.664756
          ],
          [
            119.530267,
            32.664708
          ],
          [
            119.532918,
            32.662139
          ],
          [
            119.533375,
            32.658225
          ],
          [
            119.537019,
            32.651045
          ],
          [
            119.540243,
            32.647395
          ],
          [
            119.54994,
            32.646278
          ],
          [
            119.57152,
            32.648763
          ],
          [
            119.590816,
            32.649496
          ],
          [
            119.601257,
            32.648859
          ],
          [
            119.616014,
            32.647491
          ],
          [
            119.618297,
            32.647587
          ],
          [
            119.624565,
            32.703477
          ],
          [
            119.622819,
            32.703765
          ],
          [
            119.624368,
            32.709177
          ],
          [
            119.630099,
            32.710485
          ],
          [
            119.648571,
            32.710461
          ],
          [
            119.658663,
            32.711937
          ],
          [
            119.667142,
            32.713893
          ],
          [
            119.672596,
            32.714732
          ],
          [
            119.681254,
            32.713017
          ],
          [
            119.692152,
            32.713785
          ],
          [
            119.695125,
            32.713053
          ],
          [
            119.700211,
            32.709549
          ],
          [
            119.70989,
            32.704821
          ],
          [
            119.72017,
            32.702613
          ],
          [
            119.726581,
            32.702481
          ],
          [
            119.731586,
            32.703837
          ],
          [
            119.735222,
            32.706777
          ],
          [
            119.738087,
            32.710617
          ],
          [
            119.739,
            32.713917
          ],
          [
            119.738069,
            32.716832
          ],
          [
            119.744194,
            32.726526
          ],
          [
            119.782581,
            32.760472
          ],
          [
            119.804017,
            32.785724
          ],
          [
            119.817861,
            32.792162
          ],
          [
            119.824926,
            32.794919
          ],
          [
            119.825776,
            32.793649
          ],
          [
            119.826161,
            32.789045
          ],
          [
            119.827191,
            32.787415
          ],
          [
            119.833513,
            32.781972
          ],
          [
            119.843703,
            32.778962
          ],
          [
            119.855836,
            32.777499
          ],
          [
            119.863089,
            32.775701
          ],
          [
            119.867002,
            32.771012
          ],
          [
            119.866921,
            32.768482
          ],
          [
            119.863035,
            32.76606
          ],
          [
            119.851332,
            32.756022
          ],
          [
            119.84527,
            32.752964
          ],
          [
            119.842145,
            32.748454
          ],
          [
            119.841778,
            32.745935
          ],
          [
            119.842646,
            32.739482
          ],
          [
            119.84364,
            32.736699
          ],
          [
            119.847025,
            32.732477
          ],
          [
            119.853364,
            32.727954
          ],
          [
            119.858003,
            32.721175
          ],
          [
            119.858459,
            32.718632
          ],
          [
            119.858468,
            32.710593
          ],
          [
            119.863187,
            32.706345
          ],
          [
            119.868846,
            32.705277
          ],
          [
            119.874138,
            32.701701
          ],
          [
            119.877272,
            32.698413
          ],
          [
            119.875795,
            32.694548
          ],
          [
            119.873583,
            32.693456
          ],
          [
            119.87147,
            32.687071
          ],
          [
            119.870467,
            32.681358
          ],
          [
            119.870655,
            32.679053
          ],
          [
            119.87489,
            32.675968
          ],
          [
            119.883487,
            32.673916
          ],
          [
            119.894876,
            32.674324
          ],
          [
            119.898145,
            32.667109
          ],
          [
            119.899336,
            32.661803
          ],
          [
            119.899165,
            32.656988
          ],
          [
            119.897061,
            32.651069
          ],
          [
            119.897178,
            32.646242
          ],
          [
            119.902855,
            32.638064
          ],
          [
            119.904108,
            32.635518
          ],
          [
            119.911872,
            32.625141
          ],
          [
            119.90247,
            32.623736
          ],
          [
            119.900634,
            32.623964
          ],
          [
            119.898789,
            32.619448
          ],
          [
            119.898646,
            32.616505
          ],
          [
            119.893981,
            32.618379
          ],
          [
            119.894053,
            32.619941
          ],
          [
            119.890542,
            32.620349
          ],
          [
            119.887346,
            32.619316
          ],
          [
            119.88149,
            32.618956
          ],
          [
            119.881579,
            32.617118
          ],
          [
            119.876654,
            32.615977
          ],
          [
            119.875526,
            32.619496
          ],
          [
            119.869527,
            32.619376
          ],
          [
            119.870377,
            32.623088
          ],
          [
            119.868014,
            32.623568
          ],
          [
            119.869285,
            32.625178
          ],
          [
            119.870324,
            32.630126
          ],
          [
            119.867073,
            32.630918
          ],
          [
            119.866599,
            32.627616
          ],
          [
            119.864154,
            32.629153
          ],
          [
            119.861092,
            32.629537
          ],
          [
            119.860044,
            32.631471
          ],
          [
            119.85503,
            32.631891
          ],
          [
            119.855666,
            32.634413
          ],
          [
            119.853275,
            32.636611
          ],
          [
            119.846738,
            32.636743
          ],
          [
            119.846756,
            32.638773
          ],
          [
            119.844518,
            32.638592
          ],
          [
            119.844616,
            32.640346
          ],
          [
            119.832984,
            32.640898
          ],
          [
            119.830128,
            32.6323
          ],
          [
            119.828364,
            32.632516
          ],
          [
            119.828731,
            32.629357
          ],
          [
            119.825543,
            32.628408
          ],
          [
            119.814386,
            32.627063
          ],
          [
            119.814261,
            32.623688
          ],
          [
            119.815873,
            32.620037
          ],
          [
            119.816115,
            32.614884
          ],
          [
            119.817995,
            32.615412
          ],
          [
            119.821774,
            32.607268
          ],
          [
            119.82112,
            32.605093
          ],
          [
            119.815765,
            32.605658
          ],
          [
            119.813679,
            32.604337
          ],
          [
            119.815076,
            32.602883
          ],
          [
            119.81496,
            32.600288
          ],
          [
            119.81701,
            32.598966
          ],
          [
            119.816312,
            32.597717
          ],
          [
            119.818729,
            32.596996
          ],
          [
            119.818846,
            32.594245
          ],
          [
            119.820171,
            32.594088
          ],
          [
            119.81812,
            32.587636
          ],
          [
            119.816374,
            32.583995
          ],
          [
            119.815667,
            32.578744
          ],
          [
            119.819777,
            32.572435
          ],
          [
            119.824075,
            32.563602
          ],
          [
            119.827173,
            32.559154
          ],
          [
            119.834372,
            32.55645
          ],
          [
            119.835393,
            32.554587
          ],
          [
            119.835501,
            32.549755
          ],
          [
            119.832904,
            32.544778
          ],
          [
            119.830415,
            32.542999
          ],
          [
            119.823403,
            32.535377
          ],
          [
            119.822938,
            32.529185
          ],
          [
            119.824102,
            32.523654
          ],
          [
            119.824344,
            32.514695
          ],
          [
            119.825042,
            32.511232
          ],
          [
            119.824415,
            32.508718
          ],
          [
            119.825141,
            32.506181
          ],
          [
            119.825248,
            32.501346
          ],
          [
            119.824541,
            32.496318
          ],
          [
            119.818183,
            32.491663
          ],
          [
            119.817556,
            32.489378
          ],
          [
            119.817726,
            32.477902
          ],
          [
            119.814539,
            32.468842
          ],
          [
            119.819849,
            32.465509
          ],
          [
            119.829671,
            32.460348
          ],
          [
            119.840542,
            32.464475
          ],
          [
            119.85066,
            32.465401
          ],
          [
            119.853382,
            32.462754
          ],
          [
            119.85631,
            32.453501
          ],
          [
            119.856749,
            32.450504
          ],
          [
            119.859256,
            32.444463
          ],
          [
            119.862668,
            32.44208
          ],
          [
            119.866679,
            32.440828
          ],
          [
            119.868497,
            32.438722
          ],
          [
            119.866482,
            32.434642
          ],
          [
            119.864862,
            32.427348
          ],
          [
            119.866384,
            32.426553
          ],
          [
            119.86702,
            32.42228
          ],
          [
            119.864333,
            32.422436
          ],
          [
            119.863805,
            32.417128
          ],
          [
            119.861029,
            32.417103
          ],
          [
            119.856113,
            32.415623
          ],
          [
            119.855889,
            32.413769
          ],
          [
            119.85349,
            32.411469
          ],
          [
            119.851744,
            32.411168
          ],
          [
            119.854072,
            32.404149
          ],
          [
            119.853893,
            32.401669
          ],
          [
            119.849263,
            32.401271
          ],
          [
            119.84955,
            32.400055
          ],
          [
            119.847132,
            32.398177
          ],
          [
            119.847481,
            32.396166
          ],
          [
            119.84458,
            32.395961
          ],
          [
            119.846192,
            32.38982
          ],
          [
            119.849639,
            32.391096
          ],
          [
            119.851135,
            32.387664
          ],
          [
            119.851296,
            32.384943
          ],
          [
            119.853499,
            32.383654
          ],
          [
            119.856203,
            32.379728
          ],
          [
            119.853705,
            32.361516
          ],
          [
            119.846434,
            32.363468
          ],
          [
            119.842727,
            32.360685
          ],
          [
            119.844428,
            32.355361
          ],
          [
            119.844777,
            32.349385
          ],
          [
            119.844347,
            32.344578
          ],
          [
            119.844804,
            32.342036
          ],
          [
            119.842001,
            32.338891
          ],
          [
            119.84193,
            32.336831
          ],
          [
            119.843756,
            32.334951
          ],
          [
            119.847311,
            32.328432
          ],
          [
            119.846407,
            32.32548
          ],
          [
            119.843864,
            32.321865
          ],
          [
            119.833602,
            32.313175
          ],
          [
            119.831426,
            32.312548
          ],
          [
            119.826448,
            32.308547
          ],
          [
            119.822589,
            32.306112
          ],
          [
            119.819177,
            32.302532
          ],
          [
            119.815488,
            32.305148
          ],
          [
            119.802271,
            32.312826
          ],
          [
            119.794293,
            32.316007
          ],
          [
            119.78601,
            32.317888
          ],
          [
            119.768639,
            32.318912
          ],
          [
            119.745161,
            32.313862
          ],
          [
            119.730682,
            32.303991
          ],
          [
            119.724145,
            32.296481
          ],
          [
            119.712299,
            32.298265
          ],
          [
            119.709747,
            32.301327
          ],
          [
            119.707114,
            32.306245
          ],
          [
            119.703246,
            32.312115
          ],
          [
            119.695259,
            32.321503
          ],
          [
            119.687872,
            32.329107
          ],
          [
            119.678031,
            32.336722
          ],
          [
            119.66836,
            32.343024
          ],
          [
            119.657302,
            32.347687
          ],
          [
            119.64584,
            32.350759
          ],
          [
            119.634665,
            32.352988
          ],
          [
            119.624484,
            32.354445
          ],
          [
            119.611707,
            32.355349
          ],
          [
            119.602555,
            32.361324
          ],
          [
            119.599475,
            32.361818
          ],
          [
            119.592034,
            32.361468
          ],
          [
            119.58881,
            32.362311
          ],
          [
            119.586214,
            32.365744
          ],
          [
            119.587763,
            32.368274
          ],
          [
            119.592079,
            32.372899
          ],
          [
            119.59087,
            32.375525
          ],
          [
            119.58616,
            32.375525
          ],
          [
            119.57948,
            32.371695
          ],
          [
            119.576633,
            32.372791
          ],
          [
            119.574448,
            32.379933
          ],
          [
            119.571493,
            32.379824
          ],
          [
            119.569738,
            32.376428
          ],
          [
            119.565798,
            32.374344
          ],
          [
            119.562843,
            32.374465
          ],
          [
            119.56099,
            32.376994
          ],
          [
            119.562082,
            32.380932
          ],
          [
            119.563944,
            32.382462
          ],
          [
            119.573463,
            32.384533
          ],
          [
            119.574994,
            32.387387
          ],
          [
            119.573678,
            32.39035
          ],
          [
            119.564813,
            32.395961
          ],
          [
            119.557488,
            32.397286
          ],
          [
            119.554534,
            32.399598
          ],
          [
            119.555957,
            32.407496
          ],
          [
            119.55465,
            32.408483
          ],
          [
            119.542839,
            32.410482
          ],
          [
            119.538577,
            32.410927
          ],
          [
            119.535291,
            32.413251
          ],
          [
            119.535407,
            32.422894
          ],
          [
            119.534216,
            32.431139
          ],
          [
            119.539446,
            32.431621
          ],
          [
            119.549537,
            32.431621
          ],
          [
            119.549922,
            32.434473
          ],
          [
            119.545436,
            32.443031
          ],
          [
            119.54232,
            32.446737
          ],
          [
            119.5353,
            32.452357
          ],
          [
            119.533518,
            32.458037
          ],
          [
            119.529372,
            32.466532
          ],
          [
            119.526766,
            32.473667
          ],
          [
            119.523955,
            32.476879
          ],
          [
            119.52117,
            32.481439
          ],
          [
            119.515547,
            32.489029
          ],
          [
            119.508535,
            32.496643
          ],
          [
            119.503208,
            32.503799
          ],
          [
            119.495606,
            32.50849
          ],
          [
            119.48709,
            32.514827
          ],
          [
            119.479425,
            32.523449
          ],
          [
            119.474733,
            32.532022
          ],
          [
            119.469325,
            32.545643
          ],
          [
            119.468841,
            32.548408
          ],
          [
            119.470346,
            32.556654
          ],
          [
            119.470444,
            32.561474
          ],
          [
            119.474966,
            32.572651
          ],
          [
            119.479971,
            32.579453
          ],
          [
            119.482174,
            32.583395
          ],
          [
            119.480983,
            32.586747
          ],
          [
            119.473372,
            32.601285
          ],
          [
            119.469575,
            32.618163
          ],
          [
            119.468823,
            32.619448
          ],
          [
            119.466325,
            32.63266
          ],
          [
            119.461982,
            32.647683
          ]], "lineStyle": { "normal": { "color": "red" } }
        }]

        option = {
          title: {
            text: '江都区企业分布',
             textStyle:{
              color:"white"
            },
            // subtext: 'data from PM25.in',
            // sublink: 'http://www.pm25.in',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          bmap: {
            center: [119.724832, 32.566547],
            zoom: 11,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: 'water',
                  elementType: 'all',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'land',
                  elementType: 'geometry',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'highway',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'geometry.fill',
                  stylers: {
                    color: '#DEDE10'
                  }
                },
                {
                  featureType: 'arterial',
                  elementType: 'geometry.stroke',
                  stylers: {
                    color: '#DEDE10'
                  }
                },
                {
                  featureType: 'local',
                  elementType: 'geometry',
                  stylers: {
                    color: '#000000'
                  }
                },
                {
                  featureType: 'railway',
                  elementType: 'geometry.fill',
                  stylers: {
                    color: '#000000'
                  }
                },
                {
                  featureType: 'railway',
                  elementType: 'geometry.stroke',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'subway',
                  elementType: 'geometry',
                  stylers: {
                    lightness: -70
                  }
                },
                {
                  featureType: 'building',
                  elementType: 'geometry.fill',
                  stylers: {
                    color: 'white'
                  }
                },
                {
                  featureType: 'all',
                  elementType: 'labels.text.fill',
                  stylers: {
                    visibility: 'off',
                  }
                },
                {
                  featureType: 'all',
                  elementType: 'labels.text.stroke',
                  stylers: {
                    visibility: 'off',
                  }
                },
                {
                  featureType: 'building',
                  elementType: 'geometry',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'green',
                  elementType: 'geometry',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'boundary',
                  elementType: 'all',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'manmade',
                  elementType: 'all',
                  stylers: {
                    color: '#04142B'
                  }
                },
                {
                  featureType: 'label',
                  elementType: 'all',
                  stylers: {
                    visibility: 'off',
                    color: '#FFFFFF'
                  }
                }
              ]
            }

          },
          series: [
            {
              type: 'lines',
              coordinateSystem: 'bmap',
              polyline: true,
              data: busLines,
              silent: true,
              lineStyle: {
                normal: {
                  // color: '#c23531',
                  // color: 'rgb(200, 35, 45)',
                  opacity: 0.3,
                  width: 4
                }
              },
              progressiveThreshold: 500,
              progressive: 200
            }, {
              type: 'lines',
              coordinateSystem: 'bmap',
              polyline: true,
              data: busLines,
              lineStyle: {
                normal: {
                  width: 0,
                }
              },
              effect: {
                constantSpeed: 500,
                show: true,
                trailLength: 1,
                symbolSize: 2
              },
              zlevel: 1
            },
            {
              name: '扬州市',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: list,
              symbolSize: 20,
              encode: {
                value: 2
              },
              select: {
                itemStyle: {
                  color: '#b50205'
                },
                label: {
                  show: false
                }
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              // color: this.colors,
              itemStyle: {
                shadowBlur: 12,
                shadowColor: '#5EA6FE',
                normal: {
                   color: function(params) {
                      var key = params.name;
                      if(key === that.value){
                          return "#FE8463";
                      }else{
                          return "#5EA6FE";
                      }
                  }
                },
              },
              emphasis: {
                scale: true,
                // color: 'red',
              },
              zlevel: 2
            }
          ]
        };

        option && myChart.setOption(option);
        myChart.on('click', function(params) {
          // console.log(option);
          // console.log(value);
          // var value = '扬州宁达贵金属有限公司'
          that.value = params.data.name
          // console.log(value);
          if(params.data.name === "江苏峰业科技环保集团股份有限公司") {
            // console.log(that.listData);
            that.echartsData = that.listData[1]
            that.colors = '#e66'
            // console.log(that.colors);
          } else if (params.data.name === "扬州宁达贵金属有限公司") {
            that.echartsData = that.listData[0]
            this.index = '0'
          } else if (params.data.name === "江苏天雨环保集团有限公司") {
            that.echartsData = that.listData[2]
            this.index = '2'
          } else if(params.data.name === "江苏捷凯电力器材有限公司") {
            that.echartsData = that.listData[3]
            this.index = '3'
          } else if(params.data.name = "江苏江都农村商业银行股份有限公司") {
            that.echartsData = that.listData[4]
          }
          // console.log(that.echartsData);
        })
      },
      drawBar() {
        var data = [{
        "name": "制造业",
        "value": 282.76
       }, {
        "name": "建筑业",
        "value": 1051.1
       }, {
        "name": "采矿业",
        "value": 50
       },{
        "name": "金融业",
        "value": 158.07
    }];
        var xData = [],
          yData = [];
        var min = 50;
        data.map(function (a, b) {
          xData.push(a.name);
          yData.push(a.value);
          // if (a.value === 0) {
          //   yData.push(a.value + min);
          // } else {
          // }
        });
        var option = {

          color: ['#3398DB'],


          grid: {
            left: '0%',
            right: '0%',
            bottom: '12%',
            height: '82%',
            containLabel: true,
            z: 22
          },
          xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: xData,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              show: true,
              color: 'rgb(170,170,170)',
              fontSize: 16
            }
          }],
          yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            min: 0,
            max: 1200,
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              color: 'rgb(170,170,170)',
              formatter: '{value} (亿元)'
            }
          },
          {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
              }
            }
          }
          ],
          series: [{
            name: '合格率',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00feff'
                  },
                  {
                    offset: 0.5,
                    color: '#027eff'
                  },
                  {
                    offset: 1,
                    color: '#0286ff'
                  }
                ]
                )
              }
            },
            data: yData,
            zlevel: 11

          },
          {
            name: '背景',
            type: 'bar',
            barWidth: '50%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-135%',
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,0.1)'
              }
            },
            zlevel: 9
          },

          ]
        };
        var barChart = this.$echarts.init(
          document.getElementById("mains"),
          "shine"
        );
        barChart.setOption(option)
      },
      drawPie() {
        var pieChart = this.$echarts.init(
          document.getElementById("Progress"),
          "shine"
        );
        var option = {

          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#020816',
                borderWidth: 2,
                emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{ 
                        label:{ 
                            show: true, 
                            formatter: '{b} : {c} ({d}%)' 
                        }, 
                        labelLine :{show:true} 
                    } 
              },
              label: {
                show: false,
                position: 'center'
              },
              // emphasis: {
              //   label: {
              //     show: true,
              //     fontSize: '20',
              //     fontWeight: 'bold'
              //   }
              // },
              //  normal:{ 
              //   label:{ 
              //       show: true, 
              //       formatter: '{b} : {c} ({d}%)' 
              //   }, 
              //   labelLine :{show:true} 
              // }, 
              labelLine: {
                show: false
              },
              data: [
                {
                "name": "住宿和餐饮业",
                "value": 1
              },
              {
                "name": "信息传输、软件和信息技术服务业",
                "value": 1
              },
              {
                "name": "制造业",
                "value": 96
              },
              {
                "name": "建筑业",
                "value": 17
              },
              {
                "name": "批发和零售业",
                "value": 3
              },
              {
                "name": "电力、热力、燃气及水生产和供应业",
                "value": 1
              },
              {
                "name": "科学研究和技术服务业",
                "value": 8
              },
              {
                "name": "租赁和商务服务业",
                "value": 2
              },
              {
                "name": "采矿业",
                "value": 1
              },
              {
                "name": "金融业",
                "value": 9
              }
              ]
            }
          ]
        };
        pieChart.setOption(option)
      },
      scrollTable() {
        const table = this.$refs.table;
        // 拿到表格中承载数据的div元素
        //let scrollHeight = this.$refs.table.bodyWrapper.scrollHeight;

        const divData = table.bodyWrapper;
        var scrollHeight = divData.scrollHeight;
        // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
        setInterval(() => {
          // 元素自增距离顶部1像素
          divData.scrollTop += 1;

          // this.$nextTick(() => {
          //   let scrollHeight = this.$refs.table.bodyWrapper.scrollHeight;
          //   this.$refs.table.bodyWrapper.scrollTop = scrollHeight;
          // });
          // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
          if (divData.clientHeight + divData.scrollTop > divData.scrollHeight) {
            // 重置table距离顶部距离
            this.$refs.table.bodyWrapper.scrollTop = 0;
            //divData.scrollTop = 0;
          }
        }, 100);
      },
      drawGraph() {
        var ROOT_PATH =
          "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";

        var chartDom = document.getElementById("graph");
        var myChart = this.$echarts.init(chartDom);
        var option;
        var categories = [];
        var that = this
        var links = []
        var list = []
        var listSmall = []

        this.echartsData.network.forEach((item,index) =>{
           listSmall.push(item.shareholder)
           var x = [-200,100,520.567,30.99,-190.959,244,-590,550,-685,450,-30,490,112.4,-343.34,134.98,-88.9,74.99,-271.33,-200,100,520.567,30.99,-190.959,244,-590,550,-685,450,-30,490,112.4,-343.34,134.98,-88.9,74.99,-271.33,-190.959,244,-590,550,-685,450,-30,490,112.4,-343.34,134.98,-88.9,74.99,200,-270.99,-470.99,-80.975,320.444,189.73,-289,390,789,-424,99,424,99,-321,321.6,211.4,-354,48.28,231.88,]
           var y =[200,-270.99,-470.99,-80.975,320.444,189.73,-289,390,789,-424,99,-321,321.6,211.4,-354,48.28,231.88,152.22,-270.99,-470.99,-80.975,320.444,189.73,-289,390,789,-424,99,-321,321.6,211.4,-354,48.28,231.88,152.22,-190.959,244,-590,550,-685,450,-30,490,112.4,-343.34,134.98,-88.9,74.99,590,550,-685,450,-30,490,112.4,-343.34,134.98,-88.9,74.99,-271.33,-200,100,520.567,30.99,-190.959,]
          let obj = {
            'category': 0,
            'id': index+1,
            'label': {show: false},
            'name': item.shareholder,
            'symbolSize': 12.8888,
            'value': 4,
            'x': x[index],
            'y': y[index],
          }
          list.push(obj)
          // list.push(objct)
        })
        // console.log(this.echartsData.network[0].company);/
          let objct = {
          "id": "0",
          "name": this.echartsData.network[0].company,
          "symbolSize": 19.12381,
          "x": 300,
          "y":100,
          "value": 28.685715,
          "category": 1
          }
          list.push(objct)
        // console.log(list);
        $.getJSON(ROOT_PATH + "/data/asset/data/les-miserables.json", function (
          graph
        ) {
          myChart.hideLoading();
          graph.nodes.forEach(function (node) {
            node.label = {
              show: node.symbolSize > 30
            };
          });
          option = {
            title: {
               textStyle:{
                 color:"white"
               },
              text: "企业关系图",
              top: "bottom",
              left: "right"
            },
            tooltip: {},
            legend: [
              // {
              //   // selectedMode: 'single',
              //   data: graph.categories.map(function (a) {
              //     return a.name;
              //   })
              // }
            ],
            animationDuration: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [{
              name: "扬州市",
              type: "graph",
              // layout: "none",
              nodes:list,
              links: graph.links,
              categories: graph.categories,
              roam: true,
              label: {
                position: "right",
                formatter: "{b}"
              },
              lineStyle: {
                color: "source",
                curveness: 0.3
              },
              emphasis: {
                focus: "adjacency",
                lineStyle: {
                  width: 10
                }
              }
            }]
          };
          myChart.setOption(option);
        });
      },
      drawRadar(val) {
        const barChart = this.$echarts.init(
          document.getElementById("radar"),
          "shine"
        );
        
        var list = {};
        var list1 = {}
        var series = []
        var datalist = []
        list1 = this.echartsData.radar
        datalist = list1.series[0].data
        series = datalist[2].value
        console.log(datalist[2]);
        // console.log(series[0]);
        list = val.radar;
         datalist = list.series[0].data
        series = datalist[2].value
       var name = datalist[2].name
        console.log(series);
        var option = {
          color: ["#4992ff", "#7cffb2"],
          textStyle: {
            color: "white",
            fontFamily: "Microsoft YaHei",
            fontSize: 12
          },
          darkMode: true,
          // visualMap: {
          //   top: 'top',
          //   left: 10,
          //   color: ['red', 'yellow'],
          //   calculable: true
          // },
           legend: {
            data: [name],
            textStyle: {
              color: "#4992ff",
            }
          },
          radar: {
            // shape: 'circle',
            indicator: [ {
                    "name": "基础能力",
                    "max": 10000,
                    // axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}},
                },
                {
                    "name": "经营管理",
                    "max": 16000
                },
                {
                    "name": "科技创新",
                    "max": 30000
                },
                {
                    "name": "只能创造",
                    "max": 38000
                },
                {
                    "name": "可持续发展",
                    "max": 52000
                },
                {
                    "name": "信用风险",
                    "max": 25000
                }],
            axisName: {
              color: "#fff",
              // backgroundColor: "#666",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          series: [{
            name: "Budget vs spending",
            type: "radar",
            data: [{
              value: series,
              name:name,
              label: {
                normal: {
                  show: true,
                  formatter: function(params) {
                    return params.value
                  },
                  // formatter: '{c}({d}%)',
                  color: 'red'
                }
              }
              },
            ],
            itemStyle: {
                normal: {
                    color: '#2dc76d',
                },
                formatter: '{c}%'
            },
            areaStyle: {
              normal: {
                  color: '#2dc76d',
                  opacity: 0.5
              }              
            },
            lineStyle: {
              normal: {
                  color: '#2dc76d',
              }
            },
          }]
        };
        barChart.setOption(option);
      }
    }
  };

</script>

<style>
  @import "./css/reset.css";
  @import "./css/video-js.css";
  @keyframes marqueeTop {
      from {
          transform: translate(0, 0);
      }
      to {
          transform: translate(0, -50%);
      }
  }
  .boxRader {
    position: relative;
    width: 100%;
    height: 80%;
  }

  .centerBox {
    width: 75%;
    margin-right: 15px;
    background: transparent;
  }

  .boxFont {
    font-size: 1.2vw;
  }

  .centerMainBox1 {
    width: 100%;
    height: 60.5%;
  }

  .centerMainBox2 {
    width: 100%;
    height: 38.5%;
    position: relative;
    margin-top: 15px;
  }

  .centerMainBox2 img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .boxTitle2 {
    width: 100%;
    height: 10%;
    font-size: 0.6vw;
    text-align: center;
    line-height: 10%;
    margin-top: 1vw;
    color: #0efcff;
  }

  .boxLis {
    width: 70%;
    height: 1.5vw;
    margin-left: 3vw;
    margin-top: 1vw;
    border-bottom: 0.02vw solid rgb(40, 229, 233);
  }

  .boxLis>li {
    width: 4vw;
    height: 1.4vw;
    display: block;
    background: rgba(40, 229, 233, 0.5);
    margin-right: 0.5vw;
    color: #fff;
    line-height: 1.4vw;
    text-align: center;
    cursor: pointer;
  }

  .active {
    border-bottom: 0.02vw solid #040a18;
    border-top: 0.02vw solid rgb(40, 229, 233);
    border-right: 0.02vw solid rgb(40, 229, 233);
    border-left: 0.02vw solid rgb(40, 229, 233);
  }

  .contList {
    position: relative;
    width: 70%;
    height: 10vw;
    margin: 1vw auto 0;
  }

  .content1 li {
    display: none;
  }

  .baseBox {
    width: 100%;
    border: none;
    background: none;
  }

  .boxTitle {
    font-size: 0.8vw;
    width: 38%;
    margin-top: 1vw;
    text-align: center;
  }

  .right {
    float: right;
  }

  .baseBoxLeft {
    width: 30%;
    height: 95%;
    position: relative;
  }

  .baseBoxRight {
    width: 68%;
    height: 75%;
  }

  .baseBoxLeft img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .map {
    width: 55%;
    height: 110%;
    position: relative;
    margin-top: 2%;
    display: inline-block;
  }

  .graph {
    width: 40%;
    height: 95%;
    margin-top: 2%;
    display: inline-block;
  }

  .baseBox1,
  .baseBox2,
  .baseBox3 {
    position: relative;
  }

  .baseBox1 img,
  .baseBox2 img,
  .baseBox3 img {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .csbaseBox1 {
    position: relative;
    z-index: 999;
  }
  .bottom {
    display:flex ;
    color: #fff;
    font-size: 18px;
    /* justify-content: space-around; */
    flex-wrap: wrap;
    padding: 10px 10px;
  }
  .bottom p {
    margin-left: 20px;
    width: 31.5%;
    line-height: 40px;
    
  }
  .bottom p span {
    display: inline-block;
    width: 150px;
    text-align: right;
  }
  .liSpan {
    width: 100%;
    margin-top: 3.2%;
    text-align: center;
    color: rgb(40, 229, 233);
  }

  .liP {
    width: 66%;
    margin: 0.3vw auto 0;
    text-align: left;
    font-size: 0.5vw;
    color: rgb(40, 229, 233);
  }

  a:hover {
    text-decoration: none;
  }

  .titleName {
    color: #0efcff;
  }

  .plant {
    width: 90%;
    height: 5.5vw;
    margin: 2% auto 0;
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
  }

  .plant>li {
    width: 15%;
    height: 100%;
  }

  .jumps {
    width: 100%;
    height: 100%;
    background: rgba(0, 235, 255, 0.08);
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-flex-direction: column;
    -webkit-justify-content: space-between;
    display: -moz-flex;
    -moz-flex-direction: column;
    -moz-justify-content: space-between;
  }

  .jumps>div>img {
    width: 0.88vw;
    height: 0.88vw;
    float: right;
  }

  .jumps>p {
    width: 90%;
    font-size: 1.3vw;
    color: #fff;
    margin: auto;
  }

  .jumps>div {
    width: 90%;
    margin: 5% auto 0;
  }

  .jumps>div>span {
    font-size: 0.6vw;
    color: #0efcff;
    float: left;
  }

  .spans0 {
    width: 80%;
    height: 5%;
    background: #03da8d;
  }

  .spans1 {
    width: 80%;
    height: 5%;
    background: #0efcff;
  }

  .spans2 {
    width: 80%;
    height: 5%;
    background: #fe0000;
  }

  .spans3 {
    width: 80%;
    height: 5%;
    background: #f78001;
  }

  .boxVideo {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .boxVideo .scroll-content {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    animation: marqueeTop 20s infinite linear;
  }
  .scroll-content p {
    line-height: 40px;
    font-size: 16px;
    margin-left: 10px;
  }
  .boxVideo video {
    width: 100%;
    height: 100%;
  }

  .baseDatas {
    width: 70%;
    height: 2vw;
    display: flex;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    margin: 1vw 0 0 5vw;
  }

  .baseDatas li {
    width: 10%;
  }

  .baseDatas li a {
    color: #fff;
    font-size: 0.8vw;
  }

  .active2 a>span {
    color: rgb(40, 229, 233);
  }

  .baseDatas li a:hover>span {
    color: rgb(40, 229, 233);
  }

  .baseDatas li a:hover>.borderRight {
    border-left-color: rgb(40, 229, 233);
  }

  .tableDetalis {
    width: 92%;
    color: #fff;
    margin-left: 2vw;
  }

  .tableDetalis tr {
    height: 1.3vw;
    font-size: 0.8vw;
  }

  .tableDetalis tr>td {
    text-align: center;
  }

  .tableDetalis tr>td:nth-child(7) {
    text-align: right;
  }

  .borderRight {
    width: 0;
    height: 0;
    float: left;
    border: 0.4vw solid transparent;
    border-left-color: #fff;
    margin-top: 0.2vw;
  }

  .borderActive {
    border-left-color: rgb(40, 229, 233);
  }

  .equipment_table {
    width: 85%;
    height: 25%;
    margin: auto;
    text-align: center;
    color: #fff;
    font-size: 0.5vw;
  }

  .equipment_table tr:nth-child(1) {
    color: #0efcff;
  }

  .equipment_table tr {
    border: 1px solid#0EFCFF;
  }

  .equipment_table tr:nth-child(1) {
    font-size: 0.8vw;
  }

  .equipment_table img {
    width: 1vw;
  }

  .env_table {
    height: 35%;
    margin-top: 5%;
  }

  .env_table td {
    border: 1px solid#0EFCFF;
  }

  .env_table tr:nth-child(1) {
    background: rgba(14, 252, 255, 0.3);
  }



  .mapActived1 {
    position: absolute;
    top: 41.5%;
    left: 61%;
    width: 3.5vw;
    height: 5.5vw;
    border-radius: 90px;
    cursor: pointer;
  }

  .mapActived2 {
    position: absolute;
    top: 60%;
    right: 16%;
    width: 4.5vw;
    height: 2.5vw;
    cursor: pointer;
  }

  .mapActived3 {
    position: absolute;
    top: 57%;
    right: 9%;
    width: 2.5vw;
    height: 7vw;
    cursor: pointer;
  }

  .mapContent1 {
    position: absolute;
    height: 6vw;
    width: 8vw;
    left: 65%;
    top: 33%;
    background: rgba(255, 255, 255, 0.2);
  }

  .mapContent2 {
    position: absolute;
    height: 6vw;
    width: 8vw;
    left: 70%;
    top: 35%;
    background: rgba(255, 255, 255, 0.2);
    display: none;
  }

  .mapContent3 {
    position: absolute;
    height: 6vw;
    width: 8vw;
    right: 1%;
    top: 35%;
    background: rgba(255, 255, 255, 0.2);
    display: none;
  }

  .mapContentFont {
    width: 85%;
    margin-left: 12%;
    font-size: 0.6vw;
    color: #0efcff;
    letter-spacing: 0.05vw;
    margin-bottom: 0.3vw;
  }

  .mapContentFont:nth-child(1) {
    margin-top: 0.6vw;
  }

  .mapContentFont span {
    color: white;
  }

  /* lafite video样式 */
  .video-js {
    width: 100%;
    height: 100%;
  }

  .video-js:hover .vjs-big-play-button {
    background: none;
  }

  .video-js .vjs-big-play-button:hover {
    background: none;
  }

  .video-js .vjs-big-play-button {
    border: none;
    background: none;
  }

  .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #277ef0 !important;
  }

  .el-table th,
  .el-table tr {
    background-color: transparent;
  }

  .el-table,
  .el-table__expanded-cell {
    background-color: transparent;
  }

  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background-color: transparent;
  }

  .el-table {
    color: white;
  }

  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid transparent;
  }
  .BMap_cpyCtrl {
    display:none;
}
.anchorBL{
    display:none;
}
</style>