import UserFile from '../../../types/UserFile';
import { RootState } from '../../store';
import selectFileViewerData from './selectFileViewerData';

describe('selectFileViewerData', () => {
  it('should convert a list of user files to the file viewer structure', () => {
    const userFiles: UserFile[] = [
      {
        id: '1',
        name: 'index1.js',
        relativePath: 'test/index1.js',
        code: 'console.log("Hello world")',
        extension: 'js',
      },{
        id: '2',
        name: 'index2.js',
        relativePath: 'test/subfolder/index2.js',
        code: 'console.log("Hello world")',
        extension: 'js',
      }, {
        id: '3',
        name: 'index3.js',
        relativePath: 'test/index3.js',
        code: 'console.log("Hello world")',
        extension: 'js',
      },
    ];
    const state = {
      files:{
        userFiles
      }
    } as RootState;
    const expectedState = {
      id: '0',
      name: 'test',
      children: [
        {
          id: '1',
          name: 'index1.js',
          extension: 'js'
        },
        {
          id: '1',
          name: 'subfolder',
          children: [
            {
              id: '2',
              name: 'index2.js',
              extension: 'js'
            }
          ]
        },
        {
          id: '3',
          name: 'index3.js',
          extension: 'js'
        },
      ]
    }
    expect(selectFileViewerData(state)).toEqual(expectedState);
  });
});
