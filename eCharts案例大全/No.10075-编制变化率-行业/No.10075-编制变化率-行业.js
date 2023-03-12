var cellphone = ['增加5%以上', '基本持平', '减少5%以上'];
var cellPhone1 = ['增加5%以上', '基本持平', '减少5%以上'];
var cellphoneTotle = cellphone.concat(cellPhone1);

var data1 = [];
for (var i = 0; i < 8; ++i) {
    data1.push({
        name: cellphone[i],
        value: 2,
        label: {
            position: 'inside',
            rotate: 'tangential'
        },
        children: [{
            name: cellPhone1[i],
            value: 2,
            label: {
                position: 'inside',
                rotate: 'tangential',
            },
            children: [{
                name: cellPhone1[i],
                value: 2,
                label: {
                    position: 'inside',
                    rotate: 'tangential',
                }
            }]
        }]

    });
}


option = {
    title: {
        text: '编制变化率-行业',
    },
    tooltip: {
        show: false
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        top: '20%',
        left: '0.5%',
        data: cellphoneTotle
    },
    radar: {
        shape: 'circle',
        scale: true,
        splitNumber: 5,
        indicator: [{
                text: '0',
            },
            {
                text: '87.5%',
            },{
                text: '75%',
            }
            ,{
                text: '62.5%',
            },{
                text: '50%',
            },{
                text: '37.5%',
            },{
                text: '25%',
            },{
                text: '12.5%',
            }
        ],
        center: ['50%', '50%'],
        radius: '88%'
    },
  

    series: [{
        type: 'radar',
        zlevel: 2,
        tooltip:{
            show:true
        },
        lineStyle:{
            width:1,
            opacity:1
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: 'rgba(0,0,0,0)', // 图表背景的颜色
            },
        },
       
        data: [
        ]
    }, {
        type: 'sunburst',
        center: ['50%', '50%'],
        nodeClick: false,
        levels: [{}, {
            r0: '16%',
            r: '25%',
            label: {},
            itemStyle: {
                borderWidth: 1,
                borderColor: '#666',
            }
        }, {
            r0: '35%',
            r: '53%',
            label: {},
            itemStyle: {
                borderWidth: 1,
                borderColor: '#666',
                opacity: 0.8
            }
        }, {
            r0: '70%',
            r: '88%',

            itemStyle: {
                borderWidth: 1,
                borderColor: '#666',
                opacity: 0.6
            }
        }],
        data: data1,

    }]
};