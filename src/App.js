import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { ModalWrapper, InlineLoading, Dropdown } from 'carbon-components-react';
import {
  Compare16,
  Number_132,
  Number_232,
  Number_332,
  Checkmark32,
} from '@carbon/icons-react';

const props = () => ({
  status: 'active',
  iconDescription: 'Active loading indicator',
  description: 'Loading data...',
  successDelay: 1500,
});

const sideInfo = {
  service: 'LMi',
  grp: 'RDOP',
  app: 'DEMO',
  rls: 'BASE',
};

const contentInfo = {
  step1: {
    banner: <Number_132 />,
    info: '"From" environment:',
    step: <Checkmark32 />,
  },
  step2: {
    banner: <Number_232 />,
    info: 'Deployment profile:',
    step: <Checkmark32 />,
  },
  step3: {
    banner: <Number_332 />,
    info: 'Deployment step to auto-start:',
    step: <Checkmark32 />,
  },
};

class SidePanel extends Component {
  render() {
    return (
      <div className="side_content">
        <div className="side_key">
          <span>Service</span>
          <p className="side_key_info">{sideInfo.service}</p>
        </div>
        <div className="side_key">
          <span>Group</span>
          <p className="side_key_info">{sideInfo.grp}</p>
        </div>
        <div className="side_key">
          <span>Application</span>
          <p className="side_key_info">{sideInfo.app}</p>
        </div>
        <div className="side_key">
          <span>Release</span>
          <p className="side_key_info">{sideInfo.rls}</p>
        </div>
        <div>
          <InlineLoading {...props()} />
        </div>
      </div>
    );
  }
}

const envs = [
  {
    id: 'env-itg',
    label: 'ITG',
  },
  {
    id: 'env-qua',
    label: 'QUA',
  },
  {
    id: 'env-PDN',
    label: 'PDN',
  },
];

const profs = [
  {
    id: 'prf-01',
    label: 'dsfsfsfsfsf',
  },
  {
    id: 'prf-02',
    label: 'rrrrrr-grg',
  },
  {
    id: 'prf-03',
    label: 'wewewe',
  },
  {
    id: 'prf-04',
    label: 'wewerrrrwe',
  },
  {
    id: 'prf-05',
    label: 'ghhhhhhhh',
  },
];

const steps = [
  {
    id: 'stp-01',
    label: 'Extract',
  },
  {
    id: 'stp-02',
    label: 'Send',
  },
  {
    id: 'stp-03',
    label: 'Receive',
  },
  {
    id: 'stp-04',
    label: 'Install',
  },
];

class DeployContent extends Component {
  render() {
    return (
      <div className="deploy_content">
        <div className="deploy_content_title">
          <h4>
            Complete the following steps to submit an ad hoc deployment for the
            selected release
          </h4>
        </div>
        <div className="deploy_content_steps">
          <div className="deploy_c_step1">
            <div className="step_area_banner ">{contentInfo.step1.banner}</div>
            <div className="step_area_info ">{contentInfo.step1.info}</div>
            <div className="step_area_selector">
              <Dropdown
                ariaLabel="Dropdown"
                id="deploy-step1"
                items={envs}
                label="Select"
                size="sm"
                // titleText={contentInfo.step1.info}
              />
            </div>
            <div className="step_area_status">{contentInfo.step1.step}</div>
          </div>
          <div className="deploy_c_step2">
            <div className="step_area_banner ">{contentInfo.step2.banner}</div>
            <div className="step_area_info ">{contentInfo.step2.info}</div>
            <div className="step_area_selector">
              <Dropdown
                ariaLabel="Dropdown"
                id="deploy-step1"
                items={profs}
                label="Select"
                size="sm"
                // titleText={contentInfo.step2.info}
              />
            </div>
            <div className="step_area_status">{contentInfo.step1.step}</div>
          </div>
          <div className="deploy_c_step3">
            <div className="step_area_banner ">{contentInfo.step3.banner}</div>
            <div className="step_area_info">{contentInfo.step3.info}</div>
            <div className="step_area_selector">
              <Dropdown
                ariaLabel="Dropdown"
                id="deploy-step1"
                items={steps}
                label="Select"
                size="sm"
                // titleText={contentInfo.step3.info}
              />
            </div>
            <div className="step_area_status">{contentInfo.step1.step}</div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          {/* <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch> */}
        </Content>
        <ModalWrapper
          buttonTriggerText="Deploy"
          modalHeading="Deploy"
          modalLabel=""
          primaryButtonText="Deploy"
          secondaryButtonText="Cancel">
          <div className="deploy_main">
            <SidePanel />
            <DeployContent />
          </div>
        </ModalWrapper>
      </>
    );
  }
}

export default App;
