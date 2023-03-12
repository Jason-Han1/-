var data = [{
    name: '经费来源',
    itemStyle: {
        color: '#187a2f'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    children: [{
        name: '各部拨款',
        itemStyle: {
            color: '#3aa255'
        },
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        children: [{
            name: '清政府从大连关拨款银31.2万两',
            value: 3,
            itemStyle: {
                color: '#3aa255'
            },
            label: {
                fontSize: 15
            }

        }]
    }, {
        name: '对外借款',
        itemStyle: {
            color: '#5e9a80'
        },
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        children: [{
            name: '奉天大清分银行借银20万两',
            value: 1,
            itemStyle: {
                color: '#5e9a80'
            },
            label: {
                fontSize: 15
            }
        }, {
            name: '奉天交通银行借银10万两',
            value: 1,
            itemStyle: {
                color: '#5e9a80'
            },
            label: {
                fontSize: 15
            }
        }, {
            name: '东三省官银号借银25万两',
            value: 1,
            itemStyle: {
                color: '#5e9a80'
            },
            label: {
                fontSize: 15
            }
        }]
    }, {
        name: '度支司库垫拨',
        itemStyle: {
            color: '#3aa255'
        },
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        children: [{
            name: '解部契税款中垫拨15万两',
            value: 3,
            itemStyle: {
                color: '#3aa255'
            },
            label: {
                fontSize: 15
            }
        }]
    }, {
        name: '防疫赈捐',
        itemStyle: {
            color: '#5e9a80'
        },
        label: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        children: [{
            name: '宣统三年正月间,开办防疫赈捐',
            value: 3,
            itemStyle: {
                color: '#5e9a80'
            },
            label: {
                fontSize: 15
            }
        }]
    }]
}];

option = {
    backgroundColor:'#204051',
    title: {
        left: 'center',
        top:20,
        text: '防疫款项来源',
        subtext: '数据来源：锡良档案中的清册',
        textStyle: {
            fontSize: 30,
           // align: 'center',
            color:'#fff',
            //textShadowColor: '#3aa255',
            //textShadowBlur: 3,
        },
        subtextStyle: {
            align: 'center',
            color: '#DDD',
            fontSize: 15,
        },
    },
    series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: data,
        radius: [0, '90%'],
        sort: null,
        levels: [{}, {
            r0: '2%',
            r: '20%',
            itemStyle: {
                borderWidth: 3,
            },
            label: {
                rotate: 'tangential'
            }
        }, {
            r0: '23%',
            r: '53%',
            label: {
                //align: 'right',
                rotate: 'tangential'
            },
            itemStyle: {
                borderWidth: 2,
            },
        }, {
            r0: '56%',
            r: '60%',
            label: {
                position: 'outside',

                padding: 3,
                silent: false
            },
            itemStyle: {
                borderWidth: 3
            }
        }]
    }
};