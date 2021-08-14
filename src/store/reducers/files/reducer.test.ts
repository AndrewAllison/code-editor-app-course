import { PayloadAction } from '@reduxjs/toolkit';
import UserFile from '../../../types/UserFile';
import fileReducer, { addActiveFile, initialState, removeActiveFile, setEditorActiveFile, setFiles, updateFileCode } from './reducer';

describe('files reducer', () => {
  it('should return the initial state if no known action is provided', () =>{
    expect(fileReducer(undefined, {} as PayloadAction)).toEqual(initialState);
  });
  it('should set user files when action is set files', () => {
    const userFiles: UserFile[] = [
      {
        id: '1',
        name: 'index.js',
        relativePath: 'test/index.js',
        code: 'console.log("hello world")',
        extension: '.js'
      }
    ];
    const expectedState = {
      ...initialState,
      activeFiles: [],
      userFiles
    }
    expect(fileReducer(initialState, setFiles(userFiles))).toEqual(expectedState);
  });
  it('should add a new file id when action is addActiveFile', () => {
    const fieldId = '1';
    const expectedState = {
      ...initialState,
      activeFiles: [fieldId],
    };
    expect(fileReducer(initialState, addActiveFile(fieldId))).toEqual(expectedState);
  });
  it('should remove a file id when action is removeActiveFile', () => {
    const fileId = '1';
    const modifiedInitialState = {
      ...initialState,
      activeFiles: [fileId]
    }
    const expectedState = {
      ...initialState,
      activeFiles: []
    }
    expect(fileReducer(modifiedInitialState, removeActiveFile(fileId))).toEqual(expectedState);
  });
  it('should update the code of a file when action is updateFileCode', () => {
    const payload = { newCode: 'console.log("Hello world!")', fileId: '1' };
    const modifiedState = {
      ...initialState,
      userFiles: [{
        id: '1',
        code: 'console.log("hello world")',
        name: 'index.js',
        relativePath: 'test/index.js',
        extension: 'js'
      }] as UserFile[]
    }
    const expectedState = {
      ...initialState,
      userFiles: [{
        id: '1',
        code: 'console.log("Hello world!")',
        name: 'index.js',
        relativePath: 'test/index.js',
        extension: 'js'
      }]
    }

    expect(fileReducer(modifiedState, updateFileCode(payload))).toEqual(expectedState);
  });
  it('should not update the code of a file when the id is not found during action is updateFileCode', () => {
    const payload = { newCode: 'console.log("Hello world!")', fileId: '2' };
    const modifiedState = {
      ...initialState,
      userFiles: [{
        id: '1',
        code: 'console.log("hello world")',
        name: 'index.js',
        relativePath: 'test/index.js',
        extension: 'js'
      }] as UserFile[]
    }
    const expectedState = modifiedState;
    expect(fileReducer(modifiedState, updateFileCode(payload))).toEqual(expectedState);
  });
  it('should set the editors active file when action is setEditorActiveFile', () => {
    const fileId = '1';
    const expectedState = {
      ...initialState,
      editorActiveFile: fileId
    };
    expect(fileReducer(initialState, setEditorActiveFile(fileId))).toEqual(expectedState);
  });
});
