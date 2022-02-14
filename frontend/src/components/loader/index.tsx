import React, { ReactNode } from 'react';
import { Text } from 'components/text';

interface LoaderProps {
  customLoader?: ReactNode;
}
export const Loader = ({ customLoader = 'Loading...' }: LoaderProps) => {
  return (
    <Text hAlign='center' vAlign='middle' size='large'>
      {customLoader}
    </Text>
  );
};
