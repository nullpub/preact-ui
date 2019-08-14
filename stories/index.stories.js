/** @jsx h */
// @ts-check
import { initial, pending, refresh, replete } from '@nll/datum/es6/Datum';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/preact';
import { h } from 'preact';

import { Datum } from '../src/components/Datum';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Datum')} />
));

storiesOf('Datum', module)
  .add('with initial', () => <Datum datum={initial} />)
  .add('with pending', () => <Datum datum={pending} />)
  .add('with refresh', () => <Datum datum={refresh({ hello: 'world' })} />)
  .add('with replete', () => <Datum datum={replete({ hello: 'world' })} />);
