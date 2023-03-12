 var cellSize = [100, 100];
 var customradius = [30,32];
 var dataX = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
 function getVirtulData() {
          var date = +echarts.number.parseDate('2017-02-01');
          var end = +echarts.number.parseDate('2017-03-01');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return data;
        }
var scatterData = getVirtulData();
//series的数据初始设置scatter
let seriesData = [{ //日期
    id: 'label',
    type: 'scatter',
    coordinateSystem: 'calendar',
    symbolSize: 1,
    label: {
        show:false,
        // normal: {
        //     show: false,
        //     formatter: function(params) {
        //         return params.value[1]
        //     },
        //     offset: [-30, -30],
        //     textStyle: {
        //         color: color2,
        //         fontSize: 14
        //     }
        // }
    },
    data: scatterData
}];
function getcustomDay(e){
    let h = e.substr(8,e.length);
    return h;
}
function getPieSeries() {
    scatterData.map(function(item, index) {
        var center = myChart.convertToPixel('calendar', item);
        //console.log(item,index,center);
        var customname;
        var customcolor;
        var customday;
        customday = getcustomDay(item[0]);
        console.log(customday);
        if(item[1] < 2000){
            customname = "良好";
            customcolor = 'rgba(140,198,63)';
        }else if(item[1] < 4000){
            customname = "轻度";
            customcolor = 'rgba(247,147,30,0.35)';
        }else if(item[1] < 6000){
            customname = "中度";
            customcolor = 'rgba(247,147,30,0.6)';
        }else if(item[1] < 8000){
            customname = "中重度";
            customcolor = 'rgba(247,147,30)';
        }else{
            customname = "重度";
            customcolor = 'rgba(255,0,0,0.7)';
        }
        let seriesItem = {
            id: index + 'pie',
            type: 'pie',
            center: center,
            radius:customradius,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'center',
                    fontSize:'13'
                }
            },
            data: [{
                    name: customname,
                    legendHoverLink:false,
                    hoverAnimation:false,
                    value: customday,
                    itemStyle: {
                        color: customcolor
                    },
                }
            ]
        };
        seriesData.push(seriesItem)
    })
}
var color1 = '#0a0b58';
var color2 = 'red';
option = {
    backgroundColor:'#ffffff',
    title:{
        text:'月状况分布',
    },
    legend: {
        color:'red',
        data: [
            {
                name:"良好",
            },
            {
                name:"轻度",
            },
            {
                name:"中度",
            },
            {
                name:"中重度",
            },
            {
                name:"重度",
            }
        ],
        bottom:80,
        textStyle: {
            color: 'green',
        }
    },
    calendar: {
        top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,
        yearLabel: {
          show: true,
          margin:40,
          color:'#7fb93c',
          formatter:function(e){
              console.log(e);
              return e.start + "年     2 月";
          }
        },
        dayLabel: {
          firstDay: 1,
          margin:5,
          color:'gray',
          nameMap: dataX
        },
        monthLabel: {
          show: false
        },
        splitLine:{
            show:false  //外部边框
        },
        itemStyle: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0)'    //内边框颜色
        },
        range: ['2017-02']
    },
    series: seriesData
};
setTimeout(function() {
    getPieSeries()
    myChart.setOption(option)
    console.log(option);
}, 10);