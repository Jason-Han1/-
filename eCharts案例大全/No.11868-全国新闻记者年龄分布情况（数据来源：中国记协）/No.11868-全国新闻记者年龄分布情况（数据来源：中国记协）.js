option = {
    backgroundColor: '#2c343c',

    title: {
        text: '全国新闻记者年龄分布情况（数据来源：中国记协）',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 0,
        max: 150000,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'年龄',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:40517, name:'50岁以上：17.50%（共40517人）'},
                {value:79529, name:'40至50岁：38.41%（共79529人）'},
                {value:88936, name:'30至40岁：38.41%（共88936人）'},
                {value:22582, name:'30岁以下：9.75%（共22582人）'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};