var data = [{
    children: [{
        value: 5,
        children: [{
            value: 1
        }, {
            value: 2,
            children: [{
                value: 1
            }]
        }, {
            children: [{
                value: 1
            }]
        }]
    }, {
        value: 10,
        children: [{
            value: 6,
            children: [{
                value: 1
            }, {
                value: 1
            }, {
                value: 1
            }, {
                value: 1
            }]
        }, {
            value: 2,
            children: [{
                value: 1
            }]
        }, {
            children: [{
                value: 1
            }]
        }]
    }]
}, {
    value: 9,
    children: [{
        value: 4,
        children: [{
            value: 2
        }, {
            children: [{
                value: 1
            }]
        }]
    }, {
        children: [{
            value: 3,
            children: [{
                value: 1
            }, {
                value: 1
            }]
        }]
    }]
}, {
    value: 7,
    children: [{
        children: [{
            value: 1
        }, {
            value: 3,
            children: [{
                value: 1
            }, {
                value: 1
            }]
        }, {
            value: 2,
            children: [{
                value: 1
            }, {
                value: 1
            }]
        }]
    }]
}, {
    children: [{
        value: 6,
        children: [{
            value: 1
        }, {
            value: 2,
            children: [{
                value: 2
            }]
        }, {
            value: 1
        }]
    }, {
        value: 3,
        children: [{
            value: 1,
        }, {
            children: [{
                value: 1
            }]
        }, {
            value: 1
        }]
    }]
}];

const getSum = (data) => {
    let sum = 0;
    for(let item of data) {
        if (item.children != null) {
            item.sum = getSum(item.children);
        } else {
            item.sum = item.value;
        }
        sum += item.sum;
    }
    return sum;
};

const buildColor = (data, sum, min, max, level) => {
    const range = max - min;
    let start = min;
    for(let item of data) {
        const r = range * item.sum / sum;
        const end = start + r;
        if (item.children) {
			const itemSum = item.value > item.sum ? item.value : item.sum;
            buildColor(item.children, itemSum, start, end, level + 1);
        }
        item.itemStyle = {color : `hsl(${(start + end) / 2},95%,${70 - level * 10}%)`};
        start += r;
    }
};
const sum = getSum(data);
buildColor(data, sum, 0 ,360, 0);

option = {
    series: {
        radius: ['15%', '80%'],
        type: 'sunburst',
        sort: null,
        highlightPolicy: 'ancestor',
        data: data,
        label: {
            rotate: 'radial'
        },
        levels: [],
        itemStyle: {
            color: '#ddd',
            borderWidth: 2
        }
    }
};
