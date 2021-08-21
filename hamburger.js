// BUGS 

// Make sure document has loaded
document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
        const createIcon = document.getElementsByClassName('create-icon')[0]
        const appsIcon = document.querySelector('.apps-icon')
        const notifyIcon = document.querySelector('.notify-icon')
        const micIcon = document.querySelector('.voice-search')
        const notifyDots = document.querySelectorAll('.expand-dots')
        const lightTheme = document.querySelector('.light-theme-wrapper')
        const darkTheme = document.querySelector('.dark-theme-wrapper')



        // Function declaritions 
        function clickAwayProfile(e) { 

            // Make sure user didn't click on the dropdown itself
            const profilePopUp = document.getElementsByClassName('fixed-profile-pop-up')[0]
            let result = profilePopUp.contains(e.target)

            if (!e.target.matches('.channel-icon') && !profilePopUp.matches('.hidden') && !result) {
                const profilePopUp = document.getElementsByClassName('fixed-profile-pop-up')[0]
                profilePopUp.classList.toggle('hidden')
                window.removeEventListener('click', clickAwayProfile)

                // If appereance dropdown open -> close it
                if (!appereanceDropdown.matches('.hidden')) {
                    appereanceDropdown.classList.toggle('hidden')
                }
            }
        }

        function clickAwayNotify(e) {
            const notifyPopUp = document.querySelector('.notification-pop-up')
        
            if (!e.target.matches('.notify') && !notifyPopUp.matches('.hidden')) {
                const notifyPopUp = document.querySelector('.notification-pop-up')
                notifyPopUp.classList.toggle('hidden')
                window.removeEventListener('click', clickAwayNotify)
            }
        }

        function clickAwayCreate(e) {
            if (!createIcon.contains(e.target) && !createIcon.matches('.hidden')) {
                createIcon.classList.toggle('hidden')
                window.removeEventListener('click', clickAwayCreate)
            }
        }

        function clickAwayApps(e) {
            if (!appsIcon.contains(e.target) && !appsIcon.matches('.hidden')) {
                appsIcon.classList.toggle('hidden')
                window.removeEventListener('click', clickAwayCreate)
            }
        }



        function toggleDropdown(element, callBack, dropdown) {
            element.addEventListener('click', e => {
                // if user clicked on the dropdown menu -> do nothing
                if (dropdown.contains(e.target)) {
                    return
                } else {
                element.classList.toggle('hidden')
                window.addEventListener('click', callBack)
                }
            })
        }

        //////////////////////////////////////////////////////////////////////////////

        notifyDots.forEach(dot =>  {
            iconClick(dot)
        })

        iconClick(createIcon)
        iconClick(appsIcon)
        iconClick(notifyIcon)
        iconClick(micIcon)
        
        ///////// EVENT LISTENERS ////////////////////////////////////////

        // PROFILE POP UP
        const profilePic = document.getElementById('profile-pic')

        notifyIcon.addEventListener('click', (e) => {
            const notifyPopUp = document.querySelector('.notification-pop-up')
            notifyPopUp.classList.toggle('hidden')
            window.addEventListener('click', clickAwayNotify)
        })

        profilePic.addEventListener('click', (e) => {
            const profilePopUp = document.getElementsByClassName('fixed-profile-pop-up')[0]
            profilePopUp.classList.toggle('hidden')
            const dropDownElement = e.target
            window.addEventListener('click', clickAwayProfile)
        })

        const createDropdown = document.querySelector('.create-dropdown')
        const appsDropdown = document.querySelector('.apps-dropdown')

        toggleDropdown(createIcon, clickAwayCreate, createDropdown)
        toggleDropdown(appsIcon, clickAwayApps, appsDropdown)


        // If User has less 650px wide window add extra icons to their screens:)
        if (window.innerWidth <= 650) {
            createIcons()

            const searchIconsm = document.getElementById('search-icon')
            const micIconsm = document.querySelector('.voice-search-icon')
            iconClick(micIconsm)
            iconClick(searchIconsm)
        } else {
            // Icon BG animations
        
        }

        const appereanceDropdown = document.querySelector('.appereance-dropdown-link')
        const appereanceWrapper = document.querySelector('.dropdown-content')

        appereanceDropdown.addEventListener('click', () => {
            appereanceDropdown.classList.toggle('hidden')
        })

        // Color themes

        darkTheme.addEventListener('click', (e) => {
            
        })

        lightTheme.addEventListener('click', (e) => {
            document.body.style.setProperty('--bg-dark', 'white')
            document.querySelector('.container').style.setProperty('--bg-dark', 'white')
            document.documentElement.style.setProperty('--text-color-dark', 'black')
            document.querySelector('.video-section').style.setProperty('--bg-video-dark', 'hsl(0, 0%, 97%)')
            document.querySelectorAll('.bar')[0].style.setProperty('--bar-color-dark', 'hsl(0, 0%, 40%)')
            document.querySelectorAll('.bar')[1].style.setProperty('--bar-color-dark', 'hsl(0, 0%, 40%)')
            document.querySelectorAll('.bar')[2].style.setProperty('--bar-color-dark', 'hsl(0, 0%, 40%)')
            document.querySelector('.search-icon').style.setProperty('--color-search-btn-dark', 'hsl(0, 0%, 75%)')

            // Change the hover effect for search button
            let buttonCss = '.main-header form button:hover { background: hsl(0, 0%, 70%);}'
            let style = document.createElement('style')
            style.id = 'light-theme'

            if (style.styleSheet) {
                style.styleSheet.cssText = buttonCss
            } else {
                style.appendChild(document.createTextNode(buttonCss))
            }

            document.querySelector('head').appendChild(style)

            //
            document.querySelector('#search-bar-input').style.setProperty('--bg-search-form-dark', 'hsl(0, 0%, 96%)')

            // Add borders for search bar input field and search button

            document.querySelector('#search-bar-input').style.border = '1px solid hsl(0, 0%, 40%, 0.5)'
            document.querySelector('.search-icon').style.border = '1px solid hsl(0, 0%, 40%, 0.5)'

            // 
            document.querySelector('.active').style.setProperty('--bg-intrest-button-dark', 'black')
            document.querySelector('.active').style.setProperty('--color-intrest-button-dark', 'white')
            document.querySelector('.fixed-sidenav').style.setProperty('--bg-sidenav-dark', 'white')

            // Add new styles to all dropdowns

            let bgDropdowns = document.querySelectorAll('.bg-dropdown')
            bgDropdowns.forEach(dropdown => {
                dropdown.style.setProperty('--bg-dropdown-dark', 'white')
            })

            //
            document.querySelector('.dropdown-content').style.setProperty('--bg-lightmode-dark', 'white')

            // Change color of all the intrest buttons and add border

            let instrestButtons = document.querySelectorAll('.instest-btn')
            instrestButtons.forEach(button => {
                button.style.setProperty('--bg-link-dark-hover', 'hsl(0, 0%, 90%)')
                button.style.border = '1px solid hsl(0, 0%, 40%, 0.3)'
            })

            // Add specific color to all elements in profile dropdown

            let profileColorDrops = document.querySelectorAll('.color-profile-drop')
            profileColorDrops.forEach(drop => {
                drop.style.setProperty('--channel-links-dark', 'black')
            })

            //
            // Change the color theme text value

            document.querySelector('.color-theme-txt').textContent = 'Appereance: Light'

            //
            document.querySelector('#sidenav-active').style.setProperty('--bg-link-dark-hover', 'hsl(0, 0%, 80%)')

            // Change all hover so lightmode appropriate

            let hoverCss = `.fixed-sidenav a:hover,
                            .channel-links a:hover,
                            .channel-settings a:hover,
                            .channel-mode-option a:hover,
                            .notification-section a:hover,
                            .create-dropdown a:hover,
                            .apps-dropdown .apps-row a:hover,
                            .intrest-buttons button,
                            .appereance-dropdown-link .dropdown-content .dark-theme-wrapper:hover,
                            .appereance-dropdown-link .dropdown-content .light-theme-wrapper:hover {
                                --bg-link-dark-hover: hsl(0, 0%, 80%);
                                background: var(--bg-link-dark-hover);
                            }`

            if (style.styleSheet) {
                style.styleSheet.cssText = hoverCss
            } else {
                style.appendChild(document.createTextNode(hoverCss))
            }

            // 
            // Change icon filters for light theme
            let whiteIcons = document.querySelectorAll('.filter-white')
            let grayIcons = document.querySelectorAll('.filter-gray')

            whiteIcons.forEach(icon => {
                if (!icon.matches('.pure-white')) {
                    icon.classList.add('filter-black')
                }
            })

            grayIcons.forEach(icon => {
                icon.classList.add('filter-black')
            })

            // 
            // Change all metadata colors
            let metaDatas = document.querySelectorAll('.video-metadata')
            metaDatas.forEach(meta => {
                meta.style.setProperty('--color-video-metadata-dark', 'hsl(0, 0%, 60%)')
            })

            // 
            // Change the hove effects for metadata
            let metaCss = `.video-metadata a:hover > * {
                            --color-video-metadata-dark-hover: hsl(0, 0%, 30%);
                            color: var(--color-video-metadata-dark-hover);
                        }`

            if (style.styleSheet) {
                style.styleSheet.cssText = metaCss
            } else {
                style.appendChild(document.createTextNode(metaCss))
            }

            //
        })
        
        ////////////////////////////////////////////////////////////////////////////////////////////
    }


    // BUTTON PAGINATION
    const intrestButtons = document.querySelectorAll('.instest-btn')

    const intrestButtonsArray = Object.values(intrestButtons)

    const intrestButtonsWrapper = document.querySelector('.container')


    const listElement = document.getElementById('list')
    const paginationElement = document.getElementById('pagination')

    let currentPage = 1
    let counter = 0
    let buttonCountHistory = [0];
    let paginationArrowLeft = document.querySelector('.overflow-btn-left')
    let paginationArroRight = document.querySelector('.overflow-btn-right')
    paginationArrowLeft.dataset.listener = 'false'
    paginationArroRight.dataset.listener = 'false'
    let pageHistory = []

    function displayButtons(items, wrapper, page, start, bLeftArrow = false, bReset = false) {
        // Keep track of the maxium buttons for late
        let buttonCount = items.length
        let bLastButton = false

        // If user resizes their browser make sure to start from starting values
        if (bReset) {
            page = 1
            start = 0
            buttonCountHistory = [0]
            pageHistory = []
            currentPage = 1
            counter = 0
        }

        // store history of pages for later
        if (bLeftArrow){
            
        } else {
            pageHistory.push(page)
        }

        // Empty the wrapper
        wrapper.innerHTML = ""

        // Add Left arrow when not page 1
        if (page > 1) {
            wrapper.appendChild(paginationArrowLeft)
            // Add EL to left arrow
            // Add it if it dont have laready
            if (paginationArrowLeft.dataset.listener === 'false') {
                // Make sure not to stack Event Listeners
                paginationArrowLeft.addEventListener('click', handleELClick)
                paginationArrowLeft.dataset.listener = 'true'
            } 
        } 

        let arrayEnd = items.length
        let paginatedItems = items.slice(start, arrayEnd)

        // Make sure counter starts at the right number
        let index = buttonCountHistory.length - 1
        counter = buttonCountHistory[index]


        paginatedItems.some(element => {
            // Keep track how many buttons we added for later
            if (!bLeftArrow)
                counter++
            // Exit the loop when buttons overflowing
            wrapper.appendChild(element)
            return checkOverflow(wrapper)
        })

        // Check if last button has been rendered
        if (counter == buttonCount) {
        bLastButton = true
        }

        if(bLeftArrow) {
            // Do nothing
        } else {
            buttonCountHistory.push(counter)
        }

        if (checkOverflow(wrapper)) {
            // If the last button is shown don't show right arrow anymore
            if (!bLastButton) {
                wrapper.appendChild(paginationArroRight)
            }
            // Add EL to paginaitonArrow
            if (paginationArroRight.dataset.listener === 'false') {
                // Make sure not to stack Event Listeners
                paginationArroRight.addEventListener('click', handleRightELClick)
                paginationArroRight.dataset.listener = 'true'
            } 
        } 

        function handleRightELClick(e) {
            
            
            // Updating the page 
            page = pageHistory.length + 1
            let index = (buttonCountHistory.length - 1)
            displayButtons(items, wrapper, page, buttonCountHistory[index])
        }

        function handleELClick(e) {
            // Updating the page 
            page = pageHistory.length - 1
            pageHistory.pop()
            // Make sure the counter starts at the right place (MAKE SURE TO KEEP STARTING CONDITION THE SAME COUNTER NEVER 0)
            buttonCountHistory.pop()
            let index = page - 1

            let bLeftArrow = true
            displayButtons(items, wrapper, page, buttonCountHistory[index], bLeftArrow)
        }

    

    }

    displayButtons(intrestButtonsArray, intrestButtonsWrapper, currentPage, 0) 



    function checkOverflow(element) {
        const bOverflow = element.clientWidth < element.scrollWidth
        return bOverflow
    }

    // Check if user changes the screen size
    window.addEventListener('resize', resetDisplay)

    function resetDisplay(e) {
        displayButtons(intrestButtonsArray, intrestButtonsWrapper, currentPage, 0, false, true) 
    }


}

