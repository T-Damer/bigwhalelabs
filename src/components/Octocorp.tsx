import { BodyText, HeaderText, PrimaryAccentText } from 'components/Text'
import Button from 'components/Button'
import Octocorp from 'icons/OctocorpLogo'
import classnames, {
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  space,
} from 'classnames/tailwind'

const textCard = classnames(
  space('space-y-6'),
  maxWidth('max-w-400'),
  justifyContent('justify-center')
)

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  margin('ml-3', 'md:mt-116', 'mt-64')
)

export default function () {
  return (
    <div className={wrapper}>
      <Octocorp />
      <div className={textCard}>
        <PrimaryAccentText color="text-secondary">OCTO-CORP</PrimaryAccentText>
        <HeaderText small>The antithesis of Big Whale Labs.</HeaderText>
        <BodyText>
          In a world where OCTO-CORP succeeds, your freedom of privacy is
          stifled. Zero Knowledge Proof and all of its benefits would be
          eradicated.
        </BodyText>
        <BodyText>
          Say no to OCTO-CORP, and endorse Big Whale Lab’s pseudonymous vision
          for the future.
        </BodyText>
        <Button
          outlined
          url={`http://twitter.com/share?url=${encodeURIComponent(
            'Check out the future of pseudonymity using #zk proofs at @bigwhalelabs 🐋 Power up your pseudonymous wallet with their new app @sealcred 🦭'
          )}`}
        >
          Endorse now
        </Button>
      </div>
    </div>
  )
}
