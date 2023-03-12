option = {
    color:['#50fca8','#2196f3','#f53c61'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        orient:'vertical',
        right:'10%',
        top:'30%',
        itemGap: 20,
        itemWidth:10,
        itemHeight:10,
        textStyle:{
            color:'#999999',
            fontSize: 14,
        },
        formatter: function(name) {
            var oa = option.series[0].data;
//            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name === oa[i].name) {
                    return '   '+ name + '     ' + oa[i].value;
                }
            }
        },
        data: [
            {name:'太原中心医院', icon:'circle'},
            {name:'太原武警医院', icon:'circle'},
            {name:'太原中北大',icon:'circle'}]
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '60%',
            height:'50%',
            min: 0,
            max: 500,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            label: {
                normal: {
                    show: false,
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
                {value: 456, name: '太原中心医院'},
                {value: 365, name: '太原武警医院'},
                {value: 231, name: '太原中北大'}
            ]
        }
    ]
};
