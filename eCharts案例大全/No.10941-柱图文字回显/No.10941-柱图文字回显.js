var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};
var bw = "";

var labelOption = {
    normal: {
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: function(params){
            return params.name
        },
        fontSize: 0,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        // data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            // mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['001', '002', '003', '004', '005', '006', '007', '008']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '001',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            itemStyle:{
                        color:'#003366'
                    },
            label: labelOption,
            data: [
                    {name:'社区办',value:538},
                    {name:'宣传部',value:5},
                    {name:'北京亦庄恒达人力资源服务中心',value:3},
                    {name:'拆迁办',value:15},
                    {name:'教科文体办',value:15},
                    {name:'党建办',value:4},
                    {name:'安全科',value:12},
                    {name:'工商所',value:9}
                    
                    
            ]
        },
        
        {
            name: '002',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            itemStyle:{
                        color:"green"
                    },
            label: labelOption,
            data: [
                    {name:'民政',value:62},
                    null,
                    {name:'劳动监察',value:34},
                    {name:'拆迁办',value:15},
                    {name:'食药所',value:15},
                    null,
                    {name:'城管执法队',value:116},
                    {name:'经发办',value:19}
            ]
        },
        {
            name: '003',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            itemStyle:{
                        color:"orange"
                    },
            label: labelOption,
            data: [
                    {name:'残联',value:6},
                    null,
                    {name:'社保所',value:3},
                    null,
                    {name:'镇教委',value:36},
                    null,
                    {name:'规划科',value:102},
                    {name:'经管站',value:15}
            ]
        },
        {
            name: '004',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            label: labelOption,
            data: [
                    null,
                    null,
                    {name:'水务站',value:1},
                    null,
                    {name:'办公室',value:2},
                    null,
                    {name:'环整办',value:43},
                    {name:'亦庄物业',value:3}
                    
            ]
        },
        {
            name: '005',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            label: labelOption,
            data: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    {name:'流管办',value:58},
                    null
                    
            ]
        },
        {
            name: '006',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            label: labelOption,
            data: [
                   null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    {name:'司法所',value:3},
                    null
            ]
        },
        {
            name: '007',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            label: labelOption,
            data: [
                   null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    {name:'综治办',value:65},
                    null
            ]
        },
        {
            name: '008',
            type: 'bar',
            barGap: 0,
            barWidth:bw,
            label: labelOption,
            data: [
                   null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
            ]
        },
    ]
};