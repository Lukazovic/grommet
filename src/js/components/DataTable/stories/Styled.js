import React from 'react';

import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { groupColumns, DATA } from './data';

export const StyledDataTable = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <DataTable
        columns={groupColumns}
        data={DATA}
        step={10}
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
        background={{
          header: { color: 'dark-3', opacity: 'strong' },
          body: ['light-1', 'light-3'],
          footer: { color: 'dark-3', opacity: 'strong' },
        }}
        border={{ body: 'bottom' }}
        groupBy={{ property: 'location', expand: ['Palo Alto'] }}
        rowProps={{
          Eric: { background: ['accent-2', 'accent-3'], pad: 'small' },
          Jet: { background: ['accent-2', 'accent-3'], pad: 'small' },
        }}
      />
    </Box>
  </Grommet>
);

StyledDataTable.storyName = 'Styled';

export default {
  title: 'Visualizations/DataTable/Styled',
};
