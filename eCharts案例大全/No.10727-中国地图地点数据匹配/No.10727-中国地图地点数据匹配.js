/**
*   2019.07.16 boy炬   vue版完整代码 请查看 https://blog.csdn.net/qq_42221334/article/details/95493484
* 
* 
*/
let data = [
          {name: '海门', value: 90 ,num: 5,id:8},
          {name: '鄂尔多斯', value: 102 , num: 15, id:16},
          {name: '齐齐哈尔', value: 140, num: 30 ,id:20}
      ];
      let geoCoordMap = {
          '海门':[121.15,31.89],
          '鄂尔多斯':[109.781327,39.608266],
          '齐齐哈尔':[123.97,47.33]
      };

      var convertData = function(data) {
          var res = [];
          for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                  res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    num: geoCoord.concat(data[i].num),
                    id: geoCoord.concat(data[i].id)
                  });
              }
          }
          return res;
      };

option = {
    backgroundColor: '#1c2431',//地图背景色
    title: {
            text: '完整功能请复制左侧注释链接在浏览器打开',
            x: 'center',
            top: "20",
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
          },
    geo: { // 这个是重点配置区
        map: 'china', // 表示中国地图
        label: {
          normal:{
            show: true, // 是否显示对应地名
            textStyle: { //字体颜色
              color: '#797979'
            }
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            borderWidth: 1, // 地图边框宽度
            borderColor: '#014888', // 地图边框颜色
            areaColor: '#026295' // 地图颜色
          },
          emphasis: {//选中省份的颜色
            areaColor: '#026295',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 0,
            borderWidth: 1,
            shadowColor: '#fff'
          }
        }
    },
    // vue版完整代码 请查看 https://blog.csdn.net/qq_42221334/article/details/95493484
    //滑动显示数据
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return params.name + ' 已接入: ' + params.data.num[2];
        }
    },
    series: [{
          name: '散点',
          type: 'scatter',
          coordinateSystem: 'geo',
          color:"#e1ebe3",//点的颜色
          data: convertData(data),
          symbolSize: 25,//点的大小
          symbol:"pin",//点的样式
          cursor:"pointer",//鼠标放上去的效果
          label: {
            normal: {//默认展示
                show: false
            },
            emphasis: {//滑过展示
                show: false
            }
          },
          itemStyle: {
            emphasis: {
              borderColor: '#5c8f6e',
              borderWidth: 5
            }
          }
        },

        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          aspectScale: 0.75,
          tooltip: {
              show: false
          }
        },
          
    ],
          
    
};

/**
*   2019.07.16  boy炬   vue版完整代码 请查看 https://blog.csdn.net/qq_42221334/article/details/95493484
* 
* 
*/



