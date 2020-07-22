import React, { useState, useEffect } from 'react';
import { Content } from '../../components/Content';
import { useFirebase, isEmpty } from 'react-redux-firebase';
import { useHistory, Link, useRouteMatch } from 'react-router-dom';
import { BasicInformationType, OverviewType, FeatureType, VechicleType } from '../../libs/DataType';
import { InformationTab } from './Tab/InformationTab';
import { OverviewTab } from './Tab/OverviewTab';
import { FeatureTab } from './Tab/FeatureTab';
import { VechicleTab } from './Tab/VechicleTab';

export function CarEditScreen(){
  const firebase = useFirebase();
  const history = useHistory();
  const match: any = useRouteMatch();
  const [index, setIndex] = useState(0);
  const [information, setInformation] = useState<BasicInformationType>({});
  const [overview, setOverview] = useState<OverviewType>({});
  const [feature, setFeature] = useState<FeatureType>({});
  const [vechicle, setVechicle] = useState<VechicleType>({});
  const [load, setLoad] = useState(true);
  
  const handleNext = async (data: any, type: 'information' | 'overview' | 'feature' | 'vechicle') => {
    if(type === 'information'){
      setInformation(data);
      setIndex(1);
    }
    else if(type === 'overview'){
      setOverview(data);
      setIndex(2);
    }
    else if(type === 'feature'){
      setFeature(data);
      setIndex(3);
    }
    else{
      const data = {
        ...information,
        overview,
        feature,
        vechicle,
        published: true,
        created: Date.now()
      }
      await firebase.firestore().collection('cars').doc().set(data);
      history.push('/cars')
    }
  }

  const handleChange = (data: any, type: 'information' | 'overview' | 'feature' | 'vechicle') => {
    if(type === 'information'){
      setInformation(data);
    }
    else if(type === 'overview'){
      setOverview(data);
    }
    else if(type === 'feature'){
      setFeature(data);
    }
    else{
      setVechicle(data);
    }
  }

  useEffect(()=>{
    if(load){
      getCar();
    }
  })

  const getCar = async () => {
    const snap = await firebase.firestore().collection('cars').doc(match.params.id).get();
    await setInformation({
      image: snap.data()!.image,
      price: snap.data()!.price,
      title: snap.data()!.title,
      type: snap.data()!.type,
      year: snap.data()!.year
    });
    await setOverview({...snap.data()!.overview});
    await setFeature({...snap.data()!.feature});
    await setVechicle({...snap.data()!.vechicle});
    await setLoad(false);
  }

  return(
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
                    <Link to="#" onClick={() => !isEmpty(information) && setIndex(1)}>Overview</Link>
                  </li>
                  <li role="presentation" className={index === 2 ? 'active' : ''}>
                    <Link to="#" onClick={() => !isEmpty(overview) && setIndex(2)}>Features & Option</Link>
                  </li>
                  <li role="presentation" className={index === 3 ? 'active' : ''}>
                    <Link to="#" onClick={() => !isEmpty(feature) && setIndex(3)}>Vehicle Information</Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane fade ${index === 0 ? 'active in' : ''}`} id="tab1">
                    <InformationTab 
                      handleNext={e => handleNext(e, 'information')}
                      handleChange={e => handleChange(e, 'information')}
                      data={information}
                    />
                  </div>
                  <div className={`tab-pane fade ${index === 1 ? 'active in' : ''}`} id="tab2">
                    <OverviewTab 
                      handleNext={e => handleNext(e, 'overview')}
                      handleChange={e => handleChange(e, 'overview')}
                      data={overview}
                   />
                  </div>
                  <div className={`tab-pane fade ${index === 2 ? 'active in' : ''}`} id="tab3">
                    <FeatureTab 
                      handleNext={e => handleNext(e, 'feature')}
                      handleChange={e => handleChange(e, 'feature')}
                      data={feature}
                    />
                  </div>
                  <div className={`tab-pane fade ${index === 3 ? 'active in' : ''}`} id="tab4">
                    <VechicleTab 
                      handleNext={e => handleNext(e, 'vechicle')}
                      handleChange={e => handleChange(e, 'vechicle')}
                      data={vechicle}
                    />
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