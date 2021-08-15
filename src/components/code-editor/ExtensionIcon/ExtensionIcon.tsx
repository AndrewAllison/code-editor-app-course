import React from 'react';
import { ReactComponent as CSSIcon } from '../../../assets/images/css3-original.svg';
import { ReactComponent as GoIcon } from '../../../assets/images/go-original.svg';
import { ReactComponent as HtmlIcon } from '../../../assets/images/html5-original.svg';
import { ReactComponent as JavaIcon } from '../../../assets/images/java-original.svg';
import { ReactComponent as JavaScriptIcon } from '../../../assets/images/javascript-original.svg';
import { ReactComponent as PHPIcon } from '../../../assets/images/php-original.svg';
import { ReactComponent as PythonIcon } from '../../../assets/images/python-original.svg';
import { ReactComponent as RubyIcon } from '../../../assets/images/ruby-original.svg';
import { ReactComponent as TypeScriptIcon } from '../../../assets/images/typescript-original.svg';
import { ReactComponent as ReactIcon } from '../../../assets/images/react-original.svg';
import { ReactComponent as DefaultIcon } from '../../../assets/images/blank-file.svg';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: { minWidth: '16px' }
}));

interface Props {
  extension?: string;
}

const ExtensionIcon = (props: Props) => {
  const classes = useStyles();
  switch (props.extension){
    case 'tsx':
    case 'jsx':
      return <ReactIcon className={classes.icon} />;
    case 'js':
      return <JavaScriptIcon className={classes.icon} />;
    case 'ts':
      return <TypeScriptIcon className={classes.icon} />;
    case 'css':
      return <CSSIcon className={classes.icon} />;
    case 'php':
      return <PHPIcon className={classes.icon} />;
    case 'java':
      return <JavaIcon className={classes.icon} />;
    case 'html':
      return <HtmlIcon className={classes.icon} />;
    case 'rb':
      return <RubyIcon className={classes.icon} />;
    case 'go':
      return <GoIcon className={classes.icon} />;
    case 'py':
      return <PythonIcon className={classes.icon} />;
    default:
      return <DefaultIcon className={classes.icon} /> ;
  }
};

export default ExtensionIcon;
