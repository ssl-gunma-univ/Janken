export const config = {
  name: `じゃんけん`,                // Application's name

  // logo: `logo_icon.png`,        // A filename in ~/static/

  address: '/webcui/janken2/',      // http://localhost:3000/[address]

  webApiUrl: `http://solweb.mydns.jp/webcui/janken2/api/api.php`, //`http://localhost:80/webcui/janken2/api/api.php`,

  consoleLocation: 'bottom',    // Placing the console. [left | right | top | bottom]
  toolbarLocation: 'left',    // Placing the toolbar. [left | right]
  noSpace: true,
  
  keepState: false,

  messages: {
    initialMsg: [{ text: `Please refer to the DOCUMENT on the upper right of this page for the instructions.` }],
    connectionErrorMsg: [{ text: `An error occurred while communicating with the server.` }],
    cancelRequestMsg: [{ text: `Canceled by the user.` }],
    readErrorMsg: [{ text: `An error occured while reading the file.` }]
  },

  features: {
    clear: {
      enable: true,
      icon: 'mdi-delete',
      text: 'Clear'
    },
    history: {
      enable: false,
      icon: 'mdi-history'
    },
    examples: {
      enable: false,
      icon: 'mdi-alpha-e-box'
    },
    files: {
      enable: false,
      icon: 'mdi-file-multiple',
      text: 'Examples',
      webApiUrl: '', //'http://???/webcui/???/api/files.php',
    },
    variables: {
      enable: false,
      icon: 'mdi-order-alphabetical-ascending'
    },
    sendReq: {
      enable: true,
      icon: 'mdi-play',
      text: 'Check',
      //before: (webcui) => {
      //},
      after: (webcui, result) => {
        webcui.addLine({ html: result })
      }
    }
  }
}
