var uploadedDataURL = "/asset/get/s/data-1611715993304-jwEfLrwtW.geoJson";

var sichuan = "/asset/get/s/data-1576202716004-RTJpxnA2.json";

$.get(sichuan, function(uploadedDataURL) {
    echarts.registerMap('sichuan', uploadedDataURL);
    myChart.setOption({
        series: [{
            type: 'map',
            map: 'sichuan'
        }]
    });
var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var geoCoordMap = {
		'广元市':[105.850994,32.439423],
		'达州市':[107.472292,31.214554],
		'广安市':[106.638979,30.461996],
		'遂宁市':[105.598849,30.538848],
		'德阳市':[104.402117,31.134352],
		'绵阳市':[104.684985,31.471938],
		'成都市':[104.076356,30.664024],
		'资阳市':[104.637312,30.136206],
		'眉山市':[103.854842,30.081277],
		'内江市':[105.061141,29.586137],
		'自贡市':[104.782145,29.348859],
		'泸州市':[105.448526,28.878933],
		'宜宾市':[104.649403,28.75826],
		'乐山市':[103.77254,29.559197],
		'雅安市':[103.050114,30.017042],
		'南充市':[106.115779,30.845023],
		'巴中市':[106.115779,30.845023],
		'攀枝花市':[101.724969,26.588292],
		'甘孜藏族自治州':[101.96912,30.056028],
		'阿坝藏族羌族自治州':[102.231991,31.911642],
		'凉山彝族自治州':[102.262579,27.888518],
         
    };


    var goData = [
								{ name: '广元市', value:0 },
								{ name: '达州市', value:0 },
								{ name: '攀枝花市', value:0 },
								{ name: '成都市', value:0 },
	                         	{ name: '德阳市', value:0 },
	                         		{ name: '绵阳市', value:0 },
	                         			{ name: '眉山市', value:0 },
       
									{ name: '内江市', value:0 },
	                         		{ name: '自贡市', value:0 },
	                         			{ name: '泸州市', value:0 },
	                         			  {
          name: "甘孜藏族自治州",
          value: 0,
        },
        {
          name: "阿坝藏族羌族自治州",
          value: 0,
        },
        {
          name: "凉山彝族自治州",
          value: 0,
        },
              {
          name: "自贡市",
          value: 0,
        },
        {
          name: "泸州市",
          value: 0,
        },
        {
          name: "宜宾市",
          value: 0,
        },
        {
          name: "乐山市",
          value: 0,
        },
        {
          name: "雅安市",
          value: 0,
        },
        {
          name: "攀枝花市",
          value: 0,
        },
         {
          name: "达州市",
          value: 0,
        },
        {
          name: "广安市",
          value: 0,
        },
        {
          name: "遂宁市",
          value: 0,
        },
    ];
    var goTotal=0;//计算总人数
    goData.forEach(function(item,i){
        goTotal+=item.value;
    })

    var planePath = 'arrow';
      var convertData = function (name, data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var fromCoord = geoCoordMap[name];
          var toCoord = geoCoordMap[data[i].name];
          if (fromCoord && toCoord) {
            res.push({
              //对换即可调整方向
              coords: [toCoord, fromCoord],
            });
          }
        }
        return res;
      };;
    var series = [];
    [
        ['成都市', goData],
       // ['徐州', backData],

    ].forEach(function(item) {
        series.push(
		  {
            type: "lines",
            zlevel: 1,
            effect: {
              show: true,
              period: 10, //箭头指向速度，值越小速度越快
              trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
              color: "#ffec6a", //箭头图标
              symbolSize: 7, //图标大小
            },
            lineStyle: {
              normal: {
                width: 0.1, //尾迹线条宽度

                opacity: 0.2, //尾迹线条透明度
                curveness: 0.3, //尾迹线条曲直度
              },
            },
            data: convertData(item[0], item[1]),
          },
          {
            //起点
            name: item[0],
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            //波纹效果
            rippleEffect: {
              //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: "stroke", //波纹绘制方式 stroke, fill
              scale: 4, //波纹圆环最大限制，值越大波纹越大
            },

            label: {
              normal: {
                show: true,
                color: "#ffde00",
                position: "left",
                formatter: "{b}",
                textStyle: {
                  color: "#fff",
                  fontSize: 20,
                },
              },
            },
            symbol: "circle",
            symbolSize: function (val) {
              return 10 + val[2] * 0; //圆环大小
            },

            //圆点大小
            /****symbolSize: function(val) {
                return val[2]*100 / goTotal;
            },***/
            itemStyle: {
              normal: {
                show: false,
                color: "#f00",
              },
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name].concat([dataItem.value]),
              };
            }),
          },
          {
            //终点
            name: "item[0]",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            //波纹效果
            rippleEffect: {
              period: 2,
              brushType: "stroke",
              scale: 3,
            },
            label: {
              normal: {
                show: false,
                position: "left",
                formatter: "{b}",
                color: "#ffde00",
              },
            },
            symbolSize: function () {
              return 25;
            },
            symbol: "circle",

            itemStyle: {
              normal: {
                show: true,
              },
            },
            data: [
              {
                name: item[0],
                value: geoCoordMap[item[0]].concat([100]),
              },
            ],
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: "stroke",
              scale: 4,
            },
            label: {
              normal: {
                show: false,
                position: "right",
                //offset:[5, 0],
                color: "#0f0",
                formatter: "{b}",
                textStyle: {
                  color: "#0f0",
                },
              },
              emphasis: {
                show: false,
                color: "#f60",
              },
            },
          }
        
        )

    });


       let option = {
        backgroundColor: "rgb(11,15,32)",

        tooltip: {
          trigger: "item",
          formatter: "{b}",
        },
        //线颜色及飞行轨道颜色
        visualMap: {
          //图例值控制
          min: 0,
          max: 1,
          calculable: true,
          show: false,
          color: ["#f44336", "#fc9700", "#ffde00", "#ffde00", "#00eaff"],
          textStyle: {
            color: "#fff",
          },
        },
        //地图相关设置
        geo: {
          map: "sichuan",
          //视角缩放比例
          zoom: 1,
          //显示文本样式
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff", //滑过文字颜色
              },
            },
          },
          layoutSize: "100%",
          layoutCenter: ["55%", "50%"],
          mapLocation: {
            width: "110%",
            height: "97%",
          },
          //鼠标缩放和平移
          roam: true,
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              // shadowColor: 'rgba(255, 255, 255, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10,
            },
            emphasis: {
              itemStyle: {
                areaColor: "#FFD181",
                borderColor: "#404a59",
                borderWidth: 1,
              },
            },
          },
        },

        series: series,
      };
         myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
})