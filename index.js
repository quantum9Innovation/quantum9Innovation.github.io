// Under-the-hood scripts to keep everything running

// Scroll to projects
const projectScroller = document.getElementById('scroll-projects')
const content = document.getElementById('content')
projectScroller.onclick = () => { content.scrollIntoView() }

// Scroll to repos
const ossScroller = document.getElementById('scroll-oss')
const ossContent = document.getElementById('oss-content')
ossScroller.onclick = () => { ossContent.scrollIntoView() }

// Scroll to research
const researchScroller = document.getElementById('scroll-research')
const researchContent = document.getElementById('research-content')
researchScroller.onclick = () => { researchContent.scrollIntoView() }

// Scroll to top
const topScroller = document.getElementById('scroll-top')
const topAnchor = document.getElementById('nav-bar')
topScroller.onclick = () => { topAnchor.scrollIntoView() }

// Theme management
const themeSwitcher = document.getElementById('switch-theme')
const toDark = () => {
  document.body.className = 'dark'
  localStorage.setItem('theme', 'dark')
  themeSwitcher.innerHTML =
    '<span class="material-symbols-outlined">light_mode</span>'
    + '<span class="tooltip-text">Switch theme</span>'
}
const toLight = () => {
  document.body.className = ''
  localStorage.setItem('theme', '')
  themeSwitcher.innerHTML =
    '<span class="material-symbols-outlined">dark_mode</span>'
    + '<span class="tooltip-text">Switch theme</span>'
}
const theme = localStorage.getItem('theme')
if (theme === 'dark') toDark()
else toLight()
themeSwitcher.onclick = () => {
  const theme = document.body.className
  const newTheme = theme === 'dark' ? '' : 'dark'
  newTheme === 'dark' ? toDark() : toLight()
}
