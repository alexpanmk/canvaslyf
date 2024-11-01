// import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack } from '@mantine/core';

import { Home2, Files, Logout } from 'tabler-icons-react';

import classes from './NavBar.module.css';

import { isNull } from "../../functions/functions";
// import { IconHome2 } from "@tabler/icons-react";


function NavbarLink({ icon: Icon, label, active, onClick }: any) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon color={'#FFF'} size={32} strokeWidth={1} />
      </UnstyledButton>
    </Tooltip>
  );
}

const NavItems = [
  { icon: Home2, label: 'Home', visibility: 'all' },
  { icon: Files, label: 'My Artworks', visibility: 'artist' },
  { icon: Files, label: 'Exhibitions', visibility: 'lyfAdmin' },
  { icon: Files, label: 'lyfDashboard', visibility: 'lyfAdmin' },
  // { icon: Files, label: 'Purchased Artworks' },
  // { icon: ReportMoney, label: 'Earnings' }
]

export function NavBar(props: any) {
  // const [active, setActive] = useState(0);
  const { currentView } = props;

  const user = isNull(props.user) ? { role: 'all' } : props.user;

  const links = NavItems.map((item, index) => {
    if (item.visibility === 'all' || user.role === item.visibility) {
      return (
        <NavbarLink
          {...item}
          key={index}
          active={currentView === item.label}
          onClick={() => {
            props.onChange(item.label);
            // setActive(index);
          }}
        />
      );
    }
    return null;
  });

  return (
    <nav className={classes.navbar}>
      <Center style={{ height: '100%' }}>
        <Stack style={{ gap: 20 }}>
          <Stack style={{ flex: 1 }}>
            {links}
          </Stack>
          <NavbarLink onClick={() => props.logOut()} icon={Logout} label="Logout" />
        </Stack>

      </Center>


    </nav>
  );
}
