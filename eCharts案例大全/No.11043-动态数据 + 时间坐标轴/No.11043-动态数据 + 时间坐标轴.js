function randomData() {

    now = new Date(+now + 1000);

    value = value + Math.random() * 21 - 10;

    return {

        name: now.toString(),

        value: [

            now,

            Math.round(value)

        ]

    }

}
var data = [];
var now = new Date();
var value = Math.random() * 1000;



option = {

    title: {

        text: '动态数据 + 时间坐标轴'

    },

    tooltip: {

        trigger: 'axis',

        formatter: function(params) {

            params = params[0];

            var date = new Date(params.name);

            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];

        },

        axisPointer: {

            animation: false

        }

    },

    xAxis: {

        type: 'time',

        splitLine: {

            show: false

        }

    },

    yAxis: {

        type: 'value',

        boundaryGap: [0, '100%'],

        splitLine: {

            show: false

        }

    },

    series: [{

        name: '模拟数据',

        type: 'line',

        showSymbol: false,

        hoverAnimation: false,

        data: data

    }]

};

setInterval(function() {

    //data.shift();

    data.push(randomData());

    myChart.setOption({

        series: [{

            data: data

        }]

    });

}, 1000);