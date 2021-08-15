import { debounce, makeStyles } from '@material-ui/core';
import Editor from '@monaco-editor/react';
import React, { useCallback, useRef, useState } from 'react';
import supportedExtensions from '../../../constants/supportedExtensions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { updateFileCode } from '../../../store/reducers/files/reducer';
import UserFile from '../../../types/UserFile';
import Loading from '../../common/Loading';

interface Props {
  activeFile: UserFile;
}

const CustomMonacoEditor = (props: Props) => {
  const {
    activeFile: { id: fileId, extension, code: originalCode },
  } = props;
  const darkMode = useAppSelector(state => state.darkMode);
  const [code, setCode] = useState(originalCode);
  const language = supportedExtensions[extension];
  const dispatch = useAppDispatch();

  const debounceSave = useCallback(
    debounce((fileId: string, newCode: string) => {
      dispatch(updateFileCode({ fileId, newCode }));
    }, 1000), []
  )

  const onChange = (newCode = '') => {
    setCode(newCode);
    debounceSave(fileId, newCode);
  }

  return (<>
    <pre>
      <code>{code}</code>
    </pre>
    <Editor
      width="100%"
      height="100%"
      defaultLanguage={language}
      theme={darkMode ? 'vs-dark' : 'light'}
      defaultValue={originalCode}
      value={code}
      loading={<Loading />}
      onChange={onChange}
    />
  </>);
};

export default CustomMonacoEditor;
