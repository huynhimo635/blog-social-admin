import { useSelector } from 'react-redux'
import { If, Else, Then } from 'react-if'

function Loading() {
  const loading = useSelector((state) => state.loading.value)

  return (
    <If condition={loading}>
      <Then>
        <div className="absolute inset-0 z-[9998] | bg-neutral-200 bg-opacity-50 w-screen h-screen | opacity-1 transition-opacity">
          <div className="balls | absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div />
            <div />
            <div />
          </div>
        </div>
      </Then>
      <Else>
        <div />
      </Else>
    </If>
  )
}

export default Loading
