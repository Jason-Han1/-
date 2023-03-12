const datas = [
    ['1月', 78],
    ['2月', 46],
    ['3月', 70],
    ['4月', 26],
    ['5月', 68],
    ['6月', 92],
    ['7月', 58],
    ['8月', 76],
    ['9月', 79],
    ['10月', 33],
    ['11月', 66],
    ['12月', 77],
]

const datas2 = [
    ['1月', 98],
    ['2月', 146],
    ['3月', 170],
    ['4月', 126],
    ['5月', 168],
    ['6月', 192],
    ['7月', 158],
    ['8月', 176],
    ['9月', 179],
    ['10月', 113],
    ['11月', 98],
    ['12月', 177],
];

option = {
    color: ['#3760EA'],
    tooltip: {},
    grid: {
        left: '30',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        data: ['客户总数量', '客户增长数量'],
        top: '9%'
    },
    xAxis: [{
        type: 'category',
        name: '年/月',
        nameTextStyle: {
            color: '#666666'
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: "#A4ABBA"
            }
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        name: '数量',
        type: 'value',
        nameTextStyle: {
            color: '#666666',
            align: 'right',
            padding: [0, 20, 0, 0]
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: "#A4ABBA"
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            color: '#F4F5FA'
        },

    }],
    series: [{
            name: '客户增长数量',
            type: 'bar',
            barWidth: "16",
            data: datas,
        },
        {
            name: '客户总数量',
            type: 'line',
            symbolSize: 8,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#B8C8FF'
                    }, {
                        offset: 1,
                        color: '#FAFAFA'
                    }])
                }
            },
            lineStyle: {
                width: 1
            },
            data: datas2,
        }
    ],
    dataZoom: [{
        'show': true,
        'height': 8,
        'xAxisIndex': [
            0
        ],
        bottom: '1%',
        'start': 0,
        'end': 100,
        handleIcon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABZVBMVEUAAAC/zNnCy9jGy9jF zNjFzNjFzdjEzNjEy9jGzNjGzNjGzNjFzNjFzdjEy9jHztjFy9jGxtTFzNvFy9fFzNvFy9bFzNfE zNfGztnFzNjEzdbFzdjFzNjFy9bGzNmq1NTGzdfFzNfD0uHFzNfFzNnBytPEzNnGzdjGzNnEy9bE zNjGy9XFzNjFzNnb29vFzNfDzNjFy9jEytXFy9j////EzNjFy9jFzdjDy9fFzNPEzNfGzdnFzNnF zdnEy9fFy9jFzNnFzNfFzNjFzNjGzdnEy9fFzdfHzNnEy9jFzdjFzNjGzdnN093T2eLY3eXc4ejh 5evl6O7q7PHu8PTL0dza3+bs7vLz9Pf5+vv////W2+Pl6O3z9ff6+vvU2eLm6e74+frM0t3i5ev0 9ffQ1uD8/P3T2OHt7/Pd4ej3+PrS1+Hv8fTc4OfQ1t/w8vXZ3uX6+/z5+fv7+/zq7fHa3uby8/bK 0NsZ4hTgAAAASnRSTlMAFDtig5CdqrfE0d7r+CdOdhJGwSNYjchD0ziE0Cx4Bme5EXPUHX7fKIrr MZX2B/VVyyuiAe9PxYAjrlHcf2ydtc7m2bOOYF+XiSBfor0AAAABYktHRDSpsen9AAAAB3RJTUUH 5AUXBzskQdEODgAACGRJREFUeNrdnelfEkEYxxcFdBGBLM088MZb8S67TxW8wHPUpCwr7S7r768R SVHY55lrZ5vv62H3+X3Y3XnmmWeex7LU4Kuo9AeCVdV2qCZcWxuuCdnVVcGAv7LCp+iG8olEY0E7 nCpL2A7GohHdVjpzrc5/PYXkur/umm57S3KjvuEmVkSBmw31N3TbXUxj4BariAK3Ao26rS/Q1NzC qyJPS3OTbg2W1Rq3xVTkseOtOlW0tXfIUJGno71Nk4zOrm55MijdXZ0aZPQkeuXKoPQmelyW0dc/ IF8GZaC/z0UZg0PDamRQhocGXZIxkhhVJ4MymhhxQ0dyTK0MylhSuYzxCfUyKBPjSmVMxqfc0ZFK TcUn1emYnnFLBmVmWpWO227KoNxWIuPOrNs6UqnZO/J13L3nvo5U6t5d2Tru65BBuf/fP1YFZD5e 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',
        handleSize: '110%',
        handleStyle: {
            color: '#CCC'

        },
        
        textStyle: {
            color: 'rgba(170,176,185,1)'
        },
        borderColor: 'transparent',
        fillerColor: '#CCC'
    }, {
        'type': 'inside',
        'show': false,
        'height': 10,
        'start': 0,
        'end': 35,
        minValueSpan: 5,
    }]
};

























