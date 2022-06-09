import { AccentText, PlainText } from 'components/Text'
import { useInView } from 'react-intersection-observer'
import Color from 'models/Color'
import Line from 'components/Line'
import OrbGenerator from 'icons/OrbGenerator'
import Person from 'icons/Person'
import Sphere from 'icons/Sphere'
import Stage from 'icons/Stage'
import Suit from 'icons/Suit'
import SuitReady from 'components/SuitReady'
import classnames, {
  alignItems,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  height,
  inset,
  justifyContent,
  margin,
  padding,
  position,
  space,
  width,
  zIndex,
} from 'classnames/tailwind'
import scrollAnimationProvider, {
  revealAnimation,
} from 'helpers/scrollAnimationProvider'

const wrapper = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-44')
)
const firstStage = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-7')
)

const spheresBlock = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('mb-auto', 'mt-4', 'tablet:mt-16'),
  space('space-y-4')
)
const personWithStage = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('-space-y-11')
)

const nftLine = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  space('space-x-2', 'tablet:space-x-4')
)
const nftSphereIcon = classnames(
  display('flex'),
  flexDirection('flex-row'),
  alignItems('items-center'),
  space('space-x-2')
)
const secondStage = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-7')
)
const orbGeneratorBlock = classnames(
  width('w-20'),
  height('h-20'),
  margin('mt-14', 'lg:mb-44', 'mb-8'),
  zIndex('z-40')
)
const thirdStage = classnames(
  display('flex'),
  position('relative'),
  flexDirection('flex-col'),
  alignItems('items-center'),
  space('space-y-6')
)
const happySuit = (visible: boolean) =>
  classnames(
    display('flex'),
    position('relative'),
    justifyContent('justify-center'),
    revealAnimation(visible)
  )
const personWithSpheres = display('flex')
const personWrapper = width('tiny:w-44', 'w-24')
const spheresWrapper = (visible: boolean) =>
  classnames(
    display('flex'),
    position('absolute'),
    inset('bottom-36', 'lg:left-14', 'left-8'),
    flexDirection('flex-col'),
    width('w-11'),
    space('space-y-3'),
    padding('p-2'),
    borderRadius('rounded-4xl'),
    borderColor('border-primary-semi-dimmed'),
    borderWidth('border'),
    revealAnimation(visible)
  )

type SpherePosition = 'left' | 'right'
interface NftBlockProps {
  position: SpherePosition
  small: boolean
  color: Color
}

const NftBlock = ({ position, small, color }: NftBlockProps) => {
  return (
    <div className={nftSphereIcon}>
      {position === 'left' && (
        <div className={nftLine}>
          <PlainText>NFT</PlainText>
          <Line small fromLight gradientDirection="to-right" color={color} />
        </div>
      )}
      <Sphere small={small} color={color} onLeft={position === 'left'} />
      {position === 'right' && (
        <div className={nftLine}>
          <Line small fromLight gradientDirection="to-left" color={color} />
          <PlainText>NFT</PlainText>
        </div>
      )}
    </div>
  )
}

interface PairOfNftsProps {
  position: SpherePosition
  small: boolean
  colors: Color[]
}
const PairOfNfts = ({ colors, position, small }: PairOfNftsProps) => {
  return (
    <div className={spheresBlock}>
      {colors.map((color) => NftBlock({ position, small, color }))}
    </div>
  )
}

export default function () {
  const { ref: zkWrapRef, inView: zkWrapVisible } = useInView()
  const { ref: suitWrapRef, inView: suitWrapVisible } = useInView()

  return (
    <div className={wrapper}>
      <div className={firstStage}>
        <div className={personWithStage}>
          <div className={personWithSpheres}>
            <PairOfNfts
              position="left"
              colors={['primary', 'tertiary']}
              small={true}
            />
            <div className={personWrapper}>
              <Person />
            </div>
            <PairOfNfts
              position="right"
              colors={['accent', 'secondary']}
              small={true}
            />
          </div>
          <Stage />
        </div>
        <div style={scrollAnimationProvider('walletAndStageAnimation')}>
          <PlainText>
            Wallet NFT collection:{' '}
            <AccentText color="text-accent">04</AccentText>
          </PlainText>
        </div>
      </div>
      <div className={secondStage}>
        <div className={orbGeneratorBlock}>
          <OrbGenerator />
        </div>
        <div style={scrollAnimationProvider('generatingHideAnimation')}>
          <PlainText>Generating zk proof...</PlainText>
        </div>
      </div>
      <div className={thirdStage}>
        <div className={happySuit(suitWrapVisible)} ref={suitWrapRef}>
          <Suit />
        </div>
        <SuitReady />
        <div className={spheresWrapper(zkWrapVisible)} ref={zkWrapRef}>
          <Sphere animated={false} color="accent" text="ZK" />
          <Sphere animated={false} color="primary" text="ZK" />
          <Sphere animated={false} color="secondary" text="ZK" />
          <Sphere animated={false} color="tertiary" text="ZK" />
        </div>
      </div>
    </div>
  )
}