const data = [{
        name: '水稻',
        value: 36,
    },
    {
        name: '玉米',
        value: 20,
    },
    {
        name: '大豆',
        value: 16,
    },
    {
        name: '马铃薯',
        value: 9,
    },
]

let totalSum=0;
for(var i=0;i<data.length;i++){
    totalSum+=data[i].value
}
var colorList = ['#00E4FF', '#B784DE', '#FF9360', '#64E09E'];


option = {
    backgroundColor: '#0A1934',
    color:colorList,
    tooltip: {
        trigger: 'axis',
    },
    title: {
        text: '总面积',
        subtext: totalSum+'亩',
        textStyle: {
            color: '#fff',
            fontSize: 30,
            
        },
        subtextStyle: {
            align: 'center',
            fontSize: 28,
            color: ['#64E09E'],
        },
        x: 'center',
        y: 'center',
    },
        legend: {
        // selectedMode: false, // 取消图例上的点击事件
        type: 'plain',
        icon: 'circle',
        orient: 'vertical',
        left: '70%',
        top: '40%',
        align:'left',
        itemGap: 15,
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        symbolKeepAspect: false,
        textStyle: {
            color: '#fff',
            rich: {
                name: {
                    align: 'left',
                    width: 60,
                    fontSize: 20,
                },
                value: {
                    width: 60,
                    fontSize: 20,
                    // color:'#00cf90'
                     color: function(params) {
                            return colorList[params.dataIndex]
                      }
                },
            }
        },
        data: data.map(item => item.name),
        formatter: function(name) {
            if (data && data.length) {
                for (var i = 0; i < data.length; i++) {
                    if (name === data[i].name) {
                        return (
                            '{name| ' +
                            name +
                            '} ' +
                            '{value| ' +
                            data[i].value +
                            '亩} '
                        )
                    }
                }
            }
        }
    },
    series: [{
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '：' + params.value + '亩<br>占比：' + params.percent.toFixed(2) + '%'
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#0A1934',//饼形图扇形间的距离
                borderWidth: 5,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label:{
            show:false
        },
        labelLine:{
            show:false
        },
        type: 'pie',
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        data: data
    }]
};