// Grap HTML elements
const menuButton = document.getElementsByClassName('bars')[0]
const sidenav = document.getElementsByClassName('fixed-sidenav')[0]
const videoSection = document.getElementsByClassName('video-section')[0]
const intrestButtons = document.getElementsByClassName('sidenav-margin')[0]
const classList = sidenav.classList
const icons = document.getElementsByClassName('icons')[0];

// EVENT LISTENERS

// MENU BUTTON
menuButton.addEventListener('click', (event) => {
    
    sidenav.classList.toggle('hidden')
    navbarVisibilityCheck()
    return
});

function iconClick(element) {

    element.addEventListener('mousedown', function(e) {
        if (e.target.matches('.drop')) {
            // If user clicked inside the dropdown -> do nothing
            return
        } else {
            this.style.background = 'hsl(0, 0%, 45%, .3)';
            this.addEventListener('mouseup', (e) => {
                this.style.background = 'none'
            })
        }
    
    })
    
    element.addEventListener('click', function(e) {

        if (e.target.matches('.drop')) {
            // If user clicked inside the dropdown -> do nothing
            return
        } else {
         // Styles
        this.style.border = '1px solid hsl(0, 0%, 45%)'
        this.style.background = 'hsl(0, 0%, 45%, .3)';
    
        setTimeout((e) => {
            this.style.border = '1px solid transparent'
            this.style.background = 'none'
        }, 400)   
        }
    })
}

