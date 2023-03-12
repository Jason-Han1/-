// Thanks [anoosurf](https://github.com/anoosurf) ~.
var starPath = 'path://m15.5,19c-0.082,0 -0.164,-0.02 -0.239,-0.061l-5.261,-2.869l-5.261,2.869c-0.168,0.092 -0.373,0.079 -0.529,-0.032s-0.235,-0.301 -0.203,-0.49l0.958,-5.746l-3.818,-3.818c-0.132,-0.132 -0.18,-0.328 -0.123,-0.506s0.209,-0.31 0.394,-0.341l5.749,-0.958l2.386,-4.772c0.085,-0.169 0.258,-0.276 0.447,-0.276s0.363,0.107 0.447,0.276l2.386,4.772l5.749,0.958c0.185,0.031 0.337,0.162 0.394,0.341s0.01,0.374 -0.123,0.506l-3.818,3.818l0.958,5.746c0.031,0.189 -0.048,0.379 -0.203,0.49c-0.086,0.061 -0.188,0.093 -0.29,0.093z';
var iconArray = [
    
    'path://M18 3c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3zM18 8h-6c-1.105 0-2 0.895-2 2v10h2v12h2.5v-12h1v12h2.5v-12h2v-10c0-1.105-0.895-2-2-2z', //man
    'path://M18 3c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3zM22.469 16l1.531-1.109-4.165-6.441c-0.185-0.281-0.499-0.45-0.835-0.45h-8c-0.336 0-0.65 0.169-0.835 0.45l-4.165 6.441 1.531 1.109 3.458-4.487 1.202 2.804-4.191 7.683h3.833l0.667 10h2v-10h1v10h2l0.667-10h3.833l-4.191-7.683 1.202-2.804 3.458 4.487z', //women

];
var categoryData = ['DTA']
var data = [34, ]


options = [{
     title : {
        text: '男',
        left: '25%',
        top:'50%',
        bottom:'30%',
        right:'60%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    grid: {
        left: '10%',
        top:'50%',
        bottom:'30%',
        right:'60%'
    },
    xAxis: {
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false}
    },
    yAxis: {
        show:false,
        data: categoryData,
        axisTick: {show: false},
        axisLine: {
            lineStyle: {color: '#ccc'}
        },
       
        axisLabel: {
            margin: 40,
            textStyle: {
                color: '#999',
                fontSize: 16
            }
        },
        splitLine: {show: false},
        position: 'top'
    },
    series: [{
        name: 'bg',
        type: 'pictorialBar',
        symbol: iconArray[0],
        tooltip: {trigger: 'none'},
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        silent: true,
        symbolRepeat: 'fixed',
        symbolClip: false,
        symbolBoundingData: 40,
        symbolSize: ['40%', '50%'],
        z: -1,
        data: [30]
    }, {
        name: 'data',
        type: 'pictorialBar',
        symbol: iconArray[0],
        symbolRepeat: true,
        symbolClip: true,
        symbolSize: ['40%', '50%'],
        symbolBoundingData: [-60, 40],
        data: [13]
    }]
},
{
     title : {
        text: '女',
        left: '75%',
        top:'45%',
        bottom:'30%',
        right:'20%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    grid: {
        left: '60%',
        top:'50%',
        bottom:'30%',
        right:'10%'
    },
    xAxis: {
        splitLine: {show: false},
        axisLine: {show: false},
        axisTick: {show: false},
        axisLabel: {show: false}
    },
    yAxis: {
        show:false,
        data: categoryData,
        axisTick: {show: false},
        axisLine: {
            lineStyle: {color: '#ccc'}
        },
       
        axisLabel: {
            margin: 40,
            textStyle: {
                color: '#999',
                fontSize: 16
            }
        },
        splitLine: {show: false},
        position: 'top'
    },
    series: [{
        name: 'bg',
        type: 'pictorialBar',
        symbol: iconArray[1],
        tooltip: {trigger: 'none'},
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        silent: true,
        symbolRepeat: 'fixed',
        symbolClip: false,
        symbolBoundingData: 40,
        symbolSize: ['40%', '50%'],
        z: -1,
        data: [30]
    }, {
        name: 'data',
        type: 'pictorialBar',
        symbol: iconArray[1],
        symbolRepeat: true,
        symbolClip: true,
        symbolSize: ['40%', '50%'],
        symbolBoundingData: [-60, 40],
        data: [30]
    }]
}];