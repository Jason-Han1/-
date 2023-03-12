var mydata = [{
        name: '河北',
        value: 4
    },
    {
        name: '山东',
        value: 3
    },
    {
        name: '河南',
        value: 3
    },
    {
        name: '重庆',
        value: 2
    },
    {
        name: '广西',
        value: 1
    },
    {
        name: '四川',
        value: 1
    },
    {
        name: '海南',
        value: 1
    },
    {
        name: '北京',
        value: 4
    },
    {
        name: '天津',
        value: 4
    },
    {
        name: '上海',
        value: 3
    },
    {
        name: '江苏',
        value: 3
    },
    {
        name: '浙江',
        value: 2
    },
    {
        name: '福建',
        value: 2
    },
    {
        name: '安徽',
        value: 3
    },
    {
        name: '江西',
        value: 2
    },
    {
        name: '湖北',
        value: 3
    },
    {
        name: '湖南',
        value: 2
    },
    {
        name: '广东',
        value: 1
    },
    {
        name: '辽宁',
        value: 4
    },
    {
        name: '吉林',
        value: 4
    },
    {
        name: '黑龙江',
        value: 4
    },
    {
        name: '内蒙古',
        value: 4
    },
    {
        name: '云南',
        value: 1
    },
    {
        name: '贵州',
        value: 1
    },
    {
        name: '山西',
        value: 5
    },
    {
        name: '陕西',
        value: 5
    },
    {
        name: '甘肃',
        value: 5
    },
    {
        name: '新疆',
        value: 5
    },
    {
        name: '西藏',
        value: 1
    },
    {
        name: '青海',
        value: 5
    },
    {
        name: '宁夏',
        value: 5
    },

];

option = {
    backgroundColor: '#ffff',
    title: {
        text: '',
        subtext: '',
        x: 'center',
        y: '5%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}',
    },
    roam: true,
    dataRange: {
        min: 0,
        max: 5,
        x: '5%',
        y: '5%',

        splitList: [{
                start: 6,
                end: 7,
                label: '总部',
                color: '#FF0000'



            }, {
                start: 4.5,
                end: 5.5,
                label: '西北',
                color: '#fe5722'



            },
            {
                start: 3.5,
                end: 4.5,
                label: '东北',
                color: '#8cc24a'
            },
            {
                start: 2.5,
                end: 3.5,
                label: '中部',
                color: '#2196f3'
            },

            {
                start: 1.5,
                end: 2.5,
                label: '东南',
                color: '#e71e62'


            }, {
                start: 0.5,
                end: 1.5,
                label: '西南',
                color: '#fe9903'
            },





        ],
        color: ['white'],

    },

    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            dataZoom: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [{
        name: '大区',
        type: 'map',
        mapType: 'china',
        roam: false,
        layoutCenter: ['50%', '50%'],
        layoutSize: '130%',
        itemStyle: {
            normal: {
                borderColor: 'black',
                label: {
                    show: true,
                    color: 'black',
                    fontSize: 11,
                    position: 'inside',
                    // textBorderWidth: 1,
                    // textShadowColor: 'black',
                    // textShadowBlur: '2',
                    formatter: param => {
                        console.log(param)
                        if (param.name != '香港' && param.name != '澳门' && param.name != '台湾' && param.name != '南海诸岛') {
                            return param.name
                        } else {
                            return ''
                        }
                    }

                }
            },


        },

        data: mydata,
    }, ]
};