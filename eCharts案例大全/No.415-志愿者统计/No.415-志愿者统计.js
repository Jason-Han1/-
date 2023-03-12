var values = [110,56,50,30,30,50];
var sum = values[0] + values[1] + values[2] + values[03] + values[4] + values[5]; 
var legendData = ["平安巡防岗", "垃圾分类员", "交通督导员", "场景引导员", "爱心助学岗", "爱心凉茶岗"];
var colorList = ['#FFDC44', '#00FFA0', '#FFB130', '#304EFF', '#4BE0FC', '#1692F4'];
var titletext = '39.9%\n 项目一';
option = {
    backgroundColor:'#000',
    title: {
        text: titletext,
        textAlign:'center',
        textStyle: {
            fontSize:18,
            color: '#fff'
        },
        left:'20%',
        top:'center'
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        textStyle:{
            color:'#fff'
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        right: '5%',
        align: 'auto',
        top: 'middle',
        itemGap:10,
        textStyle: {
            fontSize:16,
            color: '#fff'
        },
        data: legendData,
        formatter:function(name)
        {
            for(var i = 0;i < legendData.length;i++)
            {
                if (legendData[i] == name) {
                    return name + '    已报' + values[i] + '人'
                }
            }
        }
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['20%', '50%'],
        radius: ['50%', '65%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: false
        },
        data: [
            {
                name:legendData[0],
                value:values[0]
            },
            {
                name:legendData[1],
                value:values[1]
            },
            {
                name:legendData[2],
                value:values[2]
            },
            {
                name:legendData[3],
                value:values[3]
            },
            {
                name:legendData[4],
                value:values[4]
            },
            {
                name:legendData[5],
                value:values[5]
            }
        ]
    }, {
        name: '外边框',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['20%', '50%'],
             radius: ['70%', '70%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: [{
                 value: 1,
                 name: '',
                 itemStyle: {
                     normal: {
                         borderWidth: 5,
                         borderColor: 'rgba(11,82,99,.5)'
                     }
                 }
             }]
    }]
};