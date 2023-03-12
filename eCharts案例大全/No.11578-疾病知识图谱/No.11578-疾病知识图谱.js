option = {
    title: {
        text: ''
    },
    legend: {
        show: false,
        data: ['检查','症状','常用药','就诊科室',
        '手术治疗','可能的疾病','科室','医生']
    },
    series: {
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 800,
            edgeLength: 160,
            layoutAnimation: false
        },
        label: {
            show: true,
            fontSize: 14,
            formatter: function(params){
                // 分割字符串, 4个一组
                var re = /.{4}/g, result = [], index = 0;
                
                (function recursion(){
                    var temp = re.exec(params.name);
                    if(temp){
                        result.push(temp[0]);
                        index = temp.index;
                        recursion();
                    }else {
                        if(params.name.slice(index + 4).length > 0){
                            result.push(params.name.slice(index + 4));
                        }
                    }
                })();
                return result.length > 0 ? result.join('\n') : params.name;
            }
        },
        symbolSize: 70,
        roam: true,
        draggable: true,
        // edgeSymbol: ['none', 'arrow'],
        edgeLabel: {
            show: true,
            color: '#eee',
            backgroundColor: '#333',
            borderRadius: 4,
            padding: 4,
            formatter: function(params){
                return params.data.label;
            }
        },
        emphasis: {
            edgeLabel: {
                color: '#fff'
            }
        },
        categories: [
            {name: '检查'},
            {name: '症状'},
            {name: '常用药'},
            {name: '就诊科室'},
            {name: '手术治疗'},
            {name: '可能的疾病'},
            {name: '科室'},
            {name: '医生'},
        ],
        nodes: [
            {name: '胰腺炎'},
            {name: 'CT', category: 0},
            {name: '腹痛', category: 1},
            {name: '消化不良', category: 2},
            {name: '清胰利胆颗粒', category: 3},
            {name: '消化内科', category: 4},
            {name: '北京大学第三医院', category: 5},
            {name: '黄永辉', category: 6},
            {name: '急性坏死性胰腺1炎1', category: 7}
        ],
        edges: [
            {source: '胰腺炎', target: 'CT', label: '检查'},
            {source: '胰腺炎', target: '腹痛', label: '症状'},
            {source: '胰腺炎', target: '清胰利胆颗粒', label: '常用药'},
            {source: '胰腺炎', target: '消化内科', label: '就诊科室'},
            {source: '胰腺炎', target: '急性坏死性胰腺1炎1', label: '手术治疗'},
            {source: '消化不良', target: '腹痛', label: '可能的疾病'},
            {source: '北京大学第三医院', target: '消化内科', label: '科室'},
            {source: '黄永辉', target: '消化内科', label: '医生'},
        ]
    }
};