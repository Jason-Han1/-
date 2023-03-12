option = {
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                show: true,
                formatter:function(params){
                    console.log(params)
                    if(params.data.value<50){
                        return ''
                    }else{
                        return params.data.name + '时:'+params.data.value + '次'
                    }
                }
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data:[
              {
                "name": "10",
                "value": 245
              },
              {
                "name": "9",
                "value": 218
              },
              {
                "name": "11",
                "value": 180
              },
              {
                "name": "15",
                "value": 163
              },
              {
                "name": "16",
                "value": 150
              },
              {
                "name": "13",
                "value": 75,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "17",
                "value": 68,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "12",
                "value": 51,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "8",
                "value": 47,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "7",
                "value": 21,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "22",
                "value": 15,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "18",
                "value": 9,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "23",
                "value": 3,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "19",
                "value": 3,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "20",
                "value": 3,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "21",
                "value": 2,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              },
              {
                "name": "6",
                "value": 1,
                label:{
                    show:false,
                },
                labelLine:{
                    show:false
                }
              }
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
                {value: 10, name: 'rose1'},
                {value: 5, name: 'rose2'},
                {value: 15, name: 'rose3'},
                {value: 25, name: 'rose4'},
                {value: 20, name: 'rose5'},
                {value: 35, name: 'rose6'},
                {value: 30, name: 'rose7'},
                {value: 40, name: 'rose8'}
            ]
        }
    ]
};
