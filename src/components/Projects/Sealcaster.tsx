import { AccentText } from 'components/Text'
import { SealcasterBackground } from 'components/Backgrounds'
import ProjectBlock from 'components/Projects/ProjectBlock'
import SealcasterLogo from 'icons/SealcasterLogo'

const SealcasterDescription = () => (
  <>
    <AccentText color="text-quaternary">Sealcaster</AccentText> allows users of
    Farcaster to cast on the platform 100% anonymously.
  </>
)

export default function () {
  return (
    <ProjectBlock
      logo={<SealcasterLogo />}
      titleColor="text-quaternary"
      titleText="Sealcaster"
      subtitle="Cast anonymously on Farcaster using a ZK burner wallet"
      description={<SealcasterDescription />}
      buttonTitle="Build your burner wallet"
      buttonUrl="https://sealcaster.xyz/"
      imageSource="img/sealcaster-badge.svg"
      additionalBackground={<SealcasterBackground />}
    />
  )
}
