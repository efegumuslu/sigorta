/**
 * Wrap ActionSheetIOS Api as a component.
 * @see http://facebook.github.io/react-native/docs/actionsheetios.html
 */

import React from 'react'
import { ActionSheetIOS } from 'react-native'
import optionsSchema from './options'

class ActionSheet extends React.Component {
  // shold not update whenever, because nothing rendered

  show (options_arg) {
    const props = this.props
    const options = {}
    optionsSchema.forEach((name) => {
      const value = props[name]
      if (typeof value !== 'undefined') {
        options[name] = value
      }
    })
    const callback = options.onPress
    delete options.onPress
    options.options = options_arg;
    ActionSheetIOS.showActionSheetWithOptions(options, callback)
  }

  // need not render anything
  render () {
    return null
  }
}

export default ActionSheet
