import { makeStyles } from '@material-ui/core';
import React from 'react';
import UserFile from '../../types/UserFile';

interface Props {
  activeFile: UserFile;
  editorActiveFile: string | null;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const CustomTabPanel = (props: Props) => {
  const classes = useStyles();
  const { activeFile: { id: activeFileId }, editorActiveFile } = props;
  return <div
    className={classes.root}
    role="tabpanel"
    hidden={editorActiveFile !== activeFileId}
  >
    Monaco Code Editor
  </div>;
};

export default CustomTabPanel;
