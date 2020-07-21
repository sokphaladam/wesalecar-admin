import React, { useEffect, useState } from 'react';
import { Content } from '../../components/Content';
import { Link } from 'react-router-dom';
import { InformationTab } from './Tab/InformationTab';
import { OverviewTab } from './Tab/OverviewTab';
import { FeatureTab } from './Tab/FeatureTab';
import { VechicleTab } from './Tab/VechicleTab';

export function CarCreateScreen() {
  const [index, setIndex] = useState(0);
  const [information, setInformation] = useState(null);
  const [overview, setOverview] = useState(null);

  return (
    <Content>
      <div className="row">
        <div className="col-md-6">
          <div className="panel">
            <div className="panel-body">
              <div role="tabpanel">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li role="presentation" className={index === 0 ? 'active' : ''}>
                    <Link to="#" onClick={() => setIndex(0)}>Basic Information</Link>
                  </li>
                  <li role="presentation" className={index === 1 ? 'active' : ''}>
                    <Link to="#" onClick={() => information !== null && setIndex(1)}>Overview</Link>
                  </li>
                  <li role="presentation" className={index === 2 ? 'active' : ''}>
                    <Link to="#" onClick={() => overview !== null && setIndex(2)}>Features & Option</Link>
                  </li>
                  <li role="presentation" className={index === 3 ? 'active' : ''}>
                    <Link to="#" onClick={() => setIndex(3)}>Vehicle Information</Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane fade ${index === 0 ? 'active in' : ''}`} id="tab1">
                    <InformationTab handleNext={e => {
                      setInformation(e);
                      setIndex(1);
                    }}/>
                  </div>
                  <div className={`tab-pane fade ${index === 1 ? 'active in' : ''}`} id="tab2">
                    <OverviewTab handleNext={e => {
                      setOverview(e);
                      setIndex(2);
                    }}/>
                  </div>
                  <div className={`tab-pane fade ${index === 2 ? 'active in' : ''}`} id="tab3">
                    <FeatureTab />
                  </div>
                  <div className={`tab-pane fade ${index === 3 ? 'active in' : ''}`} id="tab4">
                    <VechicleTab />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  )
}