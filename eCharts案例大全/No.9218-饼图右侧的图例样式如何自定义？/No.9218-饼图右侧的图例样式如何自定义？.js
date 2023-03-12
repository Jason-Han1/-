var data = [{
    "value": 26,
    "name": "论 坛"
}, {
    "value": 16.7,
    "name": "博 览 会"
}, {
    "value": 12.4,
    "name": "研 讨 会"
}];

option = {
    backgroundColor: "#000",
    title: {
        text: '“一带一路”沿线省区市活动参与',
        left: '50%',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
            fontFamily: '宋体'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        icon: 'circle',
        itemGap: 60,
        right: 60,
        textStyle:  {
            color: "#fff",
            padding: [0, -5], // 控制图例和文字的距离
            fontWeight: 'normal',
            fontFamily: '宋体',
            rich: {
                a: {
                    width: 150,
                    align: 'left',
                    left: -5
                },
                b: {
                    width: 20,
                    align: 'right'
                },
            },
        },
        formatter: function (name) {
          let index = 0;
          var datas = option.series[0].data;
          datas.forEach(function (v, i) {
            if (v.name == name) {
              index = i;
            }
          })
          return [`{a| ${name}}`, `{b| ${datas[index].value}% }`].join('');
        },
    },
    series: [

        {
            name: '',
            type: 'pie',
            radius: ['40%', '55%'],
            data: data,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    // position: 'inner',
                    // formatter: '{d}%',
                    show: false,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 14
                    }
                }
            },
        }
    ]
};