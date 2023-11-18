import React from 'react'
import Typewriter from 'typewriter-effect'

function Type () {
  return (
    <Typewriter
      options={{
        strings: [
          'concepteur ',
          'développeur web',
          'en alternance',
          'nantais | saumurois'

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5
      }}
    />
  )
}

export default Type
