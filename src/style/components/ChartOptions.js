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