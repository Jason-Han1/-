var value = [987, 634, 413, 312, 123];
var temp = 0;
option = {
    title: {
        text: '流量TOP5',
    },
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} MB',
    },
    toolbox: {
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
        },
    },
    legend: {
        // show: false,
        data: ['TOP1', 'TOP2', 'TOP3', 'TOP4', 'TOP5'],
    },
    series: [
        {
            name: '流量',
            type: 'funnel',
            left: '20%',
            width: '60%',
            label: {
                show: true,
                color: '#000000',
                formatter: function () {
                    for (var i in value) {
                        console.log(value[i]);
                        if (i == temp) {
                            temp++;
                            return value[i] + ' MB';
                        }
                    }
                },
            },
            labelLine: {
                show: true,
            },
            itemStyle: {
                opacity: 1,
            },
            emphasis: {
                label: {
                    position: 'inside',
                    // formatter: '{b}Expected: {c}%',
                },
            },
            data: [
                { value: 100, name: 'TOP1', itemStyle: { color: '#4672F7' } },
                { value: 80, name: 'TOP2', itemStyle: { color: '#4C9DFF' } },
                { value: 60, name: 'TOP3', itemStyle: { color: '#36DC88' } },
                { value: 40, name: 'TOP4', itemStyle: { color: '#FBC71B' } },
                { value: 20, name: 'TOP5', itemStyle: { color: '#F9A646' } },
            ],
        },
    ],
};
