option = {
    backgroundColor: '#fff',
    grid: {
        top: "8%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            let total = 0,
                name = '';
            params.forEach(v => {
                name = v.name;
                if (v.seriesName !== 'empty') {
                    total = total + v.value;
                }
            })
            let html = `
                <div style="color: #333;font-weight:700;font-size: 14px">${name}</div>
                <div style="color: #666;font-size: 14px">用电量
                <span style="color: #1890FF;font-weight:700;font-size: 18px">${total}</span>
                万kWh
                </div>
            `
            return html
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#ffffff',
                shadowColor: 'rgba(225,225,225,1)',
                shadowBlur: 5
            }
        }
    },
    xAxis: [{
        type: "category",
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        axisLine: {
            show: false
        },
        // axisLabel: {
        //     // show: false
        // },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: "value",
        name: "",
        max: function(value) {
            return value.max + 30;
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            type: 'bar',
            name: 'empty',
            barWidth: 18,
            barGap: '-100%',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [4, 4, 0, 0],
                    color: 'rgba(225,225,225,0.5)'
                }
            },
            data: [1500, 1500, 1500, 1500, 1500, 1500, 1500]
        },
        {
            type: 'bar',
            barWidth: 18,
            zlevel: 2,
            stack: 'electric',
            itemStyle: {
                normal: {
                    color: '#FFC005'
                }
            },
            data: [254, 325, 165, 245, 475, 201, 121]
        },
        {
            type: 'bar',
            barWidth: 18,
            zlevel: 2,
            stack: 'electric',
            itemStyle: {
                normal: {
                    color: '#36CE9E'
                }
            },
            data: [254, 325, 165, 245, 475, 201, 121]
        },
        {
            type: 'bar',
            barWidth: 18,
            zlevel: 2,
            stack: 'electric',
            itemStyle: {
                normal: {
                    barBorderRadius: [4, 4, 0, 0],
                    color: '#0090FF'
                }
            },
            data: [254, 325, 165, 245, 475, 201, 121]
        }
    ]
};