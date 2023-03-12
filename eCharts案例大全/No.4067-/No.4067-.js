var name = ['教育学院', '心理学院', '政法学院', '经管学院', '文学院', '历史学院', '外语学院', '音乐学院', '美术学院', '马克思学院', '数学学院', '信科学院', '物理学院', '化学学院', '生科学院', '地理学院', '环境学院', '体育学院', '传媒学院', '民族学院', '国际汉学院', '纽瓦克学院'];
var legendName = ['教授', '副教授', '讲师', '其它教师'];
var value1 = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];
var value2 = [34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13];
var value3 = [2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
var value4 = [30, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
var bl = [];
var bl1 = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];
var bl2 = [34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13];
var bl3 = [2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
var bl4 = [30, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
// var max1  =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// for(var i=0;i<value1.length;i++){
//     max1[i]=value1[i]+value2[i]+value3[i]+value4[i];
// }

// for(var i=0;i<value1.length;i++){
//      bl1[i]=value1[i];
//      bl1[i]=(bl1[i]/max1[i]*100).toFixed();
// }
// for(var i=0;i<value2.length;i++){
//      bl2[i]=value2[i];
//      bl2[i]=(bl2[i]/max1[i]*100).toFixed();
// }
// for(var i=0;i<value3.length;i++){
//      bl3[i]=value3[i];
//      bl3[i]=(bl3[i]/max1[i]*100).toFixed();
// }
// for(var i=0;i<value4.length;i++){
//      bl4[i]=value4[i];
//      bl4[i]=(bl4[i]/max1[i]*100).toFixed();
// }
// bl.push(bl1);
// bl.push(bl2);
// bl.push(bl3);
// bl.push(bl4);

let tooltipColor = ['#2094FF','#FFC579','#8381FF','#FF6A88']
let color = [{
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#79D4FF'
        }, {
            offset: 1,
            color: '#57AEFF'
        }]
    },

    {
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FFD19A'
        }, {
            offset: 1,
            color: '#FFD283'
        }]
    },

    {
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#BDBCFF'
        }, {
            offset: 1,
            color: '#9C9BFF'
        }]
    },

    {
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF6388'
        }, {
            offset: 1,
            color: '#FFA387'
        }]
    }
]
option = {
    color: color,
    tooltip: {

        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        showContent: true,
        // formatter: '{a0}:{c0}<br/>{a1}:{c1}<br/>{a2}:{c2}<br/>{a3}:{c3}'
        formatter:value=>{
            let html = `<div style="fontSize:15px;fontWeight:bold;color:#00fffc;margin:0 0 10px 0">${value[0].axisValue}</div>`
            value.map((item,index)=>{
                html+=`
                <div>
                    <span style="background:${tooltipColor[index]};width:10px;height:10px;display:inline-block;"></span>
                    <span style="display:inline-block;width:90px;margin:0 22px 0 12px">${item.seriesName}开课</span>
                    <span>${item.value}学时</span>
                </div>`
            })
            return html
        },
        extraCssText:'padding:10px 17px;fontSize:13px'
    },
    legend: {
        data: legendName
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        containLabel: true,
        show: false
    },
    xAxis: {
        type: 'value',
        show: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: name,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            name: legendName[0],
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideRight',
                formatter: function(item) {
                    return bl1[item.dataIndex] + '%';
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [3, 0, 0, 3]
                }
            },
            data: value1,
        },
        {
            name: legendName[1],
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                position: 'insideRight',
                formatter: function(item) {
                    return bl2[item.dataIndex] + '%';
                }
            },
            // itemStyle:{
            //   color:'', 
            //   barWidth:'',
            // },
            data: value2
        },
        {
            name: legendName[2],
            type: 'bar',
            stack: 'total',

            label: {
                show: true,
                position: 'insideRight',
                formatter: function(item) {
                    return bl3[item.dataIndex] + '%';
                }
            },
            // itemStyle:{
            //   color:'', 
            //   barWidth:'',
            // },
            data: value3
        },
        {
            name: legendName[3],
            type: 'bar',
            stack: 'total',

            label: {
                show: true,
                position: '',
                formatter: function(item) {
                    return bl4[item.dataIndex] + '%';
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 3, 3, 0]
                }
            },
            data: value4
        }
    ]
};