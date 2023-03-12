var data = {
        dataAge: [
            {name: 'a卡',value: '78707'},
            {name: 'b卡',value: '26905'},
            {name: 'c卡',value: '216790'},
            {name: 'd卡',value: '27005'},
            {name: 'e卡',value: '96904'}
        ]
    };
    option = {
        title: {
            text: '消费',
            subtext: '590050',
            x: 'center',
            y: '48%',
            textStyle: {
                fontSize: 15,
                fontWeight: 'normal',
                color: '#edba34',
            },
            itemGap:-0,
            subtextStyle: {
                fontSize: 13,

                align:"center",
                color:'#fff'
            },
        },
        series: [
            {
                color: ['#fca201', '#34abff', '#fe791a', '#7ed3f8', '#ffe358', '#5957C2'],
                type: 'pie',
                radius: ['50', '80'],
                labelLine: {
                    normal: {
                        length: 10,
                        length2: 60,
                        lineStyle: {
                            type: 'solid'
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: (params)=>{
                            // console.log(params);
                            return '{b| '+params.name+'}:' + '{c|'+params.value+'}'
                        },
                        borderWidth: 0,
                        borderRadius: 0,
                        padding: [0, -60],
                        height: 40,
                        fontSize: 10,
                        align: 'center',

                        rich: {
                            b: {
                                fontSize: 12,
                                lineHeight: 15,

                                padding: [0, 0, 0, 0]
                            },
                            c: {
                                fontSize: 10,
                                lineHeight:15,

                            }

                        }
                    }
                },
                data: data.dataAge,
            },
        ]
    };