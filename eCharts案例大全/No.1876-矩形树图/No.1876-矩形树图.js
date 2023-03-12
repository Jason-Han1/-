color = [
    "#6F3FE1",
    "#5781FD",
    "#4DB1CB",
    "#3EBD7C",
    "#F7A925",
    "#bda29a",
    "#ca8622",
    "#749f83",
    "#6e7074",
    "#546570",
    "#c4ccd3"
];


option = {
    color:color,
    tooltip:{
        formatter:'{b} {c}%'
    },
    series: [{
        type: 'treemap',
        roam:false,
        nodeClick:false,
        breadcrumb:{
            show:false
        },
        label:{
            show:true,
            position:'insideTopLeft',
            fontSize:16,
            formatter:'{b} {c}%'
        },
        itemStyle: {
            normal: {
                borderWidth: 0,
                borderColor: '#fff',
                gapWidth: 3
            }
        },
        data: [{
            name: '广东',
            value: 100,
            children: [{
                name: '制造业',
                value: 87,
                label:{
                    show:true,
                    position:'insideTopLeft',
                    formatter:'广东\n\n{b} {c}%'
                }
            }, {
                name: '农业',
                value: 10
            }, {
                name: '交通业',
                value: 2
            }, {
                name: '工业',
                value: 1
            }]
        }, {
           name: '广西',
            value: 100,
            children: [{
                name: '制造业',
                value: 87,
                label:{
                    show:true,
                    position:'insideTopLeft',
                    formatter:'广西\n\n{b} {c}%'
                }
            }, {
                name: '农业',
                value: 10
            }, {
                name: '交通业',
                value: 2
            }, {
                name: '工业',
                value: 1
            }]
        }]
    }]
};
