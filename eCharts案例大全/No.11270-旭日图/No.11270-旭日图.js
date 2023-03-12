var data = [{
    name: '资源环境承载能力评价',
    itemStyle: {
        color: '#c23531'
    },
    children: [{
        name: '土地资源评价',
        itemStyle: {
            color: '#2f4554'
        },
        children: [{
            name: '土壤条件评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '坡度地形评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }]
    }, {
        name: '水资源评价',
        itemStyle: {
            color: '#61a0a8'
        },
        children: [{
            name: '降水量评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '水资源总量评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }]
    }, {
        name: '海洋资源评价',
        itemStyle: {
            color: '#c4ccd3'
        },
        children: [{
            name: '海洋牧场条件评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '港口资源条件评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }]
    }, {
        name: '环境评价',
        itemStyle: {
            color: '#bda29a'
        },
        children: [{
            name: '光热条件评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '土壤环境容量评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '海洋牧场环境评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        },{
            name: '大气环境容量评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }, {
            name: '水环境容量评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }]
    }, {
        name: '生态评价',
        itemStyle: {
            color: '#749f83'
        },
        children: [{
            name: '生物多样性维护重要性',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '水源涵养重要性',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        },{
            name: '水土保持重要性',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '防风固沙重要性',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '海岸防护功能重要性',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        },{
            name: '水土流失敏感性',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }, {
            name: '沙漠化敏感性',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        },{
            name: '石漠化敏感性',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        },{
            name: '海岸侵蚀敏感性',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }, {
            name: '盐渍化敏感性',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }]
    }, {
        name: '灾害评价',
        itemStyle: {
            color: '#91c7ae'
        },
        children: [{
            name: '气象灾害风险评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '海洋灾害风险评价',
            value: 1,
            itemStyle: {
                color: '#ca8622'
            }
        }, {
            name: '地震危险性评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }, {
            name: '地质灾害易发性评价',
            value: 1,
            itemStyle: {
                color: '#6e7074'
            }
        }]
    }]
}, {
    name: '国土空间开发适宜性评价',
    itemStyle: {
        color: '#d48265'
    },
    children: [{
        name: '生态保护重要性评价',
        value: 1,
        itemStyle: {
            color: '#dd4c51'
        }
    }, {
        name: '农业生产适宜性评价',
        value: 1,
        itemStyle: {
            color: '#c94a44'
        }
    }, {
        name: '城镇建设适宜性评价',
        value: 1,
        itemStyle: {
            color: '#dd4c51'
        }
    }]
}];

option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {show :true}
        }
    },
    backgroundColor: '#fff',
    series: {
        type: 'sunburst',
        startAngle: 73,
        data: data,
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
            r0: '0%',
            r: '28%',
            itemStyle: {
                borderWidth: 2
            },
            label: {
                rotate: 'tangential',
                fontSize: 18,
                fontWeight: 'bold'
            }
        }, {
            r0: '30%',
            r: '60%',
            label: {
                align: 'center',
                fontSize: 18,
                fontWeight: 'bold'
            }
        }, {
            r0: '60%',
            r: '62%',
            label: {
                position: 'outside',
                padding: 3,
                fontSize: 16,
                fontWeight: 'bold',
                textBorderWidth: 4
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};
