import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
// Help Menu
  const [openHelp, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleCloseDiag = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (openHelp) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openHelp]);
// Background Menu
  const [openBackground, setBack] = React.useState(false);
  const [scrollBack, setScrollBack] = React.useState('background');
  const handleClickBack = (scrollType) => () => {
    setBack(true);
    setScrollBack(scrollType);
  };
  const handleCloseBack = () => {
    setBack(false);
  };
  React.useEffect(() => {
    if (openBackground) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openBackground]);
// Link Menu
  const [openLinks, setLink] = React.useState(false);
  const [scrollLink, setScrollLink] = React.useState('links');
  const handleClickLink = (scrollType) => () => {
    setLink(true);
    setScrollLink(scrollType);
  };
  const handleCloseLink = () => {
    setLink(false);
  };
  React.useEffect(() => {
    if (openLinks) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openLinks]);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    a11y - accessibility for all<i className='fab fa-typeo3'/>
                </Link>
                <Button
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick1}
                >
                    <InfoOutlinedIcon 
                    fontSize="large"
                    focusable="true"
                    />
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleClickOpen('paper')}>
                        a11y?
                    </MenuItem>
                        <Dialog
                            open={openHelp}
                            onClose={handleCloseDiag}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">All about this project:</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                            <h3>What is the meaning of a11y?</h3>
                            <p>“a11y” stands for “accessibility.” It is a numeronym, with 11 representing the count of letters between the letter a and the letter y. Other numeronyms you may be familiar with include: i18n (internationalization), P2P (peer to peer), WWII (World War 2), etc.</p>
                            <h3>Disability</h3>
                            <p><a href="https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html">One in four people in the United States has a disability</a>. For many, technology built with accessibility in mind makes things easier. For people with disabilities, technology makes things possible. </p>

                            <h3>Inclusion</h3>
                            <p>Accessibility is important. Inclusion is essential.</p>
                            <p>Without representation, it is impossible to understand, much less effectively make accessible digital experiences.</p>
                            <h3>Law</h3>
                            <p>In many countries, accessibility is a right protected by law, the same way protections for people's race, religion, and gender are upheld. Depriving someone of access is illegal and immoral.</p>
                            <h3>Opportunity</h3>
                            <p>Making things accessible translates to better opportunities, as it means more people can use them. Accessible digital experiences also remove barriers. This is incredibly important for things like employment, an area where disabled people have historically faced discrimination.</p>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    <MenuItem onClick={handleClickBack('background')}>
                        Resources
                    </MenuItem>
                        <Dialog
                            open={openBackground}
                            onClose={handleCloseBack}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Background</DialogTitle>
                            <DialogContent dividers={scroll === 'background'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                                <p>The goal of this project is to provide a solution to an issue with media such as posters, images, and graphics being inaccessible to colour blind people. A team member’s parent and friend are color blind and we were inspired by the demonstrated project on poster accessibility. We decided to improve upon it, providing a quick solution to checking the color blind accessibility to graphics, posters, and other media. </p>
                                <p>This is our implementation of a web application where all can upload an image and our application will scan it and report how accessible the image is for different types of color-blindess, based on user testing. Our application will give the image a rating for Monochromacy and the three variations of Dichromacy. It will also explain how to improve the ratings for each, and link to background information on colour blindness. </p>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    <MenuItem onClick={handleClickLink('links')}>
                        Research Links
                    </MenuItem>
                        <Dialog
                            open={openLinks}
                            onClose={handleCloseLink}
                            scroll={scroll}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">Research Links</DialogTitle>
                            <DialogContent dividers={scroll === 'links'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            > 
                            <ul>
                                <li><a alt="Chicago Medicine Colour Blindness information" href="https://chicago.medicine.uic.edu/departments/academic-departments/ophthalmology-visual-sciences/our-department/media-center/eye-facts/color-blindness/">Chicago Medicine UIC</a></li>
                                <li><a alt="URMC Colour Blindness information" href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=134&contentid=526">URMC Rochester</a></li>
                                <li><a alt="SUNY Colour Blindness information" href="https://www.sunyopt.edu/news/what-it-means-to-be-color-blind-and-what-you-can-do-about-it/">Sunyopt</a></li>
                                <li><a alt="Colour Contrast Checker" href="https://contrastchecker.com/">Contrast Checker</a></li>
                                <li><a alt="Web Aim Colour Contrast Checker" href="https://webaim.org/resources/contrastchecker/">WebAIM Contrast Checker</a></li>
                            </ul>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                </Menu>
            </div>
        </nav>
    </>
  )
}

export default Navbar