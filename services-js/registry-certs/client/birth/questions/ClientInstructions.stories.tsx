import React from 'react';
import { storiesOf } from '@storybook/react';

import ClientInstructions from './ClientInstructions';

storiesOf('Birth/Question Components/ClientInstructions', module).add(
  'default',
  () => (
    <div className="b-c b-c--hsm">
      <ClientInstructions handleStepBack={() => {}} />
    </div>
  )
);
