var uploadedDataURL = "/asset/get/s/data-1627024096296-_tJ8s6GhL.json";

var uploadedDataURL = "/asset/get/s/data-1627024091242-CYZlH-scX.json";

var uploadedDataURL = "/asset/get/s/data-1627024086943-DS0Ic5og7.json";

var uploadedDataURL = "/asset/get/s/data-1627024081564-4lEeGIjG9.json";

var uploadedDataURL = "/asset/get/s/data-1627024067515-PuwF60ukI.json";

var uploadedDataURL = "/asset/get/s/data-1627024062683-6WOPl1qVe.json";

var uploadedDataURL = "/asset/get/s/data-1627024057276-Y0egMVcKA.json";

var uploadedDataURL = "/asset/get/s/data-1627024052815-h1Yxk0P40.json";

var uploadedDataURL = "/asset/get/s/data-1627024046396-c1JX-yFBr.json";

var uploadedDataURL = "/asset/get/s/data-1627024000230-0L47lDNry.json";

var uploadedDataURL = "/asset/get/s/data-1627023995954-9WbjsaCAE.json";

var uploadedDataURL = "/asset/get/s/data-1627023990895-79OtNoo8U.json";

var uploadedDataURL = "/asset/get/s/data-1627023986280--LGbAvZDW.json";

var uploadedDataURL = "/asset/get/s/data-1627023978564-tRrYqrBW4.json";

var uploadedDataURL = "/asset/get/s/data-1627023972588-i8Rd3ks7I.json";

var uploadedDataURL = "/asset/get/s/data-1627023965175-hXsJCeYRP.json";

var uploadedDataURL = "/asset/get/s/data-1627023959504-beIMMxssR.json";

var uploadedDataURL = "/asset/get/s/data-1627023952764-LcCkAaNF2.json";

var uploadedDataURL = "/asset/get/s/data-1627023941705-5FEDhLa74.json";

var uploadedDataURL = "/asset/get/s/data-1627023901008-CGUcoBuTD.json";

   
   
    getDatas(Area, darwMapType) {
        //获取本地Json数据
      const areaList = require("@/assets/map/" + Area + ".json");
      this.areaList = areaList;
      let mapDatas = [];
      areaList.features.map((item) => {
        mapDatas.push({
          name: item.properties.name,
          level: item.properties.level,
          adcode: item.properties.adcode,
        });
      });
      this.mapData = mapDatas;
      this.init();
    },
    init() {
      var that = this;
      var myChart = echarts.init(this.$refs.myCharts);
      echarts.registerMap("cityMap", this.areaList, {}); //加载自定义边界数据地图
      var option = {
        tooltip: {
          trigger: "item",
          formatter: (p) => {
            let val = p.value;
            if (window.isNaN(val)) {
              val = 0;
            }
            let txtCon = "<div style='text-align:center'>" + p.name;
            ("</div>");
            return txtCon;
          },
        },
        geo: {
          type: "map",
          map: "cityMap",
          layoutCenter: ["50%", "48%"],
          layoutSize: "150%",
          show: true,
          roam: true,
          zoom: 0.65,
          scaleLimit: {
            max: 10,
            min: 0,
          },
          label: {
            normal: {
              show: true, // 是否展示地区名称
              textStyle: {
                color: "#fff",
              },
            },
            emphasis: {
              show: true, // 滑过是否展示地区名称
              textStyle: {
                color: "#fff",
              },
            },
          },
          itemStyle: {
            normal: {
              show: true,
              areaColor: "#031525", //地图区域的颜色 也可以颜色渐变如下的 areaColor
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, .0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              borderColor: "#0CD5DD", //边界线颜色
              borderWidth: "1", //边界线的宽度
            },
            emphasis: {
              // 鼠标移入时区域的样式
              areaColor: "#2AB8FF",
              borderWidth: 0,
              color: "green",
            },
          },
        },
        series: [
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: [40, 40],
            label: {
              normal: {
                show: true,
                formatter(params) {
                  return params.dataIndex + 1;
                },
                textStyle: {
                  color: "#fff",
                  fontSize: 9,
                },
              },
            },
            itemStyle: {
              normal: {
                show: true,
                color: function (params) {
                  return params.value[2] == 2 ? "#FF0000" : "	#32CD32";
                }, //标志颜色
              },
            },
            zlevel: 1,
            data: this.scatterData,
          },
          {
            type: "map",
            map: "cityMap",
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            // roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: true,
            data: this.mapData,
          },
        ],
      };
      myChart.setOption(option);
      myChart.on("click", function (param) {
        // console.log(param);
        //点击各个监测点事件
        // if(param.componentSubType=="scatter"){
        // }
        var Area = param.data.adcode; //获取行政区划代码
        var darwMapType = param.data.adcode; //获取地市名
        that.getDatas(Area, darwMapType);
      });
    },
    //请求后端拿数据
    getPointList() {
      getData().then((res) => {
        this.pointList = res.data;
        this.pointList.map((item) => {
          this.scatterData.push({
            name: item.pointName,
            value: [item.longitude, item.latitude, item.isAlarm],
          });
        });
        this.getDatas(410000, "河南");
      });
    },