option = {
    backgroundColor: '#fff',
    color: ['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05'],
    grid: {
        left: 500,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#0B4A6B',
                width: 1,
                type: 'solid',
            },
        },
        axisLabel: {
            show: false,
            interval: 0,
            
            color: '#0B4A6B',
            margin: 8,
            fontSize: 16,
        },
    },
    radiusAxis: {
        min: 40,
        max: 120,
        interval: 20,
       axisLine :{
           show:false
       },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: '#0B3E5E',
            fontSize: 16,
        },
        splitLine: {
            lineStyle: {
                color: '#F1F8FF',
                width: 2,
                type: 'solid',
            },
        },
    },
    calculable: true,
    series: [
        {
            type: 'pie',
            radius: ['17%', '18%'],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55,
                },
            },
            data: [
                {
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: '#B5CCE7',
                        },
                    },
                    tooltip:{
                        show:false
                    }
                },
            ],
        },
        {
            type: 'pie',
            radius: ['90%', '92%'],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55,
                },
            },
            name: '',
            data: [
                {
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: '#F1F8FF',
                        },
                    },
                    tooltip:{
                        show:false
                    }
                },
            ],
        },
        {
            stack: 'a',
            type: 'pie',
            radius: ['20%', '80%'],
            roseType: 'area',
            zlevel: 10,
            label: {
                normal: {
                    show: true,
                    formatter: function (param) {
                        console.log(param)
                        let style=''
                        switch (param.name) {
                            case '洋河新区':
                               style = 's1'
                                break;
                             case '湖滨新区':
                               style = 's2'
                                break;
                                 case '经开区':
                               style = 's3'
                                break;
                                 case '宿城区':
                               style = 's4'
                                break;
                                 case '宿豫区':
                               style = 's5'
                                break;
                                 case '泗洪县':
                               style = 's6'
                                break;
                                 case '泗阳县':
                               style = 's7'
                                break;
                                 case '沭阳县':
                               style = 's8'
                                break;
                            default:
                                // code
                        }
                        return '{a|' + param.name + '}\n\n' + '{'+style+'|' + param.value + '亿元  ' + param.percent + '%}';
                    },
                    textStyle: {
                        fontSize: 12,
                    },
                    rich: {
                        a: {
                            color: '#666666',
                            fontSize: '21',
                        },
                        s1: {
                            color: '#F25646',
                            fontSize: '18',
                        },
                        s2: {
                            color: '#FA971E',
                            fontSize: '18',
                        },
                        s3: {
                            color: '#EDC644',
                            fontSize: '18',
                        },
                        s4: {
                            color: '#47B17D',
                            fontSize: '18',
                        },
                        s5: {
                            color: '#43C9D2',
                            fontSize: '18',
                        },
                        s6: {
                            color: '#4BCFFC',
                            fontSize: '18',
                        },
                        s7: {
                            color: '#0892E5',
                            fontSize: '18',
                        },
                        s8: {
                            color: '#0464DB',
                            fontSize: '18',
                        },
                        
                    },
                    position: 'outside',
                },
                emphasis: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        const colorList = [
                            {
                                c1: ' #FF5745',
                                c2: '#D05A4D',
                            },
                            {
                                c1: ' #FA981E',
                                c2: '#EC7322',
                            },
                            {
                                c1: '#FFD145',
                                c2: '#FFD145',
                            },
                            {
                                c1: ' #238483',
                                c2: '#55C27C',
                            },
                            {
                                c1: ' #45EAFF',
                                c2: '#40ADAC',
                            },
                            {
                                c1: '#12B3F8',
                                c2: '#7DE8FF',
                            },
                            {
                                c1: ' #0176D3',
                                c2: '#13B7FF',
                            },
                            {
                                c1: '#015BD3',
                                c2: '#138DFF',
                            },
                        ];
                        return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: colorList[params.dataIndex].c1,
                            },
                            {
                                offset: 1,
                                color: colorList[params.dataIndex].c2,
                            },
                        ]);
                    },
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 30,
                    color:'#4BCFFC'
                },
                emphasis: {
                    show: true,
                },
            },
            data: [
                {
                    value: 40,
                    name: '洋河新区',
                },
                {
                    value: 40,
                    name: '湖滨新区',
                },
                {
                    value: 45,
                    name: '经开区',
                },
                {
                    value: 50,
                    name: '宿城区',
                },
                {
                    value: 60,
                    name: '宿豫区',
                },
                {
                    value: 70,
                    name: '泗洪县',
                },
                {
                    value: 80,
                    name: '泗阳县',
                },
                {
                    value: 90,
                    name: '沭阳县',
                },
            ],
        },
    ],
};
