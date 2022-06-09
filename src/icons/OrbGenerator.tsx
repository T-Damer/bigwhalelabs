import classnames, { height, transformOrigin, width } from 'classnames/tailwind'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'

const imgWrapper = classnames(
  transformOrigin('origin-center'),
  height('h-20'),
  width('w-20')
)

export default function () {
  return (
    <div
      className={imgWrapper}
      style={scrollAnimationProvider('superOrbTransformation')}
    >
      <img src="/img/orb-generator.webp" />
    </div>
  )
}
