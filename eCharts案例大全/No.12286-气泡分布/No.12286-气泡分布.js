const min = 100;
const max = 500;
const province = ['台湾', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '上海', '重庆', '香港', '澳门'];
const data = province.map((value) => [value, Math.random() * 100, Math.random() * 100]);

option = {
    color: ['#3891ff', '#1fdfe9'],
    tooltip: {
        show: true,
        backgroundColor: '#485465',
        trigger: 'item',
        formatter(item) {
            return `交易额:&nbsp;${item.value[1].toFixed(2)}亿
            <br>交易量:&nbsp;${item.value[2].toFixed(2)}条
          `;
        },
        textStyle: {
            fontSize: 16
        }
    },
    grid: {
        right: 40,
        left: 80,
        top: 60,
        bottom: 20
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#485465'
            },
            show: true
        },
        data: province,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#485465'
            },
            show: true
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            inside: false,
            rotate: 0,
            margin: 12,
            color: 'orange',
            fontSize: 16
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#485465'],
                width: .5,
                type: 'dashed'
            }
        },
        name: '（亿）',
        nameLocation: 'end',
        nameTextStyle: {
            color: 'orange',
            fontSize: 16,
            align: 'left',
            padding: [0, 0, 0, -30]
        },
        nameGap: 10,
        show: true,
        scale: true,
        min: 0
    },
    series: [{
        symbolSize(value) {
            return value[0].length * 20;;
        },
        label: {
            formatter: '{b}',
            color: '#fff',
            fontSize: 16,
            show: true
        },
        type: 'scatter',
        data: data
    }]
};