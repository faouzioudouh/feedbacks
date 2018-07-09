import React from 'react';
import Types from '../../Types';
import './TextField.scss';

const TextField = props => {
  return (
    <div className="TextInput">
        <input {...props} className="TextField__inupt" />
    </div>
  );
};

TextField.propTypes = {
  type: Types.string,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
