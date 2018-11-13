import { StyleSheet } from 'react-native'

export const Color = {
  background: '#FFD300',
  Gradient1: '#FFD300',
  Gradient2: '#FCE67C',
  background2: '#FDF3C4',
  GradientBg1: '#FDF3C4',
  GradientBg2: '#FFFFFF'
}

const styles = StyleSheet.create({
  backgroundDefault: {
    flex: 1,
    backgroundColor: Color.background2
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%'
  }
})

export default styles