// SEARCH ICON WITCH SMALL SCREEN > 650px
function searchIconEL() {
      // Get search-bar children
      const searchForm = document.getElementById('search-bar-form')
      const voiceSearchIcon = document.getElementById('voice-search-icon')
      const searchBar = document.getElementsByClassName('search-bar')[0]

      // Delete all the icons
      const menu = document.getElementsByClassName('logo-and-hamburger')[0]
      const iconsWrapper = document.getElementsByClassName('icons')[0]
      iconsWrapper.style.display = 'none'
      menu.style.display = 'none'

      // Make SearchBar visble;
      searchBar.style.display = 'flex'
      searchBar.style.flexGrow = '1';

      // Make SearchbarInput take all the free space

      const searchInput = document.getElementById('search-bar-input') 
      searchInput.style.width = '65vw'

      // Add back arrow icon to search bar
      // Wrap it in a div so we can add tooltip to it
      const imgWrapper = document.createElement('div')
      const img = document.createElement('img')
      imgWrapper.id = 'back-arrow-icon-wrapper'
      img.id = 'search-bar-backArrow'
      img.src = 'images/arrow_back_black_24dp.svg'

      // Add click event listener to imgWrapper
      iconClick(imgWrapper)
      
      // Add classes

      img.classList.add('filter-white')

      // Add styles 

      img.style.marginRight = '20px'
      img.style.marginLeft = '20px'
      img.style.cursor = 'pointer'
      voiceSearchIcon.style.marginLeft = '20px'


      // Append the new img to the page
      imgWrapper.appendChild(img)
      searchBar.insertBefore(imgWrapper, searchForm)

      // If user click anything else than the searchbar make it go away || TODO maybe add EL to anything else?
      // If user clisk on back arrow || Weak :(
      img.addEventListener('click', event => {
          // Revert all styles
          searchBar.style.display = 'none'
          searchBar.style.flexGrow = 0
          searchInput.style.width = '25vw'
          iconsWrapper.style.display = 'flex'
          menu.style.display = 'flex'
          imgWrapper.remove()
      }) 
}

