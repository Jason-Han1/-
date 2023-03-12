
/**
 * times:YYYY-mm-dd HHMMSS
 * timeData:时间
 * windsData:风速
 * windxData:风向/等级
 * temData:温度
 * ,rainData:降水
 * humData:湿度
 */
let Data = {
    times: ["2019-09-08 00:00:00", "2019-09-08 01:00:00", "2019-09-08 02:00:00", "2019-09-08 03:00:00", "2019-09-08 04:00:00", "2019-09-08 05:00:00", "2019-09-08 06:00:00", "2019-09-08 07:00:00", "2019-09-08 08:00:00", "2019-09-08 09:00:00", "2019-09-08 10:00:00", "2019-09-08 11:00:00"],
    timeData: ["08/00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
    windxData: ["东南", "北", "东南", "东", "东南", "东南", "西", "北", "南", "东南", "东南", "东南"],
    windsData: ["2.8/2", "1.4/1", "2.7/2", "3/2", "2.2/2", "1.4/1", "1.5/1", "1.9/2", "1.4/1", "1.8/2", "2/2", "3.4/3"],
    temData: [25.4, 24.3, 24, 23, 22.1, 21.8, 22.7, 23, 25.3, 28.9, 31.3, 32.5],
    rainData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    humData: [59, 67, 70, 74, 77, 77, 65, 63, 60, 47, 40, 36],
}

function windDen(wind) {
    switch (wind) {
        case '北': return 'n';
        case '东北': return 'ne';
        case '东': return 'e';
        case '东南': return 'se';
        case '南': return 's';
        case '西南': return 'sw';
        case '西': return 'w';
        case '西北': return 'nw';
        default: return ''
    }
}

let colors = ['#FF6863', '#6EAB40', '#3BB5F5'];

option = {
    title:
                    [{
                            text: '气象七要素数据分析',
                            left: '35%',
                            top: '20%',
                            textStyle: {
                                color: '#fff',
                                fontSize: 25
                            }
                        },
                        
                    ],
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'cross' },
        formatter: function(params, ticket, callback) {
            let index = params[0].dataIndex;
            let Htm = `${Data.times[index]}<br>
                    温度:${Data.temData[index]}℃<br>
                    降水:${Data.rainData[index]}mm<br>
                    风力:${Data.windsData[index].split('/')[0]}m/s ${Data.windsData[index].split('/')[1]}级风 ${Data.windxData[index]}<br>
                    湿度:${Data.humData[index]}%`
            return Htm;
        }
    },
    grid: {
        top: '30%',
        bottom: '30%',
        left: '14%',
        right: '8%'
    },
    dataZoom: {
        bottom: '14%',
        height: '30',
        dataBackground: {
            lineStyle: { color: '#39977D' },
            areaStyle: { color: 'rgba(57,151,125,1)' }
        },
        borderColor: 'rgba(57,151,125,0.2)',
        textStyle: { color: '#39977D' },
        start: 0,
        end: 100,
        xAxisIndex: [0, 1, 2, 3]
    },
    xAxis: [{
            name: '风力(m/s)/等级',
            type: 'category',
            position: 'bottom',
            offset: 8,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#000000',
                    fontSize: 14,
                    backgroundColor: '#FFE282',
                    lineHeight: 20,
                    padding: [3, 3]
                },
                interval: 0
            },
            nameTextStyle: { color: '#FF6863', padding: [0, 0, -53] },
            nameLocation: 'start',
            data: Data.windsData
        },
        {
            name: '风向',
            type: 'category',
            position: 'bottom',
            offset: 40,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
                show: true,
                textStyle: { color: '#000000', fontSize: 14, lineHeight: 20 },
                interval: 0,
                formatter: (value) => {
                    return '{' + windDen(value) + '| }' + value + '';
                },
                rich: {
                    value: {
                        lineHeight: 16,
                        align: 'left'
                    },
                    n: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915257914-d2XE-l1Xe.png`
                        }
                    },
                    ne: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915419689-EqosRMRlP.png`
                        }
                    },
                    e: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915374565-sE5G5rXU6.png`
                        }
                    },
                    se: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915457742-e5gWU0sT0.png`
                        }
                    },
                    s: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915473589-TN5oJTIdv.png`
                        }
                    },
                    sw: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915498319-h9PscokI2.png`
                        }
                    },
                    w: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915523655-sI1HtlidH.png`
                        }
                    },
                    nw: {
                        height: 16,
                        align: 'left',
                        backgroundColor: {
                            image: `/asset/get/s/data-1567915566043-E6t1OVpNh.png`
                        }
                    }
                }
            },
            nameTextStyle: { color: '#FF6863', padding: [0, 0, -38] },
            nameLocation: 'start',
            data: Data.windxData
        },
        {
            type: 'category',
            axisLine: { show: false },
        },
        {
            type: 'category',
            position: 'bottom',
            offset: 80,
            axisTick: { alignWithLabel: true, textStyle: { color: '#707070' } },
            data: Data.timeData
        }
    ],
    yAxis: [{
            type: 'value',
            name: '温度(°C)',
            scale: true,
            position: 'left',
            offset: 54,
            axisTick: { lineStyle: { color: colors[0] }, inside: true },
            nameTextStyle: { color: colors[0] },
            axisLabel: { color: colors[0] },
            splitLine: { show: false }
        },
        {
            type: 'value',
            name: '降水(mm)',
            position: 'left',
            axisTick: { lineStyle: { color: colors[1] }, inside: true },
            nameTextStyle: { color: colors[1] },
            axisLabel: { color: colors[1] },
            splitLine: { show: false }
        },
        {
            type: 'value',
            name: '相对湿度(%)',
            scale: true,
            position: 'right',
            axisTick: { lineStyle: { color: colors[2] }, inside: true },
            nameTextStyle: { color: colors[2] },
            axisLabel: { color: colors[2] },
            splitLine: { show: false }
        }
    ],
    series: [{
            name: '温度',
            type: 'line',
            step: false,
            label: { normal: { show: true, position: 'top' } },
            data: Data.temData
        },
        {
            name: '降水',
            type: 'bar',
            yAxisIndex: 1,
            color: '#bee6b2',
            barWidth: '50%',
            label: { normal: { show: true, position: 'top' } },
            data: Data.rainData
        },
        {
            name: '相对湿度',
            type: 'line',
            step: false,
            yAxisIndex: 2,
            color: colors[2],
            label: { normal: { show: true, position: 'top' } },
            data: Data.humData
        }
    ]
};