import { makeStyles } from '@material-ui/core';
import React from 'react';
import FileViewer from '../../components/file-viewer/FileViewer';
import EditorContainer from '../../components/code-editor/editor-container/EditorContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'centre',
    alignItems: 'centre',
    backgroundColor: theme.palette.background.default,
  },
  fileViewer: {
    display: 'flex',
    flex: 1,
    height: '100%',
    alignItems: 'centre',
    justifyContent: 'center',
    borderRight: '1px dashed black',
    maxWidth: '300px',
    overflow: 'auto',
  },
  codeEditorContainer: {
    flex: 3,
    height: '100%',
  },
}));

const CodeEditor = () => {
  const classes = useStyles();

  return <div className={classes.root}>
    <div className={classes.fileViewer}>
      <FileViewer/>
    </div>
    <div className={classes.codeEditorContainer}>
      <EditorContainer />
    </div>
  </div>;
};

export default CodeEditor;
