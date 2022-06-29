import clsx from 'clsx'
import { If, Else, Then } from 'react-if'

function Grid(props) {
  const { children, className, col, container, gap } = props

  return (
    <If condition={container}>
      <Then>
        <div className={clsx('grid grid-cols-1 gap-4', gap && gap, className && className)}>
          {children}
        </div>
      </Then>
      <Else>
        <div className={clsx(col && `col-span-${col}`, className && className)}>{children}</div>
      </Else>
    </If>
  )
}

export default Grid
