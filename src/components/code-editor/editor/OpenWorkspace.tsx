import { Button, makeStyles } from '@material-ui/core';
import React, { AriaAttributes, DOMAttributes, useRef } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import readFiles from '../../../store/thunks/readFiles';
import { commonColors } from '../../../themes/colors';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    color: commonColors.white,
  },
  input: {
    display: 'none',
  },
}));

const OpenWorkspace = () => {
  const classes = useStyles();
  const directoryInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const onClick = () => {
    directoryInputRef.current?.click();
  };

  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current?.files as FileList;
      await dispatch(readFiles(files));
    } catch (e) {
      console.error(e);
    }
  };

  return <div className={classes.root}>
    <Button
      className={classes.button}
      onClick={onClick}
    >
      Open Workspace
    </Button>
    <input
      type="file"
      className={classes.input}
      directory=""
      webkitdirectory=""
      ref={directoryInputRef}
      onChange={onFilesUploaded}
    />
  </div>;
};

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

export default OpenWorkspace;
