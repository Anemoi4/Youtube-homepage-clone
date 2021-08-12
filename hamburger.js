// BUGS 

// Make sure document has loaded
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const createIcon = document.getElementsByClassName('create-icon')[0]
        const appsIcon = document.querySelector('.apps-icon')
        const notifyIcon = document.querySelector('.notify-icon')
        const micIcon = document.querySelector('.voice-search')
        const notifyDots = document.querySelectorAll('.expand-dots')

        // Function declaritions 
        function clickAwayProfile(e) {
            
            const profilePopUp = document.getElementsByClassName('fixed-profile-pop-up')[0]
            if (!e.target.matches('.channel-icon') && !profilePopUp.matches('.hidden')) {
                const profilePopUp = document.getElementsByClassName('fixed-profile-pop-up')[0]
                profilePopUp.classList.toggle('hidden')
                window.removeEventListener('click', clickAwayProfile)
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
        
        // EVENT LISTENERS
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

        console.log(e.target)
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