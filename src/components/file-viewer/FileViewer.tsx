import { makeStyles } from '@material-ui/core';
import { Folder, FolderOpen } from '@material-ui/icons';
import { TreeItem, TreeView } from '@material-ui/lab';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import selectFileViewerData from '../../store/selectors/selectFileViewerData/selectFileViewerData';
import openFile from '../../store/thunks/openFiles';
import FileViewerStructure from '../../types/FileViewerStructure';
import ExtensionIcon from '../code-editor/ExtensionIcon/ExtensionIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0p 10px 10px',
    height: '100%',
    width: '100%',
  },
  treeItem: {
    padding: '2px',
    color: theme.palette.text.primary,
  },
  emptyMessage: {
    color: theme.palette.text.primary,
  },
}));

const FileViewer = () => {
  const classes = useStyles();
  const fileViewerData = useAppSelector(selectFileViewerData);
  const dispatch = useAppDispatch();

  const onSelectNode = (node: FileViewerStructure) => {
    dispatch(openFile(node));
  };

  const renderTree = (node: FileViewerStructure) => {
    const { id: nodeId, name: nodeName, extension: nodeExtension } = node;
    return (
      <TreeItem
        className={classes.treeItem}
        key={nodeId}
        label={nodeName}
        nodeId={nodeId}
        endIcon={<ExtensionIcon extension={nodeExtension}/>}
        onDoubleClick={() => onSelectNode(node)}
      >
        {Array.isArray(node.children) ? node.children.map(node => renderTree(node)) : null}
      </TreeItem>);
  };

  if (!Object.keys(fileViewerData).length) {
    return <div className={classes.emptyMessage}>No files.</div>;
  }

  return (<TreeView
    className={classes.root}
    defaultCollapseIcon={<FolderOpen />}
    defaultExpandIcon={<Folder />}
  >
    {renderTree(fileViewerData)}
  </TreeView>);
};

export default FileViewer;
