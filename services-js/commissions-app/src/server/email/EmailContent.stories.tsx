import React from 'react';
import { storiesOf } from '@storybook/react';

// We do this from the snapshots generated by running the tests
// because we don't want to try and run the email templates in the browser.
const SNAPSHOTS = require('./__snapshots__/EmailContent.test.ts.snap');

function snapToString(name: string) {
  return JSON.parse(SNAPSHOTS[name].trim().replace(/\n/g, '\\n'));
}

storiesOf('Confirmation Emails', module)
  .add('applicant html', () => (
    <div
      dangerouslySetInnerHTML={{
        __html: snapToString('Renders email body applicant HTML 1'),
      }}
    />
  ))
  .add('applicant html, single board', () => (
    <div
      dangerouslySetInnerHTML={{
        __html: snapToString(
          'Renders email body applicant HTML, single board 1'
        ),
      }}
    />
  ))
  .add('applicant text', () => (
    <pre>{snapToString('Renders email body applicant text 1')}</pre>
  ))
  .add('policy office html', () => (
    <div
      dangerouslySetInnerHTML={{
        __html: snapToString('Renders email body policy office HTML 1'),
      }}
    />
  ))
  .add('policy office text', () => (
    <pre>{snapToString('Renders email body policy office text 1')}</pre>
  ));