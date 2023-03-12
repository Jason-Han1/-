option = {
    backgroundColor:'#fff',
    color:['#2da9ff','#7cc5ff','#bfe3ff','#ffd5e0','#ffe3bb','#ffc573'],
    series: [
        {
            zlevel:1,
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 120,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
                show: true,
                position: 'right',
                width:'200px',
                align:'right',
                formatter:function(params){
                    return params.data.name +':'+ params.data.reaVal+'%';
                }
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 60, name: '达安基因',reaVal:'34.34'},
                {value: 40, name: '上海之江',reaVal:'34.34'},
                {value: 20, name: '硕士',reaVal:'34.34'},
                {value: 80, name: '其它',reaVal:'34.34'},
                {value: 100, name: '思路迪',reaVal:'34.34'},
                {value: 120, name: '迈克',reaVal:'34.34'}
            ]
        },
        // {
        //     name:'漏斗图',
        //     type:'funnel',
        //     left: '10%',
        //     top: 60,
        //     //x2: 80,
        //     bottom: 60,
        //     width: '80%',
        //     // height: {totalHeight} - y - y2,
        //     min: 0,
        //     max: 120,
        //     minSize: '0%',
        //     maxSize: '100%',
        //     sort: 'ascending',
        //     gap: 2,
        //     label: {
        //         show: true,
        //         position: 'right',
        //         width:'200px',
        //         // show:false
        //     },
        //     labelLine: {
        //         show:false,
        //         length: 10,
        //         lineStyle: {
        //             width: 1,
        //             type: 'solid'
        //         }
        //     },
        //     itemStyle: {
        //         color:'transparent'
        //     },
        //     emphasis: {
        //         label: {
        //             fontSize: 20
        //         }
        //     },
        //     data: [
        //         {value: 120, name: '达安基因'},
        //         {value: 120, name: '上海之江'},
        //         {value: 120, name: '硕士'},
        //         {value: 120, name: '其它'},
        //         {value: 120, name: '思路迪'},
        //         {value: 120, name: '迈克'}
        //     ]
        // }
    ]
};
