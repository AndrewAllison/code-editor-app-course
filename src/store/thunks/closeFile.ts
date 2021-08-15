import { Dispatch } from "@reduxjs/toolkit"
import { removeActiveFile, setEditorActiveFile } from '../reducers/files/reducer';
import { RootState } from '../store';

const getNewActiveFile = (activeFilesIds: string[], activeFilesLength: number, fileId: string) => {
  const fileToBeRemovedIndex = activeFilesIds.indexOf(fileId);
  if (fileToBeRemovedIndex + 1 === activeFilesLength) {
    return activeFilesIds[fileToBeRemovedIndex -1];
  }
  return activeFilesIds[fileToBeRemovedIndex +1];
}

const closeFile = (fileId: string) => (dispatch: Dispatch, getState: () => RootState) => {
  const state = getState();
  const { activeFiles, editorActiveFile } = state.files;
  const activeFilesLength = activeFiles.length;
  if(activeFilesLength>= 2) {
    const newActiveFileId = getNewActiveFile(activeFiles, activeFilesLength, fileId);
    if(editorActiveFile === fileId) {
      dispatch(setEditorActiveFile(newActiveFileId));
    }
  } else {
    dispatch(setEditorActiveFile(null));
  }
  dispatch(removeActiveFile(fileId))
}

export default closeFile;
