// 第三方脚本  https://echarts.baidu.com/resource/echarts-gl-latest/dist/echarts-gl.min.js
var uploadedDataURL = 'https://cdn.jsdelivr.net/gh/SHJ33/EchartsMapJson@master/json/province/jiangxi.json';
var geoCoordMap = {
        南昌市: [115.849005, 28.734561], //市级
        赣州市: [114.910743, 25.875261],
        吉安市: [114.965935, 27.133298],
        九江市: [116.005382, 29.727021],
        // 宜春市:[114.423215,27.830666],
        宜春市: [115.041019, 28.531308],
        上饶市: [117.946297, 28.474775],
        鹰潭市: [117.072426, 28.271367],
        景德镇市: [117.182809, 29.28444],
        萍乡市: [113.8437, 27.634214],
        新余市: [114.910743, 27.830666],
        抚州市: [116.36413, 27.961434],
        安义县: [115.554868, 28.849529], //南昌市
        东湖区: [115.904892, 28.692526],
        进贤县: [116.247964, 28.38403],
        南昌县: [115.950463, 28.552872],
        青山湖区: [115.96913, 28.687849],
        青云谱区: [115.931994, 28.628504],
        湾里区: [115.737017, 28.721463],
        西湖区: [115.882965, 28.662738],
        新建县: [115.91746, 28.866155],
        乐平市: [117.129376, 28.967361], //景德镇市
        昌江区: [117.105023, 29.248465],
        浮梁县: [117.417611, 29.452251],
        珠山区: [117.214814, 29.292812],
        安源区: [113.855044, 27.625826], //萍乡市
        莲花县: [113.955582, 27.227807],
        芦溪县: [114.055206, 27.611633],
        上栗县: [113.830525, 27.857041],
        湘东区: [113.7456, 27.539319],
        星子县: [116.05012, 29.646175], //九江市，濂溪区
        浔阳区: [115.995947, 29.72465], //九江市
        九江县: [115.792977, 29.610264], //九江市
        修水县: [114.473428, 29.032729], //九江市
        永修县: [115.729055, 29.088212], //九江市
        武宁县: [115.065646, 29.260182], //九江市
        德安县: [115.612611, 29.407474], //九江市
        庐山区: [115.953743, 29.356169], //九江市
        都昌县: [116.355114, 29.345105], //九江市
        彭泽县: [116.55584, 29.798865], //九江市
        湖口县: [116.284313, 29.6263], //九江市
        瑞昌市: [115.439081, 29.616599], //九江市
        共青城市: [115.805712, 29.227884], //九江市
        渝水区: [114.923923, 27.819171], //新余
        分宜县: [114.675262, 27.811301],
        余江县: [116.822763, 28.206177], //鹰潭
        贵溪市: [117.212103, 28.283693],
        月湖区: [117.034112, 28.239076],
        南康区: [114.756933, 25.661721], //赣州市
        信丰县: [114.930893, 25.38023],
        章贡区: [114.93872, 25.851367],
        大余县: [114.362243, 25.395937],
        上犹县: [114.290537, 25.994284],
        赣县区: [115.018461, 26.065432],
        安远县: [115.392328, 25.134591],
        龙南县: [114.792657, 24.90476],
        定南县: [115.10267, 24.774277],
        崇义县: [114.157348, 25.687911],
        全南县: [114.531589, 24.742651],
        宁都县: [116.018782, 26.472054],
        寻乌县: [115.651399, 24.954136],
        于都县: [115.411198, 25.755033],
        石城县: [116.342249, 26.326582],
        会昌县: [115.791158, 25.599125],
        兴国县: [115.351896, 26.330489],
        瑞金市: [116.034854, 25.875278],
        吉州区: [114.987331, 27.112367], //吉安
        吉水县: [115.434569, 27.013445],
        青原区: [115.316306, 26.805879],
        峡江县: [115.319331, 27.580862],
        吉安县: [114.605117, 27.020042],
        新干县: [115.399294, 27.755758],
        遂川县: [114.51689, 26.323705],
        万安县: [114.784694, 26.462085],
        永丰县: [115.435559, 27.321087],
        安福县: [114.61384, 27.382746],
        永新县: [114.242534, 26.944721],
        泰和县: [114.901393, 26.790164],
        井冈山: [114.184421, 26.545919],
        袁州区: [114.387379, 27.800117], //宜春
        万载县: [114.349012, 28.114528],
        上高县: [114.932653, 28.234789],
        宜丰县: [114.787381, 28.388289],
        奉新县: [115.389899, 28.700672],
        靖安县: [115.361744, 28.86054],
        铜鼓县: [114.37014, 28.520956],
        樟树市: [115.543388, 28.055898],
        丰城市: [115.786005, 28.191584],
        高安市: [115.381527, 28.420951],
        南城县: [116.63945, 27.55531], //抚州
        黎川县: [116.91457, 27.292561],
        崇仁县: [116.059109, 27.760907],
        南丰县: [116.532994, 27.210132],
        临川区: [116.361404, 27.981919],
        乐安县: [115.838432, 27.420101],
        金溪县: [116.778751, 27.907387],
        宜黄县: [116.273023, 27.346512],
        资溪县: [117.066095, 27.70653],
        东乡县: [116.605341, 28.2325],
        广昌县: [116.327291, 26.838426],
        广丰县: [118.209852, 28.420285], //上饶
        铅山县: [117.711906, 28.210892],
        上饶县: [118.00612, 28.253897],
        信州区: [117.970522, 28.445378],
        横峰县: [117.608247, 28.515103],
        玉山县: [118.244408, 28.673479],
        弋阳县: [117.435002, 28.402391],
        余干县: [116.691072, 28.69173],
        万年县: [117.07015, 28.692589],
        婺源县: [117.86219, 29.254015],
        鄱阳县: [116.673748, 28.993374],
        德兴市: [117.578732, 28.945034]
      }
