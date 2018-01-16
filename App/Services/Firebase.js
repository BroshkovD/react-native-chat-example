import firebase from 'firebase'

class Backend {
  uid = ''
  messagesRef = null

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyBNnkQpPIdZjKQqxlkvNmIFmU-xIYjo2pQ",
      authDomain: "rn-chat-1ec9d.firebaseapp.com",
      databaseURL: "https://rn-chat-1ec9d.firebaseio.com",
      projectId: "rn-chat-1ec9d",
      storageBucket: "rn-chat-1ec9d.appspot.com",
      messagingSenderId: "129003328071"
    })

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setUid(user.uid)
      } else {
        firebase.auth().signInAnonymously().catch(error => {
          alert(error.message)
        })
      }
    })
  }
  
  setUid(value) {
    this.uid = value
  }

  getUid() {
    return this.uid
  }

  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages')
    this.messagesRef.off()

    const onReceive = data => {
      const message = data.val()
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name
        }
      })
    }
    this.messagesRef.limitToLast(20).on('child_added', onReceive)
  }

  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      })
    }
  }

  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off()
    }
  }
}

export default new Backend()