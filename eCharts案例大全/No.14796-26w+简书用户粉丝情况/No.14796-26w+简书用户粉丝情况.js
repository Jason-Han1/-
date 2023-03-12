option = {
    title: {
        text: '26w+简书用户粉丝情况',
        subtext: '金字塔图和饼图'
        // 爬取简书26万+用户信息：数据可视化
        // https://zhuanlan.zhihu.com/p/29589608
    },
    tooltip: {
        trigger: 'item',
        //formatter: "{a} <br/>{b} : {c}%"
        formatter: "{a} <br/>{b}"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['10w+','1w-10w','1k-1w','100-1k','10-100','2-10','1','0']
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '15%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min:0,
            max: 105494,
            minSize: '0%',
            maxSize: '100%',
            sort: 'none',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 5, name: '10w+：5'},
                {value: 369, name: '1w-10w：369'},
                {value: 1905, name: '1k-1w：1905'},
                {value: 12745, name: '100-1k：12745'},
                {value: 63189, name: '10-100：63189'},
                {value: 105494, name: '2-10：105494'},
                {value: 76773 , name: '1：76774'}  ,
                {value: 784 , name: '0：784'}        
            ]
        },
        {
            name: '占比',
            type: 'pie',
            radius : '20%',
            center: ['20%', '30%'],
            //#总：261277
            data:[
                {value: 5, name: '10w+：0.002%'},
                {value: 369, name: '1w-10w：0.14%'},
                {value: 1905, name: '1k-1w：0.73%'},
                {value: 12745, name: '100-1k：4.88%'},
                {value: 63189, name: '10-100：24.18%'},
                {value: 105494, name: '2-10：40.38%'},
                {value: 76773 , name: '1：29.38%'}  ,
                {value: 784 , name: '0：0.30%'}  
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
    ]
};

