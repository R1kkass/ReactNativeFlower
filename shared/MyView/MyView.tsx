import React from 'react'
import { View } from 'react-native'
import { Styles } from 'styled-components/native/dist/types'

interface IEventView {
    activeStyle?: Styles<any>,
    onPressOut?: () => void,
    style?: any,
    onPressIn?: () => void,
    hoverStyle?: any,
    children?: React.ReactNode
}

class EventView extends React.Component<IEventView> {
  setStyles = (styles) => {
    this.root.setNativeProps({
      style: styles,
    })
  }

  state = {
    hover: false
  }

  render() {
    const { activeStyle, hoverStyle, style, onPressIn, onPressOut, children, ...passThrough } = this.props
    return (
      <View
        ref={(component) => { this.root = component }}
        onMouseEnter={
          () => {
            this.setStyles(hoverStyle)
            this.setState({ hover: true })
          }
        }
        onMouseLeave={
          () => {
            this.setStyles(style)
            this.setState({ hover: false })
          }
        }
        onStartShouldSetResponder={() => true}
        onResponderStart={
          () => {
            this.setStyles(activeStyle)
          }
        }
        onResponderRelease={
          () => {
            this.setStyles(this.state.hover ? hoverStyle : style)
          }
        }
        style={style}
        {...passThrough}
      >{children}</View>
    )
  }
}

export default EventView