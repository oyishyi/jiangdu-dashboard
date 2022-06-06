<template>
  <div class="main">
    <vue-title title="江都区企业数字化赋能平台"></vue-title>
    <div class="nav">江都区企业数字化赋能平台</div>
    <div class="nav_btn">
      <!-- <div class="btn_left">
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
      </div> -->
      <!-- <div class="btn_right">
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
      </div> -->
    </div>
    <div class="content">
      <div class="centerBox">
        <div class="baseBox centerMainBox1" style="height: 70%">
          <div class="baseBoxLeft left">
            <div class="boxTitle">企业数字画像</div>
            <img src="./img/left.png" alt="" />

            <div
              style="width: 90%; height: 90%; margin-left: 5%"
              id="radar"
            ></div>
          </div>
          <div class="baseBoxRight right">
            <ul class="plant">
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>入驻企业</span>
                    <img src="./img/qqzmj.png" alt="" />
                  </div>
                  <p class="" v-if="flag">
                    {{ overview.SAP_JIANGDU_USERS_REGISTERED }}
                  </p>
                  <span class="spans3"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>筹集资金</span>
                    <img src="./img/ccc2.png" alt="" />
                  </div>
                  <p class="" v-if="flag">
                    {{ overview.SAP_JIANGDU_JINRONGHUIQIS }}
                  </p>
                  <span class="spans2" style="background: #499bff"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>上架设备</span>
                    <img src="./img/ccc.png" alt="" />
                  </div>
                  <p class="" v-if="flag">{{ overview.SAP_JIANGDU_ASSETS }}</p>
                  <span class="spans3" style="background: #f2ce43"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div class="clear plantTop">
                    <span class="flexLeft">发布科创</span>
                    <img class="flexright" src="./img/cy.png" alt="" />
                  </div>

                  <p class="plantNum1" v-if="flag">
                    {{ overview.SAP_JIANGDU_TECH_INNOS }}
                  </p>
                  <span class="spans0"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div class="clear plantTop">
                    <span class="flexLeft">登记人才</span>
                    <img class="flexright" src="./img/cq.png" alt="" />
                  </div>
                  <p class="plantNum1" v-if="flag">
                    {{ overview.SAP_JIANGDU_TALENTS }}
                  </p>
                  <span class="spans1"></span>
                </a>
              </li>
              <li>
                <a class="jumps" href="">
                  <div>
                    <span>收录政策</span>
                    <img src="./img/cn.png" alt="" />
                  </div>
                  <p class="" v-if="flag">{{ overview.SAP_JIANGDU_POLICYS }}</p>
                  <span class="spans2"></span>
                </a>
              </li>
            </ul>
            <el-row>
              <el-col :span="12"
                ><line-chart class="chartLine" v-if="lineData.SAP_JIANGDU_POLICYS" :chartData="lineData.SAP_JIANGDU_POLICYS" title="最近一年上传政策"></line-chart>
              </el-col>
              <el-col :span="12">
                <line-chart class="chartLine" v-if="lineData.SAP_JIANGDU_JINRONGHUIQIS" :chartData="lineData.SAP_JIANGDU_JINRONGHUIQIS" title="最近一年上架金融融资"></line-chart
              ></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"
                ><line-chart class="chartLine" v-if="lineData.SAP_JIANGDU_TALENTS" :chartData="lineData.SAP_JIANGDU_TALENTS" title="最近一年上架人才"></line-chart>
              </el-col>
              <el-col :span="8">
                <line-chart class="chartLine" v-if="lineData.SAP_JIANGDU_ASSETS" :chartData="lineData.SAP_JIANGDU_ASSETS" title="最近一年发布设备"></line-chart
              ></el-col>
              <el-col :span="8">
                <line-chart class="chartLine" v-if="lineData.SAP_JIANGDU_TECH_INNOS" :chartData="lineData.SAP_JIANGDU_TECH_INNOS" title="最近一年上传科创"></line-chart
              ></el-col>
            </el-row>
          </div>
        </div>

        <div class="baseBox centerMainBox2" style="height: 30%">
          <img src="./img/down.png" alt="" />
          <div class="boxTitle2" style="width: 26%">统计数据</div>
          <div class="csbaseBox1 bottom">
            <p><span>公司：</span>{{ conpanyDes.COMPANY_NAME }}</p>
            <p><span>地址：</span>{{ conpanyDes.COMPANY_ADDRESS }}</p>
            <p><span>法人：</span>{{ conpanyDes.LEGAL_REPRESENTATIVE }}</p>
            <p><span>公司等级：</span>{{ conpanyDes.LEVEL }}</p>
            <p><span>公司类型：</span>{{ conpanyDes.COMPANY_TYPE }}</p>
            <p><span>注册资本：</span>{{ conpanyDes.REGISTER_CURRENCY }}</p>
            <p><span>行业类型：</span>{{ conpanyDes.INDUSTRY }}</p>
            <p><span>公司服务：</span>{{ conpanyDes.CAP }}</p>
            <p class="scope">
              <span>经营范围：</span>{{ conpanyDes.BUSINESS_SCOPE }}
            </p>
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
                        {{ item.COMPANY_NAME }} 发布 {{item.NAME}}
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
                    <video
                      class="video-js vjs-big-play-centered"
                      data-setup="{}"
                      controls
                    >
                      <source
                        src="http://hls01open.ys7.com/openlive/cf40f99cc9cb4a23bd52e0b2119b534c.m3u8"
                        type="application/x-mpegURL"
                      />
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
        <div
          class="baseBox baseBox2"
          style="margin-bottom: 15px; height: 29.5%"
        >
          <img src="./img/right2.png" alt="" />
          <!-- 四个角描边 end -->
          <div class="boxTitle2">企业分布</div>
          <div
            class="boxRader"
            id="Progress"
            style="width: 90%; height: 90%; margin-left: 5%"
          ></div>
        </div>
        <div class="baseBox baseBox3" style="height: 28.9%">
          <img src="./img/right3.png" alt="" />
          <!-- 四个角描边 end -->
          <div class="boxTitle2">税收分布</div>
          <div
            class="boxRader"
            id="mains"
            style="width: 90%; height: 90%; margin-left: 5%"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getReportOverview,
  getReportData,
  getLastEntry,
  getService
} from "@/api/dashboard";
import LineChart from "./LineChart";