// Width condition (returns true or false)
const width = window.matchMedia('(min-width: 850px)') 

// For removing searchBar for small screens
const width2 = window.matchMedia('(max-width: 650px)') 

// If screenSize changes call functions
width.addEventListener('change', (e) => {
    hideSideNav(width)
})

width2.addEventListener('change', (e) => {
    addIcons(width2)
})

function navbarVisibilityCheck() {
    if (classList.contains('hidden')) {
        videoSection.style.marginLeft = '0px'
        intrestButtons.style.left = 0;
    } else {
        videoSection.style.marginLeft = '250px'
        intrestButtons.style.left = '250px';
    }
}

function hideSideNav(width) {
    // If screen size is <= 800px
    if (width.matches) {
        // Do nothing
        return
    } else {
        // If screen size is > 800px Hide sidenav
        if (classList.contains('hidden')) {
            // If already hidden do not do anything
            return
        } else {
            // If not hidden hide it
            sidenav.classList.toggle('hidden')
            videoSection.style.marginLeft = '0px'
            intrestButtons.style.left = '0px';
            return
        }
    }
}

function addIcons(width) {
    // Width > 650px
    if (width.matches) {
        // Make sure searchBar is not visible
        const searchBar = document.getElementsByClassName('search-bar')[0]
        searchBar.style.display = 'none'
        createIcons()
        const searchIconsm = document.getElementById('search-icon')
        const micIconsm = document.querySelector('#voice-search-icon')
        iconClick(searchIconsm)
        iconClick(micIconsm)
    } else {
        // Get the last 2 elements in icons array and remove them

        const allIcons = document.getElementsByClassName('icon');
        const iconCount = allIcons.length
        const lastIcon = allIcons[iconCount - 1]
        const secondLastIcon = allIcons[iconCount - 2]
        lastIcon.remove()
        secondLastIcon.remove()

        // Make sure searchBar is visible
        const searchBar = document.getElementsByClassName('search-bar')[0]
        searchBar.style.display = 'flex'

        return;
    }
}


