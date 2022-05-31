import { LargeStrokeText } from 'components/Text'
import classnames, { margin, maxWidth, wordBreak } from 'classnames/tailwind'

const privacyWorld = classnames(
  margin('md:mt-60', 'mt-32'),
  wordBreak('break-words'),
  maxWidth('max-w-full')
)

export default function () {
  return (
    <div className={privacyWorld}>
      <LargeStrokeText>
        We’re dedicated to building a pseudonymous WORLD WHERE privacy and
        identity are owned by the human, not the corporation.
      </LargeStrokeText>
    </div>
  )
}
