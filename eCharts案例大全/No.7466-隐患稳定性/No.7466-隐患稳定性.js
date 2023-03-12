dataArr = [{
        value: 3600,
        name: '高易发',
    },
    {
        value: 5400,
        name: '中易发'
    },
    {
        value: 2600,
        name: '低易发',
    },
    {
        value: 4500,
        name: '其他'
    }
]
option = {
    backgroundColor: 'black',
    legend: {
        orient: 'vertical', // 'vertical'
        align: "left",
        right: '5%',
        y: '45%', // 'center' | 'bottom' | {number}
        itemGap: 5,
        itemWidth: 12,
        itemHeight: 12,
        formatter: function(val) {
            let target
            for (let i = 0; i < dataArr.length; i++) {
                if (dataArr[i].name === val) {
                    target = dataArr[i].value
                }
            }
            return val + ' ' + '{b|' + target + '}'
        },
        textStyle: {
            rich: {
                b: {
                    fontSize: 12,
                    color: '#E9D128'
                }
            },
            fontSize: 14,
            color: '#c3cad9'
        },
    },
    title: {
        text: '{a| }',
        // text: '{a1|——}{a|稳定性}{a1|——}',
        left: '60%',
        top: '50%',
        textStyle: {
            rich:{
              a:{
                  color:'#2C2C1C',
                  fontSize: '17',
                  width:'10',
                  backgroundColor: {
                    image: 'data:image/png;base64,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',
                },
                  fontWeight:'600'
              },
            //   a1:{
            //       color:'#E9EBE9',
            //       fontSize: '17',
            //   }
            }
        },
        //left设置center标题会自动水平居中
        //top设置center标题会自动垂直居中
        // backgroundColor: "#f8dd28b8", //标题背景色，默认透明，颜色可以使用 RGB 表示，比如 'rgb(128, 128, 128)' ，如果想要加上 alpha 通道，可以使用 RGBA，比如 'rgba(128, 128, 128, 0.5)'，也可以使用十六进制格式，比如 '#ccc'
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '70%',
        center: ['30%', '50%'],
        color: ['#FFB700', '#0CF9FF', '#4dd67e', 'rgba(80, 175, 221, 0.99)', '#F8DD28'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: dataArr.sort(function(a, b) {
            return a.value - b.value
        }),
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
        }
    }]
};