function convertData(data) {
      // console.log(JSON.stringify(data));
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord
          });
        }
      }
      // console.log(JSON.stringify(res));
      return res;
    }
var d = [{name: "南昌市", value: "96.10"},
{name: "景德镇市", value: "45.11"},
{name: "萍乡市", value: "11.19"},
{name: "九江市", value: "38.67"},
{name: "新余市", value: "23.65"},
{name: "鹰潭市", value: "42.71"},
{name: "赣州市", value: "97.14"},
{name: "吉安市", value: "54.11"},
{name: "宜春市", value: "84.27"},
{name: "抚州市", value: "56.65"},
{name: "上饶市", value: "63.38"}]


$.get(uploadedDataURL, function (geoJson) {
    echarts.registerMap('hebei', geoJson);
    option = {
        tooltip: {
            trigger: 'item',
            show: true,
            enterable: true,
            textStyle:{
                fontSize:13,
                color: '#fff'
            },
            backgroundColor: 'rgba(0,2,89,0.8)',
            //formatter: '{b}<br />{c}',
            formatter: function (params) {
                var name = params.name;
                var value = params.value[2];
                var text = `${name}`;
                return text;
            },
        },
        geo3D: {
            map: 'hebei',
            show: true,
            //roam: true,
            zlevel: -10,
            boxWidth: 120,
            boxHeight:4.4,//4:没有bar. 30:有bar,bar最高度30，按比例分配高度
            boxDepth: 150,//地图倾斜度
            regionHeight:4,
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0, color: '#00aaff' // 天空颜色
                        }, {
                          offset: 0.7, color: '#FFF' // 地面颜色
                        }, {
                          offset: 1, color: '#FFF' // 地面颜色
                        }], false),
            label: { // 标签的相关设置
                show: false,
            },
    
            itemStyle: {
                areaColor: '#6554C0',
                opacity: 1,
                borderWidth: 0.5,
                borderColor: '#A299DA'
            },
            emphasis: {
                label:{
                    show:false,
                },
                itemStyle: {
                    areaColor: '#61A4E4',
                    borderColor:'#88BAEA',
                    borderWidth:2,
                }
            },
            light: {
                main: {
                    intensity:1,
                    shadow: true,
                    shadowQuality: 'ultra',
                },
    
            },
            
            shading:'realistic',
            viewControl: {
                projection: 'perspective',//'orthographic',
                autoRotate: false,
                damping: 0,
                rotateSensitivity: 2,//旋转操作的灵敏度
                rotateMouseButton: 'left', //旋转操作使用的鼠标按键
                zoomSensitivity:2, //缩放操作的灵敏度
                panSensitivity:2, //平移操作的灵敏度
                panMouseButton: 'right', //平移操作使用的鼠标按键
                
                distance: 150, //默认视角距离主体的距离
                minDistance: 10,
                maxDistance: 300,
                minAlpha:30,
                maxAlpha:100,
                minBeta:-25,
                maxBeta:85,
                center:[-20,-25,0],
                animation: true,
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut'
            },
        },
        
        series: [{
             name: "", //地市名称
             type: "scatter3D",
             coordinateSystem: "geo3D",
             geoIndex: 0,
             data: convertData(
               d.sort(function(a, b) {
                 return b.value - a.value;
               })
             ),
             encode: {
               value: 2
             },
             // symbolSize: function (val) {
             //     return val[2] / 10;
             // },
             symbolSize: 60,
             // showEffectOn: 'render',
             // rippleEffect: {
             //     brushType: 'stroke'
             // },
             hoverAnimation: false,
             label: {
               normal: {
                 formatter: "{b}",
                 position: "inside",
                 fontSize: "22px", //字代大小
                 fontWeight: "bold",
                 show: true,
                 color: "#fff",
                 rich: {
                   a: {
                     color: "#41B675",
                     lineHeight: 10
                   },
                   v: {
                     backgroundColor: {
                       // image: './static/imgs/tooltip2.png'
                     },
                     height: 20,
                     width: 40,
                     color: "#000",
                     align: "center"
                   },
                   x: {
                     fontSize: "22px",
                     fontFamily: "Microsoft YaHei",
                     borderColor: "#449933",
                     borderRadius: 4
                   }
                 }
               }
             },
             itemStyle: {
               normal: {
                 color: "rgba(0,0,0,0)", //涟漪图标的颜色
                 shadowBlur: 30,
                 shadowColor: "#3E4056"
               }
             },
             zlevel: 2
           }]
    }
myChart.setOption(option);
});