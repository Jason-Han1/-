
var xdata = ["本科生","研究生","教职工","继续教育生","其他"];

var ydata = [[140,140,119,115,90,50,50],[31,12,11,15,9,8,4],[12,11,9,7,7,5,5],[25,11,4,6,7,5,5]];
var colorList2 = ["rgba(4, 36, 92, 1)","rgba(248, 188, 102, 1)","rgba(143, 104, 255, 1)","#2ADA91"];
var colorList1 = ["rgba(0, 160, 247, 1)","rgba(248, 188, 102, 1)","rgba(143, 104, 255, 1)","#2ADA91"];

var legendName = ["总人数","第一针接种","第二针接种","第三针接种"];

var series = [];
var data = [];
for (var i = 0; i < legendName.length; i++) {
    
    let stack = i==0?'a':'b';
 
    series.push({
        name: legendName[i],
        zlevel: 100 - i,
        stack:stack,
            type: 'bar',
        barWidth: 12,
       
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1.5,
                    r: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: colorList1[i],
                        },
                        {
                            offset: 1,
                            color: colorList2[i],
                        },
                    ],
                    global: false, // 缺省为 false
                },
                
            },
        },
        data: ydata[i],
    });
}

option = {
    grid: {
        containLabel: true,
        top: 80,
        left: '2%',
        right: '4%',
        bottom: '5%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },

        confine: true,
        formatter: function (params) {
            var str = '<span>' + xdata[params[0].dataIndex.toString()] + '</span>';
            for (var i = 0; i < 3; i++) {
                temp =
                    '<div style="display:flex;width:180px;align-items:center;justify-content:space-between;"><div><span style="font-size:20px;color:' +
                    colorList1[i] +
                    '">• </span><span>' +
                    legendName[i] +
                    '</span></div>' +
                    '<div style="">' +
                    ydata[i][params[0].dataIndex] +
                    '人</div></div>';
                str = str + temp;
            }
            return str;
        },
    },

    legend: {
        itemGap: 22,
        selectedMode: false,
        right: '4%',
        top: 25,
        data: legendName,
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            fontSize: 12,
            color: '#777',
        },
    },
    xAxis: {
        axisLabel: {
            show: true,
            
            textStyle: {
                fontSize: 12,
                color: '#777',
                fontWeight: 400,
                fontFamily: 'Source Han Sans CN',
            },
        },
        axisLine: {
            show: true,

            lineStyle: {
                color: '#777',
            },
        },
        axisTick: {
            show: false,
        },
        data: xdata,
    },
    yAxis: {
        name: '人数（人）',
        nameTextStyle: {
            color: '#777',
            padding: [0, 0, 0, 20],
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 12,
                color: '#777',
                fontWeight: 400,
                fontFamily: 'Source Han Sans CN',
            },
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(49, 185, 255, 0.3)',
            },
        },
    },

    series: series,
};
