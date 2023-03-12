const themeColor = '#00ffff';
const fontColor = '#040624'
const childrenColor = '#39fdc0';
let cityList = ['烟台', '青岛', '威海', '日照', '滨州', '济宁', '菏泽', '济南'];
const seriesTree = () => {
    return cityList.map((item, index) => {
        return {
            name: item,
            value: index,
            symbolSize: 60,
            label: {
                position: 'inside',
            },
            lineStyle: {
                color: childrenColor
            },
            itemStyle: {
                borderColor: childrenColor,
                color: childrenColor,
            },
        };
    });
};

option = {
    // 工具栏
    toolbox: {
        show: true,
        feature: {
            borderColor: fontColor
        },
        feature: {
            restore: {}
        }
    },
    
    series: [
        {
            type: 'tree',
            layout: 'radial',   // 径向布局
            symbol: 'circle',   // 设置样式
            hoverAnimation: true,           // hover样式
            animationDurationUpdate: 1000, // 数据更新动画时长
            expandAndCollapse: true,       // 子树折叠和展开的交互
            roam: true,                    // 开始鼠标缩放和平移漫游
            symbolSize: 10,
            label: {
                color: fontColor,
                rotate: 0,
            },
            data: [
                {
                    name: '山东',
                    value: 0,
                    symbolSize: 70,
                    color: '#f40',
                    itemStyle: {
                        borderColor: themeColor,
                        color: themeColor,
                    },
                    label: {
                        position: 'inside',
                    },
                    children: seriesTree()
                },
            ],
        },
    ],
};
