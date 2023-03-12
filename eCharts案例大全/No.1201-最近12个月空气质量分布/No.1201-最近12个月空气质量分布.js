const uploadedDataURL = '/asset/get/s/data-1635390802457-HRSoVX4EN.json';

// AQI 等级
const AQI_LEVELS = [
    {
        icon: 'k1',
        label: '优',
        otherName: '一级',
        value: 1,
        min: 0,
        max: 50,
        proposal: '空气质量令人满意，基本无空气污染',
        influence: '各类人群可正常活动',
        color: '#00E500',
        lightColor: '#D2F5A5',
    },
    {
        icon: 'k2',
        label: '良',
        otherName: '二级',
        value: 2,
        min: 51,
        max: 100,
        proposal: '空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响',
        influence: '极少数异常敏感人群应减少户外活动',
        color: '#FFFF00',
        lightColor: '#EBEBD8',
    },
    {
        icon: 'k3',
        label: '轻度',
        otherName: '三级',
        value: 3,
        min: 101,
        max: 150,
        proposal: '易感人群症状有轻度加剧，健康人群出现刺激症状',
        influence: '儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼',
        color: '#FF7E00',
        lightColor: '#F2E1C7',
    },
    {
        icon: 'k4',
        label: '中度',
        otherName: '四级',
        value: 4,
        min: 151,
        max: 200,
        proposal: '进一步加剧易感人群症状，可能对健康人群心脏、呼吸系统有影响',
        influence: '儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动',
        color: '#FE0000',
        lightColor: '#F3D3D3',
    },
    {
        icon: 'k5',
        label: '重度',
        otherName: '五级',
        value: 5,
        min: 201,
        max: 300,
        proposal: '心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状',
        influence: '儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动',
        color: '#99004C',
        lightColor: '#E5D2ED',
    },
    {
        icon: 'k6',
        label: '严重',
        otherName: '六级',
        value: 6,
        min: 301,
        max: '+',
        proposal: '健康人群运动耐受力降低，有明显强烈症状，提前出现某些疾病',
        influence: '儿童、老年人和病人应停留在室内，避免体力消耗，一般人群避免户外活动',
        color: '#7E0022',
        lightColor: '#F3CBD7',
    },
];

// 首要污染物别名配置
const PRIMARY = {
    NA: '无',
};

// 获取首要污染物Label
const getPrimaryLabel = (value) => {
    if (!value) return '';
    if (PRIMARY[value]) return PRIMARY[value];
    return value;
};

/**
 * @description 将接口数据转化为符合 echarts 的数据
 * @param {object} sourceData 原数据
 * @param {boolean} diff 是否按AQI等级拆分数据
 * @returns echartsData 符合echarts配置数据
 */
const transformData = (sourceData = {}, isDiff = false) => {
    let seriesData = [];
    let seriesDatas = [];
    for (const key in sourceData) {
        const value = (sourceData[key] || {}).aqi || null;
        seriesData.push([key, value]); // 笛卡尔坐标数据
    }

    // 按AQI等级区分数据
    if (isDiff) {
        seriesDatas = AQI_LEVELS.map(({ label, min, max, color }) => {
            const data = seriesData.filter(([, value]) => {
                if (max === '+') return value >= min;
                return value >= min && value <= max;
            });
            return { name: label, data, color };
        });
        seriesDatas.push({
            name: '空值',
            color: '#efefef',
            data: seriesData.filter((v) => v[1] === -1),
        });
    }

    // 开始日期
    const startDay = seriesData[0][0];
    // 结束日期
    const endDay = seriesData[seriesData.length - 1][0];

    return { startDay, endDay, seriesData, seriesDatas };
};

// 获取悬浮提示元素
const getTooltipRow = (params, isHideEmpty = false) => {
    if (isHideEmpty && !params.value) return '';
    return `
  <div style="display: flex; justify-content: space-between; min-width: 80px; padding-top: 3px;">
    <span>${params.marker || ''} ${params.seriesName}</span>
    <span style="padding-left: 10px; font-weight: bold;">${
        params.value === -1 || !params.value ? '-' : params.value
    }</span>
  </div>`;
};

// 补全日期
const getVirtulData = (data = {}, format) => {
    const today = new Date();
    const dayTime = 3600 * 24 * 1000;
    const thatday = today - dayTime * 365;
    const result = JSON.parse(JSON.stringify(data));
    for (let time = thatday; time < today; time += dayTime) {
        const key = format(new Date(time), 'Y-m-d');
        if (!result[key])
            result[key] = {
                aqi: -1,
                aqidate: key,
                data_type: 'history',
                primary: '',
            };
    }
    return result;
};

