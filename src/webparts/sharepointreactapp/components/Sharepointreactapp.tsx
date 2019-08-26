import * as React from 'react';
import styles from './Sharepointreactapp.module.scss';
import { ISharepointreactappProps } from './ISharepointreactappProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Sharepointreactapp extends React.Component<ISharepointreactappProps, {}> {
  public render(): React.ReactElement<ISharepointreactappProps> {
    return (
      <h1>Welcome to SharePoint React Tutorial</h1>
    );
  }
}
