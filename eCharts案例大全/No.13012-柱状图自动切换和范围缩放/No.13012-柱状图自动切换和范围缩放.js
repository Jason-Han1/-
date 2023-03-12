var colorList = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: '#06DBF5' // 0% 处的颜色
        }, {
          offset: 1,
          color: '#00d386' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
      }
      var specialColor = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: '#FEDD3D' // 0% 处的颜色
        }, {
          offset: 1,
          color: '#F99901' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
      }
      var option = {
        // backgroundColor: '#12234F',
        "title": {
          "text": "30天能耗数据监测",
          "left": "center",
          "y": "0",
          "textStyle": {
            "color": "#fff"
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '14%',
          top:'15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['10/01','10/02','10/03','10/04','10/05','10/06','10/07','10/08','10/09','10/10','10/11','10/12','10/13','10/14','10/15','10/16','10/17','10/18','10/19','10/20','10/21','10/22'],
          // axisTick: {
          //     alignWithLabel: true
          // }
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }

          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        "dataZoom": [{
          "show": true,
          "height": 30,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 80,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#fff"},
          borderColor:"#90979c"


        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [{
          name: '',
          type: 'bar',
          barWidth: '60%',
          // label:{
          //     normal:{
          //         show:true,
          //         formatter: function(v) {
          //             var val = v.data;
          //             if (val === 0) {
          //                 return '';
          //             }
          //             return val;
          //         },
          //         color: '#fff'
          //     }
          // },
          itemStyle: {
            color: function (params) {
              /* if (params.name == '建许路口') {
                   return specialColor;
               } else {
                   return colorList;
               }*/
              return colorList;
            },
            //barBorderRadius: 15,
          },
          emphasis: {
            itemStyle: {
              color: specialColor
            }

          },
          data: [12000, 10000, 8000, 8000, 6000, 6000, 6000, 5377, 2000, 1760, 1325, 1200, 1000, 1000, 1000,12000, 10000, 8000, 8000, 6000, 6000, 6000]
        }]
      };

      var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });


      }, 1000);