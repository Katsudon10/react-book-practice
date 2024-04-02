import { useState } from 'react';
import { Home, Mail, Info, AccountTree } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// hrefはLinkコンポーネントに変更する
const menu = [
    { title : 'Home', icon : Home, href: 'home.html' },
    { title : '問い合わせ', icon : Mail, href: 'contact.html' },
    { title : '会社概要', icon: Info, href: 'company.html' },
    { title : 'サイトマップ', icon: AccountTree, href: 'sitemap.html' },
]

export default function MaterialDrawer() {
    const [show, setShow] = useState(false);
    const handleDraw = () => setShow(!show);

    return (
        <>
            <Button onClick={handleDraw}>メニュー</Button>
            <Drawer anchor="left" open={show} >
                <Box sx={{height: '100vh'}} onClick={handleDraw} >
                <List>
                    {menu.map( (obj) => {
                        const Icon = obj.icon;
                        return (
                            <ListItem key={obj.title} divider>
                                <ListItemButton href={obj.href}>
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={obj.title} secondary='a'/>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
                </Box>
            </Drawer>
        </>
    );
}