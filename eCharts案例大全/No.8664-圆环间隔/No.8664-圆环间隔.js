var scaleData = [

    {
        "name": "放心类",
        "value": "200"
    },
    {
        "name": "关注类",
        "value": "100"
    },
    {
        "name": "严管类",
        "value": "60"
    },
    {
        "name": "禁租类",
        "value": "50"
    }
]
var averge = 0;
scaleData.forEach(function(v, i) {
    averge += v.value * 1;
})

var data = [];
var leader = [];
var color = ['#D6B92A', '#E246F1', '#FE671D', '#5185DC'];

for (var i = 0; i < scaleData.length; i++) {
    leader.push(scaleData[i].name)
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                color: color[i],
                borderWidth: 8,
                shadowBlur: 8,
                borderColor: color[i],
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 15,
                length2: 20,
                lineStyle: {
                    width: 0,
                    color: '#d3d3d3'
                },
                align: 'right'
            },
        },
    }, {
        value: averge / 100,
        name: '',
        itemStyle: {
            normal: {

                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['55%', '57%'],
    center: ['50%', '35%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,

            },

        }
    },
    data: data
}];
option = {
    backgroundColor:'#000',
    tooltip: {
        show: false
    },
    title: {
        text: '出租屋管理',
        left: 'center',
        top: '32%', //top待调整
        textStyle: {
            color: '#fff',
            fontSize: 40,
            fontWeight: '0',
            fontFamily: 'DINAlternate-Bold',
        },
        itemGap: -4 //主副标题间距
    },
    legend: [{
        orient: 'horizontal', //horizontal vertical
        "left": "center",
        "textStyle": {
            "color": "#fff",
            "fontSize": 24
        },
        // "icon": "circle",
        "bottom": "0",
        "padding": [30, 60],
        "itemGap": 30,
        width: '60%',
        height: '50px',
        data: leader
        // "bottom": "5%",
        // "itemGap": 40,
    }],
    toolbox: {
        show: false
    },
    series: seriesObj

}