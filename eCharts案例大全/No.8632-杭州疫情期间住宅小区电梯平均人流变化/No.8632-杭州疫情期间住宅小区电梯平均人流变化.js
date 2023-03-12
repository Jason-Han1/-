option = {
    title:{
        text:"杭州疫情期间住宅小区电梯平均人流量变化",
        textAlign :"left"
    },
    legend: {
        show: true,
        // icon: 'circle',//图例形状
        bottom: 45,
        center: 0,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#ade3ff'
        },
        data: ['2016', '2017', '2018'],
    },
    xAxis: {
        type: 'category',
        data: ['1/19','1/20','1/21','1/22','1/23','1/24','1/25','1/26','1/27','1/28','1/29','1/30','1/31','2/1','2/2','2/3','2/4','2/5','2/6','2/7','2/8','2/9','2/10','2/11','2/12','2/13','2/14']
    },
    yAxis: [{
        type: 'value',
        name:"住宅小区电梯平均人流量（人）",
        nameRotate:'90',
        nameLocation:'middle',
        nameGap:40
    }],
    series: [{
        data: [379, 368,316, 263, 243, 226, 149,134,142,138,160,147,148,145,125,118,109,113,80,84,92,103,104,85,95,99,103,96],
        type: 'line',
        symbolSize:30,
        label:{
            show:true,
            color:'#000',
            position:'inside'
        }
    }, {
        data: [0, 0,0, 0, 0, 400, 0,0,0,0,0,0.0,0,0,0,400,0,0,0,0,0,0,0,0,0,0,0],
        type:'bar',
        barWidth:1,
        itemStyle: {
            normal: {
                borderColor: '#1e90ff',
                borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                label: {
                    show: false
                }
            },
            emphasis: {
                borderColor: '#1e90ff',
                borderWidth: 5,
                label: {
                    show: false
                }
            }
        },
        markPoint:{
            symbol:'pie',
            symbolSize:10,
            itemStyle: {
                normal: {
                    borderColor: '#1e90ff',
                    borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                    label: {
                        show: true
                    }
                },
                emphasis: {
                    borderColor: '#1e90ff',
                    borderWidth: 5,
                    label: {
                        show: false
                    }
                }
            },
            label:{
              show:true  
            },
            data:[ { value: '一级响应',xAxis:'1/24',yAxis:0,symbolOffset:[0,40]},
                {value: '十项措施发布',xAxis:'2/3',yAxis:0,symbolOffset:[0,40]}]
        }
    }]
};
