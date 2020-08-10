import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  index: number;
  name: string;
  hash: string;
  children: React.ReactNode;
}

export function TabContentComponent(props: Props){
  const history = useHistory();
  const [hash, setHash] = useState(history.location.hash);

  useEffect(() => {
    return history.listen(location => {
      setHash(location.hash);
    })
  })

  return(
    <div className={`tab-pane fade ${hash === "#" + props.hash ? 'active in' : ''}`} id="tab1" style={{ display: hash === "#" + props.hash ? 'block': 'none' }}>
      <div className="panel">
        <div className="panel-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

/*
<div className="tab-content">
  <div className={`tab-pane fade ${index === 0 ? 'active in' : ''}`} id="tab1">
    <InformationTab 
      handleNext={e => handleNext(e, 'information')}
      handleChange={e => handleChange(e, 'information')}
      type="create"
    />
  </div>
  <div className={`tab-pane fade ${index === 1 ? 'active in' : ''}`} id="tab2">
    <OverviewTab 
      handleNext={e => handleNext(e, 'overview')}
      handleChange={e => handleChange(e, 'overview')}
      type="create"
    />
  </div>
  <div className={`tab-pane fade ${index === 2 ? 'active in' : ''}`} id="tab3">
    <FeatureTab 
      handleNext={e => handleNext(e, 'feature')}
      handleChange={e => handleChange(e, 'feature')}
      type="create"
    />
  </div>
  <div className={`tab-pane fade ${index === 3 ? 'active in' : ''}`} id="tab4">
    <VechicleTab 
      handleNext={e => handleNext(e, 'vechicle')}
      handleChange={e => handleChange(e, 'vechicle')}
      type="create"
    />
  </div>
</div>
*/