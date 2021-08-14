import UserFile from '../../../types/UserFile';
import { RootState } from '../../store';
import selectActiveFiles from './selectActiveFiles';

describe('selectActiveFiles', () => {
  it('should return only active files', () => {
    const userFiles: UserFile[] = [
      {
        id: '1',
        name: 'index1.js',
        relativePath: 'test/index1.js',
        code: 'console.log("Hello World!")',
        extension: 'js'
      },
      {
        id: '2',
        name: 'index2.js',
        relativePath: 'test/index2.js',
        code: 'console.log("Hello World!")',
        extension: 'js'
      },
      {
        id: '3',
        name: 'index3.js',
        relativePath: 'test/index3.js',
        code: 'console.log("Hello World!")',
        extension: 'js'
      }
    ];
    const activeFiles =  ['1', '3'];
    const state = {
      files: {
        userFiles,
        activeFiles
      },
    } as RootState;

    const expectedResult = [
      {
        id: '1',
        name: 'index1.js',
        relativePath: 'test/index1.js',
        code: 'console.log("Hello World!")',
        extension: 'js'
      },
      {
        id: '3',
        name: 'index3.js',
        relativePath: 'test/index3.js',
        code: 'console.log("Hello World!")',
        extension: 'js'
      }
    ];
    expect(selectActiveFiles(state)).toEqual(expectedResult);
  });
})
