data = [{
						value: 500,
						name: '针叶林'
					},
					{
						value: 435,
						name: '阔叶林'
					},
					{
						value: 580,
						name: '针阔混交林'
					},
					{
						value: 484,
						name: '疏林地'
					},
					{
						value: 300,
						name: '特规灌木林'
					},
					{
						value: 300,
						name: '灌木经济林'
					},
					{
						value: 435,
						name: '其他灌木林'
					},
					{
						value: 380,
						name: '造林未成林'
					},
					{
						value: 484,
						name: '封育未成林'
					},
					{
						value: 300,
						name: '苗圃地'
					},
					{
						value: 300,
						name: '采伐迹地'
					},
					{
						value: 300,
						name: '火烧迹地'
					},
					{
						value: 300,
						name: '其他无立木林地'
					},
					{
						value: 300,
						name: '宜林荒山荒地'
					},
					{
						value: 300,
						name: '宜林沙荒地'
					},
					{
						value: 300,
						name: '其他宜林地'
					},
					{
						value: 300,
						name: '辅助生产林地'
					},
				];
getArrByKey = (data, k) => {
    let key = k || 'value';
    let res = [];
    if (data) {
        data.forEach(function (t) {
            res.push(t[key]);
        });
    }
    return res;
};
getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i].value,
            symbolPosition: 'end',
        });
    }
    return arr;
};
const colorList = ['#74A3FF','#72B5FF']

option = {
    grid: {
        top: '10%',
        bottom: -15,
        right: 100,
        left: 50,
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: [
        {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                inside: true,
                color: '#606266',
                margin:0,
                padding: [0, 0, 10, 0],
                align: 'left',
                verticalAlign:'bottom',
                formatter: function (value, index) {
                    return '{title|' + value + '}';
                },
                rich: {
                    title: {
                        width: 50,
                        fontSize: 14,
                    },
                },
            },
        },
        {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: getArrByKey(data, 'name'),
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 0,
                interval: 0,
                inside: true,
                 padding: [0, 0, 10, 0],
                color: '#4CB1A0',
                fontSize: 14,
                align: 'right',
                verticalAlign: 'bottom',
                formatter: function (value, index) {
                    return data[index].value;
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            showBackground: true,
            barMinWidth:'10',
            backgroundStyle: {
                opacity: 0.1,
                color: '#4D88FE',
            },
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            // align: left,
            itemStyle: {
                normal: {
                    //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: colorList[0],
                        },
                        {
                            offset: 1,
                            color:  colorList[1],
                        },
                    ]),
                },
            }
        },
    ],
};
