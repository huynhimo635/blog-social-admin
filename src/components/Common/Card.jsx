import clsx from 'clsx'

function Card(props) {
  const { children, className } = props
  return (
    <div className={clsx('bg-main_bg p-4 rounded-md shadow-md', className && className)}>
      {children}
    </div>
  )
}

export default Card
