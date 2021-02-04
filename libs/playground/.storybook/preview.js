import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
/* Dev Extreme CSS */
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

addDecorator(withKnobs);
