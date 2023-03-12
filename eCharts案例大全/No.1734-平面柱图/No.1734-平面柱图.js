// 单位
const unit = '人';
data = [
            {
                name: '江宁街道',
                captain: 1,
                manager: 1,
                maintainer: 3
            },
            {
                name: '禄口街道',
                captain: 1,
                manager: 1,
                maintainer: 6
            },
            {
                name: '秣陵街道',
                captain: 1,
                manager: 1,
                maintainer: 2
            },
            {
                name: '东山街道',
                captain: 1,
                manager: 1,
                maintainer: 2
            },
            {
                name: '谷里街道',
                captain: 1,
                manager: 1,
                maintainer: 5
            },
            {
                name: '淳化街道',
                captain: 1,
                manager: 1,
                maintainer: 5
            },
            {
                name: '汤山街道',
                captain: 1,
                manager: 1,
                maintainer: 10
            },
            {
                name: '湖熟街道',
                captain: 1,
                manager: 1,
                maintainer: 5
            },
            {
                name: '麒麟街道',
                captain: 1,
                manager: 1,
                maintainer: 2
            },
            {
                name: '横溪街道',
                captain: 1,
                manager: 1,
                maintainer: 5
            }
        ];
let  nameList= ['林长', '监督员', '护林员'];
let keyList= ['captain','manager','maintainer'];
let series = [];
keyList.forEach((keyName, index) => {
series.push({
    name: nameList[index],
    stack: 'person',
    type: 'bar',
    data: data.map(item => item[keyName]),
    barMaxWidth: 22
});
});
option = {
    backgroundColor: '#313131',
    color: ['#17EE8B', '#25FEF1', '#00A0E9'],
    grid: {
        top: 30,
        left: 20,
        bottom: 0,
        right: 0,
        containLabel: true
    },
    xAxis: {
        data: data.map(item => item.name),
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontFamily: 'customFont',
            fontSize: 14,
            color: 'rgba(189,189,189,0.6)'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: true,
        right: 0,
        top: 0,
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 10,
        textStyle: {
            color: '#fff',
            fontFamily: 'customFont',
            fontSize: 14
        }
    },
    yAxis: {
        type: 'value',
        name: `单位：${unit}`,
        nameTextStyle: {
            padding: [0, 0, 0, 10],
            fontFamily: 'customFont',
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: 'rgba(189,189,189,0.6)',
            fontFamily: 'customFont'
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#333'
            }
        }
    },
    series: series
}