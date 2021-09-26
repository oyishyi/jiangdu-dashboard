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

            <div class="graph" id="graph"></div>
            <!-- 地图 -->
            <div class="map" id="map"></div>
          </div>
        </div>

        <div class="baseBox centerMainBox2" style="height: 30%">
          <img src="./img/down.png" alt="" />
          <div class="boxTitle2" style="width: 26%">统计数据</div>
          <div class="csbaseBox1">
            <ul class="baseDatas">
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
            </ul>

            <table class="tableDetalis">
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
            </table>
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
                    <el-table ref="table" :data="messageData" style="width: 100% ;height:100%" :show-header="false">
                      <el-table-column prop="des" align="left" label="发布消息">
                      </el-table-column>
                    </el-table>
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
      this.drawRadar();
      this.drawPie();
      this.drawBar();
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
    data() {
      return {
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
        }
        ]
      };
    },
    methods: {
      drawMap() {
        var chartDom = document.getElementById('map');
        var myChart = this.$echarts.init(chartDom);
        var option;

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
            // subtext: 'data from PM25.in',
            // sublink: 'http://www.pm25.in',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          bmap: {
            center: [119.6345481, 32.188564],
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
                  width: 3
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
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: [[119.785996, 32.666091]],
              symbolSize: 7,
              encode: {
                value: 2
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
              color: '#5EA6FE',
              itemStyle: {
                shadowBlur: 12,
                shadowColor: '#5EA6FE',
              },
              emphasis: {
                scale: true
              },
              zlevel: 2
            }
          ]
        };

        option && myChart.setOption(option);

      },
      drawBar() {
        var data = [{
          "name": "一月",
          "value": 80
        }, {
          "name": "二月",
          "value": 87.8
        }, {
          "name": "三月",
          "value": 71
        }, {
          "name": "四月",
          "value": 80
        }, {
          "name": "五月",
          "value": 66
        }, {
          "name": "六月",
          "value": 80
        }, {
          "name": "七月",
          "value": 80
        }];
        var xData = [],
          yData = [];
        var min = 50;
        data.map(function (a, b) {
          xData.push(a.name);
          if (a.value === 0) {
            yData.push(a.value + min);
          } else {
            yData.push(a.value);
          }
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
            min: min,
            max: 100,
            axisLine: {
              lineStyle: {
                color: '#0c3b71'
              }
            },
            axisLabel: {
              color: 'rgb(170,170,170)',
              formatter: '{value} %'
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
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
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
              name: "Les Miserables",
              type: "graph",
              layout: "none",
              data: graph.nodes,
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
      drawRadar() {
        const barChart = this.$echarts.init(
          document.getElementById("radar"),
          "shine"
        );
        var option = {
          color: ["#4992ff", "#7cffb2"],
          textStyle: {
            color: "white",
            fontFamily: "Microsoft YaHei",
            fontSize: 12
          },
          darkMode: true,
          radar: {
            // shape: 'circle',
            indicator: [{
              name: "Sales",
              max: 6500
            },
            {
              name: "Administration",
              max: 16000
            },
            {
              name: "Information Technology",
              max: 30000
            },
            {
              name: "Customer Support",
              max: 38000
            },
            {
              name: "Development",
              max: 52000
            },
            {
              name: "Marketing",
              max: 25000
            }
            ],
            axisName: {
              color: "#fff",
              backgroundColor: "#666",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          series: [{
            name: "Budget vs spending",
            type: "radar",
            data: [{
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: "Allocated Budget"
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending",
              areaStyle: {
                color: new this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [{
                  color: "rgba(255, 145, 124, 0.1)",
                  offset: 0
                },
                {
                  color: "rgba(255, 145, 124, 0.9)",
                  offset: 1
                }
                ])
              }
            }
            ]
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
</style>