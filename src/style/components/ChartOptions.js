export function LineOpt(x, series) {
    return {
        xAxis: {
            type: 'category',
            data: x
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: series,
                type: 'line'
            }
        ]
    }
}

export function BarOpt(x, series) {
    return {
        xAxis: {
            type: 'category',
            data: x
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: series,
                type: 'bar'
            }
        ]
    }
}

export function SunBurstOpt(radius, data) {
    return {
        series: {
            type: 'sunburst',
            emphasis: {
                focus: 'ancestor'
            },
            data: data,
            radius: radius,
            label: {
                rotate: 'radial'
            }
        }
    }
}

export function PieOpt(x, series) {
    return {
        // title: {
        //     text: 'Weather Statistics',
        //     subtext: 'Static Data',
        //     left: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 10,
            left: 'center',
            data: x
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: series,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
}