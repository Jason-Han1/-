const one = 'one';
const two = 'two';
const three = 'three';

option = {
    tooltip: {
        trigger: 'axis',

    },
    dataset: {
        source: [
            ['Q1\nFY1718', 5, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            ['Q2\nFY1718', 6, 3, 2, 1,0, 0, 0, 0,  0, 0, 0, 0],
            ['Q3\nFY1718',  7, 3, 2, 1,0, 0, 0, 0, 0, 0, 0, 0],
            ['Q4\nFY1718',  8, 3, 2, 1,0, 0, 0, 0, 0, 0, 0, 0],
            ['Q5\nFY1718',  9, 3, 2, 1,0, 0, 0, 0, 0, 0, 0, 0],
            ['Q6\nFY1718',10, 3, 2, 1,0, 0, 0, 0,  0, 0, 0, 0],
            ['Q7FY1718\nJUN  AGU  SEP', 5, 3, 2, 1, 4, 3, 1, 2, 6, 4, 1, 2],

        ]
    },

    grid: {
        left: '20',
        right: '30',
        bottom: '40',
        top: '40',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        nameTextStyle: {
            fontFamily: 'LatoWeb-Regular',
            fontSize: 13,
            align: 'center',
            lineHeight: 16
        },
        offset:0,
        //boundaryGap: false,
        axisTick: { // 隐藏X轴刻度线
            show: false
        },
        axisLabel: {
            margin: 10,
            fontSize: 13,
            align: 'center',
            lineHeight: 16,
            fontWeight: 'lighter',
            color: 'black'
        },
        axisLine: {
            lineStyle: {
                color: '#979797'
            }
        },
    }],
    yAxis: [{

        type: 'value',
        min: 0,
        axisLabel: {
            show: true,
            interval: '0',
            formatter: '{value}',
            fontWeight: 'lighter',
            color: 'black',
            margin: 20,
            fontSize: 13
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#979797'
            }
        },
        axisTick: {
            show: false
        },
    }],

    series: [{
            name: 'General Purpose',
            type: 'bar',
            stack: one,
            itemStyle: {
                color: '#3e8ddd',
            },
            barWidth: 25
        },
        {

            name: 'Hyperscale',
            type: 'bar',
            stack: one,
            itemStyle: {
                color: '#ff6a00',
            },
            barWidth: 25
        },
        {
            name: 'Buy-Ahead',
            type: 'bar',
            stack: one,
            itemStyle: {
                color: '#979797',
            },
            barWidth: 25

        },
        {
            name: 'Others',
            type: 'bar',
            stack: one,
            itemStyle: {
                color: '#fab005',
            },
            barWidth: 25
        }, {
            name: 'General Purpose1',
            type: 'bar',
            stack: two,
            itemStyle: {
                color: '#3e8ddd',
                 opacity:0.5,
            },
            barWidth: 25
        },
        {
            name: 'Hyperscale1',
            type: 'bar',
            stack: two,
            itemStyle: {
                color: '#ff6a00',
                 opacity:0.5,
            },
            barWidth: 25
        },
        {
            name: 'Buy-Ahead1',
            type: 'bar',
            stack: two,
            itemStyle: {
                color: '#ff6a00',
                 opacity:0.5,
            },
            barWidth: 25
        },
        {
            name: 'Others1',
            type: 'bar',
            stack: two,
            itemStyle: {
                color: '#ffc82e',
                 opacity:0.5,
            },
            barWidth: 25
        }, {
            name: 'General Purpose2',
            type: 'bar',
            stack: three,
            itemStyle: {
                color: '#3e8ddd',
                 opacity:0.5,
            },
            barWidth: 25
        },
        {
            name: 'Hyperscale2',
            type: 'bar',
            stack: three,
            itemStyle: {
                color: '#ff6a00',
                 opacity:0.5,
            },
            barWidth: 25
        }, {
            name: 'Buy-Ahead2',
            type: 'bar',
            stack: three,
            itemStyle: {
                color: '#979797',
                opacity:0.5,
            },
            barWidth: 25
        }, {
            name: 'Others2',
            type: 'bar',
            stack: three,
            itemStyle: {
                color: '#ffc82e',
                 opacity:0.5,
            },
            barWidth: 25
        },
    ]
};