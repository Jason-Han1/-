var datas = ['物料检测', '气密检测', '尺寸检测', '堆芯装配', '电堆封装', '电堆终检'];
function dateFormat(fmt, date) {
    let ret;
    const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
        }
    }
    return fmt;
}

function titleTime() {
    var time = dateFormat('YYYY-mm-dd HH:MM:SS', new Date());
    return time;
}

setInterval(() => {
    var now = titleTime();
    var option = myChart.getOption();
    option.title[0].text = '产线运行状态 ' + now;
    myChart.setOption(option);
}, 1000);

var colorData = [1, 0, 1, 1, 1, 0];

var legendData = [
    {
        name: '运行',
        data: [1, 1, 1, 1, 1, 1, 1],
    },
    {
        name: ' ',
        data: [1, 1, 1, 1, 1, 1, 1],
    },
    {
        name: '停止',
        data: [1, 1, 1, 1, 1, 1, 1],
    },
];
var colorList = ['#62ff00', '#fff0', '#ff4a4a'];
var seriesList = [];
for (var i = 0; i < legendData.length; i++) {
    seriesList.push({
        type: 'bar',
        name: legendData[i].name,
        stack: '2',
        legendHoverLink: false,
        barWidth: 14,
        itemStyle: {
            normal: {
                borderColor: colorList[i],
                borderWidth: 3,
                color: function (params) {
                    if (params.componentIndex == 1) {
                        return '#fff0';
                    } else if (params.componentIndex == 0) {
                        if (colorData[params.dataIndex] == 1) {
                            return '#62ff00';
                        } else {
                            return '#fff0';
                        }
                    } else {
                        if (colorData[params.dataIndex] == 0) {
                            return '#ff4a4a';
                        } else {
                            return '#fff0';
                        }
                    }
                },
            },
        } /*
        label: {
            show: false,
            position: 'inside',
            color:'#fff',
        },*/,
        data: legendData[i].data,
    });
}
option = {
    title: {
        show: true,
        text: '产线运行状态',
        textStyle: {
            color: '#fff',
        },
    },
    backgroundColor: '#004a96',
    tooltip: {
        show: false,
    } /*
    legend: [
        {
            left: '10%',
            top: '7%',
            icon: 'react',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                color: '#000',
            },
            data: ['环境管控单元', '生态控件分区', '水环境管控分区'],
        },
        {
            left: '10%',
            top: '14%',
            icon: 'react',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                color: '#000',
            },
            data: ['大气环境管控分区', '土壤污染风险管控分区', '自然资源管控分区', '库线管控分区'],
        },
        {
            left: '10%',
            top: '21%',
            icon: 'react',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                color: '#000',
            },
            data: ['库线管控分区'],
        },
    ],*/,
    grid: {
        containLabel: true,
        top: '12%',
        left: '0%',
        right: '1%',
        bottom: '0%',
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            inverse: true,
            data: datas,
            axisLabel: {
                margin: 140,
                fontSize: 16,
                align: 'left',
                color: '#fff',
                nterval: 0, //强制显示文字
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30,
                },
            },
        },
        {
            show: false,
            data: datas,
            axisLine: {
                show: false,
            },
        },
    ],
    series: seriesList,
};
// 3.配置项和数据给实例化对象
myChart.setOption(option);

/*var option1 =  myChart.getOption();
   console.log(option1)*/
