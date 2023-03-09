import React, { useState, useEffect } from 'react'
import ReactEcharts from "echarts-for-react"

// MUIs
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'


// let hStep = 300 / (data.length - 1);
// let busLines = [].concat.apply(
//     [],
//     data.map(function (busLine, idx) {
//         let prevPt = [];
//         let points = [];
//         for (let i = 0; i < busLine.length; i += 2) {
//             let pt = [busLine[i], busLine[i + 1]];
//             if (i > 0) {
//                 pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
//             }
//             prevPt = pt;
//             points.push([pt[0] / 1e4, pt[1] / 1e4]);
//         }
//         return {
//             coords: points,
//             lineStyle: {
//                 normal: {
//                     color: echarts.color.modifyHSL('#5A94DF', Math.round(hStep * idx))
//                 }
//             }
//         };
//     })
// );

const LinesOpt = {
    bmap: {
        center: [116.46, 39.92],
        zoom: 10,
        roam: true,
        mapStyle: {
            styleJson: [
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: {
                        color: '#031628'
                    }
                },
                {
                    featureType: 'land',
                    elementType: 'geometry',
                    stylers: {
                        color: '#000102'
                    }
                },
                {
                    featureType: 'highway',
                    elementType: 'all',
                    stylers: {
                        visibility: 'off'
                    }
                },
                {
                    featureType: 'arterial',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#000000'
                    }
                },
                {
                    featureType: 'arterial',
                    elementType: 'geometry.stroke',
                    stylers: {
                        color: '#0b3d51'
                    }
                },
                {
                    featureType: 'local',
                    elementType: 'geometry',
                    stylers: {
                        color: '#000000'
                    }
                },
                {
                    featureType: 'railway',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#000000'
                    }
                },
                {
                    featureType: 'railway',
                    elementType: 'geometry.stroke',
                    stylers: {
                        color: '#08304b'
                    }
                },
                {
                    featureType: 'subway',
                    elementType: 'geometry',
                    stylers: {
                        lightness: -70
                    }
                },
                {
                    featureType: 'building',
                    elementType: 'geometry.fill',
                    stylers: {
                        color: '#000000'
                    }
                },
                {
                    featureType: 'all',
                    elementType: 'labels.text.fill',
                    stylers: {
                        color: '#857f7f'
                    }
                },
                {
                    featureType: 'all',
                    elementType: 'labels.text.stroke',
                    stylers: {
                        color: '#000000'
                    }
                },
                {
                    featureType: 'building',
                    elementType: 'geometry',
                    stylers: {
                        color: '#022338'
                    }
                },
                {
                    featureType: 'green',
                    elementType: 'geometry',
                    stylers: {
                        color: '#062032'
                    }
                },
                {
                    featureType: 'boundary',
                    elementType: 'all',
                    stylers: {
                        color: '#465b6c'
                    }
                },
                {
                    featureType: 'manmade',
                    elementType: 'all',
                    stylers: {
                        color: '#022338'
                    }
                },
                {
                    featureType: 'label',
                    elementType: 'all',
                    stylers: {
                        visibility: 'off'
                    }
                }
            ]
        }
    },
    series: [
        {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: [],
            silent: true,
            lineStyle: {
                // color: '#c23531',
                // color: 'rgb(200, 35, 45)',
                opacity: 0.2,
                width: 1
            },
            progressiveThreshold: 500,
            progressive: 200
        },
        {
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: [],
            lineStyle: {
                width: 0
            },
            effect: {
                constantSpeed: 20,
                show: true,
                trailLength: 0.1,
                symbolSize: 1.5
            },
            zlevel: 1
        }
    ]
}

export default function Lines() {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <React.Fragment>
                    {/* <Title>Globe</Title> */}
                    <ReactEcharts option={LinesOpt} />
                </React.Fragment>
            </Container>
        </Box>
    )
}