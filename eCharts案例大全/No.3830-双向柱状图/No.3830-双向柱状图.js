var category = ['大众', '别克', '奔驰', '宝沃', '丰田'];
var barData = [0, 80, 77, 48, 21];
var lineData = [125, 125, 125, 125, 125]

// console.log(barData)
option = {
    backgroundColor: '#000',
    grid: [{
        left: '10',
        bottom: '20',
        top: 3,
        right: 100
    }],
    xAxis: {
        show: false
    },
    yAxis: {
        data: category,
        show: true,
        axisLabel: {
            inside: true,
            verticalAlign: 'middle',
            color: '#fff',
            fontSize: 20
        },
        axisLine: {
            show: false
        }
    },
    series: [{ // 蓝柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolOffset: [120, -20],
            itemStyle: {
                normal: {
                    color: 'rgba(16, 32, 60, 0.7)',
                     borderColor: 'rgba(16, 32, 60, 0.5)',
                    borderWidth: 2
                }
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(value, index) {
                        console.log(value)
                        return `${barData[value.dataIndex]}%`
                    },
                    offset: [5,20],
                    position: 'right',
                    color: 'rgba(63, 186, 143, 1)',
                    fontSize: 14
                }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: [24, 6],
            data: lineData,
            // barGap: 10,
            barCategoryGap: 100,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        { // 红柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolOffset: [120, 21],
            itemStyle: {
                normal: {
                    color: 'rgba(16, 32, 60, 0.7)',
                     borderColor: 'rgba(16, 32, 60, 0.5)',
                    borderWidth: 2
                }
            },
            z: -11,
            // barWidth: 10,
            symbolRepeat: true,
            symbolSize: [24, 6],
            data: lineData,
            // barGap: 50,
            label: {
                normal: {
                    show: true,
                    formatter: function(value, index) {
                        console.log(arguments)
                        return `${barData[value.dataIndex]}%`
                    },
                    position: 'right',
                    offset: [5, -20],
                    color: 'rgba(108, 152, 255, 1)',
                    fontSize: 14
                }
            },
            barCategoryGap: 100
        },
        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'rect',
            symbolOffset: [120, -20],
            itemStyle: {
                normal: {
                    color: '#000',
                    borderColor: "rgba(82, 111, 255, 1)",
                    borderWidth: 2
                }
            },
            symbolRepeat: true,
            symbolSize: [24, 6],
            // symbolClip: true,
            data: barData
        },
        { // 红柱
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: true,
            symbolClip: true,
            symbolOffset: [120, 22],
            // symbolSize: ['80%', '80%'],
            // name: '', // red bar
            // type: 'pictorialBar',
            // symbol: 'rect',
            // barWidth: '3%',
            // symbolOffset: [120, 20],
            itemStyle: {
                normal: {
                    color: "#000",
                    borderColor: 'rgba(57, 178, 132, 1)',
                    borderWidth: 2
                }
            },
            // symbolRepeat: true,
            // // "symbolRepeat": "fixed",
            symbolSize: [24, 6],
            // symbolClip: true,
            data: barData, // barData,
            animationEasing: 'elasticOut'
        }
    ],
    animation: true
}