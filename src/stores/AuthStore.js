var store = {
    debug: true,
    state: {
      message: 'Bonjour !'
    },
    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction déclenchée avec', newValue)
      this.state.message = newValue
    },
    clearMessageAction () {
      if (this.debug) console.log('clearMessageAction déclenchée')
      this.state.message = ''
    }
  }

export default store;