import * as React from 'react'
import { Map } from 'immutable'

interface P {
  areas: Map<AreaId, Rect>
}

let RestrictedAreaLayer: React.ComponentClass<P> = (() => null as any) as any

if (DEV) {
  RestrictedAreaLayer = class extends React.PureComponent<P> {
    render() {
      const { areas } = this.props
      return (
        <g role="restricted-area-layer">
          {areas.map((area, areaId) =>
            <rect key={areaId} {...area} fill="red" />
          ).toArray()}
        </g>
      )
    }
  }
}

export default RestrictedAreaLayer