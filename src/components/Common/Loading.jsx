import { useSelector } from 'react-redux'
import { Unless } from 'react-if'

function Loading() {
  const loading = useSelector((state) => state.loading.value)

  return (
    <Unless condition={!loading}>
      <div className="absolute inset-0 z-[9999] | bg-neutral-200 bg-opacity-50 w-[100vw] h-[100vh] | opacity-1 transition-opacity">
        <div className="balls | absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div />
          <div />
          <div />
        </div>
      </div>
    </Unless>
  )
}

export default Loading
