import { makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React, { MouseEventHandler } from 'react';
import ExtensionIcon from '../../components/code-editor/ExtensionIcon/ExtensionIcon';
import { useAppDispatch } from '../../store/hooks';
import closeFile from '../../store/thunks/closeFile';
import UserFile from '../../types/UserFile';

interface Props {
  activeFile: UserFile;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none',
  },
  fileName: {
    padding: '0px 5px',
    color: theme.palette.text.primary,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    color: theme.palette.text.primary,
    width: '12px'
  },
  icon: {
    width: '16px'
  }
}));

const CustomTabLabel = (props: Props) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { activeFile: { id: fileId, name: fileName, extension } } = props;
  const onClose = (event: any) => {
     event.stopPropagation();
     dispatch(closeFile(fileId))
  }

  return (
    <div className={classes.root}>
      <ExtensionIcon extension={extension}/>
      <div className={classes.fileName}>{fileName}</div>
      <Close className={classes.closeIcon} onClick={onClose}/>
    </div>
  );
};

export default CustomTabLabel;
