// data数据扇形从小到大显示，需要排序：
// data:pieData.sort(function (a, b) { return a.value - b.value; }),

option = {
    legend:{
        show:false,
        right:0,
        top:65,
        icon:"circle",
        textStyle:{
            color:"#7d98b3"
        },
        orient:"vertical"
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
        {

            name:'企业经营画像',
            type:'pie',
            radius : '70%',
            center: ['50%', '50%'],
            data:[
                {
                    value:8360,
                    name:'基本停工',
                    itemStyle:{
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#4ADB92' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                
                
                },
                {
                    value:12041,
                    name:'大幅增产',
                    itemStyle:{
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#32E4CA' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                
                },
                {
                    value:5204,
                    name:'生产稳定',
                    itemStyle:{
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#44C0F1' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                
                },
                {
                    value:12546,
                    name:'较快增长',
                    itemStyle:{
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#44A9F1' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                
                },
                {
                    value:9062,
                    name:'大幅提升',
                    itemStyle:{
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#ffffff' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#3D8BF0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                
                }
            ],
            roseType: 'radius',
            label:{
                show:true,
                fontSize:14,
                color:"#4D4D4D",
                formatter:"{b}\n\n{c}",
                fontWeight:"bold"
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
