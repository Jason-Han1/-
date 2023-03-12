
let value = 55
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: '{c}',

    },
    grid: {
        top: '15%',
        left: '0%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            color: '#fff'
        },
        splitLine: {
            show: false
        },
        data: ['A'],

    }],

    yAxis: [{
        type: 'category',

        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            type: 'bar',
            barWidth: '10',
            zlevel: 1,
            barCategoryGap: "-100%",
            itemStyle: {
                color: "rgba(253, 137, 53, 1)",
                barBorderRadius: 5,
            },
            markPoint: {
                symbol: 'circle'
            },
            data: [value],

        },
        {
            type: 'pictorialBar',
            zlevel: 2,
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJCMzk5NkVBNTQ3QzExRUI5QUNCQjJFNDc4MkQzRDk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJCMzk5NkVCNTQ3QzExRUI5QUNCQjJFNDc4MkQzRDk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkIzOTk2RTg1NDdDMTFFQjlBQ0JCMkU0NzgyRDNEOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkIzOTk2RTk1NDdDMTFFQjlBQ0JCMkU0NzgyRDNEOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5YNa7rAAAEb0lEQVR42qxXa2gcVRT+7uw8dpO0jTG2SWsrVVtjCGoMwRdKqgSKCKV/FBRq0SJSqdSI/dV/FkQxoVAVFZQqIijSKoj0h6YBodVKjNIgmqrFbatNzcvmsbuzM3P87szGrm2yu7PthcN9zL3nu+d5zyj/5U5U2oxdx0x2T5F2kPaR3iZ5iNGMGGAb2P0o6cHX5eALLbrnfIjUFQdQlZOQQDeyewWTpzbLwD7IiYELh9d1QXVR2KtWH+R0F+nXqgEJVM9uN3IzO+TIO7Z8/zHg5y/dmLCgOh6BunubC7tGq/lF0j8VAxJIq3krJHhJhj9fLl+/CcyMlddVXSPUvU9DtT30F5Sxmyv7SUFJQIJpe/TRPu1yeC8w+gtitxU3QW3YCbWmQ9u3hzRwCSCB1nLci/NnN0v/XshIPy63qZbuyL5Lmw5w+hwpHa6LyB64cz3y7Xsp+e5DOnkOV6yZDlTno1B3PJ6hffu0T2hACd54sDI7VdtoX2P7F6GAZriwAFjAT0FzG2RlG4yG62Bop7AciDuHYOpPYOx3YOoUVOY8JLkUav19SFx7G7z9W5Aw1P+ZFfE3F7qQHwikuwcq0E7Gse8i4CFlOwyDJIxGmrz5Zl6XKtNhkSAbRec2k8j5gpqLAYu1vNCiy0MyfhqWbUcOYKUgZI7A59hnxLDXMWnmIAnuMe0oHo0EPJ6FFTO18QimR45qKKowA8nNQfJzoTr1HPlMtK4pn4V4mgjul0+rC0poaZWcOwE3dydMqpOcItIqlnnyC72EV1Qci5+sDtBMKKRMhZn0MOpXrYdkM1QlGc6DBfNUAEI0V5ZbHaA2eZKAs2eOI1jdQntlCeSReWQ/0cwJpKAvUZDU5Nyvrf55MhMGvc3D7Gg6sqWXLTBOQjk19NgUT9NRtEYDLwQOvCptGN6EYjqmgdk0U2J7N11XkMkHGB/qhzt+BgZDwbp6FVIrboDTsJIXYEic/Ax1RpWAutm0ZZKeOTs1Cad2Gf7+5gDqbIV6W3N1kR8fQf7cz8hqWyqFWq5bSbN6QM0kaRlMKMexpHMTGq5pQl1+AmYY2KJ9JkwSug+ZcT1RIujLlhj6qEMpnewEclOjcNbcEqo6IhUCaLWnrIgs7i2DV76mMYxIyiylNJc1I59IQS4jjxvz2byUlDY9ViZPw8tOw69tjGI95mtRDNhrPPmRqzofC/PhYomgls4yO/gpgrE/CsmvgqbzK/ka2z5xwwe+6MVftDIrfkE8Umg7XkCVe/EXqegurml07fkaa5pW+fJVvnm/xTfS8nVQ9/fomma4UDAPLOo07U32YXa3cvMzxtYPxlQ3L5aqrwyI+/R+Y8v7Y/q8Zkd+AyWrto6+H/4bD511C3Xp9LNy5F2rZF16+8OsS59w4SzRdekeAk0V8YldebeGBp9Ib5SveiEnj144fP09UA/0aDsd4nQnqWxdqSr9mSHwRg1MwFYMUtoOSrX2rp+49jzp0BX7t1jg72l7oc6kV+GtuH9PsQAXuUSs/f8KMAAOQOy+r8rk3AAAAABJRU5ErkJggg==',
            symbolPosition: 'end',
            symbolOffset: [4, 0],
            symbolSize: ['30', '30'],
            data: [value],
        }, {
            type: 'bar',
            barWidth: '10',
            zlevel: 0,
            barGap: "-100%",
            itemStyle: {
                color: "#e0e0e0",
                barBorderRadius: 5,
            },
            data: [100]
        }
    ]
};