var dataMap = {};

function dataFormatter(obj) {
    var pList = ['印度', '孟加拉国', '马来西亚', '缅甸', '泰国', '越南', '新加坡', '印度尼西亚'];
    var temp;
    for (var year = 2004; year <= 2014; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: parseFloat(temp[i]).toFixed(2),
                tooltip:{
                    formatter:function(param){
                        return (param.value+'%')
                    }
                },
            }
        }
        // obj[year + 'max'] = Math.floor(max / 100) * 100;
        // obj[year + 'sum'] = sum;
    }
    return obj;
}

function dataFormatterX(){
    var obj = []
    var data = ['印度', '孟加拉国', '马来西亚', '缅甸', '泰国', '越南', '新加坡', '印度尼西亚'];
    for(var i = 0, l = data.length; i < l; i++) {
        obj[i] = {
            value: data[i],
            textStyle:{
                fontWeight: 'lighter',
                fontSize: 12,
            }
        }
    }
    return obj;
}
  dataMap.dataGDP = dataFormatter({
      //max : 60000,
      2014: [23.46519123, 26.05213409, 2.065448528, 56.73868269, 19.10439787, '-', 2.465409781, 26.20403709],
      2013: [24.47055544, 26.87618281, 2.179078579, 65.39159601, 18.16494975, 25.32552398, 2.54060487, 26.60949306],
      2012: [24.5599364, 27.11505234, 2.244027643, 68.80481552, 18.62367525, 25.06154822, 2.386708483, 26.74029668],
      2011: [25.72493886, 28.82611129, 2.362994049, 75.645227, 19.18599013, 24.96495065, 2.310275378, 24.55228543],
      2010: [25.72493886, 28.82611129, 2.362994049, 75.645227, 19.18599013, 24.96495065, 2.310275378, 24.55228543],
      2009: [26.31003253, 30.8666826, 2.513368784, 73.56799567, 19.22389891, 27.73858041, 2.065942832, 26.07747765],
      2008: [28.37045821, 32.11488666, 2.445850309, 69.2373871, 18.73461556, 30.27155588, 1.752890372, 28.01220969],
      2007: [29.15050987, 33.33041478, 2.552632581, 66.31422527, 17.8915165, 32.41755087, 1.871295601, 28.29343775],
      2006: [30.16744641, 34.40536833, 2.769418304, 68.29565167, 17.36906434, 34.92618165, 1.697634151, 28.15148336],
      2005: [31.18945349, 36.37704468, 2.785499852, 68.79650888, 17.35323701, 35.8546668, 1.827796937, 28.17434214],
      2004: [31.83649745, 37.22191359, 3.030200263, 68.47452323, 17.13223686, 37.80436343, 1.286257571, 28.73378078],
  });




option = {
        baseOption: {
            timeline: {
              // y: 0,
              left:'10%',
              right:'10%',
              bottom:0,
              height:30,
              symbolSize: 7,
              lineStyle:{
                color: '#00ccfe',
              },
              label:{
                  normal:{
                      textStyle:{
                          fontSize:8,
                          color:'#00ccfe',
                      },
                      position:'bottom'
                  }
              },
              controlStyle:{
                show: false,
              },
              axisType: 'category',
              // realtime: false,
              // loop: false,
              autoPlay: false,
              // currentIndex: 2,
              playInterval: 3000,
              // label: {
              //     formatter: function(s) {
              //         return (new Date(s)).getFullYear();
              //     }
              // }
              data: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014],
            },
            title: {
                show:false,
                // subtext: '专利局'
            },
            tooltip: {},
            legend: {
            },
            calculable: true,
            grid: {
                top: 20,
                bottom: 40,
                left:70,
                right:10,
            },
            color:['#e97e61'],
            yAxis: [{
                'type': 'category',
                offset: 0,
                nameLocation:'start',
                nameGap:33,
                'axisLabel': {
                    'interval': 0,
                    // rotate: -15,
                    textStyle: {
                      color: '#00ccfe',
                    },
                    inside:false,
                    margin:8,
                },
                axisTick:{
                    alignWithLabel:true,
                    interval:0,
                    show:false,
                },
                axisLine:{
                    show:false,
                    lineStyle:{
                        color: '#00ccfe',
                    }
                },
                'data': dataFormatterX(),
                splitLine: {
                    show: false
                },
            }],
            xAxis: [{
                // type: 'value',
                name: '',
                // max: 53500
                splitLine: {
                  show: false
                },
                axisLine:{
                    lineStyle:{
                        color: '#00ccfe',
                    },
                    show:false,
                },
                axisTick:{
                    show:false,
                },
                axisLabel: {
                  show: false,
                  formatter: function(param) {
                        return param + '%';
                      },
                  textStyle: {
                      color: '#00ccfe',
                  }
              }
            }],
            series: [{
                name: 'GDP',
                type: 'bar',
                barWidth:'50%',
            }]
        },
        options: [{
            title: {
                text: '2001全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2004'],
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    },
                    
                },
            }]
        }, {
            title: {
                text: '2002全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2005']
            }]
        }, {
            title: {
                text: '2003全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2006']
            }]
        }, {
            title: {
                text: '2004全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2007']
            }]
        }, {
            title: {
                text: '2005全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2008']
            }]
        }, {
            title: {
                text: '2006全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2009']
            }]
        }, {
            title: {
                text: '2007全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2010']
            }]
        }, {
            title: {
                text: '2008全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2011']
            }]
        }, {
            title: {
                text: '2009全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2012']
            }]
        }, {
            title: {
                text: '2010全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2013']
            }]
        }, {
            title: {
                text: '2011全国宏观经济指标'
            },
            series: [{
                data: dataMap.dataGDP['2014']
            }]
        }]
    };