const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const url = require('url')

let mainWindow

app.once('ready', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize

  const windowWidth = 300
  const windowHeight = 300

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    x: width - windowWidth - 50,
    y: height - windowHeight - 50,
    resizable: false,
    alwaysOnTop: true,
    titleBarStyle: 'hidden-inset',
    backgroundColor: "#111",
    show: false,
    title: "Votest App",
    // icon: "",
  })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
})
