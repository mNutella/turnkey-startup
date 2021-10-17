import icons from './icons'

const Icon = ({
  classNameWrapper,
  className,
  name = 'default',
  fill = 'none',
  onClick
}) => {
  if (!name) return null

  const { viewBox, paths } = icons[name]

  return (
    <div className={classNameWrapper}>
      <svg
        className={className}
        viewBox={viewBox}
        fill={fill}
        onClick={onClick}
      >
        {paths.map((item, index) => (
          <path key={index} {...item} />
        ))}
      </svg>
    </div>
  )
}

export default Icon
