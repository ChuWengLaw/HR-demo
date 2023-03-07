import './App.css';
import React, { useState, useEffect } from "react";
import AppRoute from "./routes/route";
import Path from "./routes/index";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import { Row, Col, Card, CardBody, Label } from "reactstrap"
import { useNavigate } from 'react-router-dom'

// Local Imports
import { mainListItems, secondaryListItems } from './style/components/listItems'

// MUIs
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Collapse from '@mui/material/Collapse'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LayersIcon from '@mui/icons-material/Layers'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'


const drawerWidth = 240

function App() {
  let time = new Date().toLocaleString();
  const [cTime, setTime] = useState(time);
  const [path, setPath] = useState([...Path.authProtectedRoutes, ...Path.publicRoutes]);
  const [open, setOpen] = useState(false)
  const [collapsables, setCollapsables] = useState([false, false, false, false, false, false])
  const navigate = useNavigate()

  useEffect(() => {
    setInterval(() => {
      setTime(time);
    }, 1000);
  });

  const onListItemClick = (id) => {
    let temp_collapsables = collapsables
    let clickedBoolean = !temp_collapsables[id]
    let result = temp_collapsables.map((item, index) => {
      if (index !== id) {
        return false
      }
      else {
        return clickedBoolean
      }
    })
    let detector = false
    for (var i = 0; i < result.length; i++) {
      if (result[i]) {
        detector = true
        break
      }
    }
    setOpen(detector)
    setCollapsables(result)
  }

  const onDrawerClick = () => {
    if (open) {
      setCollapsables([false, false, false, false, false, false])
    }
    setOpen(!open)
  }

  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
                onClick={() => onDrawerClick()}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Sketchboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={() => onDrawerClick()}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {
                <React.Fragment>
                  <ListItemButton key={0} onClick={() => navigate("/home")}>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>                  
                  <ListItemButton key={1} onClick={() => onListItemClick(1)}>
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Property" />
                  </ListItemButton>
                  <Collapse key={`C1`} in={collapsables[1]} timeout="auto" unmountOnExit>
                    <ListItemButton style={{ left: "50px" }} onClick={() => navigate("/echart")}>
                      <SportsEsportsIcon style={{ color: "#1890ff" }} />
                      <span style={{ fontSize: 16 }}>E Chart</span>
                    </ListItemButton>
                  </Collapse>
                  <ListItemButton key={2} onClick={() => onListItemClick(2)}>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Employee Details" />
                  </ListItemButton>
                  <Collapse key={`C2`} in={collapsables[2]} timeout="auto" unmountOnExit>test2</Collapse>
                  <ListItemButton key={3} onClick={() => onListItemClick(3)}>
                    <ListItemIcon>
                      <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports and Claims" />
                  </ListItemButton>
                  <Collapse key={`C3`} in={collapsables[3]} timeout="auto" unmountOnExit>test3</Collapse>
                  <ListItemButton key={4} onClick={() => onListItemClick(4)}>
                    <ListItemIcon>
                      <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shared Board" />
                  </ListItemButton>
                  <Collapse key={`C4`} in={collapsables[4]} timeout="auto" unmountOnExit>test4</Collapse>
                  <ListItemButton key={5} onClick={() => onListItemClick(5)}>
                    <ListItemIcon>
                      <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sketch Board" />
                  </ListItemButton>
                  <Collapse key={`C5`} in={collapsables[5]} timeout="auto" unmountOnExit>test5</Collapse>
                </React.Fragment>
              }
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
          {
            path.map(page => {
              return (
                <AppRoute path={page.path} key={page.path} element={page.element} cTime={cTime} />
              )
            })
          }
        </Box>
      </ThemeProvider>
    </div>
  );
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

const mdTheme = createTheme()

export default App;