function createIcons() {
    // Create elements
    const iconDiv = document.createElement('div')
    const img = document.createElement('img')
    const iconDiv2 = document.createElement('div')
    const img2 = document.createElement('img')

    // Add classes
    img.classList.add('filter-white')
    iconDiv.classList.add('icon')
    img2.classList.add('filter-white')
    iconDiv2.classList.add('icon')

    // Add ID's
    iconDiv.id = 'search-icon'
    iconDiv2.id = 'voice-search-icon'

    // add class 
    iconDiv2.classList.add('voice-search-icon')

    // Add data attribute
    iconDiv2.dataset.tooltipVoice = 'Search with your voice'

    // Styles
    iconDiv.style.order = "1";
    iconDiv2.style.order = "2";
    // Need to add margin to second icon for whatever reason :/
    iconDiv2.style.marginRight = "20px"

    // Add img
    img.src = 'images/magnify.svg'
    img2.src = "images/mic_black_24dp.svg"

    // Append elements
    iconDiv.appendChild(img)
    icons.appendChild(iconDiv)
    iconDiv2.appendChild(img2)
    icons.appendChild(iconDiv2)

    // Add EL to searchIcon
    const searchIcon = document.getElementById('search-icon')
        searchIcon.addEventListener('click', (event) => {
            searchIconEL() 
        })
}