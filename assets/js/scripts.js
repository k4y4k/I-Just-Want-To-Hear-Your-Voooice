const speakButtons = document.querySelectorAll('.speak')

const voiceLines = {
  tant1: {
    sound: new Howl({
      src: ['../tant1.mp3']
    })
  },
  tant2: {
    sound: new Howl({
      src: '../tant2.mp3'
    })
  },
  tant3: {
    sound: new Howl({
      src: '../tant3.mp3'
    })
  },
  gen1: {
    sound: new Howl({
      src: '../gen1.mp3'
    })
  },
  gen2: {
    sound: new Howl({
      src: '../gen2.mp3'
    })
  },
  gen3: {
    sound: new Howl({
      src: '../gen3.mp3'
    })
  }
}

const playSound = e => {
  const voiceline = e.target.dataset.voiceline
  voiceLines[voiceline].sound.play()
}

speakButtons.forEach(button =>
  button.addEventListener('click', e => {
    playSound(e)
  })
)
