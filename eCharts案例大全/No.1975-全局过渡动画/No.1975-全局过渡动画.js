lineOption = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310],
            universalTransition: true,
        },
    ],
};

barOption = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
            universalTransition: true,
        },
    ],
};

pieOption = {
    title: {
        text: 'Awesome Chart',
    },
    series: [
        {
            type: 'pie',
            data: [
                {name: 'Sun', value: 220},
                {name: 'Mon', value: 182},
                {name: 'Tue', value: 191},
                {name: 'Wed', value: 234},
                {name: 'Thu', value: 290},
                {name: 'Fri', value: 330},
                {name: 'Sat', value: 310},
            ],
            universalTransition: true,
        },
    ],
};

var options = [lineOption, barOption, pieOption];

var optionIndex = 0;

option = options[optionIndex];

setInterval(function () {
    optionIndex = (optionIndex + 1) % options.length;
    myChart.setOption(options[optionIndex], {replaceMerge: ['xAxis', 'yAxis']});
}, 3000);