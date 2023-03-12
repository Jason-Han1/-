const uploadedDataURL = "/asset/get/s/data-1635996507570-wKX0ZDR56.json";

const formatData = (data) => {
    return data.map((v, i) => {
        v.value = i;
        if (v.children) {
            v.children.map((vc, ic) => {
                vc.value = ic;
                if (vc.children) {
                    vc.children.map((vcc, icc) => {
                        vcc.value = icc;
                        return vcc;
                    });
                }
                return vc
            })
        }
        return v;
    })
};


$.getJSON(uploadedDataURL, (data) => {
    console.log(data);
    const [baseData, extendData] = data.children;
    const leftData = formatData([baseData]);
    const rightData = formatData([extendData]);
    const myOption = {
        backgroundColor: '#F8F8F8',
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
        },
        series: [
            {
                data: leftData,
                name: 'root',
                type: 'tree',
                symbolSize: 0,
                initialTreeDepth: -1,
                expandAndCollapse: false,
                right: '55%',
                top: 0,
                bottom: 0,
                orient: 'RL',
                label: {
                    position: 'insideLeft',
                    verticalAlign: 'middle',
                    fontSize: 14,
                    lineHeight: 20,
                    align: 'left',
                    padding: [5, 10],
                    backgroundColor: '#F8F8F8',
                    formatter: (params) => {
                        const level = params.treeAncestors.length;
                        if (level === 2) {
                            return `{root|${params.name}}`;
                        } else if (level === 3) {
                            return params.name;
                        }
                        const indexs = params.treeAncestors
                            .splice(2, level)
                            .map(v => v.value);
                        const [i, j] = indexs;
                        const { tags } = baseData.children[i].children[j];
                        if (tags) {
                            const labels = tags.map(v => `{${v.color}|${v.name}}`);
                            return `${params.name}\n${labels}`;
                        }
                        return params.name;
                    },
                    rich: {
                        root: {
                            padding: 15,
                            backgroundColor: '#FFF',
                            borderColor: '#D4A4EB',
                            borderWidth: 1,
                            borderRadius: 4,
                        },
                        success: {
                            padding: [4, 5, 2, 5],
                            color: '#fff',
                            backgroundColor: '#71CB2D',
                            borderRadius: 4,
                            verticalAlign: 'middle',
                        },
                        warning: {
                            padding: [4, 5, 2, 5],
                            color: '#fff',
                            backgroundColor: '#FFA01E',
                            borderRadius: 4,
                            verticalAlign: 'middle',
                        },
                        danger: {
                            padding: [4, 5, 2, 5],
                            color: '#fff',
                            backgroundColor: '#BF221F',
                            borderRadius: 4,
                            verticalAlign: 'middle',
                        },
                    },
                },
                leaves: {
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                    },
                },
                lineStyle: {
                    color: '#D4A4EB',
                    curveness: 0.8,
                },
                emphasis: {
                    focus: 'series',
                },
            },
            {
                data: rightData,
                type: 'tree',
                symbolSize: 0,
                initialTreeDepth: -1,
                expandAndCollapse: false,
                left: '55%',
                top: 0,
                bottom: 0,
                orient: 'LR',
                label: {
                    position: 'insideLeft',
                    verticalAlign: 'middle',
                    fontSize: 14,
                    lineHeight: 20,
                    align: 'right',
                    padding: [5, 10],
                    backgroundColor: '#F8F8F8',
                    formatter: (params) => {
                        const level = params.treeAncestors.length;
                        if (level === 2) {
                            return `{root|${params.name}}`;
                        } else if (level === 3) {
                            return params.name;
                        }
                        const indexs = params.treeAncestors
                            .splice(2, level)
                            .map(v => v.value);
                        const [i, j] = indexs;
                        const { tags } = extendData.children[i].children[j];
                        if (tags) {
                            const labels = tags.map(v => `{${v.color}|${v.name}}`);
                            return `${params.name}\n${labels}`;
                        }
                        return params.name;
                    },
                    rich: {
                        root: {
                            padding: 15,
                            backgroundColor: '#FFF',
                            borderColor: '#D4A4EB',
                            borderWidth: 1,
                            borderRadius: 4,
                        },
                        success: {
                            padding: [4, 5, 2, 5],
                            color: '#fff',
                            backgroundColor: '#71CB2D',
                            borderRadius: 4,
                            verticalAlign: 'middle',
                        },
                        warning: {
                            padding: [4, 5, 2, 5],
                            color: '#fff',
                            backgroundColor: '#FFA01E',
                            borderRadius: 4,
                            verticalAlign: 'middle',
                        },
                        danger: {
                            padding: [4, 5, 2, 5],
                            color: '#fff',
                            backgroundColor: '#BF221F',
                            borderRadius: 4,
                            verticalAlign: 'middle',
                        },
                    },
                },
                leaves: {
                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'left',
                    },
                },
                lineStyle: {
                    color: '#FFCCCC',
                    curveness: 0.8,
                },
                emphasis: {
                    focus: 'series',
                },
            },
        ],
    };
    myChart.setOption(myOption);
    myChart.on('click', function (params) {
        // 控制台打印数据的名称
        console.log(params);
    });
});
