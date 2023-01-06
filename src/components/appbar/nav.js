import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import {Link} from 'react-router-dom';
import "./nav.css";

export default function Nav() {
    const [state, setState] = React.useState(false);

    const openDrawer = () => () => {
        setState(true);
    };
    const closeDrawer = () => () => {
        setState(false);
    };


    return (
        <React.Fragment>
            <Button onClick={openDrawer()} className="menubtn">MENU</Button>
            <SwipeableDrawer
                anchor="left"
                open={state}
                onClose={closeDrawer()}
                onOpen={openDrawer()}
            >
                

                <div
                    className="outerdiv"
                    role="presentation"
                    onClick={closeDrawer()}
                    onKeyDown={closeDrawer()}
                >
                    
                
                    <List>

                    <ListItem><Link className="links" to="/">HOME</Link></ListItem>
                    
                    <ListItem><Link className="links" to="/about">ABOUT</Link></ListItem>
                    
                    <ListItem><Link className="links" to="/blog">BLOGS</Link></ListItem>
                    
                    <ListItem><Link className="links" to="/newsletter">NEWSLETTERS</Link></ListItem>
                    
                    </List>

                    

                </div>

            </SwipeableDrawer>
        </React.Fragment>
    );
}