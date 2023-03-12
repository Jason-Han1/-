var legendBottom = ['2018-07','2018-08','2018-09']
var legendTop = ['成长型','衰退型','均衡型']
var legend = ['上底层', '上上层', '负层']
var color = ['#5170A2','#7099D9','#D07070']
var data1 = [];
var data2 = [];
var data3 = [];
for (var i = 0; i < 3; i++) {
    data1.push((Math.random() * 300).toFixed(2));
    data2.push((Math.random() * 100).toFixed(2));
    data3.push((-Math.random()* 200).toFixed(2));
}
var seriesData = [data1,data2,data3]
            
var myData = (function test() {
    let seriesArr = []
    legend && legend.forEach((item, index) => {
        seriesArr.push({
            name: item,
            type: 'bar',
            stack: 'one',
            barGap: '10px',
            barWidth: 54,
            data: seriesData[index],
            color:color[index],
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                     formatter: function(v){
                       if(v.data&&v.data<0){
                           return -1*v.data
                       }  
                     },
                      textStyle: {
                       fontWeight:600,
                        fontSize: 14
                    },
                }
            }
        })
    })

    return {
        seriesArr,
    }
})()

option = {
    backgroundColor: '#fff',
     legend: {
        icon:'circle',
        orient: 'vertical',
        left: 4,
        y: 'center',
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 20,
        borderRadius: 6,
        data: legend,
        textStyle: {
            fontSize: 12,
            color: '#687284'
        },
    },
    grid: {
      left:100,
    },
    tooltip: {},
    xAxis: [{
        data: legendBottom,
        silent: false,
        splitLine: {show: false},
        splitArea: {show: false},
        axisTick: {
              show: false,
          },
          axisLine: {
              show: true,
               lineStyle: {
                  color:'#DFE2EA',
                  type: 'solid'
              },
          },
          axisLabel:{
               textStyle: {
                color: '#687284',
                align: 'center',
                fontSize: 12
            },
          }
    },{
        data:legendTop,
        splitLine: {show: false},
        splitArea: {show: false},
        axisTick: {
              show: false,
          },
          axisLine: {
              show: true,
              lineStyle: {
                  color:'#DFE2EA',
                  type: 'solid'
              },
          },
          axisLabel:{
              textStyle: {
                color: '#687284',
                align: 'center',
                fontSize: 12
            },
          }
    }],
    yAxis: {
        splitArea: {show: false},
           axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              show: false,
          },
          splitLine: {
              show: false,
          },
    },
    series:myData.seriesArr
};
