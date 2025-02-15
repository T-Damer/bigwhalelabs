import {
  TDropShadow,
  TTextAlign,
  TTextColor,
  backgroundClip,
  backgroundImage,
  classnames,
  content,
  dropShadow,
  fontFamily,
  fontSize,
  fontWeight,
  gradientColorStops,
  letterSpacing,
  lineHeight,
  position,
  textAlign,
  textColor,
  textDecoration,
  textOverflow,
  textTransform,
  zIndex,
} from 'classnames/tailwind'
import { useInView } from 'react-intersection-observer'
import ChildrenProp from 'models/ChildrenProp'
import classNamesToString from 'helpers/classNamesToString'
import scrollAnimationProvider from 'helpers/scrollAnimationProvider'
import useBreakpoints from 'hooks/useBreakpoints'

const foldText = classnames(
  fontFamily('font-primary'),
  fontSize('text-2xl', 'md:text-3xl'),
  lineHeight('leading-8', 'md:leading-10'),
  fontWeight('font-bold'),
  textColor('text-transparent'),
  backgroundImage('bg-gradient-to-r'),
  backgroundClip('bg-clip-text'),
  gradientColorStops('from-secondary', 'to-accent')
)
export function FoldText({ children }: ChildrenProp) {
  return <span className={foldText}>{children}</span>
}

const largeStrokeTextAccent = classnames(
  textColor('text-transparent'),
  textOverflow('text-clip'),
  fontWeight('font-bold'),
  textAlign('text-justify'),
  textTransform('uppercase'),
  fontFamily('font-primary'),
  fontSize('text-3xl', 'tiny:text-5xl', 'md:!text-7xl', 'lg:!text-8xl'),
  lineHeight('leading-10', 'md:leading-12')
)
export function LargeStrokeText({
  children,
  small,
}: ChildrenProp & { small?: boolean }) {
  const { inView, ref } = useInView()

  return (
    <h1
      ref={ref}
      style={scrollAnimationProvider('strokeScroll', inView)}
      className={classNamesToString(
        largeStrokeTextAccent,
        small ? 'stroke-text-small' : 'stroke-text'
      )}
    >
      {children}
    </h1>
  )
}

const bodyText = (large?: boolean, bold?: boolean, center?: boolean) =>
  classnames(
    textColor('text-formal-accent'),
    lineHeight('leading-6'),
    fontSize(large ? 'text-lg' : 'text-base'),
    fontWeight(bold ? 'font-bold' : 'font-normal'),
    textAlign(center ? 'text-center' : 'text-left')
  )
export function BodyText({
  bold,
  center,
  children,
  large,
}: ChildrenProp & {
  large?: boolean
  bold?: boolean
  textSize?: string
  center?: boolean
}) {
  return <p className={bodyText(large, bold, center)}>{children}</p>
}

const primaryAccentText = (color: TTextColor) =>
  classnames(
    textColor(color),
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    lineHeight('leading-11'),
    fontSize('text-4xl')
  )
export function PrimaryAccentText({
  children,
  color,
}: ChildrenProp & {
  color: TTextColor
}) {
  return <h3 className={primaryAccentText(color)}>{children}</h3>
}

const accentText = (color: TTextColor, shadow?: TDropShadow) =>
  classnames(textColor(color), dropShadow(shadow))
export function AccentText({
  children,
  color,
  shadow,
}: ChildrenProp & {
  color: TTextColor
  shadow?: TDropShadow
}) {
  return <span className={accentText(color, shadow)}>{children}</span>
}

const headerText = (textSize?: string, center?: boolean) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    textColor('text-formal-accent'),
    fontSize(
      textSize === 'small'
        ? 'text-2xl'
        : textSize === 'base'
        ? 'text-3xl'
        : 'text-4xl'
    ),
    lineHeight(
      textSize === 'small'
        ? 'leading-8'
        : textSize === 'base'
        ? 'leading-10'
        : 'leading-11'
    ),
    textAlign(center ? 'text-center' : undefined)
  )
export function HeaderText({
  center,
  children,
  textSize,
}: ChildrenProp & { textSize?: string; center?: boolean }) {
  return <h2 className={headerText(textSize, center)}>{children}</h2>
}

const plainText = (position: TTextAlign) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-normal'),
    fontSize('text-xs'),
    lineHeight('leading-4'),
    textAlign(position)
  )
export function PlainText({
  children,
  position = 'text-left',
}: ChildrenProp & { position?: TTextAlign }) {
  return <span className={plainText(position)}>{children}</span>
}

const extraBoldText = (
  small?: boolean,
  extraLeading?: boolean,
  trackingExtra?: boolean
) =>
  classnames(
    fontWeight('font-bold', 'md:font-extrabold'),
    fontSize(
      extraLeading ? 'text-2.5xl' : small ? 'text-xs' : 'text-xl',
      'md:text-2.5xl'
    ),
    lineHeight(
      extraLeading ? 'leading-8' : small ? 'leading-3' : 'leading-7',
      extraLeading ? 'md:leading-10' : 'md:leading-8'
    ),
    textColor('text-primary-dark'),
    textTransform('uppercase'),
    letterSpacing(trackingExtra ? 'tracking-extra' : undefined)
  )
export function ExtraBoldText({
  children,
  extraLeading,
  small,
  trackingExtra,
}: ChildrenProp & {
  small?: boolean
  extraLeading?: boolean
  trackingExtra?: boolean
}) {
  return (
    <span className={extraBoldText(small, extraLeading, trackingExtra)}>
      {children}
    </span>
  )
}

const retroText = (extraSmall?: boolean) =>
  classnames(
    fontFamily('font-primary'),
    fontWeight('font-bold'),
    fontSize(extraSmall ? 'text-6xl' : 'text-7xl', 'md:text-9xl'),
    lineHeight('leading-12', 'md:leading-15'),
    textAlign('text-center'),
    textColor('text-transparent'),
    backgroundClip('bg-clip-text', 'before:bg-clip-text'),
    backgroundImage('bg-retro', 'before:bg-metallic'),
    textTransform('uppercase'),
    zIndex('before:-z-10'),
    position('before:absolute'),
    content('before:content-retro'),
    dropShadow('before:drop-shadow-retro')
  )
export function RetroText({ children }: ChildrenProp) {
  const { xs } = useBreakpoints()
  return (
    <span
      className={classNamesToString(retroText(xs), 'retro-text')}
      data-text={children}
    >
      {children}
    </span>
  )
}

const linkText = (tertiary?: boolean) =>
  classnames(
    lineHeight('leading-6'),
    fontSize('text-base'),
    textDecoration('no-underline', 'hover:underline'),
    textColor(
      tertiary ? 'hover:text-tertiary' : 'text-formal-accent',
      tertiary ? 'focus:text-tertiary-dark' : 'focus:text-primary'
    )
  )
export function LinkText({
  children,
  tertiary,
  url,
}: ChildrenProp & { url: string; tertiary?: boolean }) {
  return (
    <a className={linkText(tertiary)} href={url} target="_blank">
      {children}
    </a>
  )
}

const sphereText = classnames(
  fontWeight('font-bold'),
  textColor('text-primary-dark'),
  textAlign('text-center'),
  textTransform('uppercase')
)
export function SphereText({ children }: ChildrenProp) {
  return <p className={sphereText}>{children}</p>
}