export default {
  name: "App",
  components: {
    LineChart,
  },
  mounted() {
    var search = window.location.search;
    this.userid = this.getSearchString("userid", search);
    console.log(this.userid);
    this.getData();
    this.drawPie();
    this.drawBar();
    //this.drawRadar();
    const table = this.$refs.table;
    // echartsData.network.slice(0,4)
    // console.log(echartsData.network.slice(0,4));
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
      datas: {},
      userid: null,
      flag: false,
      conpanyDes: {},
      overview: {},
      radarData: {},
      echartsData: {},
      messageData: [
       
      ],
      lineData: {},
      flist: [],
      zList: [],
      nlist: [],
      Index: "0",
      nun: "",
      colors: "",
      value: "",
    };
  },
  created() {
    //this.echartsData = this.listData[0];
  },
  watch: {
    // this.index
    // echartsData: {
    //   handler(val, oldval) {
    //     // console.log(val);
    //     this.drawRadar(val);
    //     //this.drawGraph();
    //     this.funData();
    //   },
    // },
    colors: {
      handler(val) {
        
      },
    },
  },
  methods: {
    getSearchString(key, Url) {
      var str = Url;
      str = str.substring(1, str.length); // 获取URL中?之后的字符（去掉第一位的问号）
      // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
      var arr = str.split("&");
      var obj = new Object();

      // 将每一个数组元素以=分隔并赋给obj对象
      for (var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
      }
      return obj[key];
    },
    getData() {
      getService().then(res=>{
        this.messageData = res;
      })
      getLastEntry().then((res) => {
        res.forEach((ele) => {
          var data = ele.DETAIL;
          var xAxis = data.map((e) => {
            return e.CREATED_AT;
          });
          var yAxis = data.map((e) => {
            return e.TOTAL;
          });
          this.lineData[ele.table] = {
            xData: xAxis,
            yData: yAxis,
          };
        });
        console.log(this.lineData)
      });
      getReportData(this.userid).then((res) => {
        this.conpanyDes = res;
        this.radarData["value"] = [
          res["BASIC_ABILITY"] * 100,
          res["JINGYING_MANAGEMENT"] * 100,
          res["TECH_INNO"] * 100,
          res["IOT"] * 100,
          res["CONTINOUS_DEVELOP"] * 100,
          res["CREDIT_RISK"] * 100,
        ];
        this.radarData["name"] = res.COMPANY_NAME;
        this.drawRadar();
      });
      getReportOverview().then((res) => {
        res.forEach((r) => {
          this.overview[r.table] = r.TOTAL;
        });
        this.flag = true;
        console.log(this.overview);
      });
    },
    funData() {
      this.echartsData.network.forEach((item, index) => {
        // console.log(item);
        if (item.type === "自然人股东") {
          this.zList.push(item);
        } else if (item.type === "企业法人") {
          this.flist.push(item);
        } else {
          this.nlist.push(item);
        }
      });
    },
    drawBar() {
      var data = [
        {
          name: "制造业",
          value: 282.76,
        },
        {
          name: "建筑业",
          value: 1051.1,
        },
        {
          name: "采矿业",
          value: 50,
        },
        {
          name: "金融业",
          value: 158.07,
        },
      ];
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
        color: ["#3398DB"],

        grid: {
          left: "0%",
          right: "0%",
          bottom: "12%",
          height: "82%",
          containLabel: true,
          z: 22,
        },
        xAxis: [
          {
            type: "category",
            gridIndex: 0,
            data: xData,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "#0c3b71",
              },
            },
            axisLabel: {
              show: true,
              color: "rgb(170,170,170)",
              fontSize: 16,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            gridIndex: 0,
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            min: 0,
            max: 1200,
            axisLine: {
              lineStyle: {
                color: "#0c3b71",
              },
            },
            axisLabel: {
              color: "rgb(170,170,170)",
              formatter: "{value} (亿元)",
            },
          },
          {
            type: "value",
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
              },
            },
          },
        ],
        series: [
          {
            name: "合格率",
            type: "bar",
            barWidth: "30%",
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00feff",
                  },
                  {
                    offset: 0.5,
                    color: "#027eff",
                  },
                  {
                    offset: 1,
                    color: "#0286ff",
                  },
                ]),
              },
            },
            data: yData,
            zlevel: 11,
          },
          {
            name: "背景",
            type: "bar",
            barWidth: "50%",
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: "-135%",
            data: [100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,0.1)",
              },
            },
            zlevel: 9,
          },
        ],
      };
      var barChart = this.$echarts.init(
        document.getElementById("mains"),
        "shine"
      );
      barChart.setOption(option);
    },
    drawPie() {
      var pieChart = this.$echarts.init(
        document.getElementById("Progress"),
        "shine"
      );
      var option = {
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["20%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              // borderRadius: 10,
              // borderColor: "#020816",
              // borderWidth: 2,
              // emphasis: {
              //   shadowBlur: 10,
              //   shadowOffsetX: 0,
              //   shadowColor: "rgba(0, 0, 0, 0.5)",
              // },
              normal: {
                label: {
                  show: true,
                  fontSize: 10,
                  formatter: "{b} : {c} ({d}%)",
                },
                labelLine: {
                  show: true,
                },
              },
            },
            label: {
              show: false,
              position: "center",
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
              show: false,
            },
            data: [
              {
                name: "住宿和餐饮业",
                value: 1,
              },
              {
                name: "信息传输、软件和信息技术服务业",
                value: 1,
              },
              {
                name: "制造业",
                value: 96,
              },
              {
                name: "建筑业",
                value: 17,
              },
              {
                name: "批发和零售业",
                value: 3,
              },
              {
                name: "电力、热力、燃气及水生产和供应业",
                value: 1,
              },
              {
                name: "科学研究和技术服务业",
                value: 8,
              },
              {
                name: "租赁和商务服务业",
                value: 2,
              },
              {
                name: "采矿业",
                value: 1,
              },
              {
                name: "金融业",
                value: 9,
              },
            ],
          },
        ],
      };
      pieChart.setOption(option);
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
    drawRadar() {
      const barChart = this.$echarts.init(
        document.getElementById("radar"),
        "shine"
      );

      var list = {};
      var list1 = {};
      var series = [];
      var datalist = [];
      var name = this.radarData.name;
      //datalist = list1.series[0].data;
      series = this.radarData.value;
      // console.log(series[0]);
      //list = val.radar;
      // datalist = list.series[0].data;
      // series = datalist[2].value;
      // var name = datalist[2].name;

      var option = {
        color: ["#4992ff", "#7cffb2"],
        textStyle: {
          color: "white",
          fontFamily: "Microsoft YaHei",
          fontSize: 12,
        },
        darkMode: true,
        // visualMap: {
        //   top: 'top',
        //   left: 10,
        //   color: ['red', 'yellow'],
        //   calculable: true
        // },
        legend: {
          data: [name, "全部企业"],
          textStyle: {
            color: "#4992ff",
          },
        },
        radar: {
          // shape: 'circle',
          indicator: [
            {
              name: "基础能力",
              max: 10000,
              // axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}},
            },
            {
              name: "经营管理",
              max: 10000,
            },
            {
              name: "科技创新",
              max: 10000,
            },
            {
              name: "智能创造",
              max: 10000,
            },
            {
              name: "可持续发展",
              max: 10000,
            },
            {
              name: "信用风险",
              max: 10000,
            },
          ],
          axisName: {
            color: "#fff",
            // backgroundColor: "#666",
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: series,
                name: name,
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value / 100 + "分";
                    },
                    // formatter: '{c}({d}%)',
                    color: "yellow",
                  },
                },
              },
              {
                value: [5000, 8400, 2800, 3600, 4200, 6100],
                name: "全部企业",
                itemStyle: {
                  normal: {
                    color: "rgb(254 203 193)",
                  },
                },
                lineStyle: {
                  normal: {
                    color: "rgb(254 203 193)",
                  },
                },
                areaStyle: {
                  normal: {
                    color: "rgb(254 203 193)",
                    opacity: 0.5,
                  },
                },
              },
            ],
            itemStyle: {
              normal: {
                color: "#2dc76d",
              },
              formatter: "{c}分",
            },
            areaStyle: {
              normal: {
                color: "#2dc76d",
                opacity: 0.5,
              },
            },
            lineStyle: {
              normal: {
                color: "#2dc76d",
              },
            },
          },
        ],
      };
      barChart.setOption(option);
    },
  },
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

