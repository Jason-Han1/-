let mindata=40;
let avgdata=0;
let maxdata=60;

let min_ps=1000;
let avg_ps=1200;
let max_ps=10000;
option = {
   tooltip: {
        trigger: 'item',
        formatter: function(params) {
            let res = params.name;
            let myseries = option.series;
            for (let i = 0; i < myseries.length; i++) {
                res += myseries[i].name + ' : ' + myseries[i].data[0] + '%</br>';
            }
            return res;
        }
    },
    xAxis: {
        type: 'value',
        show: false,
        min:0,
        max:100
    },
    yAxis: {
        type: 'category',
        show: false,
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        name: '最小票数',
        data: [mindata],
        stack: 'income',
        barWidth: 13,
        label: {
            normal: {
                show: true,
                position: 'left',
                //TODO 
                offset: [40, 30],
                formatter: min_ps+'张'
            }
        },
        itemStyle: {
            normal: {
                color: '#1f66f8',
                barBorderRadius: [5, 0, 0, 5],

            }
        },
    }, {
        type: 'bar',
        name: '平均票数',
        data: [avgdata],
        stack: 'income',
        barWidth: 13,
        label: {
            normal: {
                show: true,
                position: 'left',
                //TODO 
                offset: [40, 30],
               formatter: avg_ps+'张'
            }
        },

        itemStyle: {
            normal: {
                color: '#14f6cf',
                barBorderRadius: [0],

            }

        },
    }, {
        type: 'bar',
        name: '最大票数',
        data: [maxdata],
        stack: 'income',
        barWidth: 13,
        label: {
            normal: {
                show: true,
                position: 'right',
                //TODO 
                offset: [0, 30],
               formatter:max_ps+'张'
            }
        },

        itemStyle: {
            normal: {
                color: '#14b9f6',
                barBorderRadius: [0, 5, 5, 0],

            }

        }
    }]
};