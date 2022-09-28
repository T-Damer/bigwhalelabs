import classnames, {
  dropShadow,
  height,
  maxWidth,
  stroke,
  strokeWidth,
  zIndex,
} from 'classnames/tailwind'

const wrapperStyles = classnames(
  zIndex('z-10'),
  height('h-suit-mobile', 'md:h-suit'),
  maxWidth('tiny:max-w-max', 'max-w-270'),
  dropShadow('drop-shadow-primary')
)
const suitStyles = classnames(
  stroke('stroke-primary-semi-dimmed'),
  strokeWidth('stroke-1.5')
)
const faceStyles = classnames(
  stroke('stroke-tertiary'),
  strokeWidth('stroke-2')
)

export default function () {
  return (
    <svg
      viewBox="0 0 512 698"
      xmlns="http://www.w3.org/2000/svg"
      className={wrapperStyles}
    >
      <path d="M207.421 74.4736H224.526L240.263 78.2367L256 81.9999L271.737 78.2367L287.474 74.4736H304.579L316.211 46.421L355.211 45.0525L371.632 51.8946L394.211 40.9473L458.526 55.9999L477 90.2104L464.684 113.474L472.211 126.474L467.421 129.21L455.789 127.842L416.105 142.895L420.211 162.053L424.316 166.158L430.474 207.895L427.737 278.368L424.316 284.526V352.263L418.979 361.158L416.105 365.947H410.118H404.132H398.145H392.158V361.158H383.947V339.947L392.158 327.632L401.053 322.158V278.368H389.421L383.947 272.895L396.263 263.316L394.895 254.421L389.421 252.368L383.947 223.631L378.474 173.684L383.947 171.631L375.737 151.789L366.158 149.737L347 139.474L340.158 158.631L331.947 166.158V173.684L314.158 188.053L310.737 205.842H316.211V230.474L327.85 211.721L328.526 210.631L336.053 215.421L331.947 238.684L355.211 334.474V392.632L362.737 413.842L370.947 417.947L375.737 484.316L383.947 491.158L378.474 617.053L401.053 658.789L355.211 644.421H331.947V604.737V581.474L304.579 536.316L296.368 480.21H304.579V449.421L300.474 438.474L296.368 392.632L281.316 349.526L277.211 297.526L268.316 308.474H243.684L234.789 297.526L230.684 349.526L215.632 392.632L211.526 438.474L207.421 449.421V480.21H215.632L207.421 536.316L180.053 581.474V604.737V644.421H156.789L110.947 658.789L133.526 617.053L128.053 491.158L136.263 484.316L141.053 417.947L149.263 413.842L156.789 392.632V334.474L180.053 238.684L175.947 215.421L183.474 210.631L195.789 230.474V205.842H201.263L197.842 188.053L180.053 173.684V166.158L171.842 158.631L165 139.474L145.842 149.737L136.263 151.789L128.053 171.631L133.526 173.684L133.353 175.269L128.053 223.631L122.579 252.368L117.105 254.421L115.737 263.316L128.053 272.895L122.579 278.368H110.947V322.158L119.842 327.632L128.053 339.947V361.158H119.842V365.947H113.855H107.868H101.882H95.8947L93.021 361.158L87.6842 352.263V284.526L84.2632 278.368L60.3158 272.895L57.5789 336.526L41.1579 349.526V207.895L37.7368 203.789L44.5789 170.263H57.5789L63.7368 203.789L81.5263 207.895L87.6842 166.158L91.7895 162.053L95.8947 142.895L56.2105 127.842L44.5789 129.21L39.7895 126.474L47.3158 113.474L35 90.2104L53.4737 55.9999L117.789 40.9473L140.368 51.8946L156.789 45.0525L195.789 46.421L207.421 74.4736Z" />
      <path
        d="M224.526 74.4736H207.421M224.526 74.4736L240.263 78.2367M224.526 74.4736L233.5 65.5M207.421 74.4736L195.789 46.421M207.421 74.4736L165 139.474M207.421 74.4736V126.474M207.421 74.4736H195.789M287.474 74.4736H304.579M287.474 74.4736L271.737 78.2367M287.474 74.4736L278.5 65.5M304.579 74.4736L316.211 46.421M304.579 74.4736L347 139.474M304.579 74.4736V126.474M304.579 74.4736H316.211M316.211 46.421L355.211 45.0525L371.632 51.8946M316.211 46.421V74.4736M371.632 51.8946L394.211 40.9473L458.526 55.9999M371.632 51.8946L316.211 74.4736M371.632 51.8946L347 139.474M458.526 55.9999L477 90.2104L464.684 113.474M458.526 55.9999L455.789 127.842M464.684 113.474L472.211 126.474L467.421 129.21L455.789 127.842M464.684 113.474L347 139.474M464.684 113.474L455.789 127.842M455.789 127.842L416.105 142.895M416.105 142.895L420.211 162.053M416.105 142.895L375.737 151.789M420.211 162.053L424.316 166.158M420.211 162.053L383.947 171.631M424.316 166.158L430.474 207.895M424.316 166.158L401.585 188.889M430.474 207.895L427.737 278.368M430.474 207.895L401.585 188.889M427.737 278.368L424.316 284.526M427.737 278.368H401.053M424.316 284.526V352.263M424.316 284.526L401.053 278.368M424.316 352.263L418.979 361.158M424.316 352.263L401.053 322.158M424.316 352.263L392.158 342.452M424.316 352.263L400.55 334.06M392.158 361.158V365.947H398.145M392.158 361.158H383.947V339.947M392.158 361.158H398.145M392.158 361.158V342.452M383.947 339.947L392.158 327.632M383.947 339.947L392.158 342.452M392.158 327.632L401.053 322.158M392.158 327.632L400.55 334.06M401.053 322.158V278.368M401.053 278.368H389.421M401.053 278.368L396.263 263.316M389.421 278.368L383.947 272.895L396.263 263.316M389.421 278.368L396.263 263.316M396.263 263.316L394.895 254.421M394.895 254.421L389.421 252.368L383.947 223.631M394.895 254.421L383.947 223.631M383.947 223.631L378.474 173.684M378.474 173.684L383.947 171.631M378.474 173.684L401.585 188.889M383.947 171.631L375.737 151.789M375.737 151.789L366.158 149.737L347 139.474M347 139.474L340.158 158.631M347 139.474L316.211 74.4736M340.158 158.631L331.947 166.158M340.158 158.631L304.579 126.474M331.947 166.158V173.684L314.158 188.053M331.947 166.158H292.5M314.158 188.053L310.737 205.842M314.158 188.053L292.5 166.158M310.737 205.842H316.211V230.474M310.737 205.842V230.474M310.737 205.842H297.053M316.211 230.474L331.947 238.684M316.211 230.474L327.85 211.721M316.211 230.474L277.211 297.526M316.211 230.474H310.737M331.947 238.684L336.053 215.421L328.526 210.631L327.85 211.721M331.947 238.684L355.211 334.474M331.947 238.684L327.85 211.721M331.947 238.684L310.737 349.526M355.211 334.474V392.632M355.211 334.474L310.737 349.526M355.211 392.632L362.737 413.842M355.211 392.632L342.466 426.243M362.737 413.842L370.947 417.947M362.737 413.842L342.466 426.243M370.947 417.947L375.737 484.316M370.947 417.947L304.579 449.421M370.947 417.947L342.466 426.243M375.737 484.316L383.947 491.158M375.737 484.316L346.5 526M383.947 491.158L378.474 617.053M383.947 491.158L355.211 566M378.474 617.053L401.053 658.789L355.211 644.421M378.474 617.053L355.211 566M355.211 644.421L331.947 604.737M355.211 644.421H331.947V604.737M355.211 644.421V566M331.947 604.737V581.474M331.947 581.474L304.579 536.316M331.947 581.474L346.5 526M331.947 581.474L355.211 566M304.579 536.316L296.368 480.21H304.579M304.579 536.316L346.5 526M304.579 480.21V449.421M304.579 480.21L346.5 526M304.579 449.421L300.474 438.474M304.579 449.421L342.466 426.243M300.474 438.474L296.368 392.632M300.474 438.474L342.466 426.243M296.368 392.632L281.316 349.526M296.368 392.632L310.737 349.526M296.368 392.632L342.466 426.243M281.316 349.526L277.211 297.526M281.316 349.526H310.737M277.211 297.526L268.316 308.474H243.684L234.789 297.526M234.789 297.526L230.684 349.526M234.789 297.526L195.789 230.474M230.684 349.526L215.632 392.632M230.684 349.526H195.789M215.632 392.632L211.526 438.474M215.632 392.632L195.789 349.526M215.632 392.632L169.533 426.243M211.526 438.474L207.421 449.421M211.526 438.474L169.533 426.243M207.421 449.421V480.21M207.421 449.421L141.053 417.947M207.421 449.421L169.533 426.243M207.421 480.21H215.632L207.421 536.316M207.421 480.21L169.533 526M207.421 536.316L180.053 581.474M207.421 536.316L169.533 526M180.053 581.474V604.737M180.053 581.474L169.533 526M180.053 581.474L156.789 566M180.053 604.737L156.789 644.421M180.053 604.737V644.421H156.789M156.789 644.421L110.947 658.789L133.526 617.053M156.789 644.421V566M133.526 617.053L128.053 491.158M133.526 617.053L156.789 566M128.053 491.158L136.263 484.316M128.053 491.158L156.789 566M136.263 484.316L141.053 417.947M136.263 484.316L169.533 526M141.053 417.947L149.263 413.842M141.053 417.947L169.533 426.243M149.263 413.842L156.789 392.632M149.263 413.842L169.533 426.243M156.789 392.632V334.474M156.789 392.632L169.533 426.243M156.789 334.474L180.053 238.684M156.789 334.474L195.789 349.526M180.053 238.684L175.947 215.421L183.474 210.631M180.053 238.684L195.789 230.474M180.053 238.684L183.474 210.631M180.053 238.684L195.789 349.526M183.474 210.631L195.789 230.474M195.789 230.474V205.842H201.263M195.789 230.474H201.263M201.263 205.842L197.842 188.053M201.263 205.842V230.474M201.263 205.842H214.947M197.842 188.053L180.053 173.684V166.158M197.842 188.053L219 166.158M180.053 166.158L171.842 158.631M180.053 166.158H219M171.842 158.631L165 139.474M171.842 158.631L207.421 126.474M165 139.474L145.842 149.737L136.263 151.789M165 139.474L195.789 74.4736M165 139.474L140.368 51.8946M165 139.474L55.734 115.333M136.263 151.789L128.053 171.631M136.263 151.789L95.8947 142.895M128.053 171.631L133.526 173.684L133.353 175.269M128.053 171.631L91.7895 162.053M128.053 223.631L122.579 252.368L117.105 254.421M128.053 223.631L133.353 175.269M128.053 223.631L117.105 254.421M117.105 254.421L115.737 263.316M115.737 263.316L128.053 272.895L122.579 278.368M115.737 263.316L110.947 278.368M115.737 263.316L122.579 278.368M122.579 278.368H110.947M110.947 278.368V322.158M110.947 278.368L87.6842 284.526M110.947 278.368H84.2632M110.947 322.158L119.842 327.632M110.947 322.158L87.6842 352.263M119.842 327.632L128.053 339.947M119.842 327.632L111.45 334.06M128.053 339.947V361.158H119.842M128.053 339.947L119.842 342.452M119.842 361.158V365.947H113.855M119.842 361.158H101.882M119.842 361.158V342.452M87.6842 352.263V284.526M87.6842 352.263L93.021 361.158M87.6842 352.263L119.842 342.452M87.6842 352.263L111.45 334.06M87.6842 284.526L84.2632 278.368M84.2632 278.368L60.3158 272.895M84.2632 278.368L81.5263 207.895M60.3158 272.895L57.5789 336.526L41.1579 349.526M60.3158 272.895L41.1579 349.526M60.3158 272.895L63.7368 203.789M41.1579 349.526V207.895M41.1579 207.895L37.7368 203.789M41.1579 207.895L63.7368 203.789M37.7368 203.789L44.5789 170.263M37.7368 203.789L57.5789 170.263M44.5789 170.263H57.5789M44.5789 170.263L63.7368 203.789M57.5789 170.263L63.7368 203.789M63.7368 203.789L81.5263 207.895M81.5263 207.895L87.6842 166.158M81.5263 207.895L110.918 189.392M87.6842 166.158L91.7895 162.053M87.6842 166.158L110.918 189.392M91.7895 162.053L95.8947 142.895M95.8947 142.895L56.2105 127.842M56.2105 127.842L44.5789 129.21L39.7895 126.474L47.3158 113.474M56.2105 127.842L47.3158 113.474M56.2105 127.842L55.734 115.333M47.3158 113.474L35 90.2104L53.4737 55.9999M47.3158 113.474L55.734 115.333M53.4737 55.9999L117.789 40.9473L140.368 51.8946M53.4737 55.9999L55.734 115.333M140.368 51.8946L156.789 45.0525M156.789 45.0525L195.789 46.421M156.789 45.0525L195.789 74.4736M195.789 46.421V74.4736M271.737 78.2367L256 81.9999L240.263 78.2367M271.737 78.2367L279 126.474M240.263 78.2367L233 126.474M207.421 126.474H233M207.421 126.474L219 166.158M304.579 126.474H279M304.579 126.474L292.5 166.158M233 126.474H256M279 126.474H256M219 166.158L214.947 205.842M219 166.158L242.316 205.842M292.5 166.158L297.053 205.842M292.5 166.158L269.684 205.842M133.353 175.269L110.918 189.392M107.868 365.947H101.882M107.868 365.947H113.855M107.868 365.947V361.158M101.882 365.947H95.8947L93.021 361.158M101.882 365.947V361.158M113.855 365.947V361.158M101.882 361.158H93.021M404.132 365.947H398.145M404.132 365.947H410.118M404.132 365.947V361.158M398.145 365.947V361.158M410.118 365.947H416.105L418.979 361.158M410.118 365.947V361.158M398.145 361.158H418.979M119.842 342.452L111.45 334.06M392.158 342.452L400.55 334.06M310.737 230.474H297.053M201.263 230.474H214.947M256 230.474V205.842M256 230.474H242.316M256 230.474H269.684M256 205.842H242.316M256 205.842H269.684M256 205.842V126.474M283.368 230.474V205.842M283.368 230.474H269.684M283.368 230.474H297.053M283.368 205.842H269.684M283.368 205.842H297.053M228.632 230.474V205.842M228.632 230.474H242.316M228.632 230.474H214.947M228.632 205.842H242.316M228.632 205.842H214.947M242.316 230.474V205.842M214.947 230.474V205.842M269.684 230.474V205.842M297.053 230.474V205.842"
        className={suitStyles}
      />
      <circle cx="256" cy="37" r="36" className={faceStyles} />
      <path
        d="M275.861 43.7367C275.861 54.7063 266.968 63.5988 255.999 63.5988C245.029 63.5988 236.137 54.7063 236.137 43.7367C236.137 32.7672 245.029 43.7365 255.999 43.7365C266.968 43.7365 275.861 32.7672 275.861 43.7367Z"
        className={faceStyles}
      />
      <path
        d="M236.139 26.3533C236.139 21.9495 239.613 18.3795 243.898 18.3795C248.183 18.3795 251.656 21.9495 251.656 26.3533C251.656 30.7571 248.183 26.3534 243.898 26.3534C239.613 26.3534 236.139 30.7571 236.139 26.3533Z"
        className={faceStyles}
      />
      <path
        d="M260.346 26.3533C260.346 21.9495 263.82 18.3795 268.105 18.3795C272.39 18.3795 275.863 21.9495 275.863 26.3533C275.863 30.7571 272.39 26.3534 268.105 26.3534C263.82 26.3534 260.346 30.7571 260.346 26.3533Z"
        className={faceStyles}
      />
      <path d="M241.723 39.793L241.723 57.1723" className={faceStyles} />
      <path d="M246.691 41.3457L246.691 61.2078" className={faceStyles} />
      <line
        x1="252.035"
        y1="43.207"
        x2="252.035"
        y2="63.6898"
        className={faceStyles}
      />
      <path d="M256.621 43.5176L256.621 63.69" className={faceStyles} />
      <path d="M261.586 42.8965L261.586 62.7586" className={faceStyles} />
      <line
        x1="266.93"
        y1="41.3457"
        x2="266.93"
        y2="60.5871"
        className={faceStyles}
      />
      <path d="M271.516 38.8613L271.516 56.2406" className={faceStyles} />
    </svg>
  )
}
