import React, { memo } from 'react';

interface IExampleModuleProps {}

const ExampleModule: React.FC<IExampleModuleProps> = () => {  
  return <div className='ExampleModule_component'>ExampleModule</div>;
};

export default memo(ExampleModule);