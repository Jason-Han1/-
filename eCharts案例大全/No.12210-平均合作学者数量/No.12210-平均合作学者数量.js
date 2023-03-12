option = {
    title : {
        text: 'Distribution of collaborators',
        subtext: 'active scholars in AMiner',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['h-index:10-19','h-index:20-49','h-index:50-99','h-index:100-199','h-index:>=200']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        // {
        //     name:'半径模式',
        //     type:'pie',
        //     radius : [20, 110],
        //     center : ['75%', '50%'],
        //     roseType : 'radius',
        //     label: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: true
        //         }
        //     },
        //     lableLine: {
        //         normal: {
        //             show: false
        //         },
        //         emphasis: {
        //             show: true
        //         }
        //     },
        //     data:[
        //         {value:10, name:'10-19'},
        //         {value:5, name:'20-49'},
        //         {value:15, name:'rose3'},
        //         {value:25, name:'rose4'},
        //         {value:20, name:'rose5'},
        //         {value:35, name:'rose6'},
        //         {value:30, name:'rose7'},
        //         {value:40, name:'rose8'}
        //     ]
        // },
        {
            name:'',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            label: {
                normal: {
                    formatter: '{b|{b}} \n  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'left'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        // hr: {
                        //     borderColor: '#aaa',
                        //     width: '100%',
                        //     borderWidth: 0.5,
                        //     height: 0
                        // },
                        b: {
                            fontSize: 16,
                            lineHeight: 30
                        },
                        per: {
                            align: 'left',
                            color: '#eee',
                            fontSize: 16,
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2,
                        }
                    }
                }
            },
            data:[
                {value:30460, name:'h-index:10-19'},
                {value:103411, name:'h-index:20-49'},
                {value:134082, name:'h-index:50-99'},
                {value:125699, name:'h-index:100-199'},
                {value:104595, name:'h-index:>=200'},
            ]
        }
    ]
};
