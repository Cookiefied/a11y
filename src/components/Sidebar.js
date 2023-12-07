import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css';
import logo from '../images/a11y_circle.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '@mui/icons-material/DeleteOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

window.onload = function() {
  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    console.log(dropdown[i]); 
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
      // this bit changes the arrow to point down when the dropdown is open
      if (this.children[1].style.display === "none") {
        this.children[1].style.display = "inline-block";
        this.children[0].style.display = "none";
      }
      else {
        this.children[0].style.display = "inline-block";
        this.children[1].style.display = "none";
      }
    });
  }
}

function topicSelectHOME() {
  document.getElementsByClassName("App-header")[0].style.display = "flex";
  document.getElementsByClassName("DAW")[0].style.display = "none";
  document.getElementsByClassName("colorblindness")[0].style.display = "none";
};

function hideMain() { document.getElementsByClassName("App-header")[0].style.display = "none"; }

function topicSelectQUIZ() {
  hideDAW();
  hideMain();
  document.getElementsByClassName("App-header")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "block";
  document.getElementsByClassName("DAW1")[0].style.display = "none";
  document.getElementsByClassName("colorblindness")[0].style.display = "none";
}

function hideDAW() {
  document.getElementsByClassName("DAW")[0].style.display = "none";
  document.getElementsByClassName("DAW1")[0].style.display = "none";
  document.getElementsByClassName("DAW2")[0].style.display = "none";
  document.getElementsByClassName("DAW3")[0].style.display = "none";
  document.getElementsByClassName("DAW4")[0].style.display = "none";
}

function topicSelectDAW1() {
  hideMain();
  document.getElementsByClassName("DAW")[0].style.display = "block";
  document.getElementsByClassName("DAW1")[0].style.display = "block";
  document.getElementsByClassName("DAW2")[0].style.display = "none";
  document.getElementsByClassName("DAW3")[0].style.display = "none";
  document.getElementsByClassName("DAW4")[0].style.display = "none";
  document.getElementsByClassName("colorblindness")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "none";
};

function topicSelectDAW2() {
  hideMain();
  document.getElementsByClassName("DAW")[0].style.display = "block";
  document.getElementsByClassName("DAW2")[0].style.display = "block";
  document.getElementsByClassName("DAW1")[0].style.display = "none";
  document.getElementsByClassName("DAW3")[0].style.display = "none";
  document.getElementsByClassName("DAW4")[0].style.display = "none";
  document.getElementsByClassName("colorblindness")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "none";
};


function topicSelectDAW3() {
  hideMain();
  document.getElementsByClassName("DAW")[0].style.display = "block";
  document.getElementsByClassName("DAW3")[0].style.display = "block";
  document.getElementsByClassName("DAW2")[0].style.display = "none";
  document.getElementsByClassName("DAW1")[0].style.display = "none";
  document.getElementsByClassName("DAW4")[0].style.display = "none";
  document.getElementsByClassName("colorblindness")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "none";
};

function topicSelectDAW4() {
  hideMain();
  document.getElementsByClassName("DAW")[0].style.display = "block";
  document.getElementsByClassName("DAW4")[0].style.display = "block";
  document.getElementsByClassName("DAW2")[0].style.display = "none";
  document.getElementsByClassName("DAW3")[0].style.display = "none";
  document.getElementsByClassName("DAW1")[0].style.display = "none";
  document.getElementsByClassName("colorblindness")[0].style.display = "none";
  document.getElementsByClassName("quiz")[0].style.display = "none";
};

function topicSelectColorB() {
  hideMain();
  hideDAW();
  document.getElementsByClassName("colorblindness")[0].style.display = "block";
}

function Sidebar() {
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
        <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link></head>
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div class="Hamburger-sidebar Hamburger-bar-block Hamburger-border-right" style={{display: "none"}} id="Hamburger-Sidebar">
                </div>
                <div class="sidenav">
                  <img src={logo} className="App-logo" alt="logo" />
                  <a href="/" onClick={topicSelectHOME}>Home</a>
                  <a href="#" onClick={topicSelectQUIZ}>Quiz</a>
                  <button class="dropdown-btn">Designing Accessible Websites
                    <i class="fa fa-caret-right" style={{display: "inline-block"}}></i>
                    <i class="fa fa-caret-down" style={{display: "none"}}></i>
                  </button>
                  <div class="dropdown-container">
                    <a href="#" onClick={topicSelectDAW1}>Principle 1: Perceivability</a>
                    <a href="#" onClick={topicSelectDAW2}>Principle 2: Operability</a>
                    <a href="#" onClick={topicSelectDAW3}>Principle 3: Understandable</a>
                    <a href="#" onClick={topicSelectDAW4}>Principle 4: Robust</a>
                  </div>
                  <button class="dropdown-btn">Color Blindness
                    <i class="fa fa-caret-right" style={{display: "inline-block"}}></i>
                    <i class="fa fa-caret-down" style={{display: "none"}}></i>
                  </button>
                  <div class="dropdown-container">
                    <a href="#" onClick={topicSelectColorB}>Types of</a>
                    <a href="#">How it affects vision</a>
                  </div>
                  <button class="dropdown-btn">Reading Disorders
                    <i class="fa fa-caret-right" style={{display: "inline-block"}}></i>
                    <i class="fa fa-caret-down" style={{display: "none"}}></i>
                  </button>
                  <div class="dropdown-container">
                    <a href="https://www.w3.org/WAI/people-use-web/user-stories/#classroomstudent">Refer to Preety</a>
                    <a href="#">Types of</a>
                    <a href="#">Principles</a>
                  </div>
                  <a href="#">Text alternatives for non-text content</a>
                  <a href="#">Captions</a>
                  <a href="#">Screen Reader</a>
                  <a href="#">Text-to-Speech</a>
                  <a href="#">Screen Magnifier</a>
                  <a href="#">Pop-up and Animations Blockers</a>
                  <a href="#">Reading Assistants</a>
                  <a href="#">Consistency and Predictability</a>
                  <a href="#">Keyword Search</a>
                  <a href="#">Navigation Mechanisms</a>
                </div>
                <Link to="/" className='sidebar-logo' onClick={closeMobileMenu}>
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
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
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
                                <p>The a11y upgrades project is aimed at creating and maintaining an information-based website. The project's primary objectives are to promote accessibility awareness, and test the knowledge gained by interacting with our website.</p>
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
                                <li><a alt="Designing Accessible Websites" href="https://www.w3.org/WAI/standards-guidelines/wcag/">Designing Accessible Websites</a></li>
                                <li><a alt="Refer to Preety" href="https://www.w3.org/WAI/people-use-web/user-stories/#classroomstudent">Reading disorders</a></li>
                                <li><a alt="Types of Reading Disorders" href="https://www.w3.org/WAI/people-use-web/abilities-barriers/#cognitive">Types Of</a></li>
                                <li><a alt="Quick reference for WCAG standards" href="https://www.w3.org/WAI/WCAG21/quickref/">WCAG Principles</a></li>
                                <li><a alt="SeeColor Project, a colorblind image detector" href="https://seecolor-unt.web.app/">SeeColor</a></li>
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

export default Sidebar
