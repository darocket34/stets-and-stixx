import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#e1ba66',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(17),
    marginRight: theme.spacing(0.5),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'white',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
    }
  }),
);

function LinkTab(props) {
  return (
    <StyledTab
      component={NavLink}
      to={props.href}
      {...props}
    />
  );
}

LinkTab.propTypes = {
  href: PropTypes.string.isRequired,
};

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
        role="navigation"
        selectionFollowsFocus
      >
        <LinkTab label="Home" href="/" />
        <LinkTab label="About" href="/about"/>
        <LinkTab label="Events" href="/events" />
        <LinkTab label="Pricing" href="/pricing" />
        <LinkTab label="Connect" href="/connect" />
      </StyledTabs>
    </Box>
  );
}