.boxLis > li {
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
  height: 110%;
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
  display: flex;
  color: #fff;
  font-size: 0.8vw;
  /* justify-content: space-around; */
  flex-wrap: wrap;
  padding: 15px;
}

.bottom p {
  margin-left: 10px;
  width: 32.6%;
  line-height: 35px;
}
.bottom .scope {
  width: 90%;
  line-height: 35px;
}
.bottom p span {
  display: inline-block;
  width: 120px;
  text-align: left;
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

.plant > li {
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

.jumps > div > img {
  width: 1.5vw;
  height: 1.5vw;
  float: right;
}

.jumps > p {
  width: 90%;
  font-size: 1.3vw;
  color: #fff;
  margin: auto;
}

.jumps > div {
  width: 90%;
  margin: 5% auto 0;
}

.jumps > div > span {
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
  font-size: 0.8vw;
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

.active2 a > span {
  color: rgb(40, 229, 233);
}

.baseDatas li a:hover > span {
  color: rgb(40, 229, 233);
}

.baseDatas li a:hover > .borderRight {
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

.tableDetalis tr > td {
  text-align: center;
}

.tableDetalis tr > td:nth-child(7) {
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

.el-table--enable-row-hover .el-table__body tr:hover > td {
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
  display: none;
}

.anchorBL {
  display: none;
}

.bottom p {
  margin-left: 0px;
  width: 32.6%;
  line-height: 30px;
}
.chartLine {
  height: 25vh !important;
}
</style>
