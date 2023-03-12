

    var data = [
            // 上或下  同  base   双边颜色
            // {value: -5, date: "2012-08-28", l: -5, u: 5},
            // {value: -8, date: "2012-08-29", l: -8, u: 9},
            // {value: -12, date: "2012-08-30", l: -12, u:23},
            // {value: -3, date: "2012-08-31", l: -3, u: 8},
            // {value: -1, date: "2012-09-01", l: -1, u: 5},
            
            // 上或下  同  base 双边颜色 
            // {value: 3, date: "2012-08-28", l: -83, u: 3},
            // {value: 5, date: "2012-08-29", l: -5, u: 5},
            // {value: 3, date: "2012-08-30", l: -3, u:3},
            // {value: 1, date: "2012-08-31", l: -14, u: 1},
            // {value: 0, date: "2012-09-01", l: -10, u: 0},
            
            // 上下轨===基线数据 加判断 去掉颜色   双边颜色
            // {value: 3, date: "2012-08-28", l: 3, u: 3},
            // {value: 5, date: "2012-08-29", l: 5, u: 5},
            // {value: 3, date: "2012-08-30", l: 3, u:3},
            // {value: 1, date: "2012-08-31", l: 1, u: 1},
            // {value: 0, date: "2012-09-01", l: 0, u: 0},
            
            //  双边颜色
            // {value: 40, date: "2012-08-28", l: -12, u: 40},
            // {value: 5, date: "2012-08-29", l: 5, u: 5},
            // {value: 3, date: "2012-08-30", l: 3, u:3},
            // {value: 1, date: "2012-08-31", l: 1, u: 1},
            // {value: 0, date: "2012-09-01", l: 0, u: 0},
            
            
            // 上下轨同为正数或负数时 下轨的颜色变为白色,去掉下轨堆叠，层级调高
            {value: 8, date: "2012-08-28", l: 8, u: 10},
            {value: 5, date: "2012-08-29", l: 5, u: 5},
            {value: 3, date: "2012-08-30", l: 3, u:8},
            {value: 1, date: "2012-08-31", l: 1, u: 1},
            {value: 2, date: "2012-09-01", l: 2, u: 2},
            
            
 ]
 
     let topPositive = data.every(item => item['u'] > 0)
     let botPosition = data.every(item => item['l'] > 0)
     console.log(data, data[0]['value']== data[0]['l']==data[0]['u'])
     console.log(1111,data.every(item =>item['value']=== item['l'] && item['value'] === item['u'] && item['l'] === item['u']))
    myChart.setOption(option = {
        title: {
            text: 'Confidence Band',
            subtext: 'Example in MetricsGraphics.js',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: data.map(function (item) {
                return item.date;
            }),
            boundaryGap: false
        },
        yAxis: {
        },
        series: [
            {
            name: 'L',
            type: 'line',
            data: data.map(function (item) {
                return item.l;
            }),
            lineStyle: {
              opacity: 0
            },
            zlevel:'2',
            areaStyle: {
            color: '#fff',
            opacity:1,
            //  color: new echarts.graphic.LinearGradient(
            //          0,
            //          0,
            //          0,
            //          1,
            //          [{
            //                  offset: 0,
            //                  color: 'rgba(236, 169, 44, 0.3)',
            //              },
            //              {
            //                  offset: 1,
            //                  color: 'rgba(236, 169, 44,0.3)',
            //              },
            //          ],
            //          false
            //      ),
            },
            //stack: 'confidence-band',
             emphasis:{
              areaStyle:{
                  color: '#fff',
              }
          },
            symbol: 'none'
        }, 
        {
            name: 'U',
            type: 'line',
            data: data.map(function (item) {
                return item.u ;
            }),
            lineStyle: {
              opacity: 0
            },
            z:'1',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
                     0,
                     0,
                     0,
                     1,
                     [{
                             offset: 0,
                             color: 'rgba(236, 169, 44, 0.3)',
                         },
                         {
                             offset: 1,
                             color: 'rgba(236, 169, 44,0.3)',
                         },
                     ],
                     false
                 ),
            },
            stack: 'confidence-band',
            symbol: 'none'
        }, {
            type: 'line',
            data: data.map(function (item) {
                return item.value;
            }),
            z:'4',
            hoverAnimation: false,
            symbolSize: 6,
            itemStyle: {
                color: '#333'
            },
            showSymbol: false
        }]
    });