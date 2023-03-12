// let levels = ['严重', '高危', '中危', '低危'];

let Datas = [23, 58, 65, 98];
let name = ['严重', '高危', '中危', '低危'];
let color = ['#d98986', '#f3b77b', '#f8c955', '#82b4a3'];

let series = [];
let max = eval(Datas.join("+")); // 首先计算出所有等级的总数

Datas.forEach((item, index) => {
    console.log(max)
    let bar;
    if (item > 0) {
        bar = {
            name: name[index],
            type: 'bar',
            stack: '总量',
            // 每条柱形的宽度
            barWidth: '15%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: color[index],
                },
            },
            data: [item],
        }
    } else {
        bar = {
            name: name[index],
            type: 'bar',
            stack: '总量',
            // 每条柱形的宽度
            barWidth: '15%',
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: color[index],
                },
            },
            data: [item],
        }
    }
    
    series.push(bar)
});

// 指定图表的配置项和数据
option = {
    /*tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },*/
    /*legend: {
        data: levels,
    },*/
    /*grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
        containLabel: true,
    },*/
    xAxis: {
        type: 'value',
        max: max,
        show: false,
    },
    yAxis: {
        type: 'category',
        show: false,
        data: [''],
    },
    series: series,
};
