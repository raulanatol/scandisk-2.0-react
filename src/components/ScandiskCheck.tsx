import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Colors } from '../Theme';
import { Stage, StageProp } from './stage/Stage';

const Screen = styled.div``;
const List = styled.div`
  display: grid;
  grid-template-columns: 125px 1fr;
  margin-top: 2em;
  margin-bottom: 4em;
`;
const Separator = styled.div`
  border: 1px solid ${Colors.CYAN};
`;

const STAGES: StageProp[] = [
  { name: 'Media descriptor', status: 'current' },
  { name: 'File allocation tables', status: 'pending' },
  { name: 'Directory structure', status: 'pending' },
  { name: 'File system', status: 'pending' },
  { name: 'Free space', status: 'pending' },
  { name: 'Surface scan', status: 'pending' }
];

export const ScandiskCheck: FC = () => {
  return <Screen>
    <p className="title">Microsoft ScanDisk</p>
    <Separator/>
    <p>ScanDisk is now checking the following areas of drive C:</p>
    <List>
      {STAGES.map(stage => <Stage key={stage.name} {...stage}/>)}
    </List>
    <div className="buttons">
      {/*<scandisk-button>Pause</scandisk-button>*/}
      {/*<scandisk-button href="https://twitter.com/Manz/status/1124749875315380224">More info</scandisk-button>*/}
      {/*<scandisk-button>Exit</scandisk-button>*/}
    </div>
    <Separator/>
    {/*${this.scandiskBar}*/}
  </Screen>;
};
