import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';

import { Home2, Files, Logout, ReportMoney } from 'tabler-icons-react';
import classes from './NavBar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}


function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon color={'#FFF'} size={48} strokeWidth={1} />
      </UnstyledButton>
    </Tooltip>
  );
}

const NavItems = [
  { icon: Home2, label: 'Home' },
  { icon: Files, label: 'My Artworks' },
  { icon: Files, label: 'Purchased Artworks' },
  { icon: ReportMoney, label: 'Earnings' }
]

export function NavBar() {
  const [active, setActive] = useState(0);

  const links = NavItems.map((item, index) => (
    <NavbarLink
      {...item}
      key={item.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center style={{ height: '100%' }}>
        <Stack style={{ gap: 20 }}>
          <Stack style={{ flex: 1 }}>
            {links}
          </Stack>
          <NavbarLink icon={Logout} label="Logout" />
        </Stack>

      </Center>


    </nav>
  );
}
