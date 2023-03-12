var ancost = parseInt(200) * 100 / parseInt(600);
var data = [{
        value: 200,
        name: ''
    },
    {
        value: 600,
        name: ''
    },
]
//这里才是关键整去掉下半部分的关键，
//计算data中value的总和
var a = 0;
for (var i = 0; i < data.length; i++) {
    a += data[i].value;
}
//添加新的元素到data中，并设置其颜色样式为白色
data.push({
    value: a,
    name: '__other',
    itemStyle: {
        normal: {
            color: 'rgba(0,0,0,0)'
        }
    }
});


option = {
    title: [
        {
            text: "30%",
            right: '40%',
            bottom: '40%',
            textStyle: {
                color: '#ef4545',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'Times New Roman',
                fontSize: 100
            }
        }, {
            text: "0%",
            left: '10%',
            bottom: '25%',
            textStyle: {
                color: 'black',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'sans-serif',
                fontSize: 20
            }
        },
        {
            text: "100%",
            right: '10%',
            bottom: '25%',
            textStyle: {
                color: 'black',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'sans-serif',
                fontSize: 20
            }
        },
        {
            text: "比例图",
            right: '43%',
            bottom: '30%',
            textStyle: {
                color: 'black',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'Times New Roman',
                fontSize: 40
            }
        }
    ],
    series: [{
        // name:'访问来源',
        type: 'pie',
        hoverAnimation: false,
        radius: ['75%', '120%'],
        center: ['50%', '68%'],
        startAngle: 180,
        // avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },

            emphasis: {
                show: false,
                textStyle: {}
            }
        },
        color: ['#33a8ff', '#8dd4ff'],
        data: data
    }]
};
myChart.setOption(option, true);