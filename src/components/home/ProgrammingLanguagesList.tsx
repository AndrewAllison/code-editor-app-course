import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ReactComponent as CSSIcon } from '../../assets/images/css3-original.svg';
import { ReactComponent as GoIcon } from '../../assets/images/go-original.svg';
import { ReactComponent as HtmlIcon } from '../../assets/images/html5-original.svg';
import { ReactComponent as JavaIcon } from '../../assets/images/java-original.svg';
import { ReactComponent as JavaScriptIcon } from '../../assets/images/javascript-original.svg';
import { ReactComponent as PHPIcon } from '../../assets/images/php-original.svg';
import { ReactComponent as PythonIcon } from '../../assets/images/python-original.svg';
import { ReactComponent as RubyIcon } from '../../assets/images/ruby-original.svg';
import { ReactComponent as TypeScriptIcon } from '../../assets/images/typescript-original.svg';
import { ReactComponent as ReactIcon } from '../../assets/images/react-original.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: '10px',
    height: '50px',
    width: '50px'
  }
}));


const ProgrammingLanguagesList = () => {
  const classes = useStyles();

  return <div>
    <CSSIcon className={classes.icon} />
    <GoIcon className={classes.icon} />
    <HtmlIcon className={classes.icon} />
    <JavaIcon className={classes.icon} />
    <JavaScriptIcon className={classes.icon} />
    <PHPIcon className={classes.icon} />
    <PythonIcon className={classes.icon} />
    <RubyIcon className={classes.icon} />
    <TypeScriptIcon className={classes.icon} />
    <ReactIcon className={classes.icon} />
  </div>;
};

export default ProgrammingLanguagesList;
