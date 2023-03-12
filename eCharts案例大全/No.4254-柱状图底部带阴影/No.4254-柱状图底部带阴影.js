var dataList = [100, 52, 200, 334, 390, 330, 220, 160, 85, 500];
option = {
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: '#fff',
        textStyle: {
            fontSize: 14,
            color: '#2b2b2b'
        },
        formatter: function(params) {
            let res = `${params.marker + params.name}<br/>`;
            res += `<span style = 'padding-left: 16px;color: #505050; font-size:14px; font-weight:bold; '>案件量 <span style = 'color: #00e6de '>${params.data}</span></span>`;
            return res;
        },
        extraCssText: 'box-shadow: 0 3px 6px rgba(87, 209, 209, 0.55);'
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['撤销', '变更', '确认违法或无效', '履行法定职责或给付义务',
            '驳回诉讼请求', '确认合法或有效', '确认协议有效或者被告继续履行协议或者被告采取补救措施',
            '解除协议或者确认协议无效', '赔偿或补偿', '驳回赔偿请求'
        ],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#7d7d7d',
            fontSize: 12,
            // align: 'left',
            formatter: function(value) {
                let newS = value;
                if (value.length > 8) {
                    newS = `${value.substring(0, 7)}...`;
                }
                if (newS.length > 4) {
                    newS = `${newS.substring(0, 4)}\n${newS.substring(4)}`;
                }
                return newS;
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#7d7d7d',
            fontSize: 14

        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['rgba(143, 143, 143, 0.2)'],
                width: 1,
                type: 'dashed'
            }
        }
    }],
    series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '8',
            data: dataList,
            label: {
                show: true,
                position: 'top',
                fontSize: 14
            },
            itemStyle: {
                color: 'rgba(0, 230, 222, 1)',
                barBorderRadius: 10
            },
            emphasis: {
                color: 'rgba(93, 252, 247, 1)'
            }
        },
        {
            type: 'pictorialBar',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAWCAYAAADeiIy1AAAABHNCSVQICAgIfAhkiAAAAgRJREFUSEvNljuO2zAQhj9y9' +
                'LIduEhipNkqcOXWF9hL6Dxen0eX2D2AW1cutwmcpDBiW5REMpAEv41FGgsRMABBkfz4zww5VHT0qY44fAzy/vR/PlfMZpf7ms9hNvPHTqVO7SsF90EngCLLFGlaT1MsF' +
                'pfjp9N6YU+WQZq27WbkLfAWVEPq3U8mitFI8fysWK00QaAaE2nnWOupqtbGY8frq2e99iyXvlF5BbsEHZRkmSZNa4CQJJp4I0ik2QQards5znmGlcMWDjO05LljPLZkmS' +
                'dN3bWye6C6TzeQwUCItwG7JMCYgKFoctHNIol1bKwjjiv6eYUZVGy3toFBDbpQdQ5SvLzUAVcsl8JwKPTzkH0vJK4iShsiQUChNRiIQoetKkIpMUFBb1+yS0o2G8tk0sLO' +
                '3HcCtW5T8KrhSVgXIWYYYW1M7GOsixAXUok0igJrsbpEdIFRBhFDvCkYRSW8W3hzcIrVLWixEKZfhFUV8YkYp5LGIEFLiNYCJTixDaQsDdrnjf3BMA4KFr8s02mt6ui+S1C' +
                'TBN81798CiiJiMIhxux6oHo4E8RG2BgHiLFYVaHLwe3R/z3ZriKKCpx8V/Beg9lB24LpOkqGG3Evvny7icxx+mN6/TclXXfxbetcBPqb4Yw/sAQQPv4IOqh5+qR5qSCdl4r' +
                'xgPbzwPaC+d/Zm+AsS2bAmImuHEwAAAABJRU5ErkJggg==',
            symbolSize: [26, 22],
            symbolPosition: 'start',
            symbolOffset: [0, 11],
            // z: 10,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 230, 222, 1)'
                }
            },
            data: dataList
        }
    ]
};