//var cellphoneBrand = ['0-20', '20-35', '35-50', '50-60', '65+'];
var cellphoneBrand = ['0-20', '20-35', '35-50', '50-60', '65+'];
//var cellphoneBrand2 = ['', '', '', '', '']

var data1 = [];
for (var i = 0; i < 5; ++i) {
    data1.push(
        {
      //  name: cellphoneBrand[i],
       name: cellphoneBrand[i],
        value:1,
           label: {
                position: 'inside',
                rotate: 'tangential'
            }
     
    });
}


option = {
    title: {
        text: '已卖车辆车主年龄分布',
       // subtext: 'data from IDC',
        link: ''
    },
    tooltip: {
        show: false
    },
    legend: {
        //type:'scroll',
        bottom: 20,
        x: 'center',
        data: ['GX6', 'NL-3A', 'FE-3AC', 'FE-5A', 'FE-7A', 'KC-1B']
    },

    series: [{
        type: 'pie',
        radius: ['6%', '20%'],
        roseType: 'area',
        zlevel: 2,
        tooltip: {
            show: true,
            formatter: '{b}: {c}万'
        },

        label: {
            show: true,
            formatter: '{b}\n{c}万'
        },

        data: [{
                value:0.0477,
                name: 'GX6'
            },
            {
                value: 0.2441,
                name: 'NL-3A'
            },
            {
                value:0.1275,
                name: 'FE-3AC'
            },
            {
                value: 0.4243,
                name: 'FE-5A'
            },
            {
                value: 0.33,
                name: 'FE-7A'
            },
            {
                value: 0.0719,
                name: 'KC-1B'
            },
            {
                value: 0,
                name: 'KC-2HB'
            }
        ]
    }, {
        type: 'sunburst',
        nodeClick: false,
        levels: [{}, {
            r0: '48%',
            r: '60%',
            label: {},
            itemStyle: {
                //shadowBlur: 2,
                borderWidth: 6,
                borderColor: '#42ced1',
                opacity: 0.6
            }
        }, {
            r0: '60%',
            r: '100%',
            label: {},
            itemStyle: {
                borderWidth: 6,
                borderColor: '#42b0d1',
                opacity: 0.4
            }
        }, {
            r0: '70%',
            r: '76%',
            itemStyle: {
                borderWidth: 6,
                borderColor: '#22bfb1',
                opacity: 0.2
            }
        }],
        data: data1,

    }]
};