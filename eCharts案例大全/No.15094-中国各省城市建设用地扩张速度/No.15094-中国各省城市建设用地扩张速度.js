option = {
    //backgroundColor: '#404a59',
    title: {
        top:'2%',
        text: '中国各省城市建设用地扩张速度',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
                var value = (params.value);
                //value = value.toFixed(5);toFixed(3)控制小数位数      
                value = value +' 平方千米/年';
                //var abc=(params.abc);
                return  params.name + ' : ' + value;
            }
    },
    /*legend: {
        orient: 'vertical',
        bottom:'15%',
        left: 'left',
        data: ['扩张速度']
    },*/
    visualMap: {
        show:true,
        type: 'piecewise', //分段型。
        splitNumber: 5,
        inverse: true,
        pieces: [{
            min: 0,
            max: 10,
            color: '#ebdba4'
        }, {
            min: 10,
            max: 30,
            color: '#f2d643'
        }, {
            min: 30,
            max: 50,
            color: '#ffb248'
        }, {
            min: 50,
            max: 100,
            color: '#eb8146'
        }, {
            min: 100,
            color: '#d95850'
        },],
        left: 'left',
        top: 'bottom',
        textStyle: {
            color: '#000'
        },
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: '扩张速度',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true,
                    areaColor: '#FFFFFF'
                }
            },
            data: [{ name: "上海", value: 102.76},
                    { name: "甘肃", value: 14.29},
                    { name: "贵州", value: 6.12},
                    { name: "海南", value: 3.4},
                    { name: "安徽", value: 92.96},
                    { name: "江苏", value: 239.27},
                    { name: "浙江", value: 214.79},
                    { name: "新疆", value: 37.38},
                    { name: "青海", value: 2.31},
                    { name: "西藏", value: 2.27},
                    { name: "宁夏", value: 4.88},
                    { name: "内蒙古", value: 37.38},
                    { name: "广东", value: 77.64},
                    { name: "福建", value: 62.54},
                    { name: "广西", value: 3.36},
                    { name: "河南", value: 202.06},
                    { name: "湖北", value: 40.31},
                    { name: "湖南", value: 11.19},
                    { name: "江西", value: 37.55},
                    { name: "北京", value: 57.34},
                    { name: "吉林", value: 20.89},
                    { name: "辽宁", value: 67.42},
                    { name: "黑龙江", value: 21.21},
                    { name: "天津", value: 48.61},
                    { name: "山东", value: 326.43},
                    { name: "山西", value: 47.75},
                    { name: "河北", value: 114.15},
                    { name: "陕西", value: 55.26},
                    { name: "四川", value: 48.64},
                    { name: "重庆", value: 16.1},
                    { name: "云南", value: 21.64},
                ]
        }, 
    ]
};