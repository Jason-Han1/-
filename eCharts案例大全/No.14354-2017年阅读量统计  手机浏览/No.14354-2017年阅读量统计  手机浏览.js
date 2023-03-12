var yAxisdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var data = [3, 4, 0, 0, 6, 4, 3, 0, 4, 6, 6, 4];


//马卡龙配色
var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
];



option = {
    title : {
        text: '2017年阅读量统计',
        subtext: '每月读完的数量，{a|平均每月读4.4本}，相当于每周一本\n3月、4月工作原因没读；8月都在读水浒。',
        textStyle:{
            fontSize:30
        },
        subtextStyle:{
            fontSize:22,
            rich:{
                a: {
                color: 'red',
                fontWeight:'bold',
                fontSize:25,
            },
         
            }
        },
        
        
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量']
    },
    grid:{
    top:'90',
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    yAxis : [
        {
            type : 'category',
            data :yAxisdata,
            axisLabel : {
                fontSize:30,
            }
        }
    ],
    xAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'阅读量',
            type:'bar',
            data:data,
           itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        
                        return colorList[params.dataIndex]
                    },
                    shadowBlur:10,
                    shadowColor:'#aaa',
                    shadowOffsetX:5,
                    shadowOffsetY:5,
                    
                    label: {
                        fontSize:30,
                        show: true,
                        position: 'insideLeft',
                        formatter: '{c}本'
                    }
                }
            }
        }
    ]
};   