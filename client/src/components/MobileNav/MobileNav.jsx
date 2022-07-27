import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function MobileNav() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        bottom: false,
    });

    const cannonArr = [
        'Battle-cannon',
        'Punisher',
        'Demolisher',
        'Annihilator',
        'Eradicator',
        'Executioner',
        'Old executioner',
        'Exterminator',
        'Vanquisher',
        'Mars battle-cannon',
        'Mars demolisher',
        'Incinerator',
    ];

    const toggleDrawer = (anchor, open) => (event) => {
        if ( event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const changeCannonHandler = (e) => {
        dispatch({ type: 'SET_CANNON_NAME', payload: e.target.innerText });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                backgroundColor: '#272A32',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {cannonArr.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText
                                sx={{ color: '#ffffff' }}
                                primary={text}
                                onClick={changeCannonHandler}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <div
            style={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                marginLeft: '-25%',
            }}
        >
            <div>
                {['bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <div
                            style={{
                                outline: 'none',
                                backgroundColor: '#494949',
                                color: '#ffffff',
                                padding: '8px',
                                borderRadius: '6px',
                            }}
                            onClick={toggleDrawer(anchor, true)}
                        >
                            CHANGE TURRET WEAPON
                        </div>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
