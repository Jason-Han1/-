 var option = {
     backgroundColor:'#fff',
        title: {
            text:'证券基金经营机构资管业务情况小计',
            //textAlign: 'auto',
            left: 'center',
            textStyle:{
                color: 'black',
                fontWeight: 'bold',
            }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
        legend: {
            data: ['1', '2', '3'],
            right: 'left',
            top:20,
            textStyle: {
                //color: "#fff"
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: ['2012','2013','2014','2015','2016','2017','2018','2019'],
          axisLine: {
            lineStyle: {
              ////color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
          axisTick: {
              show: false
          }
        },

        yAxis: {
          type: 'value',
          max:'1200',
          name: '单位：亿元',
          boundaryGap: [0, 0.1],
          axisLine: {
            show: true,
            lineStyle: {
              //color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              //color: 'rgba(255,255,255,0.3)'
            }
          },
          axisTick: {
              show: false
          },
          axisLabel: {}
        },
        /*dataZoom: [{
          "show": true,
          "height": 12,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 90,
          
          textStyle:{
            color:"#000"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],*/
        series: [{
          name: '1',
          type: 'bar',
          barWidth: '15%',
          barGap: '0',
          itemStyle: {
            normal: {
                color: '#fccb05',
                //barBorderRadius: 12,
            },
          },
          data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
        },
        {
          name: '2',
          type: 'bar',
          barGap: '0',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: '#8bd46e',
                //barBorderRadius: 11,
            }
            
          },
          data: [400, 500, 500, 500, 500, 400,400, 500, 500]
        },
        {
          name: '3',
          type: 'bar',
          barWidth: '15%',
          barGap: '0',
          itemStyle: {
            normal: {
                color: '#248ff7',
                //barBorderRadius: 11,
            }
          },
          data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
        }]
      };

     
     