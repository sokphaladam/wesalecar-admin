import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

interface Props {
  selectDefault: number;
  children: React.ReactNode[];
}

export function TabComponent(props: Props) {
  const history = useHistory();
  const [hash, setHash] = useState(history.location.hash);

  useEffect(() => {
    return history.listen((location) => {
      setHash(location.hash);
    });
  });

  return (
    <div className="ui grid">
      <div className="two wide column">
        <div id="tab" className="ui vertical pointing menu large">
          {props.children.map((child: any) => {
            return (
              <Link
                to={"#" + child.props.hash}
                className={
                  hash === "#" + child.props.hash ? "active item" : "item"
                }
              >
                {child.props.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="twelve wide stretched column">{props.children}</div>
    </div>
  );
}

/*
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
*/
