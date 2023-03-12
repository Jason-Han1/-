let datas = [{
        'name': '菜菜',
      
        'amount': 274600,
        'orderCount': 1670,
    },
    {
        'name': '佛生',
    
        'amount': 147477,
        'orderCount': 436,
    },
    {
        'name': '我',
     
        'amount': 15997,
        'orderCount': 72,
    },
    {
        'name': 'Jiayin',
      
        'amount': 65796,
        'orderCount': 544,
    },
    {
        'name': '明坤',
       
        'amount': 310364,
        'orderCount': 979,
    },
    {
        'name': '首席',
       
        'amount': 8305,
        'orderCount': 85,
    },
    {
        'name': '小楠子+',
      
        'amount': 210284,
        'orderCount': 2224,
    },
    {
        'name': '康康',
       
        'amount': 41789,
        'orderCount': 237,
    },
    {
        'name': '书记',
     
        'amount': 36961,
        'orderCount': 452,
    },
    {
        'name': '书记夫人',
      
        'amount': 68088,
        'orderCount': 647,
    },
    {
        'name': 'vv',
      
        'amount': 72896,
        'orderCount': 1743,
    },
    {
        'name': 'qq',
        
        'amount': 52276,
        'orderCount': 627,
    },
];

let min = 1;
let max = 300000;
let packedDatas = packDatas(datas);

option = {
    backgroundColor: '#efefef',
    title: {
        text: '机构成果',
        left: 'center',
        top: 0,
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                value[2] +
                '</div>' +
                '发文量：' + value[0] + '<br>' +
                '被引量：' + value[1] + '<br>' +
                '篇均被引：' + value[3].toFixed(2) + '<br>';
        }
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '发文量',
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '被引量',
    },

    visualMap: [{
        show: false,
        min: min,
        max: max,
        //取数据的哪一列映射到视觉系统
        dimension: 1,
        inRange: {
            color: [
                '#f4a7a8',
                '#ee2021',
            ],
        }
    }, ],

    series: [{
        symbolSize: function(data) {
            //控制圆的大小，根据最大的圆进行手动调整，是*3还是*5
            return data[1] / (data[0] * 3);
        },
        label: {
            show: true,
            position: 'top',
            formatter: function(param) {
                return param.data[2];
            },
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
            },
        },
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'solid',
                        color: '#000'
                    },
                    label: {
                        show: true,
                        position: 'left'
                    }
                }
            },
            large: true,
            effect: {
                show: true,
                loop: true,
                period: 0,
                scaleSize: 2,
                color: null,
                shadowColor: null,
                shadowBlur: null
            },
        },
        data: packedDatas,
        type: 'scatter',
    }, ]
};

function packDatas(datas) {

    let packedDatas = datas.map((data) => {
        let name = data['name'];
      
      
        let dispathCount = data['orderCount'];
        let refs = data['amount'];
        let avt = refs / dispathCount;
      
 

        return [dispathCount, refs, name, avt ];
    });

    return packedDatas;
}