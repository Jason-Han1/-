var downloadJson = {
  "女工": 46,
  "男工": 54
};
var themeJson = {
  "临工": 37,
  "常工": 63
};
option = {
    backgroundColor: '#fff',
    color: ['#F78ED8', '#36E0E5', '#62A8FF', '#FFE641'],
    tooltip: {
        formatter: function(param) {
            return param.data.name + "：" + param.value + '%';
        }
    },
    grid: [{
        top: 50,
        width: '50%',
        bottom: 0,
        left: 10,
        containLabel: true
    }, {
        top: 50,
        width: '50%',
        bottom: 0,
        left: 10,
        containLabel: true
    }],
    series: [{
        type: 'pie',
        radius: [0, '60%'],
        center: ['27%', '45%'],
        data: Object.keys(downloadJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
            }
        }),
            label: {
                normal: {
                    show: false,
                }
            }
    }, {
        type: 'pie',
        radius: [0, '60%'],
        center: ['73%', '45%'],
        data: Object.keys(themeJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: themeJson[key]
            };
        }),
            label: {
                normal: {
                    show: false,
                }
            }
    }]
};