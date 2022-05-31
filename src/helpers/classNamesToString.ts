import { TTailwindString } from 'classnames/tailwind'

type AllowedExtraClassnames =
  | 'stroke-text'
  | 'stroke-text-small'
  | 'retro-text'
  | '-my-12'

export default function (
  ...classNames: (AllowedExtraClassnames | TTailwindString | undefined | null)[]
): string {
  return classNames.filter((s) => !!s).join(' ')
}