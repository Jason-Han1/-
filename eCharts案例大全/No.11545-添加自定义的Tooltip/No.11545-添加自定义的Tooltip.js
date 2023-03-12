option = {
    tooltip: {
        // 把trigger改为item，就能触发很多组件上显示tooltip了
        trigger: 'axis',
        show: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        triggerEvent: true
    },
    yAxis: {
        type: 'value',
        triggerEvent: true
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        name: '柱状图啊啊啊',
        type: 'bar',
        markPoint: {
            data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
            ]
        }
    }]
};

const appendDom = function(obj) {
    const chartNode = myChart.getDom()
    if (chartNode) {
        chartNode.appendChild(obj)
    }
}

const removeDom = function(domId) {
    const dom = document.getElementById(domId)
    if(dom) {
      dom.remove()
    }
}

const buildBasicTooltip = function(event, domId, strPadding) {
    let dom = document.createElement('div')
    dom.id = domId
    let cssText = 'position:fixed;background-color:rgba(50,50,50,0.7);'
        + 'font-size:15px;color:rgb(255,255,255);border-radius:3px;' + strPadding
    dom.style.cssText = cssText + 'left:' + (event.event.event.clientX + 15) 
        + 'px;top:' + (event.event.event.clientY - 30) + 'px;'
    return dom
}

const appendTooltip = function(event) {
    if (event.componentType.indexOf('Axis') !== -1) {
      const dom = buildBasicTooltip(event, 'axisTooltip', 'padding:2px 5px;')
      dom.innerText = event.value
      appendDom(dom)
    } else if (event.componentType === 'markPoint') {
        const dom = buildBasicTooltip(event, 'markPointTooltip', 'padding:5px 5px;')
        dom.innerHTML = '<div>' + event.event.target.dataModel.name + '</div><div>' +
            event.name + '：' + event.value + '</div>'
        appendDom(dom)
    }
}

const removeTooltip = function(event) {
    if (event.componentType.indexOf('Axis') !== -1) {
      removeDom('axisTooltip')
    } else if (event.componentType === 'markPoint') {
      removeDom('markPointTooltip')
    }
}

myChart.on('mouseover', appendTooltip);
myChart.on('mouseout', removeTooltip);