const formatDate = (dateObj = null, fmt = 'Y-m-d', empty = '-') => {
    const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

    const lz = (n) => {
        const num = n.toString();
        if (num.length === 1) {
            return `0${num}`;
        }
        return num;
    };

    let t = dateObj;
    // typeof dateObj !== 'string'是为了判断万一传过来的是y-m-d h:i:s格式，会直接执行最后一个else if，格式化为日期格式
    if (dateObj === null || (Number.isNaN(dateObj) && typeof dateObj !== 'string')) {
        if (typeof empty === 'string') {
            return empty;
        }
        t = new Date();
    } else if (typeof dateObj === 'number') {
        if (dateObj === 0) {
            return empty;
        }
        t = new Date(dateObj * 1000);
    } else if (typeof dateObj === 'string') {
        if (parseInt(dateObj) == dateObj) {
            // eslint-disable-line
            t = new Date(dateObj * 1000);
        } else {
            if (dateObj.includes('T')) {
                t = new Date(dateObj);
            } else {
                t = new Date(dateObj.replace(/-/g, '/'));
            }
        }
    }
    if (!(t instanceof Date)) {
        throw new Error('被处理的只能是Date对象');
    }
    if (Number.isNaN(t.getTime())) {
        if (typeof dateObj === 'string') {
            return dateObj;
        }
        throw new Error('非法日期对象');
    }

    const date = t.getDate();
    const year = t.getFullYear();
    const hours = t.getHours();
    const day = t.getDay();
    const dayName = days[day];
    const min = t.getMinutes();
    const sec = t.getSeconds();
    const month = t.getMonth();
    const am = hours < 12 ? 'am' : 'pm';
    const ms = t.getTime() % 1000;
    let hours12 = hours % 12;
    hours12 = hours12 || 12;

    const fd = new Date(t.getFullYear(), 0, 1);
    const dayOfYear = Math.round((t - fd) / 8.64e7);
    const weekNum = Math.ceil(((t - fd) / 8.64e7 + fd.getDay() - 1) / 7);

    const a = {
        d: lz(date),
        D: dayName.substr(0, 3),
        l: dayName,
        w: day,
        j: date,
        z: dayOfYear,
        W: weekNum,
        M: months[month].substr(0, 3),
        F: months[month],
        Y: year,
        a: am,
        A: am.toUpperCase(),
        y: `${year}`.substr(2, 2),
        c: t.toISOString(),
        m: lz(month + 1),
        U: Math.round(t / 1000),
        g: hours12,
        G: lz(hours12),
        h: hours,
        H: lz(hours),
        i: lz(min),
        s: lz(sec),
        e: ms,
    };

    const v = [];
    Object.keys(a).forEach((k) => {
        v.push(`(\\\\)?${k}`);
    });

    return fmt.replace(new RegExp(v.join('|'), 'g'), (k) => {
        if (a[k]) {
            return a[k];
        }
        return k.replace('\\', '');
    });
};

$.getJSON(uploadedDataURL, (apiData) => {
    const data = getVirtulData(apiData.history, formatDate);
    const titleText = '最近12个月空气质量分布';
    const visualMapPieces = AQI_LEVELS.map(({ min, max, color }) => ({ min, max, color }));
    const { seriesDatas } = transformData(data, true);
    const getPrimary = (key) => getPrimaryLabel((data[key] || {}).primary) || '';
    const myOption = {
        title: {
            text: titleText,
            left: 'center',
        },
        tooltip: {
            position: 'top',
            formatter: (params) => {
                const primary = getPrimary(params.value[0]);
                return `${params.value[0]}<br />${getTooltipRow({ ...params, value: params.value[1] })}${getTooltipRow({
                    seriesName: '首要污染物',
                    value: primary,
                })}`;
            },
        },
        legend: {
            show: true,
            icon: 'circle',
            bottom: 0,
        },
        calendar: {
            // range: [startDay, endDay],
            range: new Date().getFullYear(),
            top: 60,
            left: 60,
            right: 15,
            bottom: 40,
            height: 150,
            cellSize: [14, 14],
            itemStyle: {
                borderWidth: 4,
                borderColor: '#fff',
            },
            yearLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            monthLabel: {
                nameMap: 'cn',
            },
            dayLabel: {
                nameMap: ['日', '一', '二', '三', '四', '五', '六'],
                firstDay: 1,
                left: 10,
            },
        },
        visualMap: {
            show: false,
            type: 'piecewise',
            pieces: [{ max: 0, min: -10, color: '#efefef', name: '空值' }, ...visualMapPieces],
        },
        series: seriesDatas.map(({ name, data, color }) => ({
            type: 'heatmap',
            coordinateSystem: 'calendar',
            name,
            data,
            color,
            label: {
                show: true,
                fontSize: 10,
                formatter: (params) => getPrimary(params.value[0]),
            },
        })),
    };
    myChart.setOption(myOption);
});
