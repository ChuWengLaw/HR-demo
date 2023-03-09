import React, { useState, useReducer, useEffect } from 'react'
import ReactEcharts from "echarts-for-react"

// MUIs
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import { Row, Col, Card, CardBody, Label } from "reactstrap"


const fontSize = 100
const colors = ["black", "blue", "red", "yellow", "green", "purple", "orange"]

export default function InteractiveBoard() {
    const [scrollTop, setScrollTop] = useState(0);
    const [dotPosition, setDotPosition] = useState([])
    const [linePosition, setLinePosition] = useState([])
    const [cardStyle, setCardStyle] = useState({ borderStyle: "ridge", background: "#fff", height: "600px" })
    const [penColor, setPenColor] = useState("black")
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    useEffect(() => {
        let temp_dot = dotPosition
        let temp_line = linePosition
        let final_dot = temp_dot.map((i) => {
            i.y = i.y - scrollTop
            return i
        })
        let final_line = temp_line.map((j) => {
            j.y = j.y - scrollTop
            return j
        })
        setDotPosition(final_dot)
        setLinePosition(final_line)
    }, [scrollTop])

    const Drawing = {
        ClickDraw: (e) => {
            let temp = dotPosition
            temp.push({ x: e.pageX, y: e.pageY })
            setDotPosition(temp)
            forceUpdate()
        },
        DragDraw: (e) => {
            let temp = linePosition
            temp.push({ x: e.pageX, y: e.pageY })
            setLinePosition(temp)
            forceUpdate()
        }
    }

    const Actions = {
        ClearAll: () => {
            setDotPosition([])
            setLinePosition([])
        },
        TogglePenColor: (color) => {
            setPenColor(color)
        }
    }

    const EventHandler = {
        HandleDragLeave: (e) => {
            // e.stopPropogation()
            e.preventDefault()
        },
        HandleDragOver: (e) => {
            e.preventDefault()
        },
        HandleDragStart: (e) => {
            var img = new Image()
            img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='
            e.dataTransfer.setDragImage(img, 0, 0)
            // e.preventDefault()
        },
        HandleScroll: (e) => {
            console.log(scrollTop, e.currentTarget.scrollTop)
            setScrollTop(e.currentTarget.scrollTop - scrollTop)
        }
    }

    const Styles = {
        PaintStyle: (i) => {
            const color = penColor
            return { position: "absolute", left: i.x - fontSize / 10, top: i.y - fontSize, fontSize: fontSize, color: color }
        },
        CursorStyle: (e) => {
            setCardStyle({ ...cardStyle, cursor: "crosshair" })
        }
    }

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
            onScroll={EventHandler.HandleScroll}
        >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <React.Fragment>
                    {/* <Title>Globe</InteractiveBoard> */}
                    <button onClick={Actions.ClearAll}>Clear</button>
                    {/* <ContentHolder>
                        <button style={{color: "red"}} onClick={Actions.TogglePenColor("red")}></button>
                    </ContentHolder> */}
                    {
                        colors.map(i => {
                            return (
                                <button key={i} style={{ background: i, height: 20, width: 20 }} onClick={() => Actions.TogglePenColor(i)}></button>
                            )
                        })
                    }
                    <Card style={cardStyle} onClick={Drawing.ClickDraw} onMouseOver={Styles.CursorStyle} draggable="true" onDrag={Drawing.DragDraw}
                        onDragOver={EventHandler.HandleDragOver} onDragStart={EventHandler.HandleDragStart} onDragLeave={EventHandler.HandleDragLeave}>
                        {
                            dotPosition.map((i, idx) => {
                                return (
                                    <span key={idx} disabled style={Styles.PaintStyle(i)}>.</span>
                                )
                            })
                        }
                        {
                            linePosition.map((i, idx) => {
                                return (
                                    <span key={idx} disabled style={Styles.PaintStyle(i)}>.</span>
                                )
                            })
                        }
                    </Card>
                </React.Fragment>
            </Container>
        </Box>
    )
}

const ContentHolder = (props) => {
    const { label, info, children } = props;

    return (
        <div className="form-group">
            <label className="control-label">{label}{info}</label>
            <div className="info-content-item-holder">
                {children}
            </div>
        </div>
    )